<template>
  <BaseOnClickAway :do="hide">
    <div class="dropdown-container d-inline">
      <button class="menubar__button" v-tooltip.top="'Text colors'" @click="toggle">
        <ExtensionIcons name="tint" />
      </button>

      <!-- MENU -->
      <div class="dropdown-container--menu shadow-sm p-2" :class="{ show: opened }" @click.stop>
        <div class="color-set">
          <div v-for="color in colorSet" :key="color" class="color__wrapper">
            <div
              :style="{
                'background-color': color,
              }"
              :class="{ 'color--selected': selectedColor === color }"
              class="color"
              @mousedown.prevent
              @click.stop="confirmColor(color)"
            />
          </div>

          <div class="color__wrapper">
            <div class="color color--remove" @mousedown.prevent @click.stop="confirmColor('')" />
          </div>
        </div>
      </div>
    </div>
  </BaseOnClickAway>
</template>

<script>
import BaseOnClickAway from "./ClickAway.vue";
import global from "../mixins/globalEvent";
import ExtensionIcons from "../icons/ExtensionIcons.vue";
export default {
  inject: ["commands"],
  components: {
    BaseOnClickAway,
    ExtensionIcons
  },
  mixins: [global],
  data() {
    return {
      focused: false,
      colorSet: [
        "#F44336",
        "#E91E63",
        "#9C27B0",
        "#673AB7",
        "#3F51B5",
        "#2196F3",
        "#03A9F4",
        "#00BCD4",
        "#009688",
        "#4CAF50",
        "#8BC34A",
        "#CDDC39",
        "#FFEB3B",
        "#FFC107",
        "#FF9800",
        "#FF5722",
        "#00 0000"
      ],
      selectedColor: ""
    };
  },

  methods: {
    focus() {
      this.focused = !this.focused;
    },

    confirmColor(color) {
      this.commands.text_color(color);
      // this.selectedColor = color;
    }
  }
};
</script>

<style lang="scss">
.color-dropdown {
  box-shadow: 0 1px 2px 0 rgba(33, 33, 33, 0.14), 0 0 1px 0 rgba(0, 0, 0, 0.14);
}

.color-set {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 240px;

  .color {
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 3px -2px,
      rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;
    box-sizing: border-box;
    color: white;
    height: 30px;
    transition: all 0.2s ease-in-out;
    width: 30px;

    &__wrapper {
      align-items: center;
      box-sizing: border-box;
      cursor: pointer;
      display: flex;
      flex: 0 0 12.5%;
      justify-content: center;
      padding: 5px;
    }

    &:hover,
    &--selected {
      border: 2px solid white;
      transform: scale(1.3);
    }

    &--remove {
      position: relative;

      &:hover {
        &::before {
          transform: rotate(-45deg);
        }

        &::after {
          transform: rotate(45deg);
        }
      }

      &::before,
      &::after {
        background-color: tomato;
        bottom: 0;
        content: "";
        left: 50%;
        position: absolute;
        margin: 2px 0;
        top: 0;
        transform: translateX(-50%);
        transition: all 0.2s ease-in-out;
        width: 2px;
      }
    }
  }
}

.color-hex {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;

  #{&}__button {
    margin-left: 10px;
    padding-left: 15px;
    padding-right: 15px;
  }
}
</style>
