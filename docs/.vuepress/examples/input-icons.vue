<template>
  <div>
    <b-row>
      <b-col>
        <b-form-group description="icon-left prop was used." label="Left Icon">
          <IpyInput container-class="rounded" :icon-left="['fas', 'search']" />
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          description="icon-right prop was used."
          label="Right Icon"
        >
          <IpyInput
            container-class="rounded"
            :icon-right="['fas', 'user']"
            status="warning"
          />
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form-group
          description="Loading left icon indicator"
          label="Loading left"
        >
          <IpyInput container-class="rounded" loading-left status="primary" />
        </b-form-group>
      </b-col>
      <b-col>
        <b-form-group
          description="Loading right icon indicator"
          label="Loading right"
        >
          <IpyInput container-class="rounded" loading-right status="warning" />
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
