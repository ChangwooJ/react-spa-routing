import { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './app/main/Main';
import { GlobalStyle } from './theme/GlobalStyles';
import useDarkmode from './hooks/useDarkmode';
import Header from './components/Header/Header';

function App() {
  const { theme } = useDarkmode();

  return (
    <BrowserRouter>
      <GlobalStyle theme={theme} />
      <Suspense fallback={<div>...loading</div>}>
        <Header />
        <main>
          <Routes>
            <Route path="/:category" element={<Main />}></Route>
          </Routes>
        </main>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
