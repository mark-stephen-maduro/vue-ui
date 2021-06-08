<script>
import IpyInput from '../input/input.vue'
export default {
  name: 'IpyDropdown',

  components: {
    IpyInput,
  },
  /**
   * Current selected value to be pass on v-model
   */
  model: {
    event: 'update',
  },

  props: {
    /**
     * Array of items to render on the dropdown menu.
     * The 'options' array should have a key/field name `value` and `label.`
     * `variant` key is optional for specifying badge colors.
     * The default variant is primary.
     */
    options: {
      type: Array,
      default: () => [],
      validator: function (value) {
        // The value must match one of these strings
        return value.some((v) => v.value && v.label)
      },
    },

    /**
     * Criteria for filtering
     * Internal filtering uses `String.includes()`
     */
    filter: {
      type: Function,
      default: function (criteria) {
        return (option) => option.label.toLowerCase().includes(criteria)
      },
    },

    /**
     * Bootstrap-Vue's Dropdown `text` prop.
     * Text to place in the toggle button, or in the split button is split mode
     */
    buttonText: {
      type: String,
      default: '',
    },

    /**
     * Refer to bootstrap-vue sizes
     * Size of the dropdown button. Set the size of the component's appearance. 'sm', 'md' (default), or 'lg'
     */
    size: {
      type: String,
      required: false,
      default: undefined,
    },

    /**
     * Icon to be placed on the left-size of the button-text.
     * Icon is rendered by `BaseIcon` componetn
     */
    icon: {
      type: [String, Array],
      required: false,
      default: null,
    },

    /**
     * The size of icon. Refer to `BaseIcon` Component / Fontawesome icon sizing.
     * Example: 'xs'
     */
    iconSize: {
      type: String,
      required: false,
      default: undefined,
    },

    /**
     * When `true`, this will render a search component in the dropdown-menu.
     * The search component will filter items based on it's `label`
     */
    searchable: {
      type: Boolean,
      default: false,
    },

    /**
     * This prop will also disable the seach input field
     */
    disabled: {
      type: Boolean,
      default: false,
    },

    /**
     * Bootstrap-vue `block` prop.
     * Make the dropdown button span to the full width of a parent
     * Renders a 100% width button (expands to the width of its parent container)
     */
    block: {
      type: Boolean,
      default: false,
    },

    /**
     * Renders a split button dropdown
     */
    split: {
      type: Boolean,
      default: false,
    },

    /**
     * Option to disable the caret icon
     */
    noCaret: {
      type: Boolean,
      default: false,
    },

    /**
     * CSS class (or classes) to add to the dropdown's menu container
     */
    menuClass: {
      type: [String, Array, Object],
      default: null,
    },

    /**
     * CSS class (or classes) to add to the dropdown's toggle container
     */
    toggleClass: {
      type: [String, Array, Object],
      required: false,
      default: null,
    },

    /**
     * CSS class (or classes) to add to the input field (BaseInput) of the search component
     */
    searchInputClass: {
      type: [String, Array, Object],
      default: null,
    },

    /**
     * Option to enable multi selection
     */
    multipleSelect: {
      type: Boolean,
      default: false,
    },

    value: {},
  },

  data() {
    return {
      search: '',
      // Data holder for selected datas
      multiples: [],
    }
  },

  computed: {
    renderCaret() {
      if (this.split) {
        return false
      }
      return true
    },

    toggleButtonClasses() {
      return [
        this.toggleClass,
        {
          // TODO: `dropdown-icon-only` and `dropdown-icon-text` is *not yet implemented*
          'dropdown-icon-only': !this.buttonText.length && this.icon,
          'dropdown-icon-text': this.buttonText.length && this.icon,
        },
      ]
    },

    /**
     * One and only criteria the value is always the lowercase
     * string of the search input value
     */
    criteria() {
      return this.search.trim().toLowerCase()
    },

    availableOptions() {
      const criteria = this.criteria

      if (criteria) {
        /**
         * `this.filter` comes from the prop and is a Higher-Order-Function
         *
         *                       / This is the criteria |
         *                      |                       |
         *  options.filter((v) => this.search.includes(v))
         *                |                              |
         *                 \-> The `filter` HOC <-------/
         */
        return this.options.filter(this.filter(criteria))
      }

      return this.options
    },

    badges() {
      return this.multiples
    },
  },

  mounted() {
    this.loadBadge(this.multipleSelect)
  },

  methods: {
    handleOptionSelect(optionValue, event) {
      if (this.multipleSelect) {
        const j = this.multiples.indexOf(this.value)
        if (j >= 0) this.multiples.splice(i, 1)

        const i = this.multiples.indexOf(optionValue)
        if (i >= 0 || !event) this.multiples.splice(i, 1)
        else this.multiples.push(optionValue)

        this.$emit('update', this.multiples)
        return
      }

      this.$emit('update', optionValue)
      this.$emit('change', optionValue)
    },

    handleSearchValueChange(event) {
      this.$emit('searchValueChange', event)
      this.search = event
    },

    loadBadge(enabled) {
      if (enabled) {
        if (this.value instanceof Array) {
          this.multiples = this.value

          // change checkbox checked state based on loaded data
          this.multiples.map((m, i) => {
            const chkbox = document.getElementById(`multiple-select-${m.label}`)
            if (m.label === chkbox.value) chkbox.checked = true
          })
        }
      }
    },
  },
}
</script>
<template>
  <b-dropdown
    ref="dropdown"
    v-bind="$attrs"
    :split="split"
    :size="size"
    :toggle-class="[
      toggleButtonClasses,
      $style.disableBSToggle,
      $style.dropdownButton,
      'justify-content-between',
      'text-left',
      'd-inline-flex',
      'align-items-center',
    ]"
    :menu-class="[menuClass, $style.dropdownMenu]"
    :block="block"
    v-on="$listeners"
  >
    <slot slot="button-content" name="button-content">
      <BaseIcon
        v-if="icon"
        :class="$style.iconLeft"
        :name="icon"
        :size="iconSize"
      />
      <slot name="value-content">
        <span v-if="!multipleSelect || !multiples.length" class="mr-1">{{
          buttonText
        }}</span>
        <b-badge
          v-for="(option, index) in multiples"
          v-else
          :key="index"
          class="mr-1"
          :variant="option.variant || 'primary'"
          >{{ option.label }}</b-badge
        >
      </slot>
      <BaseIcon
        v-if="renderCaret && !noCaret"
        :class="$style.iconRight"
        class="ml-1"
        name="chevron-down"
        size="xs"
      />
    </slot>

    <!-- Search Input Form -->
    <b-dropdown-form
      v-if="searchable"
      :class="$style.dropdownForm"
      @submit.stop.prevent="() => {}"
    >
      <b-form-group class="mb-0" label-size="sm" :disabled="disabled">
        <IpyInput
          v-model="search"
          type="search"
          autocomplete="off"
          :size="size"
          :container-class="['rounded']"
          :icon-right="['fas', 'search']"
          :class="searchInputClass"
          @input="handleSearchValueChange"
        ></IpyInput>

        <slot
          v-if="availableOptions.length === 0"
          slot="description"
          name="description"
          v-bind="{ search, criteria, ...$props }"
        >
          <span v-if="criteria.length > 0"
            >There are no options matching your search criteria.</span
          >

          <div v-show="options.length === 0">
            <span>No available options.</span>
          </div>
        </slot>
      </b-form-group>
    </b-dropdown-form>

    <!-- Design: Also hide the dropdown-divider when there are no available items -->
    <b-dropdown-divider v-show="searchable && availableOptions.length !== 0" />

    <!-- Dropdown menu items -->
    <div class="dropdown-content" :class="[$style.labelsDropdownMenu]">
      <slot
        name="dropdown-items"
        v-bind="{
          availableOptions,
          handleOptionSelect,
          ...$props,
        }"
      >
        <b-dropdown-form v-if="multipleSelect">
          <b-form-checkbox
            v-for="(option, index) in availableOptions"
            :id="`multiple-select-${option.label}`"
            :key="option.value"
            class="w-100"
            :value="option.label"
            @change="handleOptionSelect(option, $event)"
            >{{ option.label }}</b-form-checkbox
          >
        </b-dropdown-form>

        <b-dropdown-item-button
          v-for="option in availableOptions"
          v-else
          :key="option.value"
          @click.stop="handleOptionSelect(option)"
          >{{ option.label }}</b-dropdown-item-button
        >
      </slot>
    </div>
  </b-dropdown>
