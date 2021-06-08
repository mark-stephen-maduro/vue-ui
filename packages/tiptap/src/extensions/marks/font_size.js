// @ts-nocheck
import { Mark } from 'tiptap';
import {
  DEFAULT_FONT_SIZES,
  setFontSize,
  convertToPX,
} from '../../utils/font_size';

export default class FontSize extends Mark {
  get name() {
    return 'font_size';
  }

  get defaultOptions() {
    return {
      fontSizes: DEFAULT_FONT_SIZES,
    };
  }

  get schema() {
    return {
      attrs: {
        px: '',
      },
      inline: true,
      group: 'inline',
      parseDOM: [
        {
          style: 'font-size',
          getAttrs: (fontSize) => {
            const attrs = {};
            if (!fontSize) return attrs;
            const px = convertToPX(fontSize);
            if (!px) return attrs;

            return {
              px,
            };
          },
        },
      ],
      toDOM(node) {
        const { px } = node.attrs;
        const attrs = {};

        if (px) {
          attrs.style = `font-size: ${px}px`;
        }
        return ['span', attrs, 0];
      },
    };
  }

  commands({ type }) {
    return (fontSize) => (state, dispatch) => {
      let { tr } = state;
      tr = setFontSize(state.tr.setSelection(state.selection), type, fontSize);
      if (tr.docChanged || tr.storedMarksSet) {
        dispatch && dispatch(tr);
        return true;
      }
      return false;
    };
  }
}
