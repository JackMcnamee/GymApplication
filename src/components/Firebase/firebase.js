import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Web Apps Firebase config
const config = {
  apiKey: "AIzaSyD0_iLSieVAyXYLShSEYKUVUjX-PKl-oQ4",
  authDomain: "gym-app-2310d.firebaseapp.com",
  databaseURL: "https://gym-app-2310d.firebaseio.com",
  projectId: "gym-app-2310d",
  storageBucket: "gym-app-2310d.appspot.com",
  messagingSenderId: "377524844099",
}

class Firebase {
    constructor(){
        // initialize firebase with the configuration above
        app.initializeApp(config);

        // implement authentication
        this.auth = app.auth();

        // implement database
        this.database = app.database();
    }

    // -- Auth API -- 
    // sign up function
    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    
    // sign in function
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    // sign out function
    doSignOut = () => 
        this.auth.signOut();

    // password reset function
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    // password update function
    doPasswordUpdate = password => 
        this.auth.currentUser.updatePassword(password);

    // -- User API --
    // gets a reference to a user by uid
    user = uid => this.db.ref(`users/${uid}`);

    // gets a reference to all users
    users = () => this.db.ref('users');
    
}

export default Firebase;