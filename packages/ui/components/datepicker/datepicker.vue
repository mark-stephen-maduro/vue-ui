<script>
/**
 * REGRESSION:
 *
 * Pikaday and other external libraries that uses Browser API always goes `window is undefined`
 * when compiling
 *
 * Read more here:
 *   https://ssr.vuejs.org/guide/universal.html#component-lifecycle-hooks
 */

// import Pikaday from 'pikaday'
import isString from 'lodash.isstring'
import DPCalendarIcon from './calendar-icon.vue';
import { hasWindowSupport } from '../../utils';
import { areDatesEqual } from '../../utils/datetime-util';

const defaultDateFormat = 'YYYY-MM-DD';

export const pad = (val, len = 2) => `0${val}`.slice(-len)

/**
 * Used `onSelect` method in pickaday
 * @param {Date} date UTC format
 * @return {String} Date formated in yyyy-mm-dd
 */
export const defaultDateFormatter = (date) => {
  const day = pad(date.getDate())
  const month = pad(date.getMonth() + 1)
  const year = date.getFullYear()
  return `${year}-${month}-${day}`
}

const equals = (date1, date2) =>
  date1 && date2 && date1.getTime() === date2.getTime()

const isBefore = (compareTo, date) =>
  compareTo && date && date.getTime() < compareTo.getTime()

const highlightPastDates = (pikaday) => {
  const pikaButtons = pikaday.el.querySelectorAll('.pika-button')
  const today = new Date()

  pikaButtons.forEach((pikaButton) => {
    const { pikaYear, pikaMonth, pikaDay } = pikaButton.dataset
    const pikaButtonDate = new Date(pikaYear, pikaMonth, pikaDay)

    if (isBefore(today, pikaButtonDate)) {
      pikaButton.classList.add('is-past-date')
    }
  })
}

