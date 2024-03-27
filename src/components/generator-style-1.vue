<template>
  <div id="signature" class="signature">
    <div class="leftPane">
      <div class="profile"><img class="face" v-if="user.previewImage" :src="user.previewImage" alt="Uploaded Picture"></div>
      <div class="socialInfo">
        <a class="instagram" v-if="user.social.instagram" :href="user.social.instagram">&nbsp;</a>
        <a class="facebook" v-if="user.social.facebook" :href="user.social.facebook">&nbsp;</a>
        <a class="youtube" v-if="user.social.youtube" :href="user.social.youtube">&nbsp;</a>
        <a class="linkedin" v-if="user.social.linkedin" :href="user.social.linkedin">&nbsp;</a>
        <a class="twitter" v-if="user.social.twitter" :href="user.social.twitter">&nbsp;</a>
        <a class="tiktok" v-if="user.social.tiktok" :href="user.social.tiktok">&nbsp;</a>
        <a class="spotify" v-if="user.social.spotify" :href="user.social.spotify">&nbsp;</a>
      </div>
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
    </div>
  </div>
</template>

<script>
import { userStore } from "@/store";
export default {
  name: "generator-style-1",
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
.signature {
  background: rgba(245,133,33,1);
  background: -moz-linear-gradient(45deg, rgba(245,133,33,1) 0%, rgba(250,185,127,1) 50%, rgba(245,133,33,1) 100%);
  background: -webkit-gradient(left bottom, right top, color-stop(0%, rgba(245,133,33,1)), color-stop(50%, rgba(250,185,127,1)), color-stop(100%, rgba(245,133,33,1)));
  background: -webkit-linear-gradient(45deg, rgba(245,133,33,1) 0%, rgba(250,185,127,1) 50%, rgba(245,133,33,1) 100%);
  background: -o-linear-gradient(45deg, rgba(245,133,33,1) 0%, rgba(250,185,127,1) 50%, rgba(245,133,33,1) 100%);
  background: -ms-linear-gradient(45deg, rgba(245,133,33,1) 0%, rgba(250,185,127,1) 50%, rgba(245,133,33,1) 100%);
  background: linear-gradient(45deg, rgba(245,133,33,1) 0%, rgba(250,185,127,1) 50%, rgba(245,133,33,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#f58521', endColorstr='#f58521', GradientType=1 );
  display: flex;
  flex-direction: row;
  overflow: hidden;
  justify-content: flex-start; /* Keeps the panes next to each other on the left of the screeen */
}

.leftPane {
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* this combined with right pane styling will keep the panes at a 1:3 ratio */
  max-width: 200px;
  justify-content: center;
  padding: 5px 10px 5px 0;
  background: dimgrey;
}

.leftPane img.face {
  border-radius: 50%;
  text-align: center;
  align-self: center;
  width: 120px; /* Adjust width and height as needed */
  height: 120px; /* Adjust width and height as needed */
  overflow: hidden; /* This hides overflowing parts if the image has a different aspect ratio */
}

.socialInfo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 5px;
  background-color: white;
  padding: 4px;
  height: 22px;
}

.socialInfo a {
  height: 22px;
  width: 22px;
  opacity: 1; /* Set the initial opacity (0 for fully transparent, 1 for fully opaque) */
  transition: opacity 0.2s ease-in-out;
  padding: 0;
  margin: 0;
  background-position: center;
  background-size: cover;
  text-decoration: none;
}

.socialInfo a:hover {
  opacity: 0.7;
  color: rgba(255, 165, 0, 0.7);
}

.socialInfo a.facebook {
  background-image: url('../assets/facebook.png');
}

.leftPane .socialInfo a.instagram {
  background-image: url('../assets/instagram.png');
}

.leftPane .socialInfo a.linkedin {
  background-image: url('../assets/linkedin.png');
}

.leftPane .socialInfo a.spotify {
  background-image: url('../assets/spotify.png');
}

.leftPane .socialInfo a.tiktok {
  background-image: url('../assets/tiktok.png');
}

.leftPane .socialInfo a.youtube {
  background-image: url('../assets/youtube.png');
}

.leftPane .socialInfo a.twitter {
  background-image: url('../assets/x.png');
}

p.slogan {
  margin: 0;
  padding: 0;
  font-weight: bold;
  text-align: center;
}

.rightPane {
  display: flex;
  flex-direction: column;
  flex-grow: 3;
  padding: 5px 15px;
}

.rightPane > div {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
}

.rightPane a {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: black;
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

.rightPane .subInfo p.firstName, .rightPane .subInfo p.lastName {
  font-weight: bolder;
  font-size: 1.5em;
  text-transform: uppercase;
  margin-right: 5px;
  color: dimgrey;
}

.rightPane .subInfo p.title {
  margin: 0px 0 20px -5px;
  font-size: 0.8em;
  background-color: white;
  padding: 5px;
  color: #f58521;
  font-weight: bolder;
  text-transform: uppercase;
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