import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, post) {
        state.loadedPosts.push(post);
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(
          (post) => post.id === editedPost.id
        );
        state.loadedPosts[postIndex] = editedPost;
      },
    },
    actions: {
      // this method will be executed one time only on the server
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .get("/post.json")
          .then((res) => {
            //  console.log(res.data);
            const postsArray = [];
            for (const key in res.data) {
              postsArray.push({ ...res.data[key], id: key });
            }
            // console.log(postsArray);
            vuexContext.commit("setPosts", postsArray);
          })
          .catch((e) => context.error(e));
        // check if it is running on the server
        // if this is not true then the method executes on the server
        // if (!process.client) {
        //   console.log(context.req);
        // }
        // return new Promise((resolve, reject) => {
        //   setTimeout(() => {
        //     vuexContext.commit("setPosts", [
        //       {
        //         id: "1",
        //         title: "First Post",
        //         previewText: "This is our first post!",
        //         thumbnailLink:
        //           "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg",
        //       },
        //       {
        //         id: "2",
        //         title: "Second Post",
        //         previewText: "This is our Second post!",
        //         thumbnailLink:
        //           "https://www.pcgamesn.com/wp-content/sites/pcgamesn/2022/10/genshin-impact-best-nahida-build.jpg",
        //       },
        //     ]);
        //     // the resolve will indicate that we are done
        //     resolve();
        //   }, 1000);
        // });
      },
      addPost(vuexContext, postData) {
        const createdPost = { ...postData, updatedDate: new Date() };
        return this.$axios
          .post(
            "https://nuxt-app-592d4-default-rtdb.asia-southeast1.firebasedatabase.app/post.json",
            createdPost
          )
          .then((res) => {
            console.log(res);
            vuexContext.commit("addPost", {
              ...createdPost,
              id: res.data.name,
            });
          })
          .catch((e) => console.log(e));
      },
      editPosts(vuexContextt, editedPost) {
        return this.$axios
          .put(
            "https://nuxt-app-592d4-default-rtdb.asia-southeast1.firebasedatabase.app/post/" +
              editedPost.id +
              ".json",
            editedPost
          )
          .then((res) => vuexContextt.commit("editPost", editedPost))
          .catch((e) => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
    },
  });
};
// export the store, and the rest will be handled by nuxt, and will automatically inject the store into all our components
export default createStore;
