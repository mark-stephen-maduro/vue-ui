<template>
  <button
    class="menubar__button"
    :class="{ 'is-active': activeMarks.strike() }"
    v-tooltip.top="'Strikethrough (Ctrl+Shift+X)'"
    @click="commands.strike"
  >
    <ExtensionIcons name="strikethrough" />
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
