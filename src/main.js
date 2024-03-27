import App from './App.vue';
import { createApp } from 'vue';
import { firebaseApp } from "./firebase";
import { VueFire, VueFireFirestoreOptionsAPI } from "vuefire";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(VueFire, {
  firebaseApp,
  modules: [VueFireFirestoreOptionsAPI()],
});
app.use(store);
app.use(router);
app.mount("#app");