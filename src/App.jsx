import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from './app/main/Main';
import { GlobalStyle } from './theme/GlobalStyles';
import useDarkmode from './hooks/useDarkmode';
import Header from './components/Header/Header';

function App() {
  const { theme } = useDarkmode();

  return (
    <BrowserRouter>
      <GlobalStyle theme={theme} />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/all" />} />
          <Route path="/:category" element={<Main />}></Route>
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
