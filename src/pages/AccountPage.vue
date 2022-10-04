<template>
  <div class="container-fluid">
    <div class="row profile">
      <ProfileDetail />
      <AccountForm />
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import AccountForm from "../components/Mycomponents/AccountForm.vue";
import ProfileDetail from "../components/Mycomponents/ProfileDetail.vue";
import NavbarForm from "../components/Mycomponents/NavbarForm.vue";
export default {
  setup() {
    return {
      account: computed(() => AppState.account)
    };
  },
  components: { AccountForm, ProfileDetail, NavbarForm }
}
</script>

<style scoped>

</style>
