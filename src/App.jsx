import Header from "./components/Header.jsx";
import {useEffect, useState} from "react";
import GlobalStyle from "./style/GlobalStyle.js";
import {fetchNews} from "./utils/fetchNews.js";
import NewsCard from "./components/NewsCard.jsx";

function App() {
    const [ articles, setArticles ] = useState([]);
    const [ category, setCategory ] = useState('All');
    const [ isDarkMode, setIsDarkMode ] = useState(false);

    const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

    useEffect(() => {
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    useEffect(() => {
        const getArticles = async () => {
            const data = await fetchNews(API_KEY, category);
            setArticles(data.articles);
        };
        getArticles();
    }, [category, API_KEY]);

    const handleSelectedCategory = (category) => {
        setCategory(category);
    }

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <>
            <GlobalStyle />
            <Header
                currentCategory={category}
                onSelectedCategory={handleSelectedCategory}
                isDarkMode={isDarkMode}
                onToggleDarkMode={handleToggleDarkMode}
            />
            <main>
                {articles && articles.length > 0 ? (
                    articles.map((article, index) => (
                        <NewsCard article={article} />
                    ))
                ) : (
                    <p>Loading...</p>
                )}
            </main>
        </>
    )
}

export default App
