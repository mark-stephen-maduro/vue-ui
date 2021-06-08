<template>
  <li>
    <slot>
      <a v-bind="{ ...link }" class="application-dropdown--link">
        <span class="application-dropdown--title">
          <span class="icon">
            <img v-if="customIcon" :src="app.file.fd" alt="" />
            <BaseIcon v-else :name="app.file.filename" size="sm" />
          </span>
          {{ app.app_name }}
          <b-badge v-if="app.isNew" variant="warning" pill>New</b-badge>
        </span>
        <div class="application-dropdown--title--sub text-muted">{{
          app.app_description
        }}</div>
      </a>
    </slot>
  </li>
</template>

<script>
import BaseIcon from '../base-icon/base-icon.vue'
export default {
  components: { BaseIcon },
  props: {
    app: {
      type: Object,
      required: true,
    },
    customIcon: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    link() {
      return typeof this.app.app_link === 'object'
        ? { to: this.app.app_link }
        : { href: this.app.app_link }
    },
  },
}
</script>

<style></style>
