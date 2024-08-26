import { createRouter, createWebHistory } from "vue-router";
import {getAuth, onAuthStateChanged} from "firebase/auth";

const router = createRouter({
  history: createWebHistory('/signature-generator/'),
  routes: [
    { path: "/", component:  () => import("../views/Home.vue")},
    { path:"/generator",
      component: () => import("../views/SignatureBuilder.vue"),
      meta: { requiresAuth: true },
    }
  ],
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    )
  })
}

router.beforeEach(async(to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("sign in to access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router;