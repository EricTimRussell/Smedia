<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2 bg-secondary sidebar">
        <div>
          <Login />
        </div>
        <Profile v-if="profile.id" :key="profile.id" />
      </div>
      <div class="col-md-10 navbar bg-primary justify-content-between">
        <NavbarForm />
        <div class="col-md-10 p-5" v-if="profile">
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

        </div>
        <div class="col-md-10 p-5">
          <CreatePost />
        </div>
        <div class="col-md-9 m-5" v-if="profile">
          <PostCard v-for="p in posts" :key="p.id" :post="p" :profile="profile" class="my-5"
            @deletePost="deletePost()" />
        </div>
        <div class="col-md-9 text-center">
          <button @click="changePage(previousPage)" class="btn btn-primary">PreviousPosts</button>
          <button @click="changePage(nextPage)" class="btn btn-primary">MorePosts</button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { postService } from "../services/MyServices/PostsService"
import Pop from "../utils/Pop"
import { useRoute } from "vue-router"
import { onMounted, reactive } from "vue"
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import CreatePost from "../components/Mycomponents/CreatePost.vue"
import NavbarForm from "../components/Mycomponents/NavbarForm.vue"
import Profile from "../components/Mycomponents/Profile.vue"
import Login from "../components/Login.vue"
import PostCard from "../components/Mycomponents/PostCard.vue"
import ProfileDetail from "../components/Mycomponents/ProfileDetail.vue"


export default {
  setup() {
    const route = useRoute();
    const state = reactive({
      profile: computed(() =>
        AppState.activeProfile)
    })
    async function getProfileById() {
      try {
        await postService.getProfileById(route.params.id);
      }
      catch (error) {
        Pop.error(error, "getting profile");
      }
    }

    onMounted(() => {
      getProfileById(route.params.id)
      // postService.getPosts()
      postService.getPostsById(route.params.id)
    });
    return {
      state,
      account: computed(() => AppState.account),
      profile: computed(() => AppState.activeProfile),
      posts: computed(() => AppState.posts),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),

      async getPostsById(id) {
        try {
          await postService.getPostsById(id)
        } catch (error) {
          Pop.error(error, "Post by Id")
        }
      },
      async changePage(pageUrl) {
        try {
          await postService.changePage(pageUrl)
        } catch (error) {
          Pop.error(error, "PageChange")
        }
      },
    };
  },
  components: { CreatePost, NavbarForm, Profile, Login, PostCard, ProfileDetail }
}
</script>


<style lang="scss" scoped>
.sidebar {
  min-height: 100vh;
}

.navbar {
  max-height: 15vh;
}

.cardshadow {
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.541);
}

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
</style>