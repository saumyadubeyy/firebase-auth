import firebase from "firebase/compat/app"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDfHP3eJlFVpKEaDKybEuAagVIaborbLFo",
    authDomain: "fir-auth-91078.firebaseapp.com",
    projectId: "fir-auth-91078",
    storageBucket: "fir-auth-91078.appspot.com",
    messagingSenderId: "776439763445",
    appId: "1:776439763445:web:dcd2bde383e616ec2390bc"
  };

//initialising firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});

  export const signInWithGoogle = () => {
      auth.signInWithPopup(provider);
  }

export default firebase