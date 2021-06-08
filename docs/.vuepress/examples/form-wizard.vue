<template>
  <div class="app-styles">
    <div class="border shadow-sm p-3 px-5">
      <IpyFormWizardIndicator
        :indicators="[
          { icon: 'user', title: 'Information' },
          { icon: 'envelope', title: 'Location' },
        ]"
        :active-index="formWizard.activeTabIndex"
      ></IpyFormWizardIndicator>

      <IpyFormWizard ref="wiz" @on-change="updateRefs" renderless>
        <IpyFormWizardContent animation="flash 0.6s">
          <b-form>
            <b-form-group
              id="input-group-1"
              label="Email address:"
              description="We'll never share your email with anyone else."
            >
              <IpyInput
                v-model="form.email"
                type="email"
                required
                placeholder="Enter email"
                container-class="rounded"
              ></IpyInput>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Your Name:"
              label-for="input-2"
            >
              <IpyInput
                id="input-2"
                v-model="form.name"
                required
                placeholder="Enter name"
                container-class="rounded"
              ></IpyInput>
            </b-form-group>

            <b-form-group id="input-group-3" label="Food:" label-for="input-3">
              <IpyTreeSelect
                v-model="form.food"
                :options="foods"
                required
              ></IpyTreeSelect>
            </b-form-group>

            <b-form-group id="input-group-4">
              <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                <b-form-checkbox value="me">Check me out</b-form-checkbox>
                <b-form-checkbox value="that">Check that out</b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
          </b-form>
        </IpyFormWizardContent>

        <IpyFormWizardContent animation="flipInY 0.6s">
          <b-form>
            <b-form-group label="Landmark">
              <IpyInput
                type="text"
                v-model="form.landmark"
                required
                placeholder="Enter nearest landmark"
                container-class="rounded"
              ></IpyInput>
            </b-form-group>

            <b-form-group label="Voucher:">
              <IpyInput
                v-model="form.voucher"
                required
                placeholder="Enter voucher"
                container-class="rounded"
              ></IpyInput>
            </b-form-group>

            <b-form-group>
              <b-form-checkbox-group v-model="form.certified">
                <b-form-checkbox value="certified"
                  >I certify everything is correct.</b-form-checkbox
                >
              </b-form-checkbox-group>
            </b-form-group>
          </b-form>
        </IpyFormWizardContent>
      </IpyFormWizard>

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
import {
  IpyFormWizard,
  IpyFormWizardContent,
  IpyFormWizardIndicator,
  IpyInput,
  IpyButton,
  IpyTreeSelect,
} from '@infopiphany/ui'
export default {
  components: {
    IpyFormWizard,
    IpyFormWizardContent,
    IpyFormWizardIndicator,
    IpyTreeSelect,
    IpyInput,
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
      this.$refs.wiz.nextTab()
    },
    prev() {
      this.$refs.wiz.prevTab()
    },
    updateRefs(prev, next) {
      this.$nextTick(() => {
        this.formWizard = {
          activeTabIndex: this.$refs.wiz.activeTabIndex,
          displayPrevButton: this.$refs.wiz.displayPrevButton,
          isLastStep: this.$refs.wiz.isLastStep,
          prev,
          next,
        }
      })
    },
    onSubmit(evt) {
      this.busy = true

      setTimeout(() => {
        this.busy = false
        alert(JSON.stringify(this.form))
        this.$refs.wiz.reset()
      }, 2000)
    },
  },
}
</script>

<style></style>
