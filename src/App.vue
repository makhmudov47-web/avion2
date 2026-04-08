<template>
  <div id="app">
    <TopNavBar />
    <router-view />
  </div>
</template>

<script>
import TopNavBar from "./components/TopNavBar.vue";

export default {
  components: {
    TopNavBar,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: "Satoshi", sans-serif;
  color: #2a254b;
  background-color: #ffffff;
}
</style>
