<template>
  <button
    class="menubar__button"
    :class="{ 'is-active': isActive.blockquote() }"
    v-tooltip.top="'Blockquote'"
    @click="commands.blockquote"
  >
    <ExtensionIcons name="quote-right" />
  </button>
</template>

<script>
import ExtensionIcons from "../icons/ExtensionIcons.vue";
export default {
  inject: ["commands", "isActive"],
  components: {
    ExtensionIcons
  }
};
</script>
