import { useParams} from "react-router-dom"

    function NewsPage(props) {
        const {id} = useParams()
        const news = props.news.find(news => nems.id ==id)

        return(
           <p>
            {news.text}
           </p>
        )
    }

    export default NewsPage
