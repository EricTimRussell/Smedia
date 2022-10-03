<template>
  <div class="card cardshadow">
    <img :src="profile.coverImg" alt="">
    <img class="profileimg" :src="profile.picture" alt=""><span v-if="profile.graduated"
      class="mdi mdi-school">{{profile.graduated}}</span>
    <h4>{{profile.class}}</h4>
    <div class="card-body">
      <span class="mdi mdi-github fs-1">{{profile.github}}</span>
      <span class="mdi mdi-linkedin fs-1">{{profile.linkedin}}</span>
      <span class="mdi mdi-file-document fs-1">{{profile.resume}}</span>
      <div>
        <h2>{{profile.class}}</h2>
        <h1>{{profile.name}}</h1>
      </div>
      <div>
        <p>{{profile.bio}}</p>
      </div>
    </div>
  </div>

</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../../AppState";



export default {
  props: ['profile'],
  setup() {

    return {
      profile: computed(() => AppState.account),

    }
  }
}
</script>


<style lang="scss" scoped>
.postimg {
  max-height: 40vh;
  max-width: 40vh;
  margin: 1rem;
}

.profileimg {
  max-height: 20vh;
  max-width: 20vh;
  border-radius: 50%;
}

.cardshadow {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.541);
}
</style>