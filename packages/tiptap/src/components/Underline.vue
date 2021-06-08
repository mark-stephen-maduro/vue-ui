<template>
  <button
    class="menubar__button"
    :class="{ 'is-active': activeMarks.underline() }"
    v-tooltip.top="'Underline (Ctrl+U)'"
    @click="commands.underline"
  >
    <ExtensionIcons name="underline" />
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
