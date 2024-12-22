
import React, { useEffect, useState } from "react";
import Cards from "./contentCard";
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
                <ul className={l.list_Cards}>
                    {words.map((elem) => (
                        <Cards key={elem.id} id={elem.id} english={elem.english} russian={elem.russian} transcription={elem.transcription} />
                    ))}
                </ul>
        </div>
    );
}

export default Content;


// без апи
// import Cards from "./contentCard";
// import "./vars.scss"
// import l from "./content.module.scss"

// function Content(){

//     const words = [{id:"1", name:"зонтик", color:"red"},
//         {id:"2", name:"план", color:"green"},
//         {id:"3", name:"фунт", color:"blue"},
//         {id:"4", name:"Лондон", color:"grey"}]




//     return(
//         <div className={l.container}>
//             <div>
//                 <ul className={l.list_Cards}>
//                     {words.map((elem)=>
//                     <Cards key={elem.id} id ={elem.id} name ={elem.name} color={elem.color}  />)
//                     }
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default Content