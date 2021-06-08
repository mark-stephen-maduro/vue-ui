import Tooltip from './src/directives/tooltip';
export { default as IpyEditor } from './src/tiptap-editor.vue';
export { Editor } from 'tiptap';
import  toWord from './src/utils/format_value';
export * from './src/extensions/index';
export * as Menu from './src/components';

export {
  toWord
}
const IpyEditorPlugin = {
  install(Vue, options = {}) {
    Vue.use(Tooltip);
    Vue.prototype.$ipyEditorPlugin = this;

  }
}
export default IpyEditorPlugin;
