// Import Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5lTd-46aZfFafA--3jkEAcFfl9vvJJbI",
  authDomain: "beyondchats-6e7a4.firebaseapp.com",
  projectId: "beyondchats-6e7a4",
  storageBucket: "beyondchats-6e7a4.appspot.com", // Fixed storageBucket typo
  messagingSenderId: "944231700107",
  appId: "1:944231700107:web:9eba9992061869249d268e",
  measurementId: "G-3E4CJJY3GL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app); // Firebase Authentication
const provider = new GoogleAuthProvider(); // Google Auth Provider
const db = getFirestore(app); // Firestore Database

// Function to Sign In with Google
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    console.log("User Info:", result.user); // Returns Google user details
    return result.user; // You can store this in state
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
  }
};

// Function to Sign Out
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Sign-Out Error:", error.message);
  }
};

// Export Firebase instances
export { auth, provider, db, analytics };
export default app;