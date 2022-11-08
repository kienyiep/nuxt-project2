<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPosts" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  middleware: ["check-auth", "auth"],
  layout: "admin",
  components: {
    AdminPostForm,
  },

  async asyncData({ params, $axios }) {
    const res = await $axios.get(
      process.env.baseUrl + "/post/" + params.postId + ".json"
    );
    console.log(params.postId);
    return { loadedPosts: { ...res.data, id: params.postId } };
  },

  methods: {
    onSubmitted(editedPost) {
      // this.$axios
      //   .put(
      //     "https://nuxt-app-592d4-default-rtdb.asia-southeast1.firebasedatabase.app/post/" +
      //       this.$route.params.postId +
      //       ".json",
      //     editedPost
      //   )
      //   .then((res) => this.$router.push("/admin"))
      //   .catch((e) => console.log(e));
      this.$store.dispatch("editPosts", editedPost).then(() => {
        this.$router.push("/admin");
      });
    },
  },

  // data() {
  //   return {
  //     loadedPost: {
  //       author: "Maximilian",
  //       title: "My awesome Post",
  //       content: "Super amazing, thanks for that!",
  //       thumbnailLink:
  //         "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg",
  //     },
  //   };
  // },
};
</script>

<style>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
