<template>
  <div>
    <IpyEditor :editor="editor">
      <heading />
      <bold />
      <italic />
      <underline />
      <strike />
    </IpyEditor>
  </div>
</template>

<script>
import {
  Editor,
  IpyEditor,
  Menu,
  Paragraph,
  Heading,
  Bold,
  Strike,
  Italic,
  Underline
} from '@infopiphany/tiptap';

export default {
  components: {
    IpyEditor,
    heading: Menu.Heading,
    bold: Menu.Bold,
    italic: Menu.Italic,
    underline: Menu.Underline,
    strike: Menu.Strike,
  },

  data() {
    return {
      editor: new Editor({
        extensions: [
          new Paragraph(),
          new Heading(),
          new Bold(),
          new Strike(),
          new Italic(),
          new Underline(),
        ],
        content: '',
      }),
    }
  },

  mounted() {
    this.editor.setContent('A simple text editors')
  },
}
</script>
