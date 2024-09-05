import { createPinia, defineStore } from 'pinia'
import { stripPhoneNumber } from './utils';
const store = createPinia();

export default store;

export const userStore = defineStore("user", {
  state: () => ({
    token: '',
    user: {
      name: '',
      email: '',
      company: '',
      phone: '',
      title: '',
      website: '',
      previewImage: '',
      address: {
        "street1": '',
        "street2": '',
        "city": '',
        "state": '',
        "postal": '',
      },
      social: {
        twitter: '',
        facebook: '',
        instagram: '',
        linkedin: '',
        youtube: '',
        tiktok: '',
        spotify: ''
      },
    },
    churchWebsite: "https://myc3church.com",
    churchAddress: {
      "street1": "6305 Waterloo Rd NW",
      "street2": "",
      "city": "Canal Winchester",
      "state": "OH",
      "postal": "43110",
    },
  }),
  actions: {
    setUser(u) {
      this.user = {
        name: u.name,
        email: u.email,
        company: u.company,
        phone: u.phone,
        title: u.title,
        website: u.website,
        previewImage: u.previewImage,
        social: {
          twitter: u.social.twitter,
          facebook: u.social.facebook,
          instagram: u.social.instagram,
          linkedin: u.social.linkedin,
          youtube: u.social.youtube,
          tiktok: u.social.tiktok,
          spotify: u.social.spotify
        },
      }
    },

  },
  getters: {
    getUser: (state) => state.user,
    firstName: (state) => {
      if (state.user.name.includes(" ")) {
        return state.user.name.split(" ")[0];
      }
      return state.user.name;
    },
    lastName: (state) => {
      if (state.user.name.includes(" ")) {
        return state.user.name.split(" ")[1];
      }
      return state.user.name;
    },
    mailToLink: (state) => "mailto:" + state.user.email,
    phoneLink: (state) => {
      let phone = stripPhoneNumber(state.user.phone);
      return "tel:+" + phone;
    },
    phoneDisplay: (state) => {
      let p = stripPhoneNumber(state.user.phone);

      // Split the phone number into parts
      const areaCode = p.slice(0, 3);
      const firstPart = p.slice(3, 6);
      const lastPart = p.slice(6);

      // Format the phone number
      return `(${areaCode}) ${firstPart}-${lastPart}`;
    },
    getWebsiteURL: (state) => {
      let containsHttp = state.user.website.includes("http://")
      let containsHttps = state.user.website.includes("https://")
      if ((!containsHttp || !containsHttps) && state.user.website) {
        return "https://" + state.user.website;
      }
      return state.user.website;
    },
    getChurchWebsite: (state) => state.churchWebsite,
    getChurchAddress: (state) => {
      let address = state.churchAddress;

      return `${address.street1}, ${address.city}, ${address.state} ${address.postal}`;
    },

  },
})