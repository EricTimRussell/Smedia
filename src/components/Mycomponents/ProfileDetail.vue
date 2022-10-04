<template>
  <div class="card cardshadow">
    <img :src="profile.coverImg" class="covimg">
    <div class="px-4 card-body">
      <img class="profileimg p-3" :src="profile.picture"><span v-if="profile.graduated"
        class="mdi mdi-school fs-2"></span>
      <h4 class="px-2">{{profile.class}}</h4>
      <div class="px-2">
        <a :href="profile.github" class="mdi mdi-github selectable fs-1 github" v-if="profile.github"></a>
        <a :href="profile.linkedin" class="mdi mdi-linkedin selectable fs-1 linkedin my-2" v-if="profile.linkedin"></a>
        <a :href="profile.resume" class="mdi mdi-file-document selectable fs-1 resume" v-if="profile.resume"></a>
        <div>
          <h1>{{profile.name}}</h1>
        </div>
        <div>
          <p>{{profile.bio}}</p>
        </div>
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

.covimg {
  max-height: 30vh;
  object-fit: cover;
}
</style>