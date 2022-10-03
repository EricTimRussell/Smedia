<template>
  <header>
  </header>
  <main>
    <router-view />
  </main>
  <footer>
    <micks-stuff />
  </footer>
</template>
<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import MicksStuff from "./components/Mycomponents/MicksStuff.vue";



export default {
  setup() {
    return {
      appState: computed(() => AppState),
    };
  },
  components: { MicksStuff }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";
</style>
