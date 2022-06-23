import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { BookPage } from './routes/Book';
import { HomePage } from './routes/Home';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/book" element={ <BookPage /> } />
        <Route path="/*" element={ <HomePage /> }/>
      </Routes>
    </div>
  );
}

export default App;
