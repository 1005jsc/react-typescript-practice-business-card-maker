import { User } from 'firebase/auth';
import React, { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from "./login.module.css";


type LoginProps = {
  authService: AuthService;

}


const Login = ({authService}:LoginProps) => {

  const navigateLogin = useNavigate()


  useEffect(() => {
    
    
    authService.AuthUserCheck((result:any) => {
    if(result){
      navigateLogin('/maker')
    }else{
      return
    } 
  })
  
  })



const handleGoogleLogin:React.MouseEventHandler<HTMLButtonElement> = (e) => {
  e.preventDefault()
  authService.AuthGooglePopupLogin()

  navigateLogin('/maker')

}



  return <div className={styles.login_container}>
    <Header authService={authService} />

  <div className={styles.title_container}>
    
    <h1 className={styles.login}> Login</h1>

    <button className={`${styles.google_btn} ${styles.button}`} onClick={handleGoogleLogin}>Google</button>
    <button className={`${styles.github_btn} ${styles.button}`}>Github</button>

  </div>



    <Footer/>

</div>

}
export default Login;