<script>
import { BBreadcrumb } from 'bootstrap-vue/src/components/breadcrumb/breadcrumb';
import { BBreadcrumbItem } from 'bootstrap-vue/src/components/breadcrumb/breadcrumb-item';

export default {
  components: {
    BBreadcrumb,
    BBreadcrumbItem,
  },
  inheritAttrs: false,
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [{ text: '', href: '' }],
      validator: (links) =>
        links.every((link) => Object.keys(link).includes('text', 'href')),
    },
  },
};
</script>
<template>
  <div class="gl-breadcrumbs">
    <b-breadcrumb class="gl-breadcrumb-list" v-bind="$attrs" v-on="$listeners">
      <slot name="avatar"></slot>
      <template v-for="(item, index) in items">
        <b-breadcrumb-item :key="`br-${index}`" :text="item.text" :href="item.href" />
        <span
          v-if="index != items.length - 1 && $slots['caret']"
          :key="`index-${item.index}`"
          class="gl-breadcrumb-separator"
        >
          <slot name="caret"></slot>
        </span>
      </template>
    </b-breadcrumb>
  </div>
</template>
