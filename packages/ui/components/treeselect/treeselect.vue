<template>
  <div :class="$style.container">
    <Treeselect
      :status="status"
      :badge-color="badgeColor"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <template
        v-for="(_, name) in $scopedSlots"
        :slot="name"
        slot-scope="slotData"
      >
        <slot :name="name" v-bind="slotData" />
      </template>
    </Treeselect>
    <div class="vue-treeselect--border"></div>
  </div>
</template>

<script>
import TreeselectMixin from './treeselectMixin'
import Treeselect from '@riophae/vue-treeselect'
export default {
  name: 'IpyTreeSelect',

  components: {
    Treeselect,
  },

  mixins: [TreeselectMixin],
}
</script>

<style lang="scss" module>
// @import 'node_modules/@riophae/vue-treeselect/dist/vue-treeselect';
@import '../../scss/variables.scss';

.container {
  font-weight: $placeholder-font-weight;
  font-size: $placeholder-font-size;
}
</style>
