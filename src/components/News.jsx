import { Link} from "react-router-dom"

    function News(props) {
        const news = props.news

        return (
            <ul>
                {
                    news.map((item) => (
                        <li key={item.id}>
                            <Link to={`/news/${item.id}`}>
                            Новость {item.id}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        );
    }

    export default News