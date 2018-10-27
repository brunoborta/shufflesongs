<template>
  <div id="app">
    <Logo v-if="showLogo" @click.native="showLogo = !showLogo"/>
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
import Logo from './components/Logo.vue';

export default {
  name: 'app',
  components: {
    SuperiorBar,
    SongList,
    Logo
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
</style>
