<template>
  <div>
    <IpyDropdown button-text="Manufacturer" :options="users"></IpyDropdown>
  </div>
</template>

<script>
import { IpyDropdown } from '@infopiphany/ui'
export default {
  components: {
    IpyDropdown,
  },

  data() {
    return {
      users: [
        {
          value: 'Nvidia',
          label: 'Badge A',
        },
        {
          value: 'AMD',
          label: 'Badge B',
        },
      ],
    }
  },
}
</script>

<style></style>
