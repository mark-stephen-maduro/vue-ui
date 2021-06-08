<template>
  <div>
    <b-row>
      <b-col sm="12" lg="6">
        <b-form-group
          label="Slot left"
          description="You may customize each input to your needs and use cases any day without any sweat!"
        >
          <IpyInput container-class="rounded" icon-left="search">
            <template #left>
              <b-btn variant="outline" class="text-muted"
                >Im a button using outline variant</b-btn
              >
            </template>
          </IpyInput>
        </b-form-group>
      </b-col>
      <b-col sm="12" lg="6">
        <b-form-group label="Slot right">
          <IpyInput container-class="rounded">
            <template #right>
              <b-btn variant="outline">Open</b-btn>
            </template>
          </IpyInput>
        </b-form-group>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { IpyInput } from '@infopiphany/ui'
export default {
  components: {
    IpyInput,
  },
}
</script>

<style></style>
