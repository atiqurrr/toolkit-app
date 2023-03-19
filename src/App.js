import React from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import AddBooks from './components/AddBooks/AddBooks';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import ShowBooks from './components/ShowBooks/ShowBooks';

const App = () => {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/show-books" element={<ShowBooks></ShowBooks>}></Route>
        <Route path="/add-books" element={<AddBooks></AddBooks>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
};

export default App;