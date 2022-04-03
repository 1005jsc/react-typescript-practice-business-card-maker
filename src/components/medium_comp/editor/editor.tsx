import React from "react"
import Database from '../../../services/database';
import { Cards } from '../../maker/maker';
import CardAddForm, { TypeOfCard } from '../../small_comp/card_add_form/card_add_form';
import CardEditForm from '../../small_comp/card_edit_form/card_edit_form';
import styles from "./editor.module.css";

type EditorProps = {
  updateDataToDB: (inputData:TypeOfCard) => void
  cards?: Cards<TypeOfCard>|null
  deleteCard: (id:number) => void
}




const Editor = ({updateDataToDB,deleteCard, cards}:EditorProps) => {

  return <div className={styles.editor_body}>
    <h1 className={styles.editor_title}>Card Maker</h1>
    <ul className={styles.card_form_container}>
      <CardAddForm updateDataToDB={updateDataToDB}/>
      {cards&& Object.keys(cards).map((key) => {
        return <CardEditForm deleteCard={deleteCard}
        updateDataToDB={updateDataToDB}
        key={key} 
        card={cards[key]}/>
      })}
    </ul>
</div>

}
export default Editor;