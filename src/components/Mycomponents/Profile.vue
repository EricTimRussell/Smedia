<template>
  <div class="p-5 text-end">
    <router-link v-if="profile.id" :to="{ name: 'ProfileInfo', params: { id: profile.id } }">
      <img :src="profile.picture" class="profilepic">
    </router-link>
    <span class="graduated mdi mdi-account-school fs-2" title="Graduated" v-if="profile.graduated"></span>
  </div>
  <div class="px-3 py-1">
    <h5>{{ profile.class }}</h5>
    <h5 class="fs-2">{{ profile.name }}</h5>
  </div>
  <div class="px-3 d-flex flex-column gap-2">
    <a :href="profile.github" class="mdi mdi-github selectable fs-1 github" v-if="profile.github"><span
        class="fs-4">Github</span></a>
    <a :href="profile.linkedin" class="mdi mdi-linkedin selectable fs-1 linkedin my-2" v-if="profile.linkedin"><span
        class="fs-4">Linkedin</span></a>
    <a :href="profile.resume" class="mdi mdi-file-document selectable fs-1 resume" v-if="profile.resume"><span
        class="fs-4">Resume</span></a>
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
.graduated {
  border: 2px solid #00abab;
  background-color: white;
  padding: .4rem;
  border-radius: 50%;
  position: relative;
  top: -3.5rem;
  right: 1rem;
}

.profilepic {
  border-radius: 50%;
  width: 20vh;
}

.github {
  color: black;
}

.linkedin {
  color: black;
}

.resume {
  color: black;
}
</style>