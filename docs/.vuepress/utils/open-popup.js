/**
 * Obtained from https://gist.github.com/dinkydani/f9d8dd08b0e9a5299e11cd2a1f67f81d#file-open-popup-js
 */
import store from '@store';
import axios from 'axios';


export const receiveMessage = event => {
  // Do we trust the sender of this message? (might be
  // different from what we originally opened, for example).
  // if (event.origin !== BASE_URL) {
  //   return;

  // }
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

    // get the URL params and redirect to our server to use Passport to auth/login
    // const { code } = data;
    // const { access_token } = JSON.parse(data);
    // const redirectUrl = `/auth/google/login${JSON.stringify(event)}`;
    // const redirectUrl = `http://localhost:8080/components/getting-started.html`
    // window.location = redirectUrl;


    if('state' in params) {
      axios.get('http://connect.droplet-2b.infopiphany.com/gl-connect/13732502', {
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
};

export const openPopup = (url, name, receiveMessageFn) => {

   // remove any existing event listeners
   window.removeEventListener('message', receiveMessageFn);

   // window features
   const strWindowFeatures =
     'toolbar=no, menubar=no, width=700, height=640, top=100, left=100';

   if (windowObjectReference === null || windowObjectReference.closed) {
     /* if the pointer to the window object in memory does not exist
      or if such pointer exists but the window was closed */
     windowObjectReference = window.open(url, name, strWindowFeatures);
   } else if (previousUrl !== url) {
     /* if the resource to load is different,
      then we load it in the already opened secondary window and then
      we bring such window back on top/in front of its parent window. */
     windowObjectReference = window.open(url, name, strWindowFeatures);
     windowObjectReference.focus();
   } else {
     /* else the window reference must exist and the window
      is not closed; therefore, we can bring it back on top of any other
      window with the focus() method. There would be no need to re-create
      the window or to reload the referenced resource. */
     windowObjectReference.focus();
   }

   // add the listener for receiving a message from the popup
   window.addEventListener('message', event => receiveMessageFn(event), false);
   // assign the previous URL
   previousUrl = url;
};
