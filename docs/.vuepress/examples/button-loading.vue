<template>
  <div class="app-styles">
    <div class="border shadow-sm p-3">
      <IpyButton @click="onLoad" :busy="busy"> Save </IpyButton>
      <IpyButton @click="onLoad" :busy="busy" variant="secondary">
        Save
      </IpyButton>
      <IpyButton @click="onLoad" :busy="busy" variant="primary">
        Save
      </IpyButton>
      <IpyButton @click="onLoad" :busy="busy" variant="success">
        Save
      </IpyButton>
      <IpyButton @click="onLoad" :busy="busy" variant="outline-primary">
        Save
      </IpyButton>
    </div>
  </div>
</template>

<script>
import { IpyButton } from '@infopiphany/ui'
export default {
  components: {
    IpyButton,
  },

  data() {
    return {
      busy: false,
      onLoad: () => {
        this.busy = true
        setTimeout(() => {
          this.busy = false
        }, 2000)
      },
    }
  },
}
</script>

<style></style>
