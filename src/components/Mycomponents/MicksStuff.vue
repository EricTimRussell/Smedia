<template>
  <div class="col-md-2 p-2">
    <img :src="mick[0]?.tall" class="img-fluid ">
    <img :src="mick[1]?.tall" class="img-fluid my-2">
  </div>
</template>


<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../../AppState"
import { postService } from "../../services/MyServices/PostsService"
import Pop from "../../utils/Pop"

export default {
  setup() {
    async function getAds() {
      try {
        await postService.getAds()
      } catch (error) {
        Pop.error(error, "Getting Ads")
      }
    }
    getAds()
    return {
      mick: computed(() => AppState.ads),
    }
  }
}

</script>


<style lang="scss" scoped>

</style>