<template>
  <div>
    <div>
      <IpyEditor v-model="value" :editor="editor" theme="dark-neon" footer>
        <heading />
        <bold />
        <underline />
        <italic />
        <strike />
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
  Image,
  Bold,
  Italic,
  Underline,
  Strike,
} from '@infopiphany/tiptap';

export default {
  components: {
    IpyEditor,
    heading: Menu.Heading,
    bold: Menu.Bold,
    underline: Menu.Underline,
    italic: Menu.Italic,
    strike: Menu.Strike,
  },

  data() {
    return {
      editor: new Editor({
        extensions: [
          new Paragraph(),
          new Heading(),
          new Image(),
          new Bold(),
          new Underline(),
          new Italic(),
          new Strike(),
        ],
        content: `Here comes the <strong>footer!</strong>`,
      }),
      value: '',
    };
  },
};
</script>
