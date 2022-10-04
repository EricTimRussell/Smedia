<template>

  <form @submit.prevent="handleSubmit">
    <div class="bg-img" :style="{backgroundImage: `url(${profile.coverImg})`}">
      <img :src="profile.picture" class="profileimg m-1">
      <div class="form-floating mb-3 d-flex">
        <textarea class="form-control" required minlength="1" maxlength="250" placeholder="post thoughts"
          v-model="editable.body" style="height: 100px"></textarea>
        <label for="floatingTextArea">Whats on your mind?</label>
      </div>
      <div class="form-floating">
        <label for="imgUrl">ImgUrl:</label>
        <input type="url" v-model="editable.imgUrl" placeholder="Post img" class="form-control">
      </div>
      <div class="d-flex justify-content-end">
        <button type="submit" class="btn btn-info">Post</button>
      </div>
    </div>
  </form>

</template>


<script>
import { computed } from "@vue/reactivity"
import { onMounted, ref } from "vue"
import { AppState } from "../../AppState"
import { postService } from "../../services/MyServices/PostsService"
import Pop from "../../utils/Pop"

export default {
  setup() {
    const editable = ref({})

    return {
      editable,
      async handleSubmit() {
        try {
          await postService.addPost(editable.value)
          editable.value = {
            editable: {}
          }
        } catch (error) {
          Pop.error(error, "PostForm")
        }
      },
      profile: computed(() => AppState.account)
    }
  }
}
</script>


<style lang="scss" scoped>
.profileimg {
  max-height: 68px;
  border-radius: 50%;
}

.bg-img {
  height: 50vh;
  background-position: center;
  padding: 2rem;
  border-radius: 10px;
}
</style>