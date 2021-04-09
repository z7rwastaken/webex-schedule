<template>
  <div id="app">
    <Homepage/>
  </div>
</template>

<script>
import Homepage from "./views/Homepage"

export default {
  components: { Homepage }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.title {
  color: #7289DA;
}

* {
  background-color: #2C2F33;

  padding: 0;
  margin: 0;
}
</style>
