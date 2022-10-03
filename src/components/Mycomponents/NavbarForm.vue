<template>
  <div>
    <router-link :to="{name: 'Home'}">
      <img class=" logo" src="//thiscatdoesnotexist.com" alt="">
    </router-link>
  </div>
  <form @submit.prevent="handleSubmit">
    <div class="form-floating mb-3 d-flex navbar">
      <input type="search" class="form-control" required="true" minlength="1" maxlength="20" placeholder="find people"
        v-model="editable.term">
      <label for="floatingInput">Search...</label>
      <button type="submit" class="btn btn-secondary">Search</button>
    </div>
  </form>
</template>


<script>

import { ref } from "vue";
import { postService } from "../../services/MyServices/PostsService";
import Pop from "../../utils/Pop";


export default {
  setup() {
    const editable = ref({})

    return {
      editable,
      async handleSubmit() {
        try {
          await postService.searchPosts(editable.value.term)
        } catch (error) {
          Pop.error(error, "SearchForm")
        }
      }

    }
  }
}
</script>


<style lang="scss" scoped>
.logo {
  max-height: 5rem;
  margin: 2rem;
}

.navbar {
  min-height: 6rem;
}
</style>