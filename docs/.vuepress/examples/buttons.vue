<template>
  <div class="app-styles">
    <div class="border shadow-sm p-3">
      <IpyButton>Button</IpyButton>
      <IpyButton variant="secondary">Button</IpyButton>
      <IpyButton variant="danger">Button</IpyButton>
      <IpyButton variant="success">Button</IpyButton>
      <IpyButton variant="outline-primary">Button</IpyButton>
    </div>
  </div>
</template>

<script>
import { IpyButton } from '@infopiphany/ui'
export default {
  components: {
    IpyButton,
  },
}
</script>

<style></style>
