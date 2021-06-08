<template>
  <div
    v-show="active"
    :id="tabId"
    class="wiz-tab-container"
    :aria-hidden="!active"
    :style="{ animation: animation }"
    :aria-labelledby="`step-${tabId}`"
  >
    <slot :active="active"></slot>
  </div>
</template>

<script>
/* eslint-disable vue/require-default-prop */
export default {
  name: 'IpyFormWizardContent',
  props: {
    animation: {
      type: String,
      default: 'fadeInDown 0.6s',
    },
    // In this version this is not required.
    // The reason this prop is here is to avoid the wizard from breaking
    title: {
      type: String,
      default: '',
    },
    /***
     * Function to execute before tab switch. Return value must be boolean
     * If the return result is false, tab switch is restricted
     */
    beforeChange: {
      type: Function,
      required: false,
      // Placing a default value here breaks the Wizard
    },
    /***
     * Function to execute after tab switch. Return void for now.
     * Safe to assume necessary validation has already occured
     */
    afterChange: {
      type: Function,
      required: false,
      // Placing a default value here breaks the Wizard
    },
  },
  inject: ['addTab', 'removeTab'],

  data() {
    return {
      active: false,
      validationError: null,
      checked: false,
      tabId: '',
    }
  },

  mounted() {
    this.addTab(this)
  },
  destroyed() {
    if (this.$el && this.$el.parentNode) {
      this.$el.parentNode.removeChild(this.$el)
    }
    this.removeTab(this)
  },
}
</script>

<style lang="scss" module>
// This is an example built in style
// that can be applied to wiz-tab-container.
.builtInTabContainerStyle {
  width: 460px;
  max-width: 90vw;
  padding: 24px;
  overflow: hidden;
  background: rgb(255, 255, 255) none repeat scroll 0% 0%;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.15) 0 5px 20px;
}
</style>
