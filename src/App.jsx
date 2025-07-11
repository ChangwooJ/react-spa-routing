import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import NewsList from "./components/newsList";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewsList />} />
          <Route path=":category" element={<NewsList />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
