<template>
  <div class="header">
    <h1>C3 Church</h1>
    <div class="navbar">
      <router-link to="/"> Home</router-link>
      <router-link to="/generator"> Signature Builder</router-link>
      <a v-if="!isLoggedIn" @click="signInWithGoogle"> Login</a>
      <a v-if="isLoggedIn" @click="handleSignOut">Sign Out</a>
    </div>
  </div>

  <router-view />
</template>

<script>

import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup} from "firebase/auth";
import router from "@/router";
import {db} from "@/firebase";
import {doc, getDoc} from "firebase/firestore";
import { userStore } from "@/store";

export default {
  name: 'App',
  data() {
    return {
      auth: '',
      user: {},
      store: userStore()
    }
  },
  methods: {
    signInWithGoogle() {
      const provider = new GoogleAuthProvider();
      this.auth = getAuth();
      signInWithPopup(this.auth, provider).then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        localStorage.token = credential.accessToken;
        this.getUserDetails(result.user);
        router.push("/generator");
      }).catch((error) => {
        console.log(error.code + error.message);
      })
    },
    async getUserDetails(user) {
      let email = user.email;
      const userRef = doc(db, "users", email);
      const userSnap = await getDoc(userRef);
      if (userSnap.exists()) {
        this.store.setUser(userSnap.data());
      } else {
        this.user.email = user.email;
        this.store.setUser(this.user);
        console.log("no data");
      }
    },
  },
  computed: {
    isLoggedIn: () => {
      let auth = getAuth();
      return !onAuthStateChanged(auth, (user) => {
        return !user;
      });
    }
  }
}
</script>

<style>
#app {
  font-family: "Open Sans", Arial, "Helvetica Neue", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html {
  padding: 0;
  margin: 0;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  height: 70px;
  background-color: black;
  color: white;
  padding: 20px;
  margin-bottom: 10px;
}
.header h1 {
  text-transform: uppercase;
  margin: 0;
}
.navbar {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 50px;
}
.navbar a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  height: 100%;
  text-transform: uppercase;
}
.navbar a:hover {
  cursor: pointer;
}

</style>
