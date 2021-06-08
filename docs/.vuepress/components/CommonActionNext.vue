<template>
  <div class="app-styles">
    <div class="border shadow-sm p-3 d-flex">
      <IpyButton variant="secondary" class="mr-2" size="sm">Cancel</IpyButton>
      <IpyButton variant="primary" size="sm"
        >Next <BaseIcon class="mb-1 ml-3" name="arrow-right" size="sm"
      /></IpyButton>
    </div>
  </div>
</template>

<script>
import { IpyButton } from '@infopiphany/ui'
export default {
  name: 'CommonActionNext',
  components: {
    IpyButton,
  },
}
</script>

<style></style>
