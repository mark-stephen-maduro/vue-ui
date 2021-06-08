<template>
  <div :class="theme">
    <div class="editor">
      <editor-menu-bar
        :editor="toolbar"
        v-slot="{
          commands,
          isActive,
          getMarkAttrs,
          getNodeAttrs,
          focused,
          focus,
        }"
      >
        <div class="menubar">
          <div class="pt-2 pb-2">
            <div class="toolbar-container d-inline">
              <slot v-bind="{ getMarkAttrs }" />
            </div>
          </div>
          <div class="menubar__border"></div>
        </div>
      </editor-menu-bar>

      <editor-content
        class="editor__content"
        :class="contentClass"
        :editor="toolbar"
      />

      <div v-if="footer" class="editor__footer">
        <div class="character">
          <slot name="footer-left">
            <label
              >Character count:
              {{
                html.replace(/(&nbsp;|<([^>]+)>)/gi, '').replace(/ +/g, ' ')
                  .length
              }}</label
            >
          </slot>
        </div>

        <label class="upload" @click="launchFilePicker">
          <div v-if="uploading" class="align-items: center">
            Attaching file
          </div>
          <div v-else> Attach a file </div>
        </label>

        <label>
          <slot name="footer-right" />
        </label>
        <input
          ref="file"
          type="file"
          name="file"
          style="display: none"
          @change="onFileChange($event.target.name, $event.target.files)"
        />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
// prettier-ignore
import { EditorContent, EditorMenuBar } from 'tiptap';
import debounce from 'lodash.debounce';

export default {
  model: {
    event: 'update',
  },

  components: {
    EditorContent,
    EditorMenuBar,
  },

  props: {
    theme: {
      type: String,
      default: 'default',
    },

    contentClass: {
      type: [String, Array],
      default: '',
    },

    editor: {
      type: Object,
      required: true,
    },

    tools: {
      type: String,
      default: 'text-editor',
    },

    editable: {
      type: Boolean,
      default: false,
    },

    footer: {
      type: Boolean,
      default: false,
    },

    dispatch: {
      type: Function,
      default: (value) => {
        return value;
      },
    },

    export: {},

    value: {},
  },

  provide () {
    return {
      commands: this.toolbar.commands,
      isActive: this.toolbar.activeNodes,
      activeMarkAttrs: this.toolbar.activeMarkAttrs,
      activeMarks: this.toolbar.activeMarks,
      align: this.content.json,
    };
  },

  data () {
    return {
      toolbar: this.editor,
      output: this.export,
      json: '',
      html: '',
      base64: '',

      maxSize: 10000, // 10MB change this value to set the upload limit in kbps
      uploading: false,
    };
  },

  computed: {
    content () {
      return { html: this.toolbar.getHTML(), json: this.toolbar.getJSON() };
    },
  },

  watch: {
    content (newVal) {
      this.update();
    },
  },

  mounted () {
    this.toolbar.options.editable = !this.editable;
  },

  beforeDestroy () {
    this.editor.destroy();
  },

  methods: {
    update: debounce(function (value) {
      this.html = this.toolbar.getHTML();
      this.json = this.toolbar.getJSON();
      if (!this.output || this.output === 'html') {
        this.$emit('update', this.html);
      } else {
        this.$emit('update', this.json);
      }
    }, 100),

    launchFilePicker () {
      this.$refs.file.click();
    },

    async onFileChange (fieldName, file) {
      const { maxSize } = this;
      const imageFile = file[0];

      // check if user actually selected a file
      if (file.length > 0) {
        const size = imageFile.size / maxSize / maxSize;
        if (!imageFile.type.match('image.*')) {
          // check whether the upload is an image
          alert('Please choose an image file');
        } else if (size > 1) {
          // check whether the size is greater than the size limit
          alert('Your file is too big! Please select an image under 1MB');
        } else {
          // Append file into FormData & turn file into image URL
          const formData = new FormData();
          let imageURL = URL.createObjectURL(imageFile);

          formData.append('file', imageFile);
          // to be access on the component of parent by the callback dispatch
          // dispatch file to the server.
          this.uploading = true;
          const response = await this.dispatch({ imageFile, imageURL });
          this.uploading = false;

          // the callback prop for dispatch should always return an object with
          // a key/field of `imageURL` to be display on the editor.
          // if no return value has been assign we will use the default blob
          if (response && response.imageURL) {
            imageURL = response.imageURL;
          }
          var fileReader = new FileReader();
          this.toBase64(imageURL);
        }
      }
    },
    toBase64 (src) {
      let self = this;
      var img = new Image();
      img.crossOrigin = 'Anonymous';
      img.onload = function () {
        var canvas = document.createElement('CANVAS');
        var ctx = canvas.getContext('2d');
        var dataURL;
        canvas.height = this.naturalHeight;
        canvas.width = this.naturalWidth;
        ctx.drawImage(this, 0, 0);

        self.toolbar.commands.image({ src: canvas.toDataURL() });
      };
      img.src = src;
      if (img.complete || img.complete === undefined) {
        img.src =
          'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
        img.src = src;
      }
    },
  },
};
</script>
