import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAutZT-oj5hvGpfmNr3SWLwoZa86EonL4A",
  authDomain: "crwn-db-56451.firebaseapp.com",
  projectId: "crwn-db-56451",
  storageBucket: "crwn-db-56451.appspot.com",
  messagingSenderId: "951612807290",
  appId: "1:951612807290:web:0c8c30237b439f849e83c3",
  measurementId: "G-WH7GR66TKE",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((acc, col) => {
    acc[col.title.toLowerCase()] = col;
    return acc;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const prodiver = new firebase.auth.GoogleAuthProvider();
prodiver.setCustomParameters({ promt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(prodiver);

export default firebase;