export default {
  components: {
    DPCalendarIcon,
  },

  props: {
    target: {
      type: String,
      required: false,
      default: '',
    },
    container: {
      type: String,
      required: false,
      default: '',
    },
    format: {
      type: String,
      required: false,
      default: defaultDateFormat,
    },
    defaultDate: {
      type: String,
      required: false,
      default: null
    },
    value: {
      type: Date,
      required: false,
      default: null,
    },
    minDate: {
      type: Date,
      required: false,
      default: null,
    },
    maxDate: {
      type: Date,
      required: false,
      default: null,
    },
    startRange: {
      type: Date,
      required: false,
      default: null,
    },
    endRange: {
      type: Date,
      required: false,
      default: null,
    },
    disableDayFn: {
      type: Function,
      required: false,
      default: null,
    },
    firstDay: {
      type: Number,
      required: false,
      default: 0,
    },
    arialLabel: {
      type: String,
      required: false,
      default: '',
    },
    displayField: {
      type: Boolean,
      required: false,
      // eslint-disable-next-line vue/no-boolean-default
      default: true,
    },
    startOpened: {
      type: Boolean,
      required: false,
      default: false,
    },
    i18n: {
      type: Object,
      required: false,
      default: null
    },
    theme: {
      type: String,
      required: false,
      default: '',
    },
    showClearButton: {
      type: Boolean,
      required: false,
      default: false,
    },
    inputId: {
      type: String,
      required: false,
      default: null
    },
    inputName: {
      type: String,
      required: false,
      default: null
    },
    customDraw: {
      type: Function,
      required: false,
      default: (pikaday) => {}
    }
  },

  data() {
    return {
      textInput: ''
    }
  },

  computed: {
    formattedDate() {
      return this.calendar && this.calendar.toString();
    },

    customTrigger() {
      return isString(this.target) && this.target !== '';
    },

    triggerOnFocus() {
      return this.target === null;
    },

    showDefaultField() {
      return !this.customTrigger || this.triggerOnFocus;
    },

    renderClearButton() {
      return this.showClearButton && this.textInput !== '' && !this.disabled;
    },

    inputAutocomplete() {
      if(this.autocomplete !== ''){
        return this.autocomplete;
      }

      if(this.triggerOnFocus) {
        return 'off';
      }

      return null;
    }
  },

  watch: {
    value(val) {
      if (!areDatesEqual(val, this.calendar.getDate())) {
        this.calendar.setDate(val, true)
      }
    },
    minDate(minDate) {
      this.calendar.setMinDate(minDate)
    },
    maxDate(maxDate) {
      this.calendar.setMaxDate(maxDate)
    },
    startRange(startRange) {
      this.calendar.setStartRange(startRange)
    },
    endRange(endRange) {
      this.calendar.setEndRange(endRange)
    },
  },

  mounted() {
    let Pikaday = null;
    import('pikaday').then((pikaday) => {
      Pikaday = pikaday;
      if (hasWindowSupport) {
        window['Pikaday'] = Pikaday;
      }
    }).catch(error=>console.error('could not load "pikaday"'));

    const $parentEl = this.$parent.$el
    const drawEvent = this.draw.bind(this)

    const pikadayConfig = {
      field: this.$refs.datepickerField.$el,
      theme: `infopiphany-datepicker-theme ${this.theme}`,
      defaultDate: this.value || this.defaultDate,
      setDefaultDate: Boolean(this.value),
      minDate: this.minDate,
      maxDate: this.maxDate,
      // Only supports default gitlab format YYYY-MM-DD. We have to decide if we want to support other formats.
      format: this.format,
      disableDayFn: this.disableDayFn,
      firstDay: this.firstDay,
      arialLabel: this.ariaLabel,
      toString: date => defaultDateFormatter(date),
      onSelect: this.selected.bind(this),
      onClose: this.closed.bind(this),
      onOpen: this.opened.bind(this),
      onDraw: (pikaday) => {
        highlightPastDates(pikaday);
        this.customDraw(pikaday);
        drawEvent()
      },
    }

    // Use `field` as the trigger to open on focus
    if(!this.triggerOnFocus && !this.disabled) {
      const trigger = this.target
      ? $parentEl.querySelector(this.target)
      : this.$refs.calendarTriggerBtn;

      pikadayConfig.trigger = trigger;

      if(!pikadayConfig.field && this.customTrigger) {
        pikadayConfig.field = trigger;
      }
    }

    // Prevent passing `container` option to pikaday
    if(this.container !== null) {
      const container = this.container
        ? $parentEl.querySelector(this.container)
        : this.$el

       pikadayConfig.container = container;
    }

    if (this.i18n) {
      pikadayConfig.i18n = this.i18n
    }

    if(hasWindowSupport) {
      this.calendar = new Pikaday(pikadayConfig)
    }

    if (this.startOpened) {
      this.calendar.show()
    }
  },

  beforeDestroy() {
    if(this.calendar) {
      this.calendar.destroy()
    }
  },

  methods: {
    selected(date) {
      this.$emit('input', date)
    },
    closed() {
      this.$emit('close')
    },
    opened() {
      this.$emit('open')
    },
    draw() {
      this.$emit('monthChange')
    },
    onKeydown() {
      if(this.textInput === '') {
        const resetDate = this.minDate || null;
        this.calendar.setDate(resetDate);
        this.selected(resetDate);
      }
    }
  },
}
</script>

<template>
  <div class="infopiphany-datepicker d-inline-block">
    <div v-if="showDefaultField" :class="['position-relative', { 'd-none': target }]">
      <slot :formatted-date="formattedDate">
        <b-form-input
          :id="inputId"
          ref="datepickerField"
          v-model="textInput"
          :name="inputName"
          class="infopiphany-datepicker-input"
          :value="formattedDate"
          :placeholder="placeholder"
          :disabled="disabled"
          @keydown.enter="onKeydown"
        />
      </slot>
      <!-- TODO: Replace font-awesome icon with BaseIcon Component to get rid of dom.watch() -->
      <span ref="calendarTriggerBtn" class="infopiphany-datepicker-trigger">
        <slot name="triggerIcon">
          <!-- <i class="far fa-calendar-alt"></i> -->
          <DPCalendarIcon width="16px" height="16px" />
        </slot>
      </span>
    </div>
  </div>
</template>
