<template>
  <div style="width: 300px">
    <b-form-group label="Colors">
      <IpyTreeSelect
        v-model="multiple"
        :options="treeoption"
        badge-color="primary"
        placeholder="Select a color"
        multiple
      />
    </b-form-group>
  </div>
</template>

<script>
import { IpyTreeSelect } from '@infopiphany/ui'
export default {
  components: {
    IpyTreeSelect,
  },

  data() {
    return {
      multiple: ['1003'],
      treeoption: [
        {
          id: '1001',
          label: 'primary',
        },
        {
          id: '1002',
          label: 'success',
        },
        {
          id: '1003',
          label: 'danger',
        },
        {
          id: '1004',
          label: 'warning',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.app-styles {
  .vue-treeselect[badge-color='primary'] {
    .vue-treeselect__multi-value-item {
      background-color: #0078b7;
      color: white;
    }
  }
}
</style>
