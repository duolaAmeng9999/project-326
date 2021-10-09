<template>
  <div>route-about</div>
</template>

<script>
export default {
  name: "About",
  /* mounted() {
    console.log("About");
  } */
   beforeRouteEnter (to, from, next) {
    console.log("beforeRouteEnter");
    next();
  },
  beforeRouteLeave (to, from, next) {
    console.log("beforeRouteLeave");
    next();
  }
}
</script>

<style>

</style>