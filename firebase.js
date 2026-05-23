import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

import {
    getFirestore
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

import {
    getStorage
} from "https://www.gstatic.com/firebasejs/12.7.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "SUA_API",
    authDomain: "SEU_DOMINIO",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_STORAGE",
    messagingSenderId: "SEU_SENDER_ID",
    appId: "SEU_APP_ID"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
