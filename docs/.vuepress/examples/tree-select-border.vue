<template>
  <div>
    <b-form-group label="Colors" description="Sample basic selection">
      <IpyTreeSelect
        v-model="single"
        :options="treeoption"
        :status="single.label"
        placeholder="Select here noop"
        value-format="object"
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
      single: {
        id: '1003',
        label: 'danger',
      },
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

<style></style>
