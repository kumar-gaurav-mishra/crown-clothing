import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAEvp1jwl-GyjHkhcbNs-TzNZGPCevlwEw',
  authDomain: 'crown-db-eaca7.firebaseapp.com',
  databaseURL: 'https://crown-db-eaca7.firebaseio.com',
  projectId: 'crown-db-eaca7',
  storageBucket: 'crown-db-eaca7.appspot.com',
  messagingSenderId: '841516581686',
  appId: '1:841516581686:web:979e4274fd66c9de27e997',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  let userRef;
  const {displayName, email, uid} = userAuth;
  if (!userAuth) return;
  try {
    userRef = await firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if (!snapShot.exists) {
      await userRef.set({displayName, email, uid, createdAt: new Date(), ...additionalData});
    }
  } catch (err) {
    console.log(`error creating user: ${err.message}`);
  }
  return userRef;
};

export const addColllectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  return await batch.commit();
};

firebase.initializeApp(config);

export const convertCollectionsSnapshotToCollectionObj = (collections) => {
  const finalCollectionObj = {};
  collections.docs.forEach((doc) => {
    const {title, items} = doc.data();
    finalCollectionObj[title.toLowerCase()] = {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title: title,
      items: items,
    };
  });
  return finalCollectionObj;
};
export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
