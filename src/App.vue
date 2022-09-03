<template>
  <div id="app">
    <registration />
  </div>
</template>

<script>
import registration from "./views/registration.vue";
export default {
  components: { registration },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
