import React from "react"
import { useState } from "react";
import styles from "./card.module.scss"


function Title_cards(){
    return (
       <div className={styles.card_container}>
        <p>№</p>
        <label style={{color:color}} >{name}</label>
        <button className={styles.card_buttonDelete}> Удалить</button>
        <button className={styles.card_buttonAdd}> Добавить</button>
        </div>
    )
}

export default Cards