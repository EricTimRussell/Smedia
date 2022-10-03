<template>
  <div class="container-fluid">
    <div class="row">
      <div class="about text-center">
        <ProfileDetail />
      </div>
      <AccountForm />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import AccountForm from "../components/Mycomponents/AccountForm.vue";
import ProfileDetail from "../components/Mycomponents/ProfileDetail.vue";
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
  components: { AccountForm, ProfileDetail }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
