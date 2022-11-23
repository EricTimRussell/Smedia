<template>
  <form @submit.prevent="handleSubmit">
    <div class="form-floating d-flex px-2 mx-5 justify-content-end">
      <input type="search" class="form-control" required="true" minlength="1" maxlength="20" placeholder="find people"
        v-model="editable.term">
      <label for="floatingInput">Search...</label>
      <button type="submit" class="btn btn-light mdi mdi-magnify fs-3"></button>
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
.navbar {
  min-height: 4rem;
}
</style>