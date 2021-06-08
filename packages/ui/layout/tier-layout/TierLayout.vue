<template>
  <div
    class="tier-layout"
    :class="[
      {
        'tier-layout--desktop': isDesktop,
      },
    ]"
  >
    <b-row>
      <!-- TIER 1 -->
      <b-col cols="12" lg="2" class="tier-layout--left-panel">
        <slot name="left-panel" />
      </b-col>

      <!-- CONTENTS -->
      <b-col>
        <div class="tier-layout--default">
          <slot></slot>
        </div>
      </b-col>

      <!-- OPTIONAL RIGHT SIDE -->
      <b-col
        v-if="isAside === true"
        cols="12"
        lg="2"
        class="tier-layout--right-panel"
      >
        <div class="pt-3 overflow-auto">
          <slot name="right-panel" />
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  props: {
    collapseSidebarClass: {
      type: [Array, Object, String],
      default: '',
    },
    isSidebarCollapsed: {
      type: Boolean,
      default: true,
    },
    isDesktop: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    // determines if tier 4 was used.
    // else occupy all space for tier 2 and 3
    isAside() {
      return 'right-panel' in this.$slots
    },
  },
}
</script>
