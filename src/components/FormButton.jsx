import React, { useState, useEffect, useRef } from 'react';
import styles from "./FormButton.module.scss";



function AddText() {
    const [newItem, setNewItem] = useState("");
    const [currentItem, setCurrentItem] = useState(""); // Состояние для хранения текущего элемента
    const [category, setCategory] = useState("work");

    const addNewText = (e) => {
        e.preventDefault();
        if (newItem.trim()) { // Проверка на пустую строку
            setCurrentItem(newItem); // Установка нового элемента
            setNewItem(""); // Очистка input
        }
    };

    return (
        <div className={styles.container_testForm}>
            <form id="addButForm">
                <input
                    type="text"
                    value={newItem}
                    required
                    onChange={(e) => setNewItem(e.target.value)}
                />
                <button className={styles.buttonForm} type="submit" onClick={addNewText}>
                    Добавить
                </button>
            </form>
            <p className={styles.paragraf}>{currentItem}</p> {/* Отображение текущего элемента */}
        </div>
    );
}

export default AddText;

            

       {/* <select name="first" id="selectForm"
        value={category}
        onChange={(e) => setCategory(e.target.value)}>
            <option value="home">Дом</option>
            <option value="work">Работа</option>

       </select> */}
