import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA_crdouwmNtM436vrbpULJTZTuliWu63Q",
    authDomain: "crwn-db-45e9b.firebaseapp.com",
    databaseURL: "https://crwn-db-45e9b.firebaseio.com",
    projectId: "crwn-db-45e9b",
    storageBucket: "crwn-db-45e9b.appspot.com",
    messagingSenderId: "357164865146",
    appId: "1:357164865146:web:fa75c015f596aa20e30dc3"
  };
  
  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef
  }

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt : 'select_account' });
  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;