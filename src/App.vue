<template>
  <div id="app">
    <div class="logo flex" v-if="showLogo" v-on:click="showLogo = !showLogo">
      <i class="fas fa-random fa-2x box"></i>
      <h1 class="logo-title"> shuffle<span class="title-rose">songs</span></h1>
    </div>
    <div v-else>
      <SuperiorBar/>
      <SongList />
    </div>
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
      showLogo: true
    }
  }
}
</script>

<style>
html {
  background-image: linear-gradient(to bottom, #372638 75%, #844253);
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  height: 100vh;
  display: flex;
  justify-content: center;
}

.logo {
  cursor: pointer;
}

.logo .title-rose{
  color: #bb6075;
}

.flex {
  display: flex;
  justify-content: center;
}

.flex *{
  align-self: center;
}

.box {
  padding: 4px;
  border-radius: 10px;
  border: 1px solid #bb6075;
}

.flex h1 {
  font-size: 1.75em;
}

.flex .logo-title {
  margin-left: 5px;
}
</style>
