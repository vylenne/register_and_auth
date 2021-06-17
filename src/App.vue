<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.m-0 {
  margin: 0 !important;
}

.mb-16 {
  margin-bottom: 16px !important;
}

.mt-24 {
  margin-top: 24px !important;
}

.vs-notification__content {
  font-family: Avenir, Helvetica, Arial, sans-serif!important;
}
</style>
