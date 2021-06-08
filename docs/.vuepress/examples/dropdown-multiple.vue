<template>
  <div>
    <IpyDropdown
      button-text="Select labels"
      :options="users"
      multiple-select
      variant="default"
      icon="cog"
      size="sm"
    >
    </IpyDropdown>
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
      selected: null,
      users: [
        {
          value: 'Feat',
          label: 'Feature',
          variant: 'primary',
        },
        {
          value: 'Bug',
          label: 'Bug',
          variant: 'danger',
        },
        {
          value: 'Docs',
          label: 'Documentation',
          variant: 'warning',
        },
      ],
    }
  },
}
</script>

<style></style>
