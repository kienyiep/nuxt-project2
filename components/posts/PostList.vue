<template>
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :is-admin="isAdmin"
      :thumbnail="post.thumbnailLink"
      :title="post.title"
      :previewText="post.previewText"
    />
    <!-- <PostPreview
      id="2"
      :is-admin="isAdmin"
      thumbnail="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg"
      title="Hello there!"
      previewText="This is my second post!"
    />
    <PostPreview
      id="3"
      :is-admin="isAdmin"
      thumbnail="https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg"
      title="Hello there!"
      previewText="This is my third post!"
    /> -->
  </section>
</template>

<script>
import PostPreviews from "@/components/Posts/PostPreview";
export default {
  components: {
    PostPreview: PostPreviews,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
