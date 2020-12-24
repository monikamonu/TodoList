import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyDVdulZVTWpnwEAPMW_lNe8BtjU13YnWTg",
    authDomain: "my-loan-c6844.firebaseapp.com",
    projectId: "my-loan-c6844",
    storageBucket: "my-loan-c6844.appspot.com",
    messagingSenderId: "53988319923",
    appId: "1:53988319923:web:73eb8b5035b32181a086c6",
    measurementId: "G-HFV19NK1QY"
  };
  // Initialize Firebase
  const fire=firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export default fire;