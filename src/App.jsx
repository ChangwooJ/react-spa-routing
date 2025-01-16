import Header from "./components/Header.jsx";
import {useEffect, useState} from "react";
import GlobalStyle from "./style/GlobalStyle.js";
import {fetchNews} from "./utils/fetchNews.js";

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
            setArticles(data);
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
            ></Header>
        </>
    )
}

export default App
