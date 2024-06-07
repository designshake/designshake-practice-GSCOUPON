
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Specialcoffee from './page/Specialcoffee';
import Coffee from './page/Coffee';
import Gift from './page/Gift';
import Mart from './page/Mart';
import Cpb from './page/Cpb';
import Bread from './page/Bread';
import Oil from './page/Oil';
import Culture from './page/Culture';
import Eat from './page/Eat';
import Delivery from './page/Delivery';
import Not from './page/Not';

import Header from './components/section/Header';
import Footer from './components/section/Footer';
import Main from './components/section/Main';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
      <Routes>
        <Route path='/' element={<Specialcoffee/>} />
        <Route path='/coffee' element={<Coffee/>} />
        <Route path='/gift' element={<Gift/>} />
        <Route path='/mart' element={<Mart/>} />
        <Route path='/cpb' element={<Cpb/>} />
        <Route path='/bread' element={<Bread/>} />
        <Route path='/oil' element={<Oil/>} />
        <Route path='/culture' element={<Culture/>} />
        <Route path='/eat' element={<Eat/>} />
        <Route path='/delivery' element={<Delivery/>} />
        <Route pate='*' element={<Not />} />
      </Routes>
      </Main>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
