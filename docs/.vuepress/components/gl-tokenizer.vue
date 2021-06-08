<template>
  <AppStyleWrap>
    <div class="mt-3 d-flex flex-column">
      <code v-if="getError.length > 0" class="text-danger">{{ getError }}</code>

      <gl-login></gl-login>

      <!-- <p class="my-1"><code>{{ getTokenName }}</code></p> -->

      <b-input-group v-if="getAccessToken.length > 0" class="col-5 p-0 mt-2">
        <b-form-input readonly :value="getAccessToken"></b-form-input>
        <b-input-group-append>
          <b-button variant="info" @click="copyToClipboard(getAccessToken)">Copy</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
  </AppStyleWrap>
</template>

<script>
import store from '@store';
import { setClipboard } from '../utils/useClipboard'

export default {

  computed: {
    getError() {
      return store.accessTokenError;
    },

    getAccessToken() {
      return store.accessToken;
    },

    getTokenName() {
      return store.accessTokenName;
    }
  },

  methods: {
    async copyToClipboard (v) {
      await setClipboard(v);
    },
  }

}
</script>
