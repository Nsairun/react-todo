import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ToDo from './components/page/TodoPage';
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<ToDo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
