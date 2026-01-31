import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//      apiKey: "AIzaSyCaxkxQQ1VMGFzhZrxpxCRqxzEFbuWo4z8",
//      authDomain: "b4-styles.firebaseapp.com",
//      projectId: "b4-styles",
//      storageBucket: "b4-styles.firebasestorage.app",
//      messagingSenderId: "761208866895",
//      appId: "1:761208866895:web:4031c9a47dbfc26138423a"
// };

const firebaseConfig = {
     apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
     authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
     projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
     storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
     messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
     appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);