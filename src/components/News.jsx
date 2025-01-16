import React from "react";
import { Link} from "react-router-dom";
import steles from "./News.module.scss";

    function News(props) {
        const news = props.news

        return (
            <div className="styles.container_news">
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
            </div>
        );
    }

    export default News