<template>
  <div id="app">
    <img src="./assets/Mars_RhoOphiuchi_2016-08-26.jpg">
    <vue-particles
      color="#ffffff"
      :particleOpacity="0.7"
      linesColor="#ffffff"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="5"
      :linesWidth="2"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>

    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
