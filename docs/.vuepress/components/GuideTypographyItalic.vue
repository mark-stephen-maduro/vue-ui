<template>
  <div class="app-styles">
    <div class="font-weight-lighter font-italic font-size-50">Lighter</div>
    <div class="font-weight-light font-italic font-size-50">Light</div>
    <div class="font-weight-normal font-italic font-size-50">Normal</div>
    <div class="ipy-font-weight-semibold font-italic font-size-50"
      >Semibold</div
    >
    <div class="font-weight-bold font-italic font-size-50">Bold</div>
    <div class="font-weight-bolder font-italic font-size-50">Bolder</div>
  </div>
</template>

<script>
export default {
  name: 'GuideTypographyItalic',
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
