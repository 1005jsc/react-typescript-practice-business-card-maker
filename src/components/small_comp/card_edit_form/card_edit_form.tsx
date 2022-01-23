import React from "react"
import styles from "./card_edit_form.module.css";

const CardEditForm = () => {

  return <div className={styles.card_edit_form_container}>
  <form className={styles.card_add_form}>
      <div className={styles.input_wrapper}>
      <input className={styles.input}type="text" name="name" />
      <input className={styles.input} type="text" name="company" />
      <select className={styles.select} name="theme" >
        <option value="light">light</option>
        <option value="dark">dark</option>
      </select>
      <input className={styles.input}type="text" name="job" />
      <input className={styles.input}type="text" name="email" />
      <textarea className={styles.textarea}name="message" ></textarea>
      </div>
      <div className={styles.button_container}>

      </div>




</form>
</div>

}
export default CardEditForm;