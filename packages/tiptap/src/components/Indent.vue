<template>
  <button class="menubar__button" v-tooltip.top="'Indent'" @click="commands.indent">
    <ExtensionIcons name="indent" />
  </button>
</template>

<script>
import ExtensionIcons from "../icons/ExtensionIcons.vue";
export default {
  inject: ["commands"],
  components: {
    ExtensionIcons
  }
};
</script>

<style></style>
