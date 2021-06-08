<template>
  <div>
    <b-row>
      <b-col sm="3">
        <b-form-group label="Container class">
          <IpyInput container-class="rounded bg-warning" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group label="Border class">
          <IpyInput container-class="rounded" border-class="bg-danger h-100" />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group label="Left icon class">
          <IpyInput
            container-class="rounded"
            left-icon-class="text-danger"
            icon-left="envelope"
          />
        </b-form-group>
      </b-col>
      <b-col sm="3">
        <b-form-group label="Right icon class">
          <IpyInput
            container-class="rounded"
            right-icon-class="text-warning"
            icon-right="envelope"
          />
        </b-form-group>
      </b-col>
    </b-row>
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
