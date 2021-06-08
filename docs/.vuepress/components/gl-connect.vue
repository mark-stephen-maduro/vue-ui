<template>
  <div>Connect</div>

</template>
<script>
export default {
  created() {
    const params = window.location.search;
    if (window.opener) {
      // send them to the opening window
      window.opener.postMessage(params);

      // close the popup
      window.close();
    }
  },
}
</script>
