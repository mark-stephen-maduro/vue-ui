<template>
  <!-- don't forget change viewBox and fill params -->
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" :height="height" viewBox="0 0 24 24">
    <!-- begin -->

    <g fill="currentColor">
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M19 14a5 5 0 110 10 5 5 0 010-10zm-2.5 5.938h5a.937.937 0 100-1.875h-5a.937.937 0 100 1.875zM12.29 17H9v5h3.674c.356.75.841 1.426 1.427 2H5a5 5 0 01-5-5V5a5 5 0 015-5h14a5 5 0 015 5v2.823a.843.843 0 010 .354V14.1a7.018 7.018 0 00-2-1.427V9h-5v3.29a6.972 6.972 0 00-2 .965V9H9v6h4.255a6.972 6.972 0 00-.965 2zM17 7h5V5a3 3 0 00-3-3h-2v5zm-2 0V2H9v5h6zM7 2H5a3 3 0 00-3 3v2h5V2zM2 9v6h5V9H2zm0 8v2a3 3 0 003 3h2v-5H2z"
      />
    </g>

    <!-- end -->
  </svg>
</template>

<script>
export default {
  props: {
    width: { type: String, default: '1rem' },
    height: { type: String, default: '1rem' },
  },
};
</script>
