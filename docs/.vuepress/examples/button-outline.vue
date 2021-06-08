<template>
  <div class="app-styles">
    <div class="border shadow-sm p-3">
      <div>
        <IpyButton variant="outline-primary">Primary</IpyButton>
        <IpyButton variant="outline-secondary">Secondary</IpyButton>
        <IpyButton variant="outline-success">Success</IpyButton>
        <IpyButton variant="outline-danger">Danger</IpyButton>
        <IpyButton variant="outline-warning">Warning</IpyButton>
        <IpyButton variant="outline-info">Info</IpyButton>
        <IpyButton variant="outline-light">Light</IpyButton>
        <IpyButton variant="outline-dark">Dark</IpyButton>
      </div>
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
