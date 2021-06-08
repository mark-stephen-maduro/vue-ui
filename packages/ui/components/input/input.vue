<script>
/* eslint-disable vue/require-prop-types */
/* eslint-disable vue/require-default-prop */
import inputMixin from './mixins/inputMixin'
import BaseLoading from './_base-loading.vue'
export default {
  name: 'IpyInput',
  components: {
    BaseLoading,
  },

  mixins: [inputMixin],
  inheritAttrs: false,

  model: {
    event: 'update',
  },
}
</script>

<template>
  <div
    :class="[
      $style.baseInputEnhanced,
      {
        focused,
        'show-suggestion': showSuggestion,
        [`status-${status}`]: status,
      },
    ]"
    @click="focus"
  >
    <div :class="[$style.content, containerClass]">
      <!-- Loading Indication -->
      <BaseLoading v-if="loadingLeft" class="small left" />

      <BaseIcon
        v-if="iconLeft"
        :name="iconLeft"
        :class="[$style.inputIcon, $style.left, leftIconClass]"
      />

      <slot name="left" />

      <div :class="$style.inputWrapper">
        <b-form-input
          ref="input"
          :class="[$style.input]"
          :type="type"
          :value="valueModel"
          :placeholder="placeholder"
          v-bind="$attrs"
          autocomplete="off"
          v-on="$listeners"
          @input="valueModel = $event"
          @focus="onFocus"
          @blur="onBlur"
          @keydown.tab="onKeyTab"
        />

        <input
          v-if="showSuggestion"
          :class="[$style.input, $style.suggestion]"
          :value="suggestions"
          autocomplete="off"
          disabled
        />
      </div>
      <slot name="right" />

      <BaseIcon
        v-if="iconRight"
        :name="iconRight"
        :class="[$style.inputIcon, $style.right, rightIconClass]"
      />

      <!-- Indication Right -->
      <BaseLoading v-if="loadingRight" class="small right" />
      <!-- Focus animation -->
      <div :class="[$style.border, borderClass]" />
    </div>
  </div>
</template>

<style lang="scss" module>
/* AVAILABLE CLASSES TO CUSTOMIZE THE INPUT
 * add this class when calling the BaseInputEnhance tag.
 * use `flat` class to make the input flat which removes the border and background.
 * use `big` class to make the input height, font, icon bigger.
 */
@import '../../scss/variables.scss';
// used to sync the color of border and icons
$text-color-readonly: #58585d;

