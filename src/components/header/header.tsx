import React, { useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth';
import styles from "./header.module.css";

type HeaderProps = {
  authService:AuthService;
  userName?: string;
}




const Header = ({authService, userName}: HeaderProps) => {


  const handleLogout:React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    authService.AuthGoogleLogout()


  }


  return <section className={styles.header_container}>
    {userName&&<button className={styles.logout_btn} onClick={handleLogout}>Logout</button>}
<div className={styles.title_container}>
  <img className={styles.logo_img} src="/images/logo.png" alt="logo image" />

  <h1 className={styles.header_title}>Business Card Maker 4</h1>
  {userName&&<h1 className={styles.header_userName}>Hi {userName}</h1>}

</div>


</section>

}
export default Header;

