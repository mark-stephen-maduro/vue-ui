<template>
  <div class="app-styles">
    <div class="border shadow-sm p-3">
      <b-form>
        <b-form-group
          id="input-group-1"
          label="Email address"
          description="We'll never share your email with anyone else."
        >
          <IpyInput
            v-model="form.email"
            type="email"
            required
            placeholder="Enter email"
            container-class="rounded"
          ></IpyInput>
        </b-form-group>

        <b-form-group id="input-group-2" label="Name">
          <IpyInput
            v-model="form.name"
            required
            placeholder="Enter name"
            container-class="rounded"
          ></IpyInput>
        </b-form-group>

        <b-form-group id="input-group-3" label="Occupation" label-for="input-3">
          <IpyTreeSelect
            v-model="form.food"
            :options="foods"
            required
          ></IpyTreeSelect>
        </b-form-group>

        <b-form-group id="input-group-4">
          <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
            <b-form-checkbox value="that"
              >I certify everything is true and correct.</b-form-checkbox
            >
          </b-form-checkbox-group>
        </b-form-group>
      </b-form>

      <div class="mt-3 w-100 d-flex justify-content-end align-items-center">
        <IpyButton variant="primary" :busy="busy" @click="onSubmit"
          >Submit</IpyButton
        >
      </div>
    </div>
  </div>
</template>

<script>
import { IpyInput, IpyButton, IpyTreeSelect } from '@infopiphany/ui'
export default {
  components: {
    IpyTreeSelect,
    IpyInput,
    IpyButton,
  },
  data() {
    return {
      busy: false,
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
        landmark: '',
        voucher: '',
        certified: [],
      },
      foods: [
        { id: 1, label: 'Job A' },
        { id: 2, label: 'Job B' },
        { id: 3, label: 'Job C' },
        { id: 4, label: 'Others' },
      ],
      show: true,
    }
  },
  methods: {
    onSubmit(evt) {
      this.busy = true

      setTimeout(() => {
        this.busy = false
      }, 2000)
    },
  },
}
</script>

<style></style>
