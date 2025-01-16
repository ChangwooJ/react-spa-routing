import Header from "./components/Header.jsx";
import {useEffect, useState} from "react";
import GlobalStyle from "./style/GlobalStyle.js";

function App() {
    const [ isDarkMode, setIsDarkMode ] = useState(false);

    useEffect(() => {
        document.body.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    const handleToggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

    return (
        <>
            <GlobalStyle />
            <Header
                isDarkMode={isDarkMode}
                onToggleDarkMode={handleToggleDarkMode}
            ></Header>
        </>
    )
}

export default App
