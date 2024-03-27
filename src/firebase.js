import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbJKYAb7R0l298mQNibXp0q3ODf9tfYcQ",
  authDomain: "signature-builder-3f15e.firebaseapp.com",
  projectId: "signature-builder-3f15e",
  storageBucket: "signature-builder-3f15e.appspot.com",
  messagingSenderId: "372998933855",
  appId: "1:372998933855:web:bb55ece5ee9effb529baea"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);

// Export Collection
import { getStorage } from "firebase/storage";
export const storage = getStorage(firebaseApp);

import { getFirestore } from "firebase/firestore";
export const db = getFirestore(firebaseApp)


