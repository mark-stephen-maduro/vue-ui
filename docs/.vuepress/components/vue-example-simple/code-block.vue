<script>
import Prism from 'prismjs';
import CodeLabel from './code-label';
import store from '@store';

export default {
  components: {
    CodeLabel,
  },
  props: {
    codeBlock: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      code: this.codeBlock[this.toggledLanguage],
      toggledLanguage: 'html',
    };
  },
  computed: {
    highlightedCode() {
      return Prism.highlight(
        this.toggledLanguage === 'html'
          ? this.codeBlock.html
          : this.codeBlock.js,
        Prism.languages[this.toggledLanguage],
        this.toggledLanguage
      );
    },
    jsStyle() {
      return store.jsStyle;
    },
  },

  watch: {
    toggledLanguage: function (e) {},
  },
};
</script>

<template>
  <div
    :class="[
      $style.preWrapper,
      `language-${toggledLanguage}`,
      { [$style[`${jsStyle}Code`]]: toggledLanguage === 'js' },
    ]"
  >
    <pre :class="[$style.pre, `language-${toggledLanguage}`]"><code
      ref="code"
      v-html="highlightedCode"
    /><CodeLabel
      :lang="toggledLanguage"
      :language.sync="toggledLanguage"
    /></pre>
  </div>
</template>

<style lang="scss" module>
.preWrapper {
  position: relative;

  &::before {
    display: none;
  }
}

.es5Code {
  // stylelint-disable-next-line selector-class-pattern
  :global(.token.template-string) {
    position: relative;

    &::after {
      position: absolute;
      top: 0;
      left: 100%;
      min-width: 500px;
      margin-left: 2em;
      color: yellow;
      white-space: initial;
      pointer-events: none;
      content: 'NOTE: We use template literals to improve readability, but in older browsers you should use multiline strings or string concatenation instead.';
      background: #2d2d2d;
      box-shadow: 0 0 2em 1em #2d2d2d;
      opacity: 0;
      transition: opacity 0.2s;
    }

    &:hover::after {
      pointer-events: all;
      opacity: 1;
    }
  }
}
</style>
