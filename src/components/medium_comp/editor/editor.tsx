import React from "react"
import Database from '../../../services/database';
import CardAddForm, { inputData } from '../../small_comp/card_add_form/card_add_form';
import CardEditForm from '../../small_comp/card_edit_form/card_edit_form';
import styles from "./editor.module.css";

type EditorProps = {
  writeDataToDB: (inputData:inputData) => void
}




const Editor = ({writeDataToDB}:EditorProps) => {

  return <div className={styles.editor_body}>
    <h1 className={styles.editor_title}>Card Maker</h1>
    <ul className={styles.card_form_container}>
      <CardAddForm writeDataToDB={writeDataToDB}/>
      <CardEditForm/>
      <CardEditForm/>
    </ul>
</div>

}
export default Editor;