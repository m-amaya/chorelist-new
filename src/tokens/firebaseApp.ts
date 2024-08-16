import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyClW_ZzCsG3rmFdwzAQ_qzdYWWs6LCuxtE",
  authDomain: "chorelist-new.firebaseapp.com",
  projectId: "chorelist-new",
  storageBucket: "chorelist-new.appspot.com",
  messagingSenderId: "466518022714",
  appId: "1:466518022714:web:35bdd24e519f235b65f303"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const auth = getAuth(firebaseApp);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
