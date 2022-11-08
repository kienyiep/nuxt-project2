<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts" />
    <!-- <section class="post-list">
      <PostPreview
        id="1"
        thumbnail="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg"
        title="Hello there!"
        previewText="This is my first post!"
      />
      <PostPreview
        id="2"
        thumbnail="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg"
        title="Hello there!"
        previewText="This is my second post!"
      />
      <PostPreview
        id="3"
        thumbnail="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg"
        title="Hello there!"
        previewText="This is my third post!"
      />
    </section> -->
  </div>
</template>

<script>
// import PostPreviews from "@/components/Posts/PostPreview";
// import PostList from "@/components/Posts/PostList";
export default {
  // components: {
  //   // PostPreview: PostPreviews,
  //   PostList: PostList,
  // },

  // asyncData(context, callback) {
  // asyncData(context) {
  // fetch run on the server for the first load
  // fetch(context) {
  //   if(context.store.state.loadedPosts.length > 0){
  //      return null;
  //  }
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       // first argument will be used to handle error.
  //       resolve({
  //         loadedPosts: [
  //           {
  //             id: "1",
  //             title: "First Post",
  //             previewText: "This is our first post!",
  //             thumbnailLink:
  //               "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg",
  //           },
  //           {
  //             id: "2",
  //             title: "Second Post",
  //             previewText: "This is our Second post!",
  //             thumbnailLink:
  //               "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg",
  //           },
  //         ],
  //       });
  //       // reject(new Error());
  //     }, 1500);
  //   })
  //     .then((data) => {
  //       context.store.commit("setPosts", data.loadedPosts);
  //     })
  //     .catch((e) => {
  //       context.error(e);
  //     });
  // },

  // created() {
  //   this.$store.dispatch("setPosts", this.loadedPosts);
  //   console.log(this.$store.getters.loadedPosts);
  // },
  // middleware only work in page components just as asyncData
  // take a string of the file name in the middleware which is log
  // whenever we load this file, the middleware will be executed
  // middleware run either on the server if we refresh the page.
  // or it run on the client, if we got there by clicking around
  middleware: "log",

  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
};
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* .post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
} */
</style>
