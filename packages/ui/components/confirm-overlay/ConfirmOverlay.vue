<template>
  <b-overlay :show="overlay" no-wrap @shown="onShown" @hidden="onHidden">
    <template #overlay>
      <div
        ref="dialog"
        tabindex="-1"
        role="dialog"
        aria-modal="false"
        aria-labelledby="form-confirm-label"
        class="text-center p-3"
      >
        <p>
          <strong id="form-confirm-label">{{ question }}</strong>
        </p>
        <div class="d-flex">
          <b-button variant="outline-danger" class="mr-3" @click="onCancel"
            >Cancel</b-button
          >
          <b-button variant="outline-success" @click="onOK">OK</b-button>
        </div>
      </div>
    </template>
  </b-overlay>
</template>

<script>
export default {
  name: 'IpyConfirm',
  props: {
    busy: {
      type: Boolean,
      default: false,
    },
    question: {
      type: String,
      default: 'Are you sure?',
    },
    confirm: {
      type: Function,
      default: (v) => {
        return v
      },
    },
    cancel: {
      type: Function,
      default: (v) => {
        return v
      },
    },
  },
  data() {
    return {
      overlay: false,
    }
  },
  watch: {
    busy: function (e) {
      this.overlay = e
    },
  },
  methods: {
    onShown() {
      // Focus the dialog prompt
      this.$refs.dialog.focus()
    },
    onHidden() {
      this.cancel()
    },
    onCancel() {
      this.confirm({ action: 'cancel' })
      this.overlay = false
    },
    onOK() {
      this.confirm({ action: 'ok' })
      this.overlay = false
    },
  },
}
</script>
