import React from "react"
import { Cards } from '../../maker/maker';
import Card from '../../small_comp/card/card';
import { TypeOfCard } from '../../small_comp/card_add_form/card_add_form';
import styles from "./preview.module.css";

type PreviewProps = {
  cards?: Cards<TypeOfCard>|null
}

const Preview = ({cards}:PreviewProps) => {

  return <div className={styles.preview_body}>
    <h1 className={styles.preview_title}>Card Preview</h1>
    <ul className={styles.card_preview_container}>

    {cards&& Object.keys(cards).map((key) => {
      
      return <Card key={key} card={cards[key]}/> 

    })}




    </ul>

</div>

}
export default Preview;