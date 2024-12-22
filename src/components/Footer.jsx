import f from"./footer.module.scss"

function Footer(){
    return(
        <footer className={f.footer}>
        <nav className={f.footer_nav}>
            <a className={f.link} href="">О нас</a>
            <a className={f.link} href="">Контакты</a>
            <a className={f.link} href="">Инфо</a>
        </nav>
        </footer>
    )
}
export default Footer