  import firebase from 'firebase';

  var firebaseConfig = {
    apiKey: "AIzaSyBKEmKSsdU_9IoUpAtiUeWNmdiKlLS64Vw",
    authDomain: "wear-login.firebaseapp.com",
    projectId: "wear-login",
    storageBucket: "wear-login.appspot.com",
    messagingSenderId: "368476905761",
    appId: "1:368476905761:web:baefd07028367eb39b1e60",
    measurementId: "G-CXJ9GEL3XG"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default fire;