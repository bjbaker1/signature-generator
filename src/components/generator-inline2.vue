<script>
import { userStore } from "@/store";
export default {
  name: "generator-inline-2",
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

<template>
  <div id="sig-main" style="display: flex; flex-direction: column; margin-left:30px; width: 550px;">
  <div class="sig-header" style="border-bottom: 2px solid orange;">
    <div class="subInfo" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: flex-end;">
      <p class="firstName" style="margin: 0 5px 0 0; padding: 0; font-weight: bolder; font-size: 1.6em; text-transform: capitalize; color: dimgrey;">{{
          store.firstName }}</p>
      <p class="lastName" style="margin: 0 5px 0 0; padding: 0; font-weight: bolder; font-size: 1.6em; text-transform: capitalize; color: dimgrey;">{{ store.lastName }}</p>
    </div>
    <div class="subInfo" v-if="user.title" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: flex-end;">
      <p class="title" style="margin: -8px 0 0 -4px; font-size: 0.8em; padding: 5px; color: #f58521; font-weight: bolder; text-transform: uppercase;">{{ user.title }}</p>
    </div>
  </div>
    <div class="signature" style="display: flex; flex-direction: row; overflow: hidden; justify-content: flex-start;">
      <div class="leftPane" style="display: flex; flex-direction: column; flex-grow: 1; max-width: 130px; justify-content: flex-start; padding: 10px 10px 5px 0;">
        <div class="profile" style="text-align: center;">
          <img class="face" v-if="user.previewImage" :src="user.previewImage" alt="Uploaded Picture" style="border-radius: 50%; align-self: center; margin-left: 10px; width: 120px; height: 120px; overflow: hidden;">
        </div>
      </div>
      <div class="rightPane" style="display: flex; flex-direction: column; flex-grow: 3; padding: 5px 0 5px 15px;">
        <div class="subInfo contact" v-if="user.email" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center;">
          <a :href="store.mailToLink" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; margin: 0; padding: 0; text-decoration: none; color: black;">
            <span class="email" style="background-position: center; background-size: cover; height: 22px; width: 22px; margin-right: 7px; margin-bottom: 2px; background-image:
            url('https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Fmail.png?alt=media&token=9763094b-4726-4ea2-8c9f-e3253414043c');"></span>
            <p class="email" style="margin: 0; padding: 0; font-size: 0.9em;">{{ user.email }}</p>
          </a>
        </div>
        <div class="subInfo contact" v-if="user.phone" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center;">
          <a :href="store.phoneLink" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; margin: 0; padding: 0; text-decoration: none; color: black;">
            <span class="phone" style="background-position: center; background-size: cover; height: 22px; width: 22px; margin-right: 7px; margin-bottom: 2px; background-image: url('https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Fsmartphone.png?alt=media&token=e6d8d0c5-0ec0-4495-a460-50e143970abd');"></span>
            <p class="phone" style="margin: 0; padding: 0; font-size: 0.9em;">{{ store.phoneDisplay }}</p>
          </a>
        </div>
        <div class="subInfo contact" v-if="user.website" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center;">
          <a :href="store.websiteURL" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; margin: 0; padding: 0; text-decoration: none; color: black;">
            <span class="website" style="background-position: center; background-size: cover; height: 22px; width: 22px; margin-right: 7px; margin-bottom: 2px; background-image: url('https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Flinks.png?alt=media&token=a294cf80-8b2e-4efc-a965-70e1d06fbcaf');"></span>
            <p class="website" style="margin: 0; padding: 0; font-size: 0.9em;">{{ store.getWebsiteURL }}</p>
          </a>
        </div>
        <div class="subInfo contact" v-if="showWebsite" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center;">
          <a :href="store.getChurchWebsite" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; margin: 0; padding: 0; text-decoration: none; color: black;">
            <span class="churchWebsite" style="background-position: center; background-size: cover; height: 22px; width: 22px; margin-right: 7px; margin-bottom: 2px; background-image: url('https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Fglobe.png?alt=media&token=b8c9a2f4-f554-4c7e-aff8-365f14213c63');"></span>
            <p class="churchWebsite" style="margin: 0; padding: 0; font-size: 0.9em;">{{ store.getChurchWebsite }}</p>
          </a>
        </div>
        <div class="subInfo contact" v-if="showAddress" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center;">
          <a :href="store.getChurchAddress" style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; margin: 0; padding: 0; text-decoration: none; color: black;">
            <span class="address" style="background-position: center; background-size: cover; height: 22px; width: 22px; margin-right: 7px; margin-bottom: 2px; background-image: url('https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Fpin.png?alt=media&token=dedba082-3833-4d9e-b48b-c78d706b59e4');"></span>
            <p class="address" style="margin: 0; padding: 0; font-size: 0.9em;">{{ store.getChurchAddress }}</p>
          </a>
        </div>
        <div class="socialInfo" style="display: flex; flex-wrap: wrap; justify-content:flex-start; gap: 5px; background-color: white; padding: 10px 4px 4px 4px; height: 22px;
        border-top: 2px
         solid orange; margin: 10px 0 0 0;">
          <a class="instagram" v-if="user.social.instagram" :href="user.social.instagram" style="height: 22px; width: 22px; opacity: 1; transition: opacity 0.2s ease-in-out;
          padding: 0; margin: 0; background-position: center; background-size: cover; text-decoration: none; background-image:
          url('https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Finstagram.png?alt=media&token=64223a37-465f-4905-a63e-948f85fcfdf2');">
            &nbsp;</a>
          <a class="facebook" v-if="user.social.facebook" :href="user.social.facebook" style="height: 22px; width: 22px; opacity: 1; transition: opacity 0.2s ease-in-out;
          padding: 0; margin: 0; background-position: center; background-size: cover; text-decoration: none; background-image: url('https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Ffacebook.png?alt=media&token=ad59336e-ea15-4521-a750-1c2b3cd0c29f');">&nbsp;</a>
          <a class="linkedin" v-if="user.social.linkedin" :href="user.social.linkedin" style="height: 22px; width: 22px; opacity: 1; transition: opacity 0.2s ease-in-out;
          padding: 0; margin: 0; background-position: center; background-size: cover; text-decoration: none; background-image:
          url('https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Finstagram.png?alt=media&token=64223a37-465f-4905-a63e-948f85fcfdf2');">
            &nbsp;</a>
          <a class="linkedin" v-if="user.social.linkedin" :href="user.social.linkedin" style="height: 22px; width: 22px; opacity: 1; transition: opacity 0.2s ease-in-out;
          padding: 0; margin: 0; background-position: center; background-size: cover; text-decoration: none; background-image:
          url('https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Flinkedin.png?alt=media&token=daf146b3-c73a-41bf-82d5-431617bc9aa7');">&nbsp;</a>
          <a class="spotify" v-if="user.social.spotify" :href="user.social.spotify" style="height: 22px; width: 22px; opacity: 1; transition: opacity 0.2s ease-in-out; padding:
          0; margin: 0; background-position: center; background-size: cover; text-decoration: none; background-image:
          url('https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Fspotify.png?alt=media&token=5ea04409-c96e-4a46-8924-eccb0ec5efb5');">&nbsp;</a>
          <a class="tiktok" v-if="user.social.tiktok" :href="user.social.tiktok" style="height: 22px; width: 22px; opacity: 1; transition: opacity 0.2s ease-in-out; padding: 0;
          margin: 0; background-position: center; background-size: cover; text-decoration: none; background-image:
          url('https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Ftiktok.png?alt=media&token=182d9f6b-5e34-4b73-9e1a-0295185ed54b');">&nbsp;</a>
          <a class="youtube" v-if="user.social.youtube" :href="user.social.youtube" style="height: 22px; width: 22px; opacity: 1; transition: opacity 0.2s ease-in-out; padding:
          0; margin: 0; background-position: center; background-size: cover; text-decoration: none; background-image:
          url('https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Fyoutube.png?alt=media&token=c36c9886-25b1-4d77-8d16-7fc7a2fb9a37');">&nbsp;</a>
          <a class="twitter" v-if="user.social.twitter" :href="user.social.twitter" style="height: 22px; width: 22px; opacity: 1; transition: opacity 0.2s ease-in-out; padding:
          0; margin: 0; background-position: center; background-size: cover; text-decoration: none; background-image:
          url('https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Fx.png?alt=media&token=c95a60fe-0471-45d9-9561-21a9710402e8');">&nbsp;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>