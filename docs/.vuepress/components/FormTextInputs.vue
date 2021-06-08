<template>
  <div class="app-styles">
    <div class="border shadow-sm p-3">
      <b-form-group label="Label">
        <IpyInput container-class="rounded"></IpyInput>
      </b-form-group>
      <b-form-group label="Label">
        <IpyInput container-class="rounded"></IpyInput>
      </b-form-group>
      <b-form-group label="Label">
        <b-form-textarea></b-form-textarea>
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
