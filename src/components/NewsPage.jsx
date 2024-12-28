import { useParams } from 'react-router-dom';

function NewsPage({ news }) {
    const { id } = useParams();
    const newsItem = news.find(item => item.id === id);

    if (!newsItem) {
        return <div>Новость не найдена</div>;
    }

    return (
        <div>
            <h1>Новость {newsItem.id}</h1>
            <p>{newsItem.text}</p>
        </div>
    );
}

export default NewsPage;

