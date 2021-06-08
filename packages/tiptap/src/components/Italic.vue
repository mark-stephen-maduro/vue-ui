<template>
  <button
    class="menubar__button"
    :class="{ 'is-active': activeMarks.italic() }"
    v-tooltip.top="'Italic (Ctrl+I)'"
    @click="commands.italic"
  >
    <ExtensionIcons name="italic" />
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
