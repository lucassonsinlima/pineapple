<template>
  <div id="app">
    <link rel="stylesheet"
    href="//fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons">

    <AppContainer />
  </div>
</template>

<script>
import AppContainer from './components/AppContainer/AppContainer'

export default {
  name: 'app',
  components: {
    AppContainer
  }
}

</script>

<style lang="scss">

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
