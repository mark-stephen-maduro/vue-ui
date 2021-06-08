<template>
  <div class="d-inline">
    <button class="menubar__button" v-tooltip.top="'Output format'" data-toggle="dropdown">
      <ExtensionIcons name="file-export" />
    </button>

    <div class="dropdown-menu dropdown-menu-left shadow-sm" :class="$style.dropdown">
      <ul class="list-group">
        <li class="dropdown-item">
          <label
            class="menubar__button"
            :class="$style.alignment"
            @click="outputFormat('html')"
          >HTML</label>
        </li>
        <li class="dropdown-item">
          <label
            class="menubar__button"
            :class="$style.alignment"
            @click="outputFormat('json')"
          >JSON</label>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ExtensionIcons from "../icons/ExtensionIcons.vue";
export default {
  components: {
    ExtensionIcons
  },
  methods: {
    outputFormat(format) {
      this.$emit("output", format || "html");
    }
  }
};
</script>

<style lang="scss" module>
.alignment {
  width: 1rem;
  min-width: 1rem !important;
  padding: 0 !important;
  margin-left: 0 !important;
  margin-right: 0 !important;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 30px !important;
}

.dropdown {
  left: -15px !important;
  padding: 0;
  margin: 0;
  min-width: 60px !important;
  ul li {
    align-items: center;

    label {
      width: 100% !important;
    }
  }
}
</style>
