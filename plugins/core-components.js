import Vue from "vue";

import AppButton from "@/components/UI/AppButton";
import AppControlInput from "@/components/UI/AppControlInput";
import PostList from "@/components/posts/PostList";

// this is now a global component, which we can use in any page without importing and registering it in that page
Vue.component("AppButton", AppButton);
Vue.component("AppControlInput", AppControlInput);
Vue.component("PostList", PostList);
