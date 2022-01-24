import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar';
import { AboutPage } from './pages/AboutPage/AboutPage';
import { TodosPage } from './pages/TodosPages/TodosPage';

function App() {  
  return ( 
    <BrowserRouter>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route element={<TodosPage />} path='/index.html'/>
          <Route element={<AboutPage />} path='/about'/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
