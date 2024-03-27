<template>
  <div id="signature" class="signature">
    <div class="leftPane">
      <div class="profile"><img class="face" v-if="user.previewImage" :src="user.previewImage" alt="Uploaded Picture"></div>
      <p class="slogan">THAT ALL OF COLUMBUS WOULD KNOW JESUS</p>
    </div>
    <div class="rightPane">
        <div class="subInfo"><p class="firstName">{{ store.firstName }}</p>
          <p class="lastName">{{ store.lastName }}</p></div>
        <div class="subInfo"><p class="title">{{ user.title }}</p></div>
        <div class="subInfo contact" v-if="user.email"><a :href="store.mailToLink"><span class="email"></span>
          <p class="email">{{ user.email }}</p></a></div>
        <div class="subInfo contact" v-if="user.phone"><a :href="store.phoneLink"><span class="phone"></span>
          <p class="phone">{{ store.phoneDisplay }}</p></a></div>
        <div class="subInfo contact" v-if="showAddress"><a :href="store.getChurchAddress"><span class="address"></span>
          <p class="address">{{ store.getChurchAddress }}</p></a></div>
        <div class="subInfo contact" v-if="user.website"><a :href="store.websiteURL"><span class="website"></span>
          <p class="website">{{ store.websiteURL }}</p></a></div>
        <div class="subInfo contact" v-if="showWebsite"><a :href="store.getChurchWebsite"><span class="churchWebsite"></span>
          <p class="website">{{ store.getChurchWebsite }}</p></a></div>
      <div class="socialInfo">
        <a class="instagram" v-if="user.social.instagram" :href="user.social.instagram"></a>
        <a class="facebook" v-if="user.social.facebook" :href="user.social.facebook"></a>
        <a class="youtube" v-if="user.social.youtube" :href="user.social.youtube"></a>
        <a class="linkedin" v-if="user.social.linkedin" :href="user.social.linkedin"></a>
        <a class="twitter" v-if="user.social.twitter" :href="user.social.twitter"></a>
        <a class="tiktok" v-if="user.social.tiktok" :href="user.social.tiktok"></a>
        <a class="spotify" v-if="user.social.spotify" :href="user.social.spotify"></a>
      </div>
    </div>
  </div>
</template>

<script>
import {userStore} from "@/store";

export default {
  name: "generator-style-2.vue",
  props: {
    showWebsite: Boolean,
    showAddress: Boolean,
  },
  computed: {
    user: () => userStore().getUser,
    store: () => userStore(),
  }
}
</script>

<style scoped>
a {
  color: black;
}

.signature {
  display: flex;
  flex-direction: row;
  background: none;
  justify-content: flex-start; /* Keeps the panes next to each other on the left of the screeen */
}

.leftPane {
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* this combined with right pane styling will keep the panes at a 1:3 ratio */
  max-width: 200px;
  justify-content: flex-start;
  gap: 20px;
  background: url("../assets/profile-bg.png") no-repeat 20px 0px;
  background-size: 75%;
  padding: 0 10px;
}

.leftPane > div {
  flex-direction: row;
  justify-content: center;
}

.leftPane img.face {
  margin-top: 34px;
  border-radius: 50%;
  width: 100px; /* Adjust width and height as needed */
  height: 100px; /* Adjust width and height as needed */
  overflow: hidden; /* This hides overflowing parts if the image has a different aspect ratio */
}

p.slogan {
  margin: 10px 0 0 0;
  padding: 0;
  font-weight: bold;
  text-align: center;
  font-size: 0.8em;
}

.rightPane {
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  border-left: 3px solid #f58521;
  padding: 10px;
}

.rightPane > div {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
}

.rightPane .socialInfo {
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 20px;
  gap: 8px;
}

.rightPane .socialInfo img {
  height: 22px;
}

.rightPane a {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
}

.rightPane a:hover {
  color: #f58521;
}

.rightPane .contact .icon {
  height: 20px;
}

.rightPane .subInfo p {
  margin: 0;
  padding: 0;
  font-size: 0.9em;
}

.rightPane .subInfo p.firstName {
  font-weight: bolder;
  font-size: 1.5em;
  text-transform: uppercase;
  margin-right: 5px;
  color: #f58521;
}

.rightPane .subInfo p.lastName {
  font-size: 1.5em;
}

.rightPane .subInfo p.title {
  margin: 0px 0 20px 0;
  border-bottom: 2px solid #f58521;
  font-size: 1em;
}

.rightPane .socialInfo a {
  height: 22px;
  width: 22px;
  opacity: 1; /* Set the initial opacity (0 for fully transparent, 1 for fully opaque) */
  transition: opacity 0.2s ease-in-out;
  padding: 0;
  margin: 0;
  background-position: center;
  background-size: cover;
}

.rightPane .socialInfo a:hover {
  opacity: 0.7;
  color: rgba(255, 165, 0, 0.7);
}

.rightPane .socialInfo a.facebook {
  background-image: url('../assets/facebook.png');
}

.rightPane .socialInfo a.instagram {
  background-image: url('../assets/instagram.png');
}

.rightPane .socialInfo a.linkedin {
  background-image: url('../assets/linkedin.png');
}

.rightPane .socialInfo a.spotify {
  background-image: url('../assets/spotify.png');
}

.rightPane .socialInfo a.tiktok {
  background-image: url('../assets/tiktok.png');
}

.rightPane .socialInfo a.youtube {
  background-image: url('../assets/youtube.png');
}

.rightPane .socialInfo a.twitter {
  background-image: url('../assets/x.png');
}

.rightPane span {
  background-position: center;
  background-size: cover;
  height: 22px;
  width: 22px;
  margin-right: 7px;
  margin-bottom: 2px;
}

.rightPane span.email {
  background-image: url("../assets/mail.png");
}

.rightPane span.phone {
  background-image: url("../assets/smartphone.png");
}

.rightPane span.website {
  background-image: url("../assets/links.png");
}

.rightPane span.churchWebsite {
  background-image: url("../assets/globe.png");
}

.rightPane span.address {
  background-image: url("../assets/pin.png");
}
</style>