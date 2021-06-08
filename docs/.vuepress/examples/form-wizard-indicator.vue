<template>
  <div class="app-styles">
    <div class="border shadow-sm p-3">
      <IpyIndicator
        ref="indicator"
        :indicators="[
          { icon: 'user', title: 'Information' },
          { icon: 'envelope', title: 'Location' },
        ]"
        :active-index="formWizard.activeTabIndex"
      ></IpyIndicator>

      <div class="mt-3 w-100 d-flex justify-content-end align-items-center">
        <IpyButton
          v-if="formWizard.displayPrevButton"
          class="mr-2"
          variant="secondary"
          @click="prev"
          >Back</IpyButton
        >
        <IpyButton
          v-if="!formWizard.isLastStep"
          variant="primary"
          @click="next"
        >
          Next
        </IpyButton>
        <IpyButton v-else variant="primary" :busy="busy" @click="onSubmit"
          >Submit</IpyButton
        >
      </div>
    </div>
  </div>
</template>

<script>
import { IpyIndicator, IpyButton } from '@infopiphany/ui'
export default {
  components: {
    IpyIndicator,
    IpyButton,
  },
  data() {
    return {
      formWizard: {},
      busy: false,
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
        landmark: '',
        voucher: '',
        certified: [],
      },
      foods: [
        { id: 1, label: 'Carrots' },
        { id: 2, label: 'Beans' },
        { id: 3, label: 'Tomatoes' },
        { id: 4, label: 'Corn' },
      ],
      show: true,
    }
  },
  methods: {
    next() {
      this.$refs.indicator.loadRef().nextTab()
      this.$nextTick(() => {
        this.formWizard = {
          activeTabIndex: this.$refs.indicator.loadRef().activeTabIndex,
          displayPrevButton: this.$refs.indicator.loadRef().displayPrevButton,
          isLastStep: this.$refs.indicator.loadRef().isLastStep,
        }
      })
    },
    prev() {
      this.$refs.indicator.loadRef().prevTab()
      this.$nextTick(() => {
        this.formWizard = {
          activeTabIndex: this.$refs.indicator.loadRef().activeTabIndex,
          displayPrevButton: this.$refs.indicator.loadRef().displayPrevButton,
          isLastStep: this.$refs.indicator.loadRef().isLastStep,
        }
      })
    },
    onSubmit(evt) {
      this.busy = true

      setTimeout(() => {
        this.busy = false
        this.$refs.indicator.loadRef().reset()
      }, 2000)
    },
  },
}
</script>

<style></style>
