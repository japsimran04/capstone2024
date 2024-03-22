import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDVjWGbLQc1lYcaNFFu3QbfnRa1L_RlicI",
  authDomain: "esmeraldus.firebaseapp.com",
  projectId: "esmeraldus",
  storageBucket: "esmeraldus.appspot.com",
  messagingSenderId: "184581500667",
  appId: "1:184581500667:web:0447b4370d92f60fb00a5e",
  measurementId: "G-E84GG1VQHE"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);