<template>
  <div>
    <div>
      <IpyEditor :editor="editor" footer>
        <heading />
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
  Image
} from '@infopiphany/tiptap';

export default {
  components: {
    IpyEditor,
    heading: Menu.Heading,
  },

  data() {
    return {
      editor: new Editor({
        extensions: [new Paragraph(), new Heading(), new Image()],
        content: `Im the value`,
      }),
    };
  },
};
</script>

<style lang="scss" scoped>
pre {
  color: white !important;
}
</style>
