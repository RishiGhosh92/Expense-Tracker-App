import { firebase, googleAuthProvider, database } from "../firebase/firebase";

export const login = uid => ({
  type: "LOGIN",
  uid: uid
});

export const startLogin = () => {
  return () => {
    firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: "LOGOUT"
});

export const startLogout = () => {
  return () => {
    firebase.auth().signOut();
  };
};
