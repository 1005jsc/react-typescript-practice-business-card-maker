import React from "react"
import { TypeOfCard } from '../card_add_form/card_add_form';
import styles from "./card.module.css";

type CardProps = {
  card:TypeOfCard

}


const Card = ({card}:CardProps) => {

  return <li className={styles.card}>
    <div className={styles.image_container}>
      <img className={styles.profile_image}src="/images/default_logo.png" alt="" />

    </div>
    <div className={styles.metadata_container}>
      <h2 className={`${styles.letter} ${styles.name}`}>{card.name}</h2>
      <span className={`${styles.letter} ${styles.company}`}>{card.company}</span>
      <div className={styles.divider}></div>
      <span className={`${styles.letter} ${styles.job}`}>{card.job}</span>
      <span className={`${styles.letter} ${styles.email}`}>{card.email}</span>
      <span className={`${styles.letter} ${styles.message}`}>{card.message}</span>

    </div>


</li>

}
export default Card;