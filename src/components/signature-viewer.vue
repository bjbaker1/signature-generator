<template>
  <table style="text-align: left; width: 550px; font-family: 'Helvetica Neue', Helvetica, sans-serif; border-collapse: collapse;">
    <tr class="name">
      <td colspan="2" style="height: 26px;">
        <p style="padding:0; margin:0; font-weight:bold; font-size: 26px; text-transform: capitalize;">{{ user.name }}</p>
      </td>
    </tr>
    <tr class="title" style="border-bottom: 2px solid orange;">
      <td colspan="2" style="height:18px; padding: 0; margin: 0; ">
        <p style="padding: 0; margin: 0; color: orange; font-size: 14px; font-weight: bold; text-transform: uppercase;">
          {{ user.title }}<span style="color: black;"> - {{ user.company }}</span>
        </p>
      </td>
    </tr>
    <tr><td style="height: 10px;"></td></tr>
    <tr class="image1-email-empty">
      <td :rowspan="7" style="text-align: center; vertical-align: top;">
        <img class="face"
             style="border-radius: 50%; margin:0 15px; width:150px; max-height:150px; object-fit:cover; object-position: top;"
             v-if="user.previewImage" :src="user.previewImage"
             alt="Uploaded Picture" />
      </td>
      <td style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 10px;">
        <img
            style="height: 22px; width: 22px; margin-right:5px;"
            src="https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Fmail.png?alt=media&token=9763094b-4726-4ea2-8c9f-e3253414043c"
            alt="email"
        />
        <a style="color: black; font-size: 1em;" :href="store.mailToLink">{{ user.email }}</a>
      </td>
      <td :rowspan="7"></td>
    </tr>
    <tr class="image2-phone-empty">
      <td style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 10px;">
        <img
            style="height: 22px; width: 22px; margin-right:5px;"
            src="https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Fsmartphone.png?alt=media&token=e6d8d0c5-0ec0-4495-a460-50e143970abd"
            alt="phone"
        />
        <a style="color: black; font-size: 1em;" :href="store.phoneLink">{{ store.phoneDisplay }}</a>
      </td>
    </tr>
    <tr class="image3-website-empty" v-if="userWebsite">
      <td style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 10px;">
        <img
            style="height: 22px; width: 22px; margin-right:5px;"
            src="https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Flinks.png?alt=media&token=a294cf80-8b2e-4efc-a965-70e1d06fbcaf"
            alt="website"
        />
        <a style="color: black; font-size: 1em;" :href="userWebsite">{{ userWebsite }}</a>
      </td>
    </tr>
    <tr class="image4-churchAddress-empty" v-if="showAddress" style="height:25px;">
      <td style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 10px;">
        <img
            style="height: 22px; width: 22px; margin-right:5px;"
            src="https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Fpin.png?alt=media&token=dedba082-3833-4d9e-b48b-c78d706b59e4"
            alt="address"
        />
        <a style="color: black; font-size: 1em;" :href="formatAddress(store.getChurchAddress)">{{ store.getChurchAddress }}</a>
      </td>
    </tr>
    <tr class="image5-churchSite-empty" v-if="showWebsite" style="height:25px;">
      <td style="display: flex; flex-direction: row; justify-content: flex-start; align-items: center; gap: 10px;">
        <img
            style="height: 22px; width: 22px; margin-right:5px;"
            src="https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Fglobe.png?alt=media&token=b8c9a2f4-f554-4c7e-aff8-365f14213c63"
            alt="churchWebsite"
        />
        <a style="color: black; font-size: 1em;" :href="store.getChurchWebsite">{{ store.getChurchWebsite }}</a>
      </td>
    </tr>
    <tr v-if="hasSocials" style="border-bottom: 2px solid orange;"><td style="height: 10px;"></td></tr>
    <tr class="image6-socials-empty" style="height: 35px;" v-if="hasSocials">
      <td>
        <div class="socialInfo" style="display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: flex-end;
              flex-wrap: wrap;
              margin-top: 5px;
              gap: 8px;
              padding-top: 5px;
              width: 400px;">
          <a style="margin-right:5px;" class="instagram" v-if="user.social.instagram" :href="formatURL(user.social.instagram)">
            <img
                style="width:22px;"
                src="https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Finstagram.png?alt=media&token=64223a37-465f-4905-a63e-948f85fcfdf2"
            />
          </a>
          <a style="margin-right:5px;" class="facebook" v-if="user.social.facebook" :href="formatURL(user.social.facebook)">
            <img
                style="width:22px;"
                src="https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Ffacebook.png?alt=media&token=ad59336e-ea15-4521-a750-1c2b3cd0c29f"
            />
          </a>
          <a style="margin-right:5px;" class="youtube" v-if="user.social.youtube" :href="formatURL(user.social.youtube)">
            <img
                style="width:22px;"
                src="https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Fyoutube.png?alt=media&token=c36c9886-25b1-4d77-8d16-7fc7a2fb9a37"
            />
          </a>
          <a style="margin-right:5px;" class="linkedin" v-if="user.social.linkedin" :href="formatURL(user.social.linkedin)">
            <img
                style="width:22px;"
                src="https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Flinkedin.png?alt=media&token=daf146b3-c73a-41bf-82d5-431617bc9aa7"
            />
          </a>
          <a style="margin-right:5px;" class="twitter" v-if="user.social.twitter" :href="formatURL(user.social.twitter)">
            <img
                style="width:22px;"
                src="https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Fx.png?alt=media&token=c95a60fe-0471-45d9-9561-21a9710402e8"
            />
          </a>
          <a style="margin-right:5px;" class="tiktok" v-if="user.social.tiktok" :href="formatURL(user.social.tiktok)">
            <img
                style="width:22px;"
                src="https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Ftiktok.png?alt=media&token=182d9f6b-5e34-4b73-9e1a-0295185ed54b"
            />
          </a>
          <a class="spotify" v-if="user.social.spotify" :href="formatURL(user.social.spotify)">
            <img
                style="width:22px;"
                src="https://firebasestorage.googleapis.com/v0/b/signature-builder-3f15e.appspot.com/o/icons%2Fspotify.png?alt=media&token=5ea04409-c96e-4a46-8924-eccb0ec5efb5"
            />
          </a>
        </div>
      </td>
    </tr>
  </table>
</template>

<script>
import {userStore} from "@/store";

export default {
  name: "signatureView.vue",
  props: {
    showWebsite: Boolean,
    showAddress: Boolean,
  },
  data() {
    return {
      pageLoaded: false,

    }
  },
  mounted() {
    this.pageLoaded = true;
  },
  methods: {
    formatURL(providedString) {
        if (providedString.includes("http://") || providedString.includes("https://")) {
          return providedString;
        }
      return "https://" + providedString;
    },
    formatAddress(address) {
      let formattedAddress = address.replace(/\s/g, '+');
      return "https://www.google.com/maps/place/" + formattedAddress
    }
  },
  computed: {
    user: () => userStore().getUser,
    store: () => userStore(),
    userWebsite: function() {
      let containsHttp = this.user.website.includes("http://")
      let containsHttps = this.user.website.includes("https://")
      if ((!containsHttp || !containsHttps) && this.user.website) {
        return "https://" + this.user.website;
      }
      return this.user.website;
    },
    hasSocials: function() {
      let s = this.user.social;
      return !!(s.instagram || s.facebook || s.youtube || s.linkedin || s.twitter || s.tiktok || s.spotify);
    }
  }
}
</script>

<style scoped>

</style>