.baseInputEnhanced {
  box-sizing: border-box;
  display: inline-block;
  width: auto;
  min-width: 100%;
  vertical-align: middle;
  > .content {
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    border: solid 1px #ced4da;
    transition: background 0.3s;

    > .inputWrapper {
      position: relative;
      height: 33px;
      flex: auto 1 1;
      width: 0;
      > .input {
        position: relative;
        z-index: 1;
        display: block;
        width: 100%;
        padding: 0 0 0;
        font-family: inherit;
        font-size: 14px;
        line-height: 14px;
        background: transparent;
        border: none;
        outline: none;
        box-shadow: none;
        &:not(textarea) {
          height: inherit;
        }

        &[readonly] {
          color: $text-color-readonly;
        }
      }

      > .suggestion {
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        color: lighten(lightgrey, 0);
        pointer-events: none;
      }
    }

    > .inputIcon {
      color: #adb5bd;
      &.left {
        margin-right: 6px;
      }
      &.right {
        margin-left: 6px;
        transition: transform 200ms ease-in-out;
      }
    }

    > .border {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2px;
      transform: scaleX(0);
      border-bottom-left-radius: 2px;
      border-bottom-right-radius: 2px;
      transition: transform 0.15s ease-in-out;
    }

    > .input-loading-indicator {
      &.left {
        margin-right: 15px;
      }
      &.right {
        margin-left: 8px;
      }
      .animation {
        border-right-color: #0078b7;
        border-bottom-color: #0078b7;
      }
    }
  }

  // FOCUS EFFECT FOR INPUT BORDER BOTTOM
  &:global(.focused):not([readonly]) > .content .border {
    transform: scaleX(1);
    transition: 0.15s;
    background-color: $focus-input-primary;
  }

  // FOCUS EFFECT FOR ICON
  &:global(.focused):not([readonly]) > .content .inputIcon {
    color: $focus-input-primary;
  }

  // FOCUS EFFECT FOR LOADING ICON
  &:global(.focused):not([readonly]) > .content div {
    color: $focus-input-primary;
  }

  // FLAT INPUT
  &:global(.flat) > .content {
    border-color: transparent;
  }

  &:global(.flat):global(.focused) > .content {
    border-color: #ced4da;
  }

  // DISABLED INPUT
  & > .content > .inputWrapper input:disabled {
    color: #adb5bd;
    cursor: not-allowed;
  }
  // READONLY BORDER
  &[readonly] > .content {
    border-color: lighten(#ced4da, 5%);
  }

  // BIG SIZE INPUT
  &:global(.big) > .content > .inputWrapper > .input:not(textarea) {
    height: 35px;
  }

  // BIG SIZE INPUT ICON
  &:global(.big) > .content {
    font-size: 20px;
  }

  // BIG SIZE INPUT FOR FONT SIZE
  &:global(.big) > .content > .inputWrapper > .input {
    font-size: 16px;
  }

  // STATUS FOR NORMAL STATES
  // STATUS SUCCESS
  &:global(.focused):not([readonly]):global(.status-success)
    > .content
    .border {
    background-color: $focus-input-success;
  }
  &:global(.focused):not([readonly]):global(.status-success)
    > .content
    .inputIcon {
    color: $focus-input-success;
  }
  &:global(.focused):not([readonly]):global(.status-success) > .content div {
    color: $focus-input-success;
  }
  &:not([readonly]):global(.status-success) > .content {
    border-color: $focus-input-success;
  }

  // STATUS WARNING
  &:global(.focused):not([readonly]):global(.status-warning)
    > .content
    .border {
    background-color: $focus-input-warning;
  }
  &:global(.focused):not([readonly]):global(.status-warning)
    > .content
    .inputIcon {
    color: $focus-input-warning;
  }
  &:global(.focused):not([readonly]):global(.status-warning) > .content div {
    color: $focus-input-warning;
  }
  &:not([readonly]):global(.status-warning) > .content {
    border-color: $focus-input-warning;
  }

  // STATUS DANGER
  &:global(.focused):not([readonly]):global(.status-danger) > .content .border {
    background-color: $focus-input-danger;
  }
  &:global(.focused):not([readonly]):global(.status-danger)
    > .content
    .inputIcon {
    color: $focus-input-danger;
  }
  &:global(.focused):not([readonly]):global(.status-danger) > .content div {
    color: $focus-input-danger;
  }
  &:not([readonly]):global(.status-danger) > .content {
    border-color: $focus-input-danger;
  }

  // STATUS PRIMARY
  &:global(.focused):not([readonly]):global(.status-primary)
    > .content
    .border {
    background-color: $focus-input-primary;
  }
  &:global(.focused):not([readonly]):global(.status-primary)
    > .content
    .inputIcon {
    color: $focus-input-primary;
  }
  &:global(.focused):not([readonly]):global(.status-primary) > .content div {
    color: $focus-input-primary;
  }

  // STATUS FOR FEEDBACKS
  // STATUS DANGER WITH FEEDBACK
  &:global(.focused):not([readonly]):global(.status-danger) > .content .border {
    background-color: $focus-input-danger;
  }
  &:global(.focused):not([readonly]):global(.status-danger)
    > .content
    .inputIcon {
    color: $focus-input-danger;
  }

  // STATUS WARNING WITH FEEDBACK
  &:global(.focused):not([readonly]):global(.status-warning)
    > .content
    .border {
    background-color: $focus-input-warning;
  }
  &:global(.focused):not([readonly]):global(.status-warning)
    > .content
    .inputIcon {
    color: $focus-input-warning;
  }
  &:not([readonly]):global(.status-warning) + :global(.invalid-feedback) {
    color: $focus-input-warning;
  }

  // STATUS SUCCESS WITH FEEDBACK
  &:global(.focused):not([readonly]):global(.status-success)
    > .content
    .border {
    background-color: $focus-input-success;
  }
  &:global(.focused):not([readonly]):global(.status-success)
    > .content
    .inputIcon {
    color: $focus-input-success;
  }
  &:not([readonly]):global(.status-success) + :global(.valid-feedback) {
    color: $focus-input-success;
  }

  // dropdown icon animation
  &:global(.dropdown-focus) > .content .inputIcon.right {
    transform: rotate(180deg);
    transition: transform 100ms cubic-bezier(0.18, 0.89, 0.32, 1.01);
  }
}
</style>
