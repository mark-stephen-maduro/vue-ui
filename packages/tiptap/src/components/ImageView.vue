<template>
  <button class="menubar__button" v-tooltip.top="'Image'" @click="showImagePrompt(commands.image)">
    <ExtensionIcons name="images" />
  </button>
</template>

<script>
import ExtensionIcons from "../icons/ExtensionIcons.vue";
export default {
  inject: ["commands"],

  components: {
    ExtensionIcons
  },

  methods: {
    showImagePrompt(command) {
      const src = prompt("Enter the url of your image here");
      if (src !== null) {
        command({ src });
      }
    }
  }
};
</script>

<style></style>
