<template>
  <div>
    <div>
      <IpyEditor v-model="value" :editor="editor" footer>
        <template v-slot="{ getMarkAttrs }">
          <heading :heading-levels="3" />
          <bold />
          <italic />
          <underline />
          <strike />
          <superscript />
          <font-type />
          <font-size />
          <colors />
          <remove-format />

          <ex-blockquote />
          <ex-code />
          <ex-link :getMarkAttrs="getMarkAttrs" />
          <alignment />
          <indent />
          <outdent />
          <bullet />
          <ordered-list />
          <ex-table />
          <ex-image />
          <history />
        </template>
      </IpyEditor>
    </div>
  </div>
</template>

<script>
import {
  Editor,
  IpyEditor,
  Menu,
  Paragraph,
  Heading,
  TextColor,
  Indent,
  HorizontalRule,
  OrderedList,
  BulletList,
  CodeBlock,
  Blockquote,
  HardBreak,
  FontType,
  FontSize,
  ListItem,
  TodoItem,
  TodoList,
  Image,
  Bold,
  Strike,
  Italic,
  Underline,
  Code,
  Link,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  History,
  Superscript,
  Alignment,
  FormatClear,
} from '@infopiphany/tiptap';

export default {
  components: {
    IpyEditor,
    heading: Menu.Heading,
    bold: Menu.Bold,
    underline: Menu.Underline,
    italic: Menu.Italic,
    strike: Menu.Strike,
    colors: Menu.Colors,
    superscript: Menu.Superscript,
    indent: Menu.Indent,
    outdent: Menu.Outdent,
    bullet: Menu.BulletList,
    orderedList: Menu.OrderedList,
    alignment: Menu.Alignment,
    fontType: Menu.FontType,
    fontSize: Menu.FontSize,
    exBlockquote: Menu.Blockquote,
    removeFormat: Menu.RemoveFormat,
    exTable: Menu.Table,
    exImage: Menu.ImageView,
    exLink: Menu.Link,
    history: Menu.History,
    exCode: Menu.Code,
  },

  data() {
    return {
      editor: new Editor({
        extensions: [
          new Alignment(),
          new Paragraph(),
          new Heading(),
          new Blockquote(),
          new TextColor(),
          new FontType(),
          new FontSize(),
          new Superscript(),
          new Indent(),
          new HorizontalRule(),
          new OrderedList(),
          new BulletList(),
          new CodeBlock(),
          new HardBreak(),
          new ListItem(),
          new TodoItem(),
          new TodoList(),
          new Image(),
          new Bold(),
          new Strike(),
          new Italic(),
          new Underline(),
          new Code(),
          new Link(),
          new Table(),
          new TableHeader(),
          new TableCell(),
          new TableRow(),
          new History(),
          new FormatClear(),
        ],
        content: `Rich text <strong>editor!</strong>`,
      }),
      value: '',
    };
  },
};
</script>
