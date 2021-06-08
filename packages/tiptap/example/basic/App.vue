<script>
import { Editor, IpyEditor } from '@infopiphany/tiptap';
import {
  Paragraph,
  Heading,
  Bold,
  Strike,
  Italic,
  Underline,
} from '@infopiphany/tiptap/src/extensions';
export default {
  components: {
    IpyEditor,
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
        content: 'A simple text editor.',
      }),
    };
  },
};
</script>
<template>
  <div id="app">
    <IpyEditor :editor="editor">
    </IpyEditor>
  </div>
</template>

<style lang="scss">
@import '../src/scss/index.scss';
</style>
