<template>
  <button
    class="menubar__button"
    :class="{ 'is-active': activeMarks.bold() }"
    v-tooltip.top="'Bold (Ctrl + B)'"
    @click="commands.bold"
  >
    <ExtensionIcons name="bold" />
  </button>
</template>

<script>
import ExtensionIcons from "../icons/ExtensionIcons.vue";
export default {
  inject: ["commands", "activeMarks"],
  components: { ExtensionIcons }
};
</script>

<style></style>
