import { initializeApp } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

import { getFirestore } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

import { getStorage } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-storage.js";

const firebaseConfig = {

    apiKey: "AIzaSyBiN8FqX8UZeyAh1cG2GHZtQWiQH0xPBV4",

    authDomain: "rephone-a0a80.firebaseapp.com",

    projectId: "rephone-a0a80",

    storageBucket: "rephone-a0a80.appspot.com",

    messagingSenderId: "431497247030",

    appId: "1:431497247030:web:a943715e4acc04b8995b97"

};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const storage = getStorage(app);

export {
    auth,
    db,
    storage
};
