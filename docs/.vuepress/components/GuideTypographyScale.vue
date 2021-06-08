<template>
  <div class="app-styles">
    <div v-for="fontSize in 80">
      <div v-if="fontSize % 8 == 0 && fontSize >= 10">
        <div :class="`font-size-${fontSize}`">
          Infopiphany <span class="text-muted">{{ fontSize }}px</span></div
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuideTypographyScale',
}
</script>
