
import React, { useEffect, useState } from "react";
import TabCards from "./contentCard";
import "./vars.scss";
import l from "./content.module.scss";
import axios from "axios";

function Content() {
    const [words, setWords] = useState([]); // Состояние для хранения слов
    const [loading, setLoading] = useState(true); // Состояние загрузки
    const [error, setError] = useState(null); // Состояние для хранения ошибок
    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await axios.get("http://itgirlschool.justmakeit.ru/api/words");
                setWords(response.data); // Устанавливаем полученные данные в состояние
            } catch (err) {
                setError(err); // Устанавливаем ошибку в состояние
            } finally {
                setLoading(false); // Завершаем загрузку
            }
        };

        fetchWords();
    }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании компонента

    if (loading) {
        return <div>Загрузка...</div>; // Показываем индикатор загрузки
    }
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    }

    const deleteItem = (id) => { 
        const updatedWords = words.filter((word) => word.id !== id);
        setWords(updatedWords); 
        console.log(id);
    }

    const handleWordStudied = () => {
        setStudiedWordsCount(prevCount => prevCount + 1);
      };


    return (
        <div className={l.container}>
                <ul className={l.list_Cards}>
                    {words.map((elem) => (
                        <TabCards 
                        key={elem.id} 
                        id={elem.id} 
                        english={elem.english} 
                        russian={elem.russian} 
                        // onSave={handleSave}
                        // onDelete={handleDelete}
                        transcription={elem.transcription} 
                        handleWordStudied={handleWordStudied} 
                        deleteItem ={()=> {deleteItem(elem.id)}} />
                    ))}
                </ul>
        </div>
    );
}

export default Content;
