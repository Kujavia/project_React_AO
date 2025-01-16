
// import React, { useState, useEffect } from "react";
// import "./vars.scss";
// import styles from "./card.module.scss";

// function TabCards(props) {
//     const { id, english, transcription, russian, onSave, onDelete } = props;

//     // Инициализируем состояние с пустыми значениями
//     const [formData, setFormData] = useState({
//         english: '',
//         transcription: '',
//         russian: ''
//     });

//     const [isEditing, setIsEditing] = useState(false);

//     // Используем useEffect для обновления formData при начале редактирования
//     useEffect(() => {
//         if (isEditing) {
//             setFormData({ english, transcription, russian });
//         }
//     }, [isEditing, english, transcription, russian]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSave = () => {
//         if (typeof onSave === 'function') {
//             onSave(formData);
//             setIsEditing(false);
//         } else {
//             console.error("onSave is not a function");
//         }
//     };

//     const handleDelete = () => {
//         onDelete(id);
//     };

//     // Проверка на пустые поля
//     const isFormValid = Object.values(formData).every(value => value.trim() !== '');

//     return (
//         <div className={styles.card_container}>
//             {isEditing ? (
//                 <>
//                     <input
//                         type="text"
//                         name="english"
//                         value={formData.english}
//                         onChange={handleChange}
//                         className={!formData.english.trim() ? styles.errorInput : ''}
//                     />
//                     <input
//                         type="text"
//                         name="transcription"
//                         value={formData.transcription}
//                         onChange={handleChange}
//                         className={!formData.transcription.trim() ? styles.errorInput : ''}
//                     />
//                     <input
//                         type="text"
//                         name="russian"
//                         value={formData.russian}
//                         onChange={handleChange}
//                         className={!formData.russian.trim() ? styles.errorInput : ''}
//                     />
//                     <div className={styles.button_container}>
//                         <button
//                             className={styles.card_buttonAdd}
//                             onClick={handleSave}
//                             disabled={!isFormValid} // Блокировка кнопки при пустых полях
//                         >
//                             Сохранить
//                         </button>
//                         <button className={styles.card_buttonAdd} onClick={() => setIsEditing(false)}>Отмена</button>
//                     </div>
//                 </>
//             ) : (
//                 <>
//                     <p>{id}</p>
//                     <p>{english}</p>
//                     <p>{transcription}</p>
//                     <p>{russian}</p>
//                     <div className={styles.button_container}>
//                         <button className={styles.card_buttonDelete} onClick={handleDelete}>Удалить</button>
//                         <button className={styles.card_buttonAdd} onClick={() => setIsEditing(true)}>Редактировать</button>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// }

// export default TabCards;

import React, { useState, useEffect } from "react";
import "./vars.scss";
import styles from "./card.module.scss";

function TabCards(props) {
    const { id, english, transcription, russian, onSave, onDelete } = props;

    // Инициализируем состояние с пустыми значениями
    const [formData, setFormData] = useState({
        english: '',
        transcription: '',
        russian: ''
    });

    const [isEditing, setIsEditing] = useState(false);

    // Используем useEffect для обновления formData при начале редактирования
    useEffect(() => {
        if (isEditing) {
            setFormData({ english, transcription, russian });
        }
    }, [isEditing, english, transcription, russian]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = () => {
        // Проверка на пустые поля
        const isFormValid = Object.values(formData).every(value => value.trim() !== '');

        if (!isFormValid) {
            alert("Пожалуйста, заполните все поля."); // Уведомление пользователя
            return; // Прерываем выполнение функции
        }

        // Если все поля валидны
        if (typeof onSave === 'function') {
            console.log("Сохраненные данные:", formData); // Выводим данные в консоль
            onSave(formData);
            setIsEditing(false); // Закрываем режим редактирования
        } else {
            console.error("onSave is not a function");
        }
    };

    const handleDelete = () => {
        onDelete(id);
    };
    const deleteItem = (id) => { 
        const updatedWords = words.filter((word) => word.id !== id);
        setWords(updatedWords); 
        console.log(id);
    }

    return (
        <div className={styles.card_container}>
            {isEditing ? (
                <>
                    <input
                        type="text"
                        name="english"
                        value={formData.english}
                        onChange={handleChange}
                        className={!formData.english.trim() ? styles.errorInput : ''}
                    />
                    <input
                        type="text"
                        name="transcription"
                        value={formData.transcription}
                        onChange={handleChange}
                        className={!formData.transcription.trim() ? styles.errorInput : ''}
                    />
                    <input
                        type="text"
                        name="russian"
                        value={formData.russian}
                        onChange={handleChange}
                        className={!formData.russian.trim() ? styles.errorInput : ''}
                    />
                    <div className={styles.button_container}>
                        <button
                            className={styles.card_buttonAdd}
                            onClick={handleSave}
                            disabled={!Object.values(formData).every(value => value.trim() !== '')}
                        >
                            Сохранить
                        </button>
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
                        <button className={styles.card_buttonDelete} onClick={deleteItem}>Удалить</button>
                        <button className={styles.card_buttonAdd} onClick={() => setIsEditing(true)}>Редактировать</button>
                    </div>
                </>
            )}
        </div>
    );
}

export default TabCards;


