<template>
  <div class="app-styles" id="app-styles">
    <div class="border shadow-sm p-3">
        <b-form-group
          id="input-group-1"
        >
          <template #label>
            Email address <span id="tooltip-sample" class="ipy-cursor-help"><BaseIcon  class="ml-1 mb-1" name="info-circle"/></span>
          </template>
          <IpyInput
            type="email"
            required
            placeholder="Enter email"
            container-class="rounded"
          ></IpyInput>
        </b-form-group>

        <b-tooltip target="tooltip-sample" triggers="hover" container="app-styles">
          We'll never share your email with anyone else.
        </b-tooltip>
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
