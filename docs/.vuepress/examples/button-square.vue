<template>
  <div class="app-styles">
    <div class="border shadow-sm p-3">
      <div>
        <div>
          <IpyButton squared>Button</IpyButton>
          <IpyButton squared variant="primary">Button</IpyButton>
          <IpyButton squared variant="outline-secondary">Button</IpyButton>
          <IpyButton squared variant="success">Button</IpyButton>
          <IpyButton squared variant="outline-danger">Button</IpyButton>
          <IpyButton squared variant="info">Button</IpyButton>
        </div>
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
