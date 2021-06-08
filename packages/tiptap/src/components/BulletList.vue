<template>
  <button
    class="menubar__button"
    :class="{ 'is-active': isActive.bullet_list() }"
    v-tooltip.top="'Bullet list'"
    @click="commands.bullet_list"
  >
    <ExtensionIcons name="list-ul" />
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
