import { Extension } from 'tiptap';
import { createIndentCommand, IndentProps } from '../../utils/indent';

export default class Indent extends Extension {
  get name() {
    return 'indent';
  }

  get defaultOptions() {
    return {
      minIndent: IndentProps.min,
      maxIndent: IndentProps.max,
    };
  }

  commands() {
    return {
      indent: () => createIndentCommand(IndentProps.more),
      outdent: () => createIndentCommand(IndentProps.less),
    };
  }

  keys() {
    return {
      Tab: createIndentCommand(IndentProps.more),
      'Shift-Tab': createIndentCommand(IndentProps.less),
    };
  }
}