</template>

<style lang="scss" module>
@import '../../scss/functions';

.dropdownMenu {
  min-width: px-to-rem(256px);
  max-height: px-to-rem(212px);
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  overflow-y: auto;
  width: 100%;
  border: 1px solid #ced4da;
  box-shadow: 1px 1px 2px 0 rgba(33, 33, 33, 0.14),
    0 0 1px 0 rgba(0, 0, 0, 0.14);

  &:global(.show) {
    margin-top: 4px;
    margin-bottom: 4px;
    animation: fade 100ms ease-in forwards;
  }
}

.disableBSToggle::after {
  // Remove bootstrap's dropdown caret
  display: none !important;
}

.dropdownButton {
  min-height: 32px;
  color: rgb(64, 64, 64);
  text-align: left;
  margin-bottom: 5px;

  .iconLeft {
    margin-right: 5px;
  }

  &[aria-expanded='true'] .iconRight {
    transform: rotate(180deg);
    transition: transform 100ms cubic-bezier(0.18, 0.89, 0.32, 1.01);
  }

  &[aria-expanded='false'] .iconRight {
    transition: transform 100ms cubic-bezier(0.18, 0.89, 0.32, 1.01);
  }
}

.dropdownForm {
  > form {
    padding-top: 0.6rem;
  }

  form:focus {
    outline: none !important;
  }
}

.labelsDropdownMenu {
  li {
    :global(.b-dropdown-form) {
      padding: 0;
      :global(.custom-checkbox) {
        padding-left: 3rem;
        padding-top: 5px;
        padding-bottom: 5px;
        height: 35px;
        &:hover {
          background-color: darken(#fff, 3%);
        }
        :global(.custom-control-input) {
          ~ :global(.custom-control-label) {
            padding-top: 2px;
            width: 100%;
            height: 100%;
            font-size: px-to-rem(13px);
          }
        }
      }
    }

    button {
      font-size: px-to-rem(14px);
    }

    > form:focus {
      outline: none !important;
    }
  }
}

@keyframes fade {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>
