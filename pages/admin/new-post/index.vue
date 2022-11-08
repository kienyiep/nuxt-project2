<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted" />
      <!-- add prevent to prevent the default to send the http request -->
      <!-- <form @submit.prevent="onSave">
        <AppControlInput v-model="editedPost.author"
          >Author Name</AppControlInput
        >

        <AppControlInput v-model="editedPost.title">Title</AppControlInput>

        <AppControlInput v-model="editedPost.thumbnailLink"
          >Thumbnail Link</AppControlInput
        >

        <AppControlInput control-type="textarea" v-model="editedPost.content"
          >Content</AppControlInput
        >

        <AppButton type="submit">Save</AppButton>

        <AppButton
          type="button"
          style="margin-left: 10px"
          btn-style="cancel"
          @click="onCancel"
          >Cancel</AppButton
        >
      </form> -->
    </section>
  </div>
</template>

<script>
// import AppControlInput from "@/components/UI/AppControlInput";
// import AppButton from "@/components/UI/AppButton";

import AdminPostForm from "@/components/admin/AdminPostForm";
export default {
  middleware: ["check-auth", "auth"],
  layout: "admin",

  components: {
    AdminPostForm,
    // AppControlInput,
    // AppButton,
  },
  methods: {
    onSubmitted(postData) {
      // this.$axios
      //   .post(
      //     "https://nuxt-app-592d4-default-rtdb.asia-southeast1.firebasedatabase.app/post.json",
      //     { ...postData, updatedDate: new Date() }
      //   )
      //   .then((result) => {
      //     this.$router.push("/admin");
      //   })
      //   .catch((e) => console.log(e));

      this.$store.dispatch("addPost", postData).then(() => {
        this.$router.push("/admin");
      });
    },
  },
  // data() {
  //   return {
  //     editedPost: {
  //       author: "",
  //       title: "",
  //       thumbnailLink: "",
  //       content: "",
  //     },
  //   };
  // },
  // methods: {
  //   onSave() {
  //     // save the post
  //     console.log(this.editedPost);
  //   },
  //   onCancel() {
  //     // navigate back
  //     this.$router.push("/admin");
  //   },
  // },
};
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
