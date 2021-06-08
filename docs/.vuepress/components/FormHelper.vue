<template>
  <div class="app-styles" id="app-styles">
    <div class="border shadow-sm p-3">
        <b-form-group
          id="input-group-1"
          label="Email address"
          description="We'll never share your email with anyone else."
        >
          <IpyInput
            type="email"
            required
            placeholder="Enter email"
            container-class="rounded"
          ></IpyInput>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
import { IpyInput } from '@infopiphany/ui'
export default {
  name: 'FormTooltip',
  components: {
    IpyInput,
  },
}
</script>

<style></style>
