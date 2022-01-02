import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyBKlETo9XE0yNsh4slscy-3BGUmEN59V7Q',
  authDomain: 'koroonasurmad-a2117.firebaseapp.com',
  databaseURL:
    'https://koroonasurmad-a2117-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'koroonasurmad-a2117',
  storageBucket: 'koroonasurmad-a2117.appspot.com',
  messagingSenderId: '110475100868',
  appId: '1:110475100868:web:f191e17ba63146a3843f91',
});

const db = firebaseApp.firestore();

export { db };
