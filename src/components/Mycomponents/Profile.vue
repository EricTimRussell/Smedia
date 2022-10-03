<template>
  <div class="p-5">
    <router-link :to=" {name: 'ProfileInfo' , params: {id: profile.id}}">
      <img :src="profile.picture">
    </router-link>
    <h6 class="mdi mdi-school text-end" v-if="profile.graduated">{{profile.graduated}}</h6>
  </div>
  <div class="px-2">
    <h4>{{profile.name}}</h4>
  </div>
  <div class="px-2">
    <h4 class="mdi mdi-github selectable">{{profile.github}}</h4>
    <h4 class="mdi mdi-linkedin selectable">{{profile.linkedin}}</h4>
    <h4 class="mdi mdi-file-document selectable">{{profile.resume}}</h4>
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

</style>