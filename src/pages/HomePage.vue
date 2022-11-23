<template>
  <div class="container-fluid home-bg">
    <div class="row">
      <div class="col-md-2 sidebar elevation-3">
        <Login />
        <Profile v-if="profile.id" />
      </div>
      <div class="col-md-10 justify-content-between navbar">
        <router-link :to="{ name: 'Home' }">
          <img class="logo" src="../assets/img/Network.png" alt="Network Logo">
        </router-link>
        <NavbarForm />
        <div class="col-md-10 px-5">
          <CreatePost class="position" />
        </div>
        <div class="col-md-2 ">
          <micks-stuff class="ads" />
        </div>
        <div class="col-md-9 mx-5 position-post">
          <PostCard v-for="p in posts" :key="p.id" :post="p" class="my-5" @deletePost="deletePost(p.id)" />
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
import { onMounted } from "vue";
import NavbarForm from "../components/Mycomponents/NavbarForm.vue";
import { postService } from "../services/MyServices/PostsService";
import Pop from "../utils/Pop";
import Navbar from "../components/Navbar.vue";
import Login from "../components/Login.vue";
import Profile from "../components/Mycomponents/Profile.vue";
import CreatePost from "../components/Mycomponents/CreatePost.vue";
import PostCard from "../components/Mycomponents/PostCard.vue";
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import MicksStuff from "../components/Mycomponents/MicksStuff.vue";
export default {
  setup() {

    async function getPosts() {
      try {
        await postService.getPosts()
      } catch (error) {
        Pop.error(error, "Getting Posts")
      }
    }

    onMounted(() => {
      getPosts()

    })
    return {
      posts: computed(() => AppState.posts),
      nextPage: computed(() => AppState.nextPage),
      previousPage: computed(() => AppState.previousPage),
      likes: computed(() => AppState.likes),
      mick: computed(() => AppState.ads),
      profile: computed(() => AppState.account),

      async changePage(pageUrl) {
        try {
          if (!AppState.term) {
            await postService.changePage(pageUrl)
          } else {
            await postService.searchPosts(AppState.term)
          }
          window.scrollTo(0, 0)
        } catch (error) {
          Pop.error(error, "PageChange")
        }
      },
      async deletePost(id) {
        try {
          const yes = await Pop.confirm("Delete Post?")
          if (!yes) { return }
          await postService.deletePost(id)
        } catch (error) {
          Pop.error(error, "delete post")
        }
      },
    };
  },
  components: { NavbarForm, Navbar, Login, Profile, CreatePost, PostCard, MicksStuff }
}

</script>

<style scoped lang="scss">
.logo {
  max-height: 5rem;
  margin: 2rem;
}

.position {
  position: relative;
  bottom: 5rem;
}

.position-post {
  position: relative;
  top: -12rem;
}

.home-bg {
  background-color: whitesmoke;
}

.sidebar {
  min-height: 100vh;
  background-color: white;
}

.navbar {
  height: 15vh;
  background-image: linear-gradient(to right, #8efdff, whitesmoke)
}

.ads {
  min-width: 22vh;
}
</style>
