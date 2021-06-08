<template>
  <div class="app-styles">
    <div class="border shadow-sm p-3">
      <b-btn variant="link" class="ipy-font-weight-semibold mb-2">
        Reset Filters
      </b-btn>
      <div class="d-flex">
        <b-form-group label="Blood Type" class="mr-5">
          <b-form-checkbox> O+ </b-form-checkbox>
          <b-form-checkbox> A </b-form-checkbox>
          <b-form-checkbox> B </b-form-checkbox>
        </b-form-group>

        <b-form-group label="Ward">
          <b-form-checkbox> Ward A </b-form-checkbox>
          <b-form-checkbox> Ward B </b-form-checkbox>
          <b-form-checkbox> Ward C </b-form-checkbox>
        </b-form-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
