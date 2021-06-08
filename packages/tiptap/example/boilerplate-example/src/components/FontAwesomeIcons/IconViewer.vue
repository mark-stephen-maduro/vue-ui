/* eslint-disable eqeqeq */
<template>
  <div class="content-wrapper">
    <div class="w-75 pt-4 pb-4" style="margin: 0 auto">
      <div class="mb-5">
        <h4>Solid Icons</h4>
        <div class="dropdown-divider"></div>
        <div class="row">
          <div
            v-for="(icon, i) in faSolidIcons"
            :key="i"
            class="mt-1"
            style="width: 64px"
          >
            <div class="d-block d-flex justify-content-center p-2">
              <BaseIcon :key="icon.iconName" :name="icon.iconName" />
            </div>

            <div class="text-center justify-content-center d-flex m-1">
              <code class="flex-fill rounded border">
                <small>{{ icon.iconName }}</small>
              </code>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-5">
        <h4>Regular Icons</h4>
        <div class="dropdown-divider"></div>
        <div class="row">
          <div
            v-for="(icon, i) in faRegularIcons"
            :key="i"
            class="mt-1"
            style="width: 64px"
          >
            <div class="d-block d-flex justify-content-center p-2">
              <BaseIcon :key="icon.iconName" :name="['far', icon.iconName]" />
            </div>

            <div class="text-center justify-content-center d-flex m-1">
              <code class="flex-fill rounded border">
                <small>{{ icon.iconName }}</small>
              </code>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as FontAwesomeIconLibrary from '@components/FontAwesomeIcons/IconLibrary';
export default {
  data() {
    return {
      faSolidIcons: FontAwesomeIconLibrary.FA_SOLID_ICONS,
      faRegularIcons: FontAwesomeIconLibrary.FA_REGULAR_ICONS,
    };
  },
};
</script>
