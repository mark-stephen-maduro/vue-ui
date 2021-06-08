<template>
  <div>
    <b-row>
      <b-col sm="12" lg="3">
        <b-form-group description="Default status">
          <IpyInput container-class="rounded" status="primary" />
        </b-form-group>
      </b-col>
      <b-col sm="12" lg="3">
        <b-form-group description="Danger status">
          <IpyInput container-class="rounded" status="danger" />
        </b-form-group>
      </b-col>
      <b-col sm="12" lg="3">
        <b-form-group description="Warning status">
          <IpyInput container-class="rounded" status="warning" />
        </b-form-group>
      </b-col>
      <b-col sm="12" lg="3">
        <b-form-group description="Success status">
          <IpyInput container-class="rounded" status="success" />
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
