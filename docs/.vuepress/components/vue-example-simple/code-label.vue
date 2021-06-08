<script>
import store from '@store';

export default {
  props: {
    lang: {
      type: String,
      required: true,
    },
  },
  computed: {
    languageHandlers() {
      return {
        html: `html${store.useDirectiveShorthands ? ' (shorthand)' : ''}`,
        js: `js (${store.jsStyle})`,
      };
    },
    text() {
      return this.languageHandlers[this.lang] || this.lang;
    },
  },
  methods: {
    toggleLangStyle() {
      this.$emit(
        'update:language',
        this.lang === 'html' ? 'javascript' : 'html'
      );
    },
  },
};
</script>

<template>
  <span
    :class="[$style.label, { [$style.canToggle]: languageHandlers[lang] }]"
    @click="toggleLangStyle"
    >{{ text }}</span
  >
</template>

<style lang="scss" module>
.label {
  position: absolute;
  top: 0.8em;
  right: 1em;
  z-index: 3;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  &:hover {
    color: #eee;
  }
}
</style>
