import Vuex from "vuex";
import Cookie from "js-cookie";

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null,
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
      setToken(state, token) {
        state.token = token;
      },
      clearToken(state) {
        state.token = null;
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
            "https://nuxt-app-592d4-default-rtdb.asia-southeast1.firebasedatabase.app/post.json?auth=" +
              vuexContext.state.token,
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
              ".json?auth=" +
              vuexContextt.state.token,
            editedPost
          )
          .then((res) => vuexContextt.commit("editPost", editedPost))
          .catch((e) => console.log(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit("setPosts", posts);
      },
      authenticateUser(vuexContext, authData) {
        let authUrl =
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          process.env.fbAPIKey;
        // if sign up
        if (!authData.isLogin) {
          authUrl =
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
            process.env.fbAPIKey;
        }
        return this.$axios
          .post(authUrl, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true,
          })
          .then((result) => {
            console.log(result);
            vuexContext.commit("setToken", result.data.idToken);
            localStorage.setItem("token", result.data.idToken);
            localStorage.setItem(
              "tokenExpiration",
              new Date().getTime() +
                Number.parseInt(result.data.expiresIn) * 1000
            );
            Cookie.set("jwt", result.data.idToken);
            Cookie.set(
              "expirationDate",
              new Date().getTime() +
                Number.parseInt(result.data.expiresIn) * 1000
            );
            // since the timer set the timeout takes the duration in milisecond, hence we multiply by 1000
            // this will set a timer to invalidate the token after the expiry times
            // vuexContext.dispatch(
            //   "setLogoutTimer",
            //   result.data.expiresIn * 1000
            // ); 
            return this.$axios.post("http://localhost:3000/api/track-data", {
              data: "Authenticated!",
            });
          })
          .catch((e) => console.log(e.response));
      },
      // setLogoutTimer(vuexContext, duration) {
      //   setTimeout(() => {
      //     vuexContext.commit("clearToken");
      //   }, duration);
      // },
      initAuth(vuexContext, req) {
        let token;
        let expirationDate;

        if (req) {
          if (!req.headers.cookie) {
            return;
          }
          console.log("test899");
          console.log(req.headers);
          const jwtCookie = req.headers.cookie
            .split(";")
            .find((c) => c.trim().startsWith("jwt="));

          if (!jwtCookie) {
            return;
          }
          token = jwtCookie.split("=")[1];

          expirationDate = req.headers.cookie
            .split(";")
            .find((c) => c.trim().startsWith("expirationDate="))
            .split("=")[1];
        } else {
          token = localStorage.getItem("token");
          expirationDate = localStorage.getItem("tokenExpiration");
          // gteTime() to convert it to milisecond, add + to convert it to number
        }

        console.log(new Date().getTime(), +expirationDate);
        if (new Date().getTime() > +expirationDate || !token) {
          console.log("No token or invalid token");
          // vuexContext.commit("clearToken");
          vuexContext.dispatch("logout");
          return;
        }
        // vuexContext.dispatch(
        //   "setLogoutTimer",
        //   +expirationDate - new Date().getTime()
        // );
        vuexContext.commit("setToken", token);
      },
      logout(vuexContext) {
        vuexContext.commit("clearToken");
        Cookie.remove("jwt");
        Cookie.remove("expirationDate");
        if (process.client) {
          localStorage.removeItem("token");
          localStorage.removeItem("expirationDate");
        }
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      },
      isAuthenticated(state) {
        return state.token != null;
      },
    },
  });
};
// export the store, and the rest will be handled by nuxt, and will automatically inject the store into all our components
export default createStore;
