const bodyParser = require("body-parser");
export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || "",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap",
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff", height: "4px", duration: 5000 },
  loadingIndicator: {
    name: "circle",
    color: "#fa923f",
  },
  /*
   ** Global CSS
   */
  css: ["~assets/styles/main.css"],
  /*
   ** Plugins to load before mounting the App
   run code before application start
   */
  plugins: ["~plugins/core-components.js", "~plugins/date-filter.js"],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  // modules allow you to add convinience features to your nuxt app
  // put credential: false because we dont want to pass any cookie and so on to the back end
  modules: ["@nuxtjs/axios"],
  axios: {
    baseURL:
      process.env.BASE_URL ||
      "https://nuxt-app-592d4-default-rtdb.asia-southeast1.firebasedatabase.app",

    credential: false,
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
  },

  env: {
    baseUrl:
      process.env.BASE_URL ||
      "https://nuxt-app-592d4-default-rtdb.asia-southeast1.firebasedatabase.app",

    fbAPIKey: "AIzaSyCq98lsI7hgm_gUQTbE2epP51u7DQKcbUw",
  },

  // set the root directory, where all your nuxt folder, nuxt files and node_modules live in
  // rootDir: "/my-app/",
  //override some setting of the nuxt router
  router: {
    // base: "/my-app/", //
    // extendRoutes(routes, resolve) {
    //   routes.push({
    //

    path: "*",
    //     component: resolve(__dirname, "pages/index.vue"),
    //   });
    // },
    // linkActiveClass: "active",
  },
  // nuxt will look into this folder for all the pages, folders, middleware folders and so on
  //  if you want to have a different folder structure and put all these nuxt folders into a sub folder.
  // srcDir: "client-app/",

  transition: {
    name: "fade",
    mode: "out-in",
  },
  // run code before you enter any route
  // add the middleware to all routes
  // router: {
  //   middleware: "log",
  // },

  // server middleware is a collection of node and express compatible middleware that will be executed prior to the nuxt rendering process
  // the middleware listed in the server middleware will be executed from top to bottom
  // register any express middleware that we want to run first, including our own middleware
  // bodyparser middleware will give access to the request body
  // body parser to parse incoming json body, and then add them to the body field on the incoming request object
  serverMiddleware: [bodyParser.json(), "~/api"],
};
