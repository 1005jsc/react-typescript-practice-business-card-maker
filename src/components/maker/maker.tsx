import React, { useEffect, useState } from "react"
import { Navigate, useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth';
import Database from '../../services/database';
import Header from '../header/header';
import Editor from '../medium_comp/editor/editor';
import Preview from '../medium_comp/preview/preview';
import { inputData } from '../small_comp/card_add_form/card_add_form';
import styles from "./maker.module.css";


type MakerProps = {
  authService: AuthService;
  databaseService: Database
}




const Maker = ({authService, databaseService}:MakerProps) => {


  const [userName, setUserName] = useState()
  const [userUid, setUserUid] = useState()

  const navigateMaker = useNavigate();

  useEffect(() => {
    authService.AuthUserCheck((result:any) => {
    if(result){
      setUserName(result.displayName)
      setUserUid(result.uid)
      return
    }else{
      navigateMaker('/')
    } 
  })
  
  })

  const writeDataToDB = (inputData:inputData) => {
    // console.log(inputData)
    // console.log(inputData.name)
    databaseService.writeUserData(userUid, inputData.name, inputData )

  }


  return <section className={styles.maker_container}>
    <Header authService={authService}  userName={userName}/>


    <div className={styles.maker_body}>
      <Editor writeDataToDB={writeDataToDB}/>
      <div className={styles.section_divider}></div>
      <Preview/>
    </div>



</section>

}
export default Maker;