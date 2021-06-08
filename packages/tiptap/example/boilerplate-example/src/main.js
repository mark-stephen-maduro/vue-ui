import Vue from 'vue';
import App from './app.vue';
import * as FontAwesomeIconLibrary from './components/FontAwesomeIcons/IconLibrary';
import './components/_globals';

// Don't warn about using the dev version of Vue in development
Vue.config.productionTip = process.env.NODE_ENV === 'production';

FontAwesomeIconLibrary.initializeFontAwesomeLibrary();

import { IpyEditor, default as IpyEditorPlugin } from '@infopiphany/tiptap'
Vue.use(IpyEditorPlugin)
Vue.component('IpyEditor', IpyEditor)

const app = new Vue({
  render: (h) => h(App),
}).$mount('#app');

// If running inside Cypress
if (window.Cypress) {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`
  window.__app__ = app;
}
