<template>
  <InfopiphanyBreadcrumb :items="breadcrumbItems">
    <template slot="caret">
      <BaseIcon name="angle-right" style="width:12px; height:12px;" />
    </template>
  </InfopiphanyBreadcrumb>
</template>

<script>
export default {
  data() {
    return {
      breadcrumbItems: [
        {
          text: 'aaa',
          href: '#',
        },
        {
          text: 'bbb',
          href: '#',
        },
        {
          text: 'ccc',
          href: '#',
        },
        {
          text: 'ddd',
          href: '#',
        },
        {
          text: 'eee',
          href: '#',
        },
        {
          text: 'fff',
          href: '#',
        },
      ],
    };
  },
};
</script>
