<script>
import {
  IpyEditor,
  Editor,
  Paragraph,
  Heading,
  Bold,
  Strike,
  Italic,
  Underline,
  Menu
} from '@infopiphany/tiptap';

export default {
  components: {
    IpyEditor,
    heading: Menu.Heading,
    bold: Menu.Bold,
    italic: Menu.Italic,
    underline: Menu.Underline,
    strike: Menu.Strike
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
      <heading />
      <bold />
      <italic />
      <underline />
      <strike />
    </IpyEditor>
  </div>
</template>

<!-- This should generally be the only global CSS in the app. -->
<style lang="scss">
// Allow element/type selectors, because this is global CSS.
// stylelint-disable selector-max-type, selector-class-pattern

// Normalize default styles across browsers,
// https://necolas.github.io/normalize.css/
@import '~normalize.css/normalize.css';
// Style loading bar between pages.
// https://github.com/rstacruz/nprogress
@import '~nprogress/nprogress.css';
// Bootstrap Vue style is required by IpyEditor
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';
// Load IpyEditor style
@import '~@infopiphany/tiptap/src/scss/index.scss';
// Load styles for the IpyEditor's tooltip
@import '~@infopiphany/tiptap/dist/index.css';
</style>
