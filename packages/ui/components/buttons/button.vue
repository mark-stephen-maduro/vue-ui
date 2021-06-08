<template>
  <b-overlay
    :show="loading"
    rounded
    opacity="0.6"
    spinner-small
    spinner-variant="primary"
    class="d-inline-block"
  >
    <b-button v-bind="$attrs" v-on="$listeners" :disabled="loading">
      <slot>Button</slot>
    </b-button>
  </b-overlay>
</template>

<script>
export default {
  name: 'IpyButton',

  props: {
    busy: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      loading: this.busy,
    }
  },

  watch: {
    busy: function (e) {
      this.loading = e
    },
  },
}
</script>

<style></style>
