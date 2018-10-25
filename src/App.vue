<template>
  <div id="app">
    <transition name="fade">
      <SuperiorBar v-if="showBar"/>
    </transition>
    <img alt="shufflesongs logo" src="./assets/logo.png">
    <div class="presentation">
      <h1>shufflesongs</h1>
    </div>
    <SongList />
  </div>
</template>

<script>
import SongList from './components/SongList.vue';
import SuperiorBar from './components/SuperiorBar.vue';

export default {
  name: 'app',
  components: {
    SuperiorBar,
    SongList
  },
  data() {
    return {
      showBar: false
    }
  }
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
