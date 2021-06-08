<template>
  <li>
    <slot>
      <a v-bind="{ ...link }" :class="$style['application-dropdown--link']">
        <span :class="$style['application-dropdown--title']">
          <span :class="$style.icon">
            <img v-if="customIcon" :src="app.file.fd" alt="" />
            <AppsIcon v-else :name="app.file.filename" size="sm" />
          </span>
          {{ app.app_name }}
          <b-badge v-if="app.isNew" variant="warning" pill>New</b-badge>
        </span>
        <div :class="$style['application-dropdown--title--sub']">{{
          app.app_description
        }}</div>
      </a>
    </slot>
  </li>
</template>

<script>
import AppsIcon from './icons/AppsGlobalMenuIcons.vue'
export default {
  name: 'IpyAppMenuItem',
  components: { AppsIcon },
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

<style lang="scss" module>
@import './style.scss';
li {
  &:hover a .application-dropdown--title > .icon {
    @extend %hover;
  }
}

.application-dropdown {
  &--link {
    @extend %link;
  }

  &--title {
    @extend %title;

    .icon {
      @extend %icon;
    }

    &--sub {
      @extend %sub;
    }
  }
}
</style>
