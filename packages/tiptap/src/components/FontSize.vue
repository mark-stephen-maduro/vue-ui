<template>
  <BaseOnClickAway :do="hide">
    <div class="dropdown-container d-inline">
      <button class="menubar__button" v-tooltip.top="'Font size'" @click="toggle">
        <ExtensionIcons name="text-width" />
      </button>

      <div
        class="dropdown-container--menu shadow-sm"
        :class="[{ show: opened }, $style.dropdown]"
        @click.stop
      >
        <ul class="list-group">
          <li class="dropdown-item">
            <label
              class="menubar__button"
              :class="$style.alignment"
              @click="commands.font_size(defaultSize)"
            >def</label>
          </li>
          <li class="dropdown-item" v-for="fontSize in fontSizes" :key="fontSize">
            <label
              class="menubar__button"
              :class="$style.alignment"
              @click="commands.font_size(fontSize)"
            >{{ fontSize }}</label>
          </li>
        </ul>
      </div>
    </div>
  </BaseOnClickAway>
</template>

<script>
import ExtensionIcons from "../icons/ExtensionIcons.vue";
import BaseOnClickAway from "./ClickAway.vue";
import global from "../mixins/globalEvent";
import {
  DEFAULT_FONT_SIZE,
  DEFAULT_FONT_SIZES,
  findActiveFontSize
} from "../utils/font_size";

export default {
  inject: ["commands"],

  components: {
    BaseOnClickAway,
    ExtensionIcons
  },

  mixins: [global],

  data() {
    return {
      defaultSize: DEFAULT_FONT_SIZE,
      fontSizes: DEFAULT_FONT_SIZES
    };
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

:global(.show).dropdown {
  min-width: 2rem !important;
  left: -1px !important;
  padding: 0 !important;
  margin: 0 !important;

  ul li {
    align-items: center;
    padding: 0 !important;
  }
}
</style>
