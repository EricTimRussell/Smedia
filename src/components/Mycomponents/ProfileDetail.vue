<template>
  <div class="card cardshadow">
    <img :src="profile.coverImg" class="covimg">
    <router-link :to="{ name: 'Home' }">
      <i class="mdi mdi-home fs-1 selectable home"></i>
    </router-link>
    <div class="card-body content-position">
      <div class="d-flex">
        <button type="button" title="Edit Account" class="btn mdi mdi-cog edit-a fs-5 text-light" data-bs-toggle="modal"
          data-bs-target="#exampleModal">
        </button>
        <img class="profileimg p-3" :src="profile.picture"><span v-if="profile.graduated"
          class="mdi mdi-school fs-5 graduated" title="Graduated"></span>
      </div>
      <div class="d-flex justify-content-end social-links">
        <a :href="profile.github" class="mdi mdi-github selectable fs-1 github" v-if="profile.github"></a>
        <a :href="profile.linkedin" class="mdi mdi-linkedin selectable fs-1 linkedin" v-if="profile.linkedin"></a>
        <a :href="profile.resume" class="mdi mdi-file-document selectable fs-1 resume" v-if="profile.resume"></a>
      </div>
      <div class="px-2 details-position">
        <h4>{{ profile.class }}</h4>
        <div>
          <h1>{{ profile.name }}</h1>
        </div>
        <div>
          <p class="fs-4"><em>{{ profile.bio }}</em></p>
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
.social-links {
  position: relative;
  bottom: 15rem;
}

.details-position {
  position: relative;
  bottom: 8rem;
}

.content-position {
  position: relative;
  bottom: 4rem;
}

.home {
  position: relative;
  bottom: 24rem;
  left: 1rem;
  color: white;
  text-shadow: black 2px 2px;
}

.home:hover {
  color: blue;
}

.graduated {
  position: relative;
  right: 4rem;
  z-index: 1;
}

.edit-a {
  position: relative;
  left: 5rem;
  bottom: 11rem;
  z-index: 1;
}

.postimg {
  max-height: 40vh;
  max-width: 40vh;
  margin: 1rem;
}

.profileimg {
  height: 25vh;
  border-radius: 50%;
  position: relative;
  bottom: 8.5rem;
}

.cardshadow {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.541);
}

.covimg {
  max-height: 40vh;
  object-fit: cover;
}
</style>