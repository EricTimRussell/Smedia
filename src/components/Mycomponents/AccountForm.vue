<template>
  <form class="card account-form" @submit.prevent="handleSubmit">
    <div class="card-body text-start p-5">
      <div>
        <label for="name">Name:</label>
        <input type="text" class="form-control" v-model="editable.name" required name="name">
      </div>
      <div class="py-2">
        <label for="email">Email:</label>
        <input type="text" class="form-control" v-model="editable.email" required name="email">
      </div>
      <div>
        <label for="picture">Picture:</label>
        <input type="url" class="form-control" v-model="editable.picture" required name="picture" placeholder="picture">
      </div>
      <div class="py-2">
        <label for="coverImg">Cover Image:</label>
        <input type="url" class="form-control" v-model="editable.coverImg" required name="coverImg">
      </div>
      <div>
        <label for="bio">Bio:</label>
        <textarea type="text" class="form-control" v-model="editable.bio" name="bio" rows="8"
          style="resize:none"></textarea>
      </div>
      <div class="py-2">
        <label for="class">Class</label>
        <input type="text" class="form-control" v-model="editable.class" required name="class">
      </div>
      <div>
        <label for="graduated">Graduated</label>
        <input class="form-check-input mt-0" type="checkbox" v-model="editable.graduated">
      </div>
      <div class="py-2">
        <label for="github">Github:</label>
        <input type="url" class="form-control" v-model="editable.github" name="github">
      </div>
      <div>
        <label for="linkedin">Linkedin:</label>
        <input type="url" class="form-control" v-model="editable.linkedin" name="linkedin">
      </div>
      <div class="py-2">
        <label for="resume">resume</label>
        <input type="url" class="form-control" v-model="editable.resume" name="resume">
      </div>
      <div class="d-flex justify-content-between">
        <router-link :to="{name: 'Home'}">
          <i class="mdi mdi-home fs-1 selectable"></i>
        </router-link>
        <button type="submit" class="btn btn-primary mt-2">Save</button>
      </div>
    </div>
  </form>
</template>

<script>
import { ref, watchEffect } from "vue";
import { AppState } from "../../AppState";
import { accountService } from "../../services/AccountService";

export default {
  setup() {
    const editable = ref({})
    watchEffect(() => {
      editable.value = { ...AppState.account }
    })
    return {
      editable,
      async handleSubmit() {
        try {
          await accountService.editAccount(editable.value)
        } catch (error) {
          Pop.error(error, "editing account")
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>