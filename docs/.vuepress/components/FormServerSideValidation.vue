<template>
  <div class="app-styles">
    <div class="d-flex justify-content-center">
      <div class="border shadow-sm p-3 w-50">
        <b-overlay :show="busy" rounded="sm">
          <h3>Invite users</h3>
          <p
            >Inviting users is the easiest way to get your team collaborating.
            <br />
            Enter an email address and assign a role below.</p
          >
          <b-form>
            <b-form-group label="Email">
              <IpyInput
                v-model="form.email"
                placeholder="Enter email"
                container-class="rounded"
              ></IpyInput>
            </b-form-group>

            <b-form-group label="Role">
              <IpyInput
                v-model="form.role"
                placeholder="Enter role"
                container-class="rounded"
              ></IpyInput>
            </b-form-group>

            <b-form-group>
              <template #label>
                Message <span class="text-muted">(optional)</span>
              </template>
              <b-form-textarea
                v-model="form.message"
                placeholder="Enter message"
                rows="5"
              ></b-form-textarea>
            </b-form-group>
          </b-form>

          <b-alert
            :show="alert"
            variant="warning"
            dismissible
            fade
            style="border-left: 3px solid tomato"
          >
            <strong>Server temporarily unavailable</strong>
            <p>
              <BaseIcon name="exclamation-circle" /> The invite failed to send.
              Try again in a moment.
            </p>
          </b-alert>
        </b-overlay>

        <div class="d-flex justify-content-end">
          <IpyButton class="mr-2" variant="secondary">Cancel</IpyButton>
          <IpyButton variant="primary" :busy="busy" @click="sendInvite">
            Send invite
          </IpyButton>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { IpyInput, IpyButton } from '@infopiphany/ui'
export default {
  components: {
    IpyInput,
    IpyButton,
  },
  data() {
    return {
      form: {
        email: 'mmaduro.ccheetah@gmail.com',
        role: 'Developer',
        message: 'Hi Mark Stephen, I would like to invite you to our team.',
      },
      busy: false,
      alert: false,
    }
  },
  methods: {
    // server wait mock
    sendInvite() {
      this.busy = true
      new Promise(function (resolve, reject) {
        resolve()
      })
        .then(() => {
          return new Promise((resolve) =>
            setTimeout(() => {
              this.busy = false
              resolve()
            }, 3000)
          )
        })
        .then(() => {
          this.alert = true
          setTimeout(() => {
            this.alert = false
          }, 5000)
        })
    },
  },
}
</script>

<style></style>
