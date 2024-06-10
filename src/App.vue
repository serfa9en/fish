<template>
  <div>
    <Authorization/>
    <MainPage/>
  </div>
</template>

<script>
import Authorization from './components/Authorization.vue'
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',
  components: {
    Authorization,
    MainPage
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap');
@import url('main.css');
#app {
  font-family: "Comfortaa", sans-serif;
  font-optical-sizing: auto;
  text-align: center;
  color: #2c3e50;
}
</style>
