import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from "firebase/auth";

const storage = getStorage();

export async function signup({ email, password, name }) {
  try {
    await createUserWithEmailAndPassword(auth, email, password).catch((err) => {
      console.log(err.message);
      throw new Error(err.message);
    });

    await updateProfile(auth.currentUser, { displayName: name }).then();
  } catch (err) {
    console.log(err.message);
    throw new Error(err.message);
  }
}

export async function login({ email, password }) {
  try {
    const data = await signInWithEmailAndPassword(auth, email, password);
    return data;
  } catch (err) {
    throw new Error(err.message);
  }
}

export function getValidatedUser() {
  return new Promise((resolve, reject) => {
    if (auth.currentUser) {
      resolve(auth.currentUser);
    }
    const unsubscribe = auth.onAuthStateChanged((user) => {
      unsubscribe();
      resolve(user);
    }, reject);
  });
}

export async function getCurrentUser() {
  const user = await getValidatedUser();
  if (!user) return null;

  const newObject = Object.create(user);

  return newObject;
}

export async function logout() {
  signOut(auth).catch((err) => {
    console.log(err.message);
    throw new Error(err.message);
  });
  // .then(() => {})
}

export async function updateCurrentUser({ userName, avatar }) {
  try {
    const user = auth.currentUser;

    if (avatar) {
      const imageRef = ref(storage, `images/${user.uid}`);
      await uploadBytes(imageRef, avatar);
      const imageUrl = await getDownloadURL(imageRef);
      await updateProfile(auth.currentUser, {
        photoURL: imageUrl,
      });
    }

    if (userName)
      await updateProfile(auth.currentUser, {
        displayName: userName,
      });

    return { user };
  } catch (err) {
    throw new Error(err.message);
  }
}

export async function updateUserPassword({ oldPassword, newPassword }) {
  try {
    const user = auth.currentUser;

    const cred = EmailAuthProvider.credential(user.email, oldPassword);

    await reauthenticateWithCredential(user, cred);

    await updatePassword(user, newPassword);
  } catch (err) {
    throw new Error(err.message);
  }
}
