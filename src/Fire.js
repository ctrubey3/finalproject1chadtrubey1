import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD6IDLLBjzcunjTbJl0T9ORw7JBUg0SU4w",
    authDomain: "finalproject-97069.firebaseapp.com",
    projectId: "finalproject-97069",
    storageBucket: "finalproject-97069.appspot.com",
    messagingSenderId: "926771618349",
    appId: "1:926771618349:web:a05ab8064a2413b237cea4"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;