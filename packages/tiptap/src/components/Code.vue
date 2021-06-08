<template>
  <button
    class="menubar__button"
    :class="{ 'is-active': isActive.code_block() }"
    v-tooltip.top="'Code block'"
    @click="commands.code_block"
  >
    <ExtensionIcons name="code" />
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

<style></style>
