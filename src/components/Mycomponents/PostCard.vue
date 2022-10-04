<template>
  <div class="card cardshadow">
    <div class="d-flex justify-content-end p-2">
      <h5 @click.stop="deletePost(post.id)" class="mdi mdi-delete p-1" v-if="profile.id == post.creatorId"></h5>
    </div>
    <div class="d-flex">
      <router-link :to="{name: 'ProfileInfo', params: {id: post.creatorId}}">
        <img class="img-fluid p-3 profileimg" :src="post.creator.picture" alt="">
      </router-link>
      <h4 class="py-3">{{post.creator?.name}}</h4>
    </div>
    <div class="card-body">
      <p><strong>{{post.body}}</strong></p>
    </div>
    <img class="img-fluid postimg" :src="post.imgUrl" alt="">
    <div class="card-footer d-flex">
      <h3 @click="addLike(post.id)" class="mdi mdi-heart-outline px-2 selectable2"></h3>
      <span><strong>{{post.likeIds.length}}</strong></span>
      <p class="px-5">{{post.createdAt}}</p>
    </div>
  </div>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../../AppState";
import { postService } from "../../services/MyServices/PostsService";
import Pop from "../../utils/Pop";
export default {
  props: {
    post: {
      type: Object,
      required: true
    },
  },
  setup(props, { emit }) {
    return {
      profile: computed(() => AppState.account),
      deletePost() {
        emit('deletePost')
      },
      async addLike(id) {
        try {
          await postService.addLike(id)
        } catch (error) {
          Pop.error(error, "adding like")
        }
      },
      account: computed(() => AppState.account),

    };
  },
}
</script>


<style lang="scss" scoped>
.postimg {
  max-height: 40vh;
  max-width: 40vh;
  margin: 1rem;
}

.profileimg {
  max-height: 12vh;
  max-width: 12vh;
  border-radius: 50%;
}

.cardshadow {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.541);
}

.selectable2 {
  cursor: pointer;
}
</style>
