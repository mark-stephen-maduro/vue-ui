<template>
  <div>
    <div>
      <IpyEditor v-model="value" :editor="editor" export="json">
        <heading />
      </IpyEditor>

      <pre>{{ value }}</pre>
    </div>
  </div>
</template>

<script>
import { Editor, IpyEditor, Paragraph, Heading , Menu} from '@infopiphany/tiptap';

export default {
  components: {
    IpyEditor,
    heading: Menu.Heading,
  },

  data() {
    return {
      editor: new Editor({
        extensions: [new Paragraph(), new Heading()],
        content: `Im the value`,
      }),
      value: '',
    };
  },
};
</script>

<style lang="scss" scoped>
pre {
  color: white !important;
}
</style>
