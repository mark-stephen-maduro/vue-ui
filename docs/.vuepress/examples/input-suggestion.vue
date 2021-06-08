<template>
  <div>
    <b-row>
      <b-col sm="3">
        <b-form-group
          label="Input with suggestion"
          description="Search a fruit (Apple, Orange, Banana)"
        >
          <IpyInput
            v-model="fruit"
            container-class="rounded"
            icon-left="search"
            placeholder="Search a fruit"
            :suggestion="suggestions"
          />
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

  data() {
    return {
      fruit: '',
      suggestions: ['apple', 'orange', 'banana'],
    }
  },
}
</script>

<style></style>
