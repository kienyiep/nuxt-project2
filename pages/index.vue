<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news!</h1>
    </section>
    <PostList :posts="loadedPosts" />
    <!-- <section class="featured-posts">
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
      /> -->

    <!-- <nuxt-link :to="'/posts/' + 1" class="post-preview">
        <article>
          <div
            class="post-thumbnail"
            style="
              background-image: url(https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg);
            "
          ></div>
          <div class="post-content">
            <h1>Post Title</h1>
            <p>Preview Text</p>
          </div>
        </article>
      </nuxt-link>
      <nuxt-link :to="'/posts/' + 2" class="post-preview">
        <article>
          <div
            class="post-thumbnail"
            style="
              background-image: url(https://1.bp.blogspot.com/-KjIf2wAQiWo/YQAygaAixVI/AAAAAAAAJnA/wPP2USKPJGU4CMrXXjw7Fp9vkRzvknqPgCPcBGAsYHg/w919-h516-p-k-no-nu/genshin-impact-raiden-shogun-art-4k-uhdpaper.com-943.1_a-thumbnail.jpg);
            "
          ></div>
          <div class="post-content">
            <h1>Post Title 2</h1>
            <p>Preview Text 2</p>
          </div>
        </article>
      </nuxt-link> -->
    <!-- </section> -->
  </div>
</template>

<script>
// import PostPreviews from "@/components/Posts/PostPreview";
// import PostList from "@/components/Posts/PostList";
export default {
  // components: {
  //   // PostPreview: PostPreviews,
  //   PostList,
  // },

  // the only component in the page folder that nuxt will execute on the server, which will wait the async code to finish on the server and then gives us the finished page
  // need to give asyncData an idea about when we have done, otherwise if it does not get that idea, it will immediately just return the finished page
  // we can use the promise to give the idea to the asyncData
  // async data will take that promise and kind of listen to it to be resolved and render to page once it is resolved
  // alternatively we can use callback
  // callback method will be executed once you are done
  // asyncData(context, callback) {
  //   console.log(context); // context will allow you to get a lot of insight into the current state of your app with the help of your context object
  //   // this keyword does not work because async data run before this components is actually created
  //   setTimeout(() => {
  //     // first argument will be used to handle error.
  //     callback(null, {
  //       loadedPosts: [
  //         {
  //           id: "1",
  //           title: "First Post",
  //           previewText: "This is our first post!",
  //           thumbnailLink:
  //             "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg",
  //         },
  //         {
  //           id: "2",
  //           title: "Second Post",
  //           previewText: "This is our Second post!",
  //           thumbnailLink:
  //             "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg",
  //         },
  //       ],
  //     });
  //   }, 1500);
  // },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
  // this will execute on the client
  // data() {
  //   return {
  //     loadedPosts: [],
  //   };
  // },
  // created() {
  // setTimeout(() => {
  //   this.loadedPosts = [
  //     {
  //       id: "1",
  //       title: "First Post",
  //       previewText: "This is our first post!",
  //       thumbnailLink:
  //         "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg",
  //     },
  //     {
  //       id: "2",
  //       title: "Second Post",
  //       previewText: "This is our Second post!",
  //       thumbnailLink:
  //         "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg",
  //     },
  //   ];
  // }, 1500);
  // },
};
</script>

<style scoped>
.intro {
  height: 300px;
  position: relative;
  padding: 30px;
  box-sizing: border-box;
  background-image: url("~assets/images/genshin-impact.jpg");
  background-position: center;
  background-size: cover;
}

.intro h1 {
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

@media (min-width: 768px) {
  .intro h1 {
    font-size: 2rem;
  }
}

.featured-posts {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

/* .post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
} */
</style>
