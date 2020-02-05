import app from 'firebase/app';
import 'firebase/auth';

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
        app.initializeApp(config);

        this.auth = app.auth();
    }

    // Auth API

    doCreateUserWithEmailAndPassword = (email, password) =>
        this.auth.createUserWithEmailAndPassword(email, password);
    
    doSignInWithEmailAndPassword = (email, password) =>
        this.auth.signInWithEmailAndPassword(email, password);

    doSignOut = () => this.auth.signOut();

    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

    doPasswordUpdate = password => 
        this.auth.currentUser.updatePassword(password);
    
}

export default Firebase;