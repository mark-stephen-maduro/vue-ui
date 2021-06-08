<template>
  <AppStyleWrap>
    <IpyButton variant="primary" @click="login">
      <span class="button_prefix__33pNQ"><svg width="20" height="20" viewBox="0 0 24 22" aria-label="gitlab"><path d="M1.279 8.29L.044 12.294c-.117.367 0 .78.325 1.014l11.323 8.23-.009-.012-.03-.039L1.279 8.29zM22.992 13.308a.905.905 0 00.325-1.014L22.085 8.29 11.693 21.52l11.299-8.212z" fill="currentColor"></path><path d="M1.279 8.29l10.374 13.197.03.039.01-.006L22.085 8.29H1.28z" fill="currentColor" opacity="0.4"></path><path d="M15.982 8.29l-4.299 13.236-.004.011.014-.017L22.085 8.29h-6.103zM7.376 8.29H1.279l10.374 13.197L7.376 8.29z" fill="currentColor" opacity="0.6"></path><path d="M18.582.308l-2.6 7.982h6.103L19.48.308c-.133-.41-.764-.41-.897 0zM1.279 8.29L3.88.308c.133-.41.764-.41.897 0l2.6 7.982H1.279z" fill="currentColor" opacity="0.4"></path></svg></span>
      <span>Request Access Token</span>
    </IpyButton>
  </AppStyleWrap>
</template>

<script>

import { IpyButton } from '@infopiphany/ui'
import { openPopup } from '../utils/open-popup';
import store from '@store';
import axios from 'axios';

const APP_ID = '1311a5b335b2ef635f85ec73f53be2468bb3f71141b57dca98658c1b2fedd70f';
const REDIRECT_URI = 'http://connect.droplet-2b.infopiphany.com/connect'
const SCOPES = ['api', 'profile', 'read_user', 'email', 'openid', 'write_repository', 'read_repository'].join('+');

export default {

  components: {
    IpyButton
  },

  data() {
    return {
      windowObjectReference: null,
      previousUrl: null
    }
  },

  created() {
    window.removeEventListener('message', this.receiveMessageFn);
    window.addEventListener('message', this.receiveMessageFn, false);
  },
  destroyed() {
    window.removeEventListener('message', this.receiveMessageFn);
  },

  beforeDestroy() {
    window.removeEventListener('message', this.receiveMessageFn);
  },

  methods: {
    receiveMessageFn(event) {
      const { data } = event;
      const params = {}

      // if we trust the sender and the source is our popup
      if(typeof(data) == 'string' && data.includes('gl-ipy-connect')) {
        const search = (data.slice(data.indexOf('?') + 1))

        const definitions = search.split('&')
        definitions.forEach((val, key) => {
          const parts = val.split('=', 2)
          params[parts[0]] = parts[1]
        })

        if('state' in params) {
          axios.get('https://connect.droplet-2b.infopiphany.com/gl-connect/13732502', {
            headers: {
              'Authorization': `Bearer ${params.state}`
            }
          }).then((result)=>{
            if(result.data.error) {
              store.accessTokenError = result.data.error || ''
            } else {
              store.accessToken = result.data.access_token || ''
              store.accessTokenName = result.data.name || ''
            }
          })
        }
      }
    },

    login() {
      const url = `https://gitlab.com/oauth/authorize?client_id=${APP_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&state=xyz&scope=${SCOPES};`
      this.openPopup(url, 'Infopiphany')
    },

    openPopup(url, name) {
      // remove any existing event listeners
      //window.removeEventListener('message', this.receiveMessageFn);

      // window features
      const strWindowFeatures =
        'toolbar=no, menubar=no, width=700, height=640, top=100, left=100';

      if (this.windowObjectReference === null || this.windowObjectReference.closed) {
        /* if the pointer to the window object in memory does not exist
          or if such pointer exists but the window was closed */
        this.windowObjectReference = window.open(url, name, strWindowFeatures);
      } else if (this.previousUrl !== url) {
        /* if the resource to load is different,
          then we load it in the already opened secondary window and then
          we bring such window back on top/in front of its parent window. */
        this.windowObjectReference = window.open(url, name, strWindowFeatures);
        this.windowObjectReference.focus();
      } else {
        /* else the window reference must exist and the window
          is not closed; therefore, we can bring it back on top of any other
          window with the focus() method. There would be no need to re-create
          the window or to reload the referenced resource. */
        this.windowObjectReference.focus();
      }

      // add the listener for receiving a message from the popup
      // window.addEventListener('message', event => this.receiveMessageFn(event), false);
      // assign the previous URL
      this.previousUrl = url;
    }
  }

}
</script>
