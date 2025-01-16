import a from "./header.module.scss"
import { Link } from "react-router-dom"

function Header(){
    return(
        <header className={a.header}>
            <div className={a.header_logo}>
               <Link to="/"> <img className={a.header_img}src="/public/vecteezy_book-hand-paint-watercolor-vintage-element_19859079.png" alt="" /> </Link>
                </div>
              
            <a> </a>
        <h1>Словарь</h1>
        <Link to="/">Home</Link>
        <Link to="/game">Карточки</Link>
        <Link to="/news">Новости</Link>
        <Link to="/form">Форма</Link>
        </header>
    )
}
export default Header