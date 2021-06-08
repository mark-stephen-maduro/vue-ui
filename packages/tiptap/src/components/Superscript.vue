<template>
  <button class="menubar__button" v-tooltip.top="'Superscript'" @click="commands.superscript">
    <ExtensionIcons name="superscript" />
  </button>
</template>

<script>
import ExtensionIcons from "../icons/ExtensionIcons.vue";
export default {
  inject: ["commands"],
  components: { ExtensionIcons }
};
</script>

<style></style>
