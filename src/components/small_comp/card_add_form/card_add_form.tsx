import React, { useRef } from "react"
import Database from '../../../services/database';
import AddButton from '../add_button/add_button';
import styles from "./card_add_form.module.css";

type CardAddFormProps = {
  writeDataToDB: (inputData:inputData) => void
}

export type inputData = {
  name: string|null,
    company: string|null,
    theme: string|null,
    job: string|null,
    email: string|null,
    message: string|null,
} 


const CardAddForm = ({writeDataToDB}:CardAddFormProps) => {

  const inputNameRef = useRef<HTMLInputElement | null>(null)
  const inputCompanyRef = useRef<HTMLInputElement | null>(null)
  const inputThemeRef = useRef<HTMLSelectElement | null>(null)
  const inputJobRef = useRef<HTMLInputElement | null>(null)
  const inputEmailRef = useRef<HTMLInputElement | null>(null)
  const inputMessageRef = useRef<HTMLTextAreaElement | null>(null)


  const handleSubmit:React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()

    // const inputNameValue = inputNameRef.current.value;


    // undefined 안나오도록, 값(argument)이 string| null로 나오게하는 대처법 
    // (string, null, undefined 중 undefined만 걸러내기)
    // 지금 생각나는 방법은 이것밖에 없는데 더 좋은 방법이 있을련지....
    let inputNameValue         
    let inputCompanyValue
    let inputThemeValue
    let inputJobValue
    let inputEmailValue
    let inputMessageValue
    
    // 
    if(inputNameRef.current){
      inputNameValue = inputNameRef.current.value
    }else{
      inputNameValue = null
    }
    if(inputCompanyRef.current){
      inputCompanyValue = inputCompanyRef.current.value
    }else{
      inputCompanyValue = null
    }
    
    
    if(inputThemeRef.current){
      inputThemeValue = inputThemeRef.current.value
    }else{
      inputThemeValue = null
    }
    
    
    if(inputJobRef.current){
      inputJobValue = inputJobRef.current.value
    }else{
      inputJobValue = null
    }
    
    
    if(inputEmailRef.current){
      inputEmailValue = inputEmailRef.current.value
    }else{
      inputEmailValue = null
    }
    
    
    if(inputMessageRef.current){
      inputMessageValue = inputMessageRef.current.value
    }else{
      inputMessageValue = null
    }


    const inputData:inputData = {
            
    name: inputNameValue,
    company: inputCompanyValue,
    theme: inputThemeValue,
    job: inputJobValue,
    email: inputEmailValue,
    message: inputMessageValue,

  }

    writeDataToDB(inputData)




  }



  return <div className={styles.card_add_form_container}>
    <form className={styles.card_add_form} onSubmit={handleSubmit}>
      <div className={styles.input_wrapper}>
      <input ref={inputNameRef} className={styles.input} type="text" name="name" placeholder='name'/>
      <input ref={inputCompanyRef}className={styles.input} type="text" name="company" placeholder='company'/>
      <select ref={inputThemeRef}className={styles.select} name="theme" placeholder='light'>
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
      <input ref={inputJobRef}className={styles.input}type="text" name="job" placeholder='job'/>
      <input ref={inputEmailRef}className={styles.input}type="text" name="email" placeholder='email'/>
      <textarea ref={inputMessageRef}className={styles.textarea}name="message" placeholder='tell us about yourself' ></textarea>
      </div>
      <div className={styles.button_container}>
        <AddButton/>
      </div>


</form>


  </div>

}
export default CardAddForm;