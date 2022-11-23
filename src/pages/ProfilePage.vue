<template>

  <body>

    <div class="container-fluid">
      <div class="row">
        <div class="col-md-2 sidebar">
          <div>
            <Login />
          </div>
          <div @click="getloggedInUser()">
            <Profile v-if="profile.id" :key="profile.id" />
          </div>
        </div>
        <div class="col-md-10 navbar bg-primary justify-content-between">
          <router-link :to="{ name: 'Home' }">
            <img class="logo" src="../assets/img/Network.png" alt="Network Logo">
          </router-link>
          <NavbarForm />
          <div class="col-md-10 p-5 profile-card" v-if="profile">
            <div class="card cardshadow">
              <img :src="profile.coverImg" class="covimg">
              <div class="p-3">
                <img class="profileimg" :src="profile.picture" alt="">
                <h6 class="bio">{{ profile.bio }}</h6>
                <h4 v-if="profile.graduated" class="mdi mdi-school fs-2">{{ profile.class }}</h4>
              </div>
              <div class="card-body">
                <a :href="profile.github" class="mdi mdi-github selectable fs-1 github" v-if="profile.github"></a>
                <a :href="profile.linkedin" class="mdi mdi-linkedin selectable fs-1 linkedin px-4"
                  v-if="profile.linkedin"></a>
                <a :href="profile.resume" class="mdi mdi-file-document selectable fs-1 resume"
                  v-if="profile.resume"></a>
                <div>
                  <h1>{{ profile.name }}</h1>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-2">
            <MicksStuff class="ads" />
          </div>
          <div class="col-md-10 p-5 neg-m">
            <CreatePost />
          </div>
          <div class="col-md-9 mx-5 my-1" v-if="profile">
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

  </body>
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
import MicksStuff from "../components/Mycomponents/MicksStuff.vue"


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

      getloggedInUser() {
        window.location.reload()
      },

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
          window.scrollTo(0, 0)
        } catch (error) {
          Pop.error(error, "PageChange")
        }
      },
    };
  },
  components: { CreatePost, NavbarForm, Profile, Login, PostCard, ProfileDetail, MicksStuff }
}
</script>


<style lang="scss" scoped>
.neg-m {
  margin-top: -6rem;
}

.profile-card {
  margin-top: -5rem;
}

.logo {
  max-height: 5rem;
  margin: 2rem;
}

.sidebar {
  min-height: 100vh;
  background-color: white;
}

.navbar {
  height: 15vh;
  background-image: linear-gradient(to right, #8efdff, whitesmoke)
}

.cardshadow {
  box-shadow: 2px 2px 5px #0000008a;
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

.covimg {
  max-height: 25vh;
  object-fit: cover;
}

.github {
  color: black;
}

.linkedin {
  color: #2ec8fc;
}

.resume {
  color: #819797;
}

.bio {
  max-width: 70vh;
  margin-left: 22rem;
}

.ads {
  min-width: 22vh;
}
</style>