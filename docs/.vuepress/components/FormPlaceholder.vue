<template>
  <div class="app-styles" id="app-styles">
    <div class="border shadow-sm p-3">
        <b-form-group
          id="input-group-1"
          label="Project ID"
        >
          <IpyInput
            type="email"
            required
            placeholder="e.g. PID-5500394"
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
