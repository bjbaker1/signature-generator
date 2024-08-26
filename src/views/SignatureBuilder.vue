<template>
  <div id="signature-generator">
    <div class="builder">
      <h1>Signature Builder</h1>
      <p>Welcome to our new staff signature builder! If you want to deck out your email signature just fill out this form, check the preview, and then copy the output code.</p>
      <div class="customizer">
        <div class="contact-info">
          <h3>Contact Info</h3>
          <div class="form-field">
            <label for="name" class="sr-only">Name</label>
            <input
                type="text"
                id="name"
                v-model="user.name"
                required
                autofocus
            />
          </div>
          <div class="form-field">
            <label for="company" class="sr-only">Company</label>
            <input
                type="text"
                id="company"
                v-model="user.company"
                required
            />
          </div>
          <div class="form-field">
            <label for="title" class="sr-only">title</label>
            <input
                type="text"
                id="title"
                v-model="user.title"
                required
            />
          </div>
          <div class="form-field">
            <label for="email" class="sr-only">Email</label>
            <input
                type="text"
                id="email"
                v-model="email"
                required
            />
          </div>
          <div class="form-field">
            <label for="phone" class="sr-only">Phone</label>
            <input
                type="text"
                id="phone"
                v-model="user.phone"
                required
            />
          </div>
          <div class="form-field">
            <label for="website" class="sr-only">website</label>
            <input
                type="text"
                id="website"
                v-model="user.website"
                required
            />
          </div>
          <input type="checkbox" v-model="showWebsite" /><label class="sr-only">include church website</label>
          <input type="checkbox" v-model="showAddress" /><label class="sr-only">include church address</label>
        </div>
        <div class="socials">
          <h3>Socials</h3>
          <div class="form-field">
            <label for="facebook" class="sr-only">facebook</label>
            <input
                type="text"
                id="facebook"
                v-model="user.social.facebook"
                required
            />
          </div>
          <div class="form-field">
            <label for="instagram" class="sr-only">instagram</label>
            <input
                type="text"
                id="instagram"
                v-model="user.social.instagram"
                required
            />
          </div>
          <div class="form-field">
            <label for="youtube" class="sr-only">youtube</label>
            <input
                type="text"
                id="youtube"
                v-model="user.social.youtube"
                required
            />
          </div>
          <div class="form-field">
            <label for="linkedin" class="sr-only">linkedin</label>
            <input
                type="text"
                id="linkedin"
                v-model="user.social.linkedin"
                required
            />
          </div>
          <div class="form-field">
            <label for="twitter" class="sr-only">twitter</label>
            <input
                type="text"
                id="twitter"
                v-model="user.social.twitter"
                required
            />
          </div>
          <div class="form-field">
            <label for="tiktok" class="sr-only">tiktok</label>
            <input
                type="text"
                id="tiktok"
                v-model="user.social.tiktok"
                required
            />
          </div>
          <div class="form-field">
            <label for="spotify" class="sr-only">spotify</label>
            <input
                type="text"
                id="spotify"
                v-model="user.social.spotify"
                required
            />
          </div>
          <div></div>
          <div>
            <button @click="saveUser()">Save Info</button>
          </div>
        </div>
      </div>
    </div>
    <div class="file-upload">
      <label for="picture">Upload Picture:</label>
      <input type="file" id="picture" ref="pictureInput" @change="handlePictureChange">
    </div>

    <Gen2 user="user" :showWebsite=showWebsite :showAddress=showAddress />

    <div id="instructions">
      <p>In order to copy into your signature, simply highlight the entire area, right click and copy.
        Go into your signature editor and simply paste it in and save!</p>
    </div>
  </div>
</template>

<script>
import { storage, db } from "@/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { userStore } from "@/store";

import signatureResult from '../components/signature-viewer.vue';

export default {
  name: 'signature-generator',
  components: { Gen2: signatureResult },
  data() {
    return {
      showAddress: false,
      showWebsite: false,
      uploadedImage: null,
    };
  },
  methods: {
    getFileName(file) {
      if (this.user.name === "") {
        return file.name;
      }
      const fileTitle = this.user.name.replace(" ", "").trim();
      const fileType = file.type.replace("image/", "");
      return `${fileTitle}.${fileType}`;
    },
    async saveUser() {
      const userRef = doc(db, "users", this.email)
      this.user.email = this.email;
        await setDoc(userRef, this.user)
            .then(function() {
              console.log(`user saved`)
            })
      .catch((error) => {
        console.log("save err: " + error);
      })
    },
    async handlePictureChange(event) {
      const file = event.target.files[0];
      if (!file) return;

      let fileName = this.getFileName(file);
      const storageRef = ref(storage, fileName);

      await uploadBytes(storageRef, file).then((snapshot) => {
        getDownloadURL(snapshot.ref).then((downloadURL) => {
          this.user.previewImage = downloadURL;
        })
      }).catch((error) => {
        alert(error);
      });
    },
  },
  computed: {
    store: () => userStore(),
    user: () => userStore().getUser,
    deriveEmailAddress() {
      if (!this.user || !this.user.name || !this.user.name.includes(" ")) {
        return "";
      }
      let name = this.user.name;
      let firstName = name.split(" ")[0];
      return firstName.toLowerCase() + '@myc3church.com';
    },
    // eslint-disable-next-line vue/no-dupe-keys
    email: {
      get() {
        return this.deriveEmailAddress;
      },
      set(newValue) {
        this.user.email = newValue
      }
    },

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
label {
  text-align: right;
}
h1 {
  text-align: left;
  margin: 0;
}
p {
  text-align: left;
}
#signature-generator, .builder {
  display: flex;
  flex-direction: column;
}

.customizer {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 70px;
  padding: 0 20px;
}

.customizer h3 {
  text-decoration: underline;
}

.customizer label.sr-only {
  width: 70px;
  text-transform: uppercase;
  font-size: 0.8em;
  margin-right: 10px;
  display: flex;
  align-items: center;
}

.customizer input {
  height: 1.5em;
  font-size: 1.1em;
}

.form-field {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 10px;
}

.contact-info {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.file-upload {
  border: 1px dashed grey;
  background-color: lightgray;
  padding: 15px;
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 25px;
}
#instructions {
  border-top: 1px solid black;
  padding-top: 10px;
  margin-top: 50px;
}
</style>
