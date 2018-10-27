<template>
  <div id="app">
    <div class="logo flex" v-if="showLogo" @click="showLogo = !showLogo">
      <i class="fas fa-random fa-2x box"></i>
      <h2 class="logo-title"> shuffle<span class="title-rose">songs</span></h2>
    </div>
    <div v-else>
      <SuperiorBar/>
      <div class="flex section-height">
        <SongList />
      </div>
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
  overflow-y: hidden;
  display: flex;
  justify-content: center;
}

#app > .logo {
  cursor: pointer;
}

.title-rose{
  color: #bb6075;
}

.flex {
  display: flex;
  justify-content: center;
}
.section-height {
  height: 80%;
}
.flex > * {
  align-self: center;
}

.box {
  padding: 6px;
  border-radius: 5px;
  border: 1px solid #bb6075;
}

.flex h2 {
  font-size: 1.75em;
}

.flex .logo-title {
  margin-left: 10px;
}
</style>
