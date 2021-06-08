<template>
  <div class="app-styles">
    <b-row>
      <b-col cols="6">
        <b-form-group label="Name" description="Enter your name">
          <IpyInput container-class="rounded"></IpyInput>
        </b-form-group>
      </b-col>
    </b-row>

    <div class="font-weight-lighter font-size-50">Lighter</div>
    <div class="font-weight-light font-size-50">Light</div>
    <div class="font-weight-normal font-size-50">Normal</div>
    <div class="ipy-font-weight-semibold font-size-50">Semibold</div>
    <div class="font-weight-bold font-size-50">Bold</div>
    <div class="font-weight-bolder font-size-50">Bolder</div>
  </div>
</template>

<script>
import { IpyInput } from '@infopiphany/ui'
export default {
  name: 'GuideTypographyWeight',
  components: { IpyInput },
}
</script>

<style lang="scss" scoped>
$util-font-sizes: 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,
  42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80;

@each $util-font-size in $util-font-sizes {
  .font-size-#{$util-font-size} {
    font-size: $util-font-size + px !important;
  }
}
</style>
