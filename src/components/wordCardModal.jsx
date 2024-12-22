// import React, { useState } from 'react';
// import styles from "./wordCardModal.module.scss"

// function СardModal(props){
//     const{id, english, transcription, russian} = props;

//     return (
    
//        <div className={styles.modalCard_container}>
//         <span className={styles.modalCard_container__arrow_left}>←</span>

//         <section className={styles.modalCard_container__card}>
//           <p>{english}</p>
//           <p>{transcription}</p>
//           <p>{russian}</p>
//           <button>Проверить</button>
//         </section>

//         <span className={styles.modalCard_container__arrow_right}>→</span>

//         </div>
//     )
// }

// export default СardModal

import React, { useState, useEffect } from 'react';
import styles from "./wordCardModal.module.scss";

function СardModal() {
    const [words, setWords] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showTranslation, setShowTranslation] = useState(false);

    const fetchWords = async () => {
        try {
            const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
            const data = await response.json();
            setWords(data);
        } catch (error) {
            console.error("Ошибка при загрузке данных:", error);
        }
    };

    useEffect(() => {
        fetchWords();
    }, []);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        setShowTranslation(false);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
        setShowTranslation(false);
    };

    // Если слов нет
    if (words.length === 0) {
        return <div>Загрузка...</div>;
    }

    const { english, transcription, russian } = words[currentIndex];

    return (
        <div className={styles.modalCard_container}>
            <span className={styles.modalCard_container__arrow_left} onClick={handlePrev}>←</span>

            <section className={styles.modalCard_container__card}>

                <div className={styles.modalCard_container__card_contentText}> 
                  <p className={styles.modalCard_text}>{english}</p>
                  <p>{transcription}</p>
                </div>

                {showTranslation && <p>{russian}</p>}
                {!showTranslation && (
                    <button className={styles.modalCard_button}  onClick={() => setShowTranslation(true)}>Посмотреть перевод</button>
                )}
            </section>

            <span className={styles.modalCard_container__arrow_right} onClick={handleNext}>→</span>
        </div>
    );
}

export default СardModal;
