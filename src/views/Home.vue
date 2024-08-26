<template>
 <div id="home">
   <h1>Welcome to the tools portal!</h1>
   <p>Not much to see here yet, but a sweet signature generator for your emails.</p>
   <p>Sign in with your C3 email address to get access.</p>
 </div>
</template>

<script>
import {useRouter} from "vue-router";

export default {
  name: "app-home",
  data() {
    return {
      router: useRouter(),
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>