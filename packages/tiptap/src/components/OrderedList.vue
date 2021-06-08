<template>
  <button
    class="menubar__button"
    :class="{ 'is-active': isActive.ordered_list() }"
    v-tooltip.top="'Ordered list'"
    @click="commands.ordered_list"
  >
    <ExtensionIcons name="list-ol" />
  </button>
</template>

<script>
import ExtensionIcons from "../icons/ExtensionIcons.vue";
export default {
  inject: ["commands", "isActive"],
  components: { ExtensionIcons }
};
</script>

<style></style>
