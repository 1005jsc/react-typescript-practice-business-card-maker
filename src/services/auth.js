import { myApp } from './firebase';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";




class AuthService {

  auth = getAuth(myApp)
  googleProvider = new GoogleAuthProvider();

  AuthGooglePopupLogin = () => {
    signInWithPopup(this.auth, this.googleProvider)
  
  }


  AuthGoogleLogout = () => {
    signOut(this.auth).then(() => {
    }).catch(()=> {
      console.log('logout failed')
    })
  }
  
  AuthUserCheck = (callback) => {
    onAuthStateChanged(this.auth, (user) => {
      callback(user)
    })
  }







} export default AuthService














