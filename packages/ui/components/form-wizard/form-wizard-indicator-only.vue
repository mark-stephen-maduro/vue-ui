<template>
  <div class="indicator" :class="{ vertical: flexColumn }">
    <div
      v-for="(indicator, index) in indicators"
      :key="index"
      class="indicator--icons"
      :class="[{ active: currentIndex >= index }, indicatorClass]"
      :style="{ height: `${indicatorSize}px`, width: `${indicatorSize}px` }"
    >
      <slot v-bind="{ indicator, loadRef }">
        <BaseIcon :name="indicator.icon" size="lg" />

        <div
          class="indicator--title"
          :class="titleClass"
          :style="{ bottom: `-${indicatorSize - indicatorSize * 0.4}px` }"
          >{{ indicator.title || '' }}</div
        >
      </slot>
    </div>
    <FormWizard ref="indicatorWizard">
      <FormWizardContent
        v-for="(v, i) in indicators"
        :key="i"
      ></FormWizardContent>
    </FormWizard>
  </div>
</template>

<script>
import BaseIcon from '../base-icon/base-icon.vue'
import FormWizardContent from './form-wizard-content.vue'
import FormWizard from './form-wizard.vue'
export default {
  name: 'IpyIndicator',
  components: { BaseIcon, FormWizard, FormWizardContent },

  props: {
    indicators: {
      type: Array,
      required: true,
    },
    indicatorSize: {
      type: Number,
      default: 50,
    },
    flexColumn: {
      type: Boolean,
      default: false,
    },
    activeIndex: {
      type: Number,
      default: 0,
      required: true,
    },
    indicatorClass: {
      type: [String, Array, Object],
      default: '',
    },
    titleClass: {
      type: [String, Array, Object],
      default: '',
    },
  },

  data() {
    return {
      formRef: null,
    }
  },

  computed: {
    currentIndex() {
      return this.activeIndex
    },
  },

  methods: {
    loadRef() {
      return this.$refs.indicatorWizard
    },
  },
}
</script>

<style lang="scss">
.indicator {
  display: flex;
  justify-content: center;
  align-items: center;
  height: fit-content;

  margin: 30px 0 30px 0;

  &.vertical {
    flex-direction: column;
  }

  &.vertical > &--icons {
    margin: 0 35px 2rem 15px;
  }

  &--icons {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 35px 0 15px;
    border-radius: 50%;
    background-color: #dfdfdf;
    cursor: pointer;
    z-index: 5;
    transition: background-color 300ms ease;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    svg {
      position: absolute;
      z-index: 2;
    }

    &.active {
      background-color: #0078b7;

      svg {
        color: white;
      }
    }

    &:not(.active):hover {
      background-color: #bdbdbd;
    }
  }

  &--title {
    position: absolute;
    white-space: nowrap;
    font-weight: 600;
  }
}
</style>
