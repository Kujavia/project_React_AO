import { Link} from "react-router-dom"

    function News(props) {
        const news = props.news

        return(
            <ul>
            {
                news.map((item) =>
                    <Link key={item.id} to={`/news/${item.id}`}> Новость {item.id} </Link>
            )
            }
            </ul>
        )
    }

    export default News