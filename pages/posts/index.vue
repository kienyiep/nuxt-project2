<template>
  <div class="posts-page">
    <PostList />
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
import PostList from "@/components/Posts/PostList";
export default {
  components: {
    // PostPreview: PostPreviews,
    PostList: PostList,
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
