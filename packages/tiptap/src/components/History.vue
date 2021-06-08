<template>
  <div class="d-inline">
    <button class="menubar__button" v-tooltip.top="'Undo (Ctrl+Z)'" @click="commands.undo">
      <ExtensionIcons name="undo-alt" />
    </button>

    <button class="menubar__button" v-tooltip.top="'Redo (Ctrl+Y)'" @click="commands.redo">
      <ExtensionIcons name="redo-alt" />
    </button>
  </div>
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
