import Header from "./components/Header.jsx";
import {useEffect, useState} from "react";
import GlobalStyle from "./style/GlobalStyle.js";

function App() {
    const [ category, setCategory ] = useState('All');
    const [ isDarkMode, setIsDarkMode ] = useState(false);

    useEffect(() => {
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

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
