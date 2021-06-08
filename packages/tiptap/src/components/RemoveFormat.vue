<template>
  <button class="menubar__button" v-tooltip.top="'Clear format'" @click="commands.format_clear">
    <ExtensionIcons name="remove-format" />
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
