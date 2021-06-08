<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import camelCase from 'lodash/camelCase'
import { library as fontAwesomeIconLibrary } from '@fortawesome/fontawesome-svg-core'
import { faChartBar, faBox, faUsers, faCalendarAlt, faTruckLoading, faBuilding, faCreditCard,
  faClock, faClipboardList } from '@fortawesome/free-solid-svg-icons'

const faSolidIcons = [
  faChartBar,
  faBox,
  faUsers,
  faCalendarAlt,
  faTruckLoading,
  faBuilding,
  faCreditCard,
  faClock,
  faClipboardList,
]
// https://fontawesome.com/icons
fontAwesomeIconLibrary.add(...faSolidIcons)

export default {
  components: {
    FontAwesomeIcon,
  },
  props: {
    source: {
      type: String,
      default: 'font-awesome',
    },
    name: {
      type: [String, Array],
      required: true,
    },
  },
  computed: {
    // Gets a CSS module class, e.g. iconCustomLogo
    customIconClass() {
      return this.$style[camelCase('icon-custom-' + this.name)]
    },
  },
}
</script>

<template>
  <FontAwesomeIcon
    v-if="source === 'font-awesome'"
    v-bind="$attrs"
    :icon="name"
  />
  <span v-else-if="source === 'custom'" :class="customIconClass" />
</template>
