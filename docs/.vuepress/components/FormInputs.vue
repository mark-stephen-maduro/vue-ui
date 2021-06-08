<template>
  <div class="app-styles">
    <div class="d-flex border shadow-sm p-3">
      <div class="w-100">
        <b-form-group label="Checkbox">
          <b-form-checkbox>A</b-form-checkbox>
          <b-form-checkbox>B</b-form-checkbox>
          <b-form-checkbox>C</b-form-checkbox>
        </b-form-group>
      </div>
      <div class="w-100">
        <b-form-group label="Radio button">
          <b-form-radio name="some-radios">Option A</b-form-radio>
          <b-form-radio name="some-radios">Option B</b-form-radio>
          <b-form-radio name="some-radios">Option C</b-form-radio>
        </b-form-group>
      </div>
      <div class="w-100">
        <b-form-group label="Select">
          <IpyTreeSelect v-model="form.food" :options="foods"></IpyTreeSelect>
        </b-form-group>
      </div>
      <div class="w-100 pl-5">
        <b-form-group label="Dropdown">
          <IpyDropdown
            button-text="Manufacturer"
            :options="users"
            size="sm"
          ></IpyDropdown>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
import { IpyInput, IpyTreeSelect, IpyDropdown } from '@infopiphany/ui'
export default {
  components: {
    IpyInput,
    IpyDropdown,
    IpyTreeSelect,
  },

  data() {
    return {
      form: {
        food: null,
      },
      foods: [
        { id: 1, label: 'Job A' },
        { id: 2, label: 'Job B' },
        { id: 3, label: 'Job C' },
        { id: 4, label: 'Others' },
      ],
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
