<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import camelCase from "lodash/camelCase";
import { library as fontAwesomeIconLibrary } from "@fortawesome/fontawesome-svg-core";
const fasIcons = require("@fortawesome/free-solid-svg-icons");
const faSolidIcons = [
  fasIcons.faAlignRight,
  fasIcons.faAlignLeft,
  fasIcons.faAlignJustify,
  fasIcons.faAlignCenter,
  fasIcons.faOutdent,
  fasIcons.faIndent,
  fasIcons.faBold,
  fasIcons.faItalic,
  fasIcons.faUnderline,
  fasIcons.faStrikethrough,
  fasIcons.faListUl,
  fasIcons.faListOl,
  fasIcons.faCode,
  fasIcons.faTint,
  fasIcons.faSuperscript,
  fasIcons.faRemoveFormat,
  fasIcons.faLink,
  fasIcons.faImages,
  fasIcons.faUndoAlt,
  fasIcons.faRedoAlt,
  fasIcons.faFont,
  fasIcons.faTextWidth,
  fasIcons.faFileExport,
  fasIcons.faQuoteRight
];
// https://fontawesome.com/icons
fontAwesomeIconLibrary.add(...faSolidIcons);

export default {
  components: {
    FontAwesomeIcon
  },
  props: {
    source: {
      type: String,
      default: "font-awesome"
    },
    name: {
      type: [String, Array],
      required: true
    }
  },
  computed: {
    // Gets a CSS module class, e.g. iconCustomLogo
    customIconClass() {
      return this.$style[camelCase("icon-custom-" + this.name)];
    }
  }
};
</script>

<template>
  <FontAwesomeIcon v-if="source === 'font-awesome'" v-bind="$attrs" :icon="name" />
  <span v-else-if="source === 'custom'" :class="customIconClass" />
</template>
