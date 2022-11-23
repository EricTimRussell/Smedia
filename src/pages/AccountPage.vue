<template>

  <body>

    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <ProfileDetail />
        </div>
      </div>
    </div>

  </body>

  <div class="modal" tabindex="-1" id="editAccount">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Edit Account</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
            title="close modal"></button>
        </div>
        <div class="modal-body">
          <AccountForm />
        </div>
      </div>
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
