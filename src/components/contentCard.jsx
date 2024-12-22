// import React from "react"
// import { useState } from "react";
// import "./vars.scss"
// import styles from "./card.module.scss"



// function Cards(props){
//     const{id, english, transcription, russian} = props;
//     const{ initialData, onSave, onDelete } = props;

//     const [isEditing, setIsEditing] = useState(false);
//     const [formData, setFormData] = useState(initialData);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSave = () => {
//         onSave(formData);
//         setIsEditing(false);
//     };


//     return ( 
//        <div className={styles.card_container}>
//             <p>{id}</p>
//             <p>{english}</p>
//             <p>{transcription}</p>
//             <p>{russian}</p>
//             <p>{russian}</p>
//             <div className={styles.button_container}>
//             <button className={styles.card_buttonDelete}> Удалить</button>
//             <button className={styles.card_buttonAdd}> Добавить</button>
//             <button className={styles.card_buttonAdd}> Редактировать</button>
//             </div>
//         </div>
//     )
// }

// export default Cards

import React, { useState } from "react";
import "./vars.scss";
import styles from "./card.module.scss";

function Cards(props) {
    const {id, english, transcription, russian, initialData, onSave, onDelete } = props;
     // Проверяем, есть ли initialData, иначе используем пустой объект
     const [formData, setFormData] = useState(initialData || { english: '', transcription: '', russian: '' });
     const [isEditing, setIsEditing] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        onSave(formData);
        setIsEditing(false);
    };

    const handleDelete = () => {
        onDelete(id);
    };

    return (
        <div className={styles.card_container}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        name="english"
                        value={formData.english}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="transcription"
                        value={formData.transcription}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="russian"
                        value={formData.russian}
                        onChange={handleChange}
                    />
                    <div className={styles.button_container}>
                        <button className={styles.card_buttonAdd} onClick={handleSave}>Сохранить</button>
                        <button className={styles.card_buttonAdd} onClick={() => setIsEditing(false)}>Отмена</button>
                    </div>
                </>
            ) : (
                <>
                    <p>{id}</p>
                    <p>{english}</p>
                    <p>{transcription}</p>
                    <p>{russian}</p>
                    <div className={styles.button_container}>
                        <button className={styles.card_buttonDelete} onClick={handleDelete}>Удалить</button>
                        <button className={styles.card_buttonAdd} onClick={() => setIsEditing(true)}>Редактировать</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cards;
