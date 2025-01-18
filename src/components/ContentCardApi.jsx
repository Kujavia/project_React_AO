
import React, { useState, useEffect } from 'react';
import TabCards from "./contentCard";
import "./vars.scss";
import l from "./content.module.scss";
import ErrorMessage from './ErrorMessage';
import LoadingIndicator from './LoadingInd';

const Content = () => {
    const [words, setWords] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWords = async () => {
            try {
                const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setWords(data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchWords();
    }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз после монтирования

    const deleteItem = (id) => {
        const updatedWords = words.filter((word) => word.id !== id);
        setWords(updatedWords);
        console.log(id);
    };

    const handleWordStudied = () => {
        // Логика для обработки изученных слов, 
    };

    

    const handleSave = async (id, updatedData) => {
        try {
            const response = await fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedData),
            });

            if (!response.ok) {
                throw new Error('Ошибка при обновлении');
            }

            const updatedWords = words.map((word) =>
                word.id === id ? { ...word, ...updatedData } : word
            );
            setWords(updatedWords);
        } catch (error) {
            console.error(error);
        }
    };



    if (loading) {
        return <LoadingIndicator />;
    }

    if (error) {
        return <div>Ошибка: {error.message}</div>; // Обработка ошибок
    }

    return (
        <div className={l.container}>
            {error && <ErrorMessage message={error} />} {`Ошибка`}
            <ul className={l.list_Cards}>
                {words.map((elem) => (
                    <TabCards 
                        key={elem.id} 
                        id={elem.id} 
                        english={elem.english} 
                        russian={elem.russian} 
                        transcription={elem.transcription} 
                        handleWordStudied={handleWordStudied} 
                        // deleteItem={() => { deleteItem(elem.id); }} 
                        onSave={handleSave} 
                        onDelete={deleteItem}
                    />
                ))}
            </ul>
        </div>
    );
};

export default Content;




// import React, { createContext, useState, useEffect } from 'react';
// import TabCards from "./contentCard";
// import "./vars.scss";
// import l from "./content.module.scss";
// import axios from "axios";

// export const WordContext = createContext();


// function Content() {
//     const [words, setWords] = useState([]); // Состояние для хранения слов
//     const [loading, setLoading] = useState(true); // Состояние загрузки
//     const [error, setError] = useState(null); // Состояние для хранения ошибок
//     useEffect(() => {
//         const fetchWords = async () => {
//             try {
//                 const response = await axios.get("http://itgirlschool.justmakeit.ru/api/words");
//                 setWords(response.data); // Устанавливаем полученные данные в состояние
//             } catch (err) {
//                 setError(err); // Устанавливаем ошибку в состояние
//             } finally {
//                 setLoading(false); // Завершаем загрузку
//             }
//         };

//         fetchWords();
//     }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании компонента

//     if (loading) {
//         return <div>Загрузка...</div>; // Показываем индикатор загрузки
//     }
//     if (error) {
//         return <div>Ошибка: {error.message}</div>;
//     }

//     const deleteItem = (id) => { 
//         const updatedWords = words.filter((word) => word.id !== id);
//         setWords(updatedWords); 
//         console.log(id);
//     }

//     const handleWordStudied = () => {
//         setStudiedWordsCount(prevCount => prevCount + 1);
//       };


//     return (
//         <div className={l.container}>
//                 <ul className={l.list_Cards}>
//                     {words.map((elem) => (
//                         <TabCards 
//                         key={elem.id} 
//                         id={elem.id} 
//                         english={elem.english} 
//                         russian={elem.russian} 
//                         // onSave={handleSave}
//                         // onDelete={handleDelete}
//                         transcription={elem.transcription} 
//                         handleWordStudied={handleWordStudied} 
//                         deleteItem ={()=> {deleteItem(elem.id)}} />
//                     ))}
//                 </ul>
//         </div>
//     );
// }

// export default Content;
