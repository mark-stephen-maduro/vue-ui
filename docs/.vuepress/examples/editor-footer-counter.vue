<template>
  <div>
    <div>
      <IpyEditor v-model="value" :editor="editor" footer>
        <heading />
        <bold />
        <underline />
        <italic />
        <strike />
        <template v-slot:footer-left>
          Characters: {{ counter.length }}
        </template>
      </IpyEditor>
    </div>
  </div>
</template>

<script>
import {
  Editor,
  IpyEditor,
  Paragraph,
  Heading,
  Image,
  Bold,
  Italic,
  Underline,
  Strike,
  toWord,
  Menu
} from '@infopiphany/tiptap'

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
    }
  },

  computed: {
    counter() {
      return toWord(this.value)
    },
  },
}
</script>
