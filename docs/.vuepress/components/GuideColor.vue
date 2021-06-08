<template>
  <div class="app-styles">
    <div class="communication d-flex flex-sm-column flex-md-column flex-lg-row">
      <div>
        <h4>Communication over decoration</h4>
        <p>
          Although we value an aesthetically pleasing use of color, we place a
          higher value on clear communication. Our use of color should be
          purposeful, rational, and should serve to support the purpose of the
          content.
        </p>
      </div>

      <div class="w-100">
        <div class="color-sample-1"> Communicate using colors</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GuideColor',
}
</script>

<style scoped lang="scss">
/* import utility mixins/font-size
  @include font-size-10;
*/
.color-sample-1 {
  background: linear-gradient(110deg, #fdcd3b 60%, #ffed4b 60%);
  height: 150px;
  border-radius: 5px;

  text-align: left;
  font-weight: bold;
  font-size: 1.3rem;
  padding: 55px;
}

@media only screen and (max-width: 575px) {
  .communication {
    flex-direction: column;
  }
}
</style>
