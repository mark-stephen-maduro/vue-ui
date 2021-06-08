<template>
  <div>
    <b-form-group label="Projects" description="Sample basic selection">
      <IpyTreeSelect
        v-model="single"
        :options="treeoption"
        placeholder="Select a color"
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
      single: '1002',
      treeoption: [
        {
          id: '1001',
          label: 'NASA Rocket Project',
        },
        {
          id: '1002',
          label: 'Apolo Project',
        },
        {
          id: '1003',
          label: 'Space X',
          children: [
            {
              id: 'aa',
              label: 'Engines',
            },
            {
              id: 'ab',
              label: 'Technologies',
            },
          ],
        },
      ],
    }
  },
}
</script>

<style></style>
