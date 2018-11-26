import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyAFQymNtUwRoW0JFCDTa2eDisIRtLcQPtE",
  authDomain: "stories-afd26.firebaseapp.com",
  databaseURL: "https://stories-afd26.firebaseio.com",
  projectId: "stories-afd26",
  storageBucket: "stories-afd26.appspot.com",
  messagingSenderId: "946552593044"
};

const firebaseConf = firebase.initializeApp(config);

export default firebaseConf;
