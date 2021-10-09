<template>
  <div id="test">
    <div>
      <router-link to="/test">Test</router-link> <br />
      <router-link to="/about">About</router-link> <br />
      <router-link to="/home">Home</router-link> <br />
    </div>
    <ul>
      <li>
        <router-link to="/test/1">Test1</router-link>
      </li>
      <li>
        <router-link to="/test/2">Test2</router-link>
      </li>
      <li>
        <router-link to="/test/3">Test3</router-link>
      </li>
    </ul>
    <div>
      <router-view style="color: pink" ></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style scoped>
#test {
  position: absolute;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
}

</style>
