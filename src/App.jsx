import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemProvider } from './providers/ThemeContext';
import GlobalStyle from './GlobalStyle';
import Header from './components/Header/Header';
import Main from './app/main/Main';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <ThemProvider>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </main>
      </ThemProvider>
    </BrowserRouter>
  );
}

export default App;
