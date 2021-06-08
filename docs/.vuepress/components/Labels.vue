<template>
  <div class="app-styles">
    <div class="border shadow-sm p-3">
      <b-form-group label="Username">
        <IpyInput
          type="text"
          required
          placeholder="Enter username"
          container-class="rounded"
        ></IpyInput>
      </b-form-group>
    </div>
  </div>
</template>

<script>
import { IpyInput } from '@infopiphany/ui'
export default {
  components: {
    IpyInput,
  },
}
</script>

<style></style>
