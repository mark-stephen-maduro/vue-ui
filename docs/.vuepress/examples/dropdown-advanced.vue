<template>
  <div>
    <IpyDropdown
      button-text="Custom render menu items"
      searchable
      :options="users"
      size="sm"
      variant="default"
      icon="user"
    >
      <template v-slot:dropdown-items="{ availableOptions }">
        <b-dropdown-item-button
          v-for="option in availableOptions"
          :key="option.value"
        >
          <b-badge variant="primary">{{ option.value }}</b-badge>
          {{ option.label }}
          <img
            class="rounded-circle float-right"
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt
            width="25"
          />
        </b-dropdown-item-button>
      </template>
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
      users: [
        {
          value: 'Nvidia',
          label: 'Badge A',
          variant: 'success',
        },
        {
          value: 'AMD',
          label: 'Badge B',
          variant: 'warning',
        },
      ],
    }
  },
}
</script>

<style></style>
