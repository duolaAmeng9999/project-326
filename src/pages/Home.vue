<template>
  <div>route-Home</div>
</template>

<script>
export default {
  naem: "Home",
  /* mounted() {
    console.log("Home");
  } */
  beforeRouteEnter (to, from, next) {
    console.log("beforeRouteEnter");
    next();
  },
  beforeRouteLeave (to, from, next) {
    console.log("beforeRouteLeave");
    next();
  }
};
</script>

<style>
</style>