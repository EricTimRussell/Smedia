<template>
  <div class="p-5">
    <router-link v-if="profile.id" :to=" {name: 'ProfileInfo' , params: {id: profile.id}}">
      <img :src="profile.picture" class="profilepic">
    </router-link>
  </div>
  <div class="px-3 py-1">
    <h4 class="mdi mdi-school" v-if="profile.graduated">{{profile.name}}-{{profile.class}}</h4>
  </div>
  <div class="px-3 d-flex flex-column">
    <a :href="profile.github" class="mdi mdi-github selectable fs-1 github" v-if="profile.github">Github</a>
    <a :href="profile.linkedin" class="mdi mdi-linkedin selectable fs-1 linkedin my-2"
      v-if="profile.linkedin">Linkedin</a>
    <a :href="profile.resume" class="mdi mdi-file-document selectable fs-1 resume" v-if="profile.resume">Resume</a>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../../AppState";



export default {

  setup() {


    return {
      profile: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
.profilepic {
  border-radius: 50%;
  min-width: 20vh;
}

.github {
  color: black;
}

.linkedin {
  color: lightblue;
}

.resume {
  color: lightcyan;
}
</style>