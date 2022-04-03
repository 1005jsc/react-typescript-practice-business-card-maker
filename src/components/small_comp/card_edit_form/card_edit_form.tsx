import React, { useEffect, useRef, useState } from "react"
import { TypeOfCard } from '../card_add_form/card_add_form';
import styles from "./card_edit_form.module.css";

type CardEditFormProps = {
  updateDataToDB: (inputData:TypeOfCard) => void
  card:TypeOfCard
  deleteCard: (id:number) => void 
}

type TypeOfCardFragment = {
  [key:string]: string|number
}





const CardEditForm = ({updateDataToDB,deleteCard, card}:CardEditFormProps) => {

  const editCard = {
    id: card.id,
    name: `${card.name}`,
    company: `${card.company}`, 
    theme: `${card.theme}`,
    job: `${card.job}`, 
    email: `${card.email}`,
    message: `${card.message}`
}


  const inputNameRef = useRef<HTMLInputElement | null>(null)
  const inputCompanyRef = useRef<HTMLInputElement | null>(null)
  const inputThemeRef = useRef<HTMLSelectElement | null>(null)
  const inputJobRef = useRef<HTMLInputElement | null>(null)
  const inputEmailRef = useRef<HTMLInputElement | null>(null)
  const inputMessageRef = useRef<HTMLTextAreaElement | null>(null)

  

  const handleChangeInput:React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault()  

    const editCard2:TypeOfCard= {...editCard}

    editCard2[e.target.name] = e.target.value
    updateDataToDB(editCard2)
    
    
    
    
  }
  
  
  const handleChangeSelect:React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    e.preventDefault()
    const editCard2:TypeOfCard= {...editCard}
    editCard2[e.target.name] = e.target.value
    
    updateDataToDB(editCard2)
    
  }
  
  
  
  
  
  
  
  
  
  
  const handleChangeTextArea:React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    e.preventDefault()
    const editCard2:TypeOfCard= {...editCard}
    editCard2[e.target.name] = e.target.value
    updateDataToDB(editCard2)
    
  }






  
  const handleDelete:React.MouseEventHandler<HTMLButtonElement> =(e) => {
    e.preventDefault()

    deleteCard(editCard.id)

  }
    
    
    


  return <li className={styles.card_edit_form_container}>
    {console.log(process.env.REACT_APP_FIREBASE_PROJECT_ID)}
  <form className={styles.card_add_form}>
      <div className={styles.input_wrapper}>
      <input ref={inputNameRef} className={styles.input}type="text" name="name"onChange={handleChangeInput} defaultValue={`${card.name}`}/>
      <input ref={inputCompanyRef}className={styles.input} type="text" name="company" onChange={handleChangeInput}defaultValue={`${card.company}`} />
      <select ref={inputThemeRef}className={styles.select} name="theme" onChange={handleChangeSelect}defaultValue={`${card.theme}`}>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
      <input ref={inputJobRef}className={styles.input}type="text" name="job"onChange={handleChangeInput} defaultValue={`${card.job}`}/>
      <input ref={inputEmailRef}className={styles.input}type="text" name="email"onChange={handleChangeInput} defaultValue={`${card.email}`}/>
      <textarea ref={inputMessageRef} className={styles.textarea}name="message" onChange={handleChangeTextArea}defaultValue={`${card.message}`}></textarea>
      </div>
      <div className={styles.button_container}>
        <button className={styles.remove_btn} onClick={handleDelete}>Delete</button>
      </div>




</form>
</li>

}
export default CardEditForm;