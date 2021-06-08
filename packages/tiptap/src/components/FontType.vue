<template>
  <BaseOnClickAway :do="hide">
    <div class="dropdown-container d-inline">
      <button class="menubar__button" v-tooltip.top="'Font type'" @click="toggle">
        <ExtensionIcons name="font" />
      </button>

      <div
        class="dropdown-container--menu shadow-sm"
        :class="[{ show: opened }, $style.dropdown]"
        @click.stop
      >
        <ul class="list-group">
          <li class="dropdown-item" v-for="fontType in fontTypes" :key="fontType">
            <label
              class="menubar__button"
              :class="$style.alignment"
              @click="commands.font_type(fontType)"
            >{{ fontType }}</label>
          </li>
        </ul>
      </div>
    </div>
  </BaseOnClickAway>
</template>

<script>
import ExtensionIcons from "../icons/ExtensionIcons.vue";
import { DEFAULT_FONT_TYPE_MAP } from "../utils/font_type";
import BaseOnClickAway from "./ClickAway.vue";
import global from "../mixins/globalEvent";
export default {
  inject: ["commands"],

  components: {
    BaseOnClickAway,
    ExtensionIcons
  },

  mixins: [global],

  data() {
    return {
      fontTypes: DEFAULT_FONT_TYPE_MAP
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
  left: -40px !important;
  padding: 0;
  margin: 0;
  width: 125px;
  ul li {
    align-items: center;
    padding: 0 !important;

    label {
      width: 100% !important;
    }
  }
}
</style>
