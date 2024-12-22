
import React, { useEffect, useState } from "react";
import СardModal from "./wordCardModal";
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

        fetchWords(); // Вызываем функцию для загрузки данных
    }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании компонента

    if (loading) {
        return <div>Загрузка...</div>; // Показываем индикатор загрузки
    }

    if (error) {
        return <div>Ошибка: {error.message}</div>; // Показываем сообщение об ошибке
    }

    return (
        <div className={l.container}>
                    {words.map((elem) => (
                        <СardModal english={elem.english} russian={elem.russian} transcription={elem.transcription} />
                    ))}
        </div>
    );
}

export default Content;