<template>
  <div>
    <div>
      <IpyEditor :editor="editor" footer :dispatch="upload">
        <heading />
        <bold />
        <underline />
        <italic />
        <strike />
        <image-link />
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
  Strike
} from '@infopiphany/tiptap';

export default {
  components: {
    IpyEditor,
    heading: Menu.Heading,
    bold: Menu.Bold,
    underline: Menu.Underline,
    italic: Menu.Italic,
    strike: Menu.Strike,
    imageLink: Menu.ImageView,
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
        content: `How to attach a file and send to your <strong>server?</strong>`,
      }),
    };
  },

  methods: {
    upload(file) {
      // automates file loading
      console.log('Loading...');
      setTimeout(() => {
        console.log('SELECTED FILE TO BE SEND', file);
      }, 2000);
    },
  },
};
</script>
