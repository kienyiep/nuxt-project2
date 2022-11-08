export default function (context) {
  console.log("Middleware check auth");
  //  if it is run on client instead of on server
  // if (process.client) {
  context.store.dispatch("initAuth", context.req);
  // }
}

// this middleware will be attached to all files where we need the token
