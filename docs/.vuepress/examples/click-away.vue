<template>
  <div>
    <IpyClickAway :do="clickedOutside">
      <b-btn variant="primary" @click="buttonClick">Click outside</b-btn>
    </IpyClickAway>
    <label class="font-weight-bold w-100 mt-3">{{ text }}</label>
  </div>
</template>

<script>
import { IpyClickAway } from '@infopiphany/ui'
export default {
  components: {
    IpyClickAway,
  },

  data() {
    return {
      text: 'Waiting for outside clicks...',
      counter: 0,
    }
  },

  methods: {
    clickedOutside() {
      this.text = `You clicked outside ${++this.counter} times.`
    },

    buttonClick() {
      this.counter = 0
      this.text = 'Waiting for outside clicks...'
    },
  },
}
</script>

<style></style>
