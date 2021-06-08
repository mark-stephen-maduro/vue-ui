<template>
  <div class="app-styles">
    <div class="border shadow-sm p-3">
      <b-form>
        <b-form-group
          label="Password"
          invalid-feedback="Password must be at least 16 characters"
          :state="usernameValidation.state"
        >
          <IpyInput
            v-model="password"
            type="password"
            required
            placeholder="Enter password"
            container-class="rounded"
            :status="!usernameValidation.state ? usernameValidation.status : ''"
            required
            @input="validate($event)"
          ></IpyInput>
        </b-form-group>
      </b-form>
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
import { IpyInput } from '@infopiphany/ui'
export default {
  components: {
    IpyInput,
  },
  data() {
    return {
      password: '',
      usernameValidation: {
        state: true,
        status: 'danger',
      },
    }
  },
  methods: {
    validate: debounce(function (input) {
      if (this.password.length < 16) {
        this.usernameValidation.state = false
      } else {
        this.usernameValidation.state = true
      }
    }, 500),
  },
}
</script>

<style></style>
