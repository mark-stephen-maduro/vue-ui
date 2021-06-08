// @ts-nocheck
import { Mark } from 'tiptap';
import { DEFAULT_FONT_TYPE_MAP, setFontType } from '../../utils/font_type';

export default class FontType extends Mark {
  get name() {
    return 'font_type';
  }

  get defaultOptions() {
    return {
      fontTypes: DEFAULT_FONT_TYPE_MAP,
    };
  }

  get schema() {
    return {
      attrs: {
        name: '',
      },
      inline: true,
      group: 'inline',
      parseDOM: [
        {
          style: 'font-family',
          getAttrs: (name) => {
            return {
              name: name ? name.replace(/["']/g, '') : '',
            };
          },
        },
      ],
      toDOM(node) {
        const { name } = node.attrs;
        const attrs = {};

        if (name) {
          attrs.style = `font-family: ${name}`;
        }
        return ['span', attrs, 0];
      },
    };
  }

  commands({ type }) {
    return (name) => (state, dispatch) => {
      let { tr } = state;
      tr = setFontType(state.tr.setSelection(state.selection), type, name);
      if (tr.docChanged || tr.storedMarksSet) {
        dispatch && dispatch(tr);
        return true;
      }
      return false;
    };
  }

  menuBtnView(editorContext) {
    return {
      component: FontTypeDropdown,
      componentProps: {
        editorContext,
      },
    };
  }
}
