<template>
  <button class="menubar__button" v-tooltip.top="'Outdent'" @click="commands.outdent">
    <ExtensionIcons name="outdent" />
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
