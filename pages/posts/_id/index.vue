<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPosts.title }}</h1>
      <div class="post-details">
        <div class="post-detail">
          <!-- add | date to register date filter -->
          Last updated on {{ loadedPosts.updatedDate | date }}
        </div>
        <div class="post-detail">Written by {{ loadedPosts.author }}</div>
      </div>
      <p class="post-content">{{ loadedPosts.content }}</p>
    </section>
    <section class="post-feedback">
      <p>
        Let me know what you think about the post, send a mail to
        <a href="mailto:feedback@my-awesome-domain.com"
          >feedback@my-awesome-domain.com</a
        >
      </p>
    </section>
  </div>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const res = await $axios.get(
      process.env.baseUrl + "/post/" + params.id + ".json"
    );
    console.log(params);
    return { loadedPosts: res.data };
  },
  // override the setting in the nuxt.config.js per page level
  head: {
    title: "A Blog Post",
  },

  // asyncData(context) {
  // setTimeout(() => {
  //   callback(null, {
  //     loadedPosts: {
  //       id: "1",
  //       title: "First Post (ID: " + context.route.params.id + ")",
  //       previewText: "This is our first post!",
  //       author: "kienyiep",
  //       updatedDate: new Date(),
  //       content: "Some dummy text",
  //       thumbnailLink:
  //         "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg",
  //     },
  //   });
  //   // this.$route.params;
  // }, 1000);
  // }
};
</script>
<style scoped>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>
