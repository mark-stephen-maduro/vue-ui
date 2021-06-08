export default {
  props: {
    iconLeft: {
      type: [String, Array],
      default: null,
    },

    iconRight: {
      type: [String, Array],
      default: null,
    },

    loadingLeft: {
      type: Boolean,
      default: false,
    },

    loadingRight: {
      type: Boolean,
      default: false,
    },

    placeholder: {
      type: String,
      default: undefined,
    },

    status: {
      type: String,
      default: undefined,
    },

    suggestion: {
      type: [Array],
      default: null,
    },

    type: {
      type: String,
      default: 'text',
    },

    containerClass: {
      type: [String, Array],
      default: undefined,
    },

    borderClass: {
      type: [String, Array],
      default: undefined,
    },

    leftIconClass: {
      type: [String, Array],
      default: undefined,
    },

    rightIconClass: {
      type: [String, Array],
      default: undefined,
    },

    /** for future update
     * add validate props to accept a function that returns a state (danger state)
     * to change the color of the border when the input is invalid.
     */
    validate: {
      type: Function,
      default: (_v) => {
        return _v
      },
    },

    value: {},
  },

  data() {
    return {
      focused: false,
      colored: null,
    }
  },

  computed: {
    showSuggestion() {
      return (
        this.suggestion !== null &&
        this.suggestion !== this.value &&
        this.focused &&
        this.value
      )
    },

    valueModel: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('update', value)
      },
    },

    suggestions() {
      // either use includes or startsWith
      return this.suggestion.find((s) =>
        s.toLowerCase().includes(this.value.toLowerCase())
      )
    },
  },

  beforeDestroy() {
    this.$destroy
  },

  methods: {
    focus() {
      const input = this.$refs.input
      if (input) {
        input.focus()
        if (this.selectAll) {
          input.setSelectionRange(0, input.value.length)
        }
      }
    },

    onBlur(event) {
      this.focused = false
      this.$emit('blur', event)
    },

    onFocus(event) {
      this.focused = true
      this.$emit('focus', event)
    },

    onKeyTab(event) {
      if (this.showSuggestion) {
        this.valueModel = this.suggestions
        event.preventDefault()
        event.stopPropagation()
      }
    },
  },
}
