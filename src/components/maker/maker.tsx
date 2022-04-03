import React, { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom';
import AuthService from '../../services/auth';
import Database from '../../services/database';
import Header from '../header/header';
import Editor from '../medium_comp/editor/editor';
import Preview from '../medium_comp/preview/preview';
import { TypeOfCard } from '../small_comp/card_add_form/card_add_form';
import styles from "./maker.module.css";

export type Cards<TypeOfCard> = {
  [key:string]:TypeOfCard
}



type MakerProps = {
  authService: AuthService;
  databaseService: Database
}




const Maker = ({authService, databaseService}:MakerProps) => {

  const [cards, setCards] = useState<Cards<TypeOfCard>|null>({})
  const [userName, setUserName] = useState()
  const [userUid, setUserUid] = useState()

  const navigateMaker = useNavigate();


  useEffect(() => {
    if(!userUid){
      return;
  }


    const stopSync = databaseService.getData(userUid, (data:Cards<TypeOfCard>) => {
      setCards(data)
    })

    return ()=> stopSync()
  }, [userUid])


  useEffect(() => {
    authService.AuthUserCheck((result:any) => {
    if(result){
      setUserName(result.displayName)
      setUserUid(result.uid)
      
      
    }else{
      console.log('maker')
      navigateMaker('/')
    } 
  })
  
  })

  const updateDataToDB = (inputData:TypeOfCard) => {
    if(inputData.id==null){
      databaseService.writeUserData(userUid, ' ', inputData )

    }else{
      databaseService.writeUserData(userUid, inputData.id, inputData )

    }
  }

  const deleteCard = (id:number) => {
    databaseService.deleteData(userUid, id)
  }


  return <section className={styles.maker_container}>
    <Header authService={authService}  userName={userName}/>


    <div className={styles.maker_body}>
      <Editor deleteCard={deleteCard}updateDataToDB={updateDataToDB} cards={cards}/>
      <div className={styles.section_divider}></div>
      <Preview cards={cards}/>
    </div>



</section>
}
export default Maker;