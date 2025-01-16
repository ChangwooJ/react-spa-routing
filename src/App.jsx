import Header from "./components/Header.jsx";
import {useState} from "react";

function App() {
    const { isDarkMode, setIsDarkMode } = useState(false);


    return (
        <>
            <Header></Header>
        </>
    )
}

export default App
