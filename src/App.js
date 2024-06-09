
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Main from './components/section/Main';
import Header from './components/section/Header';
import Footer from './components/section/Footer';


import Home from './page/Home';
import Specialcoffee from './page/Specialcoffee';
import Coffee from './page/Coffee';
import Gift from './page/Gift';
import Pay from './page/Pay';
import Mart from './page/Mart';
import Cpb from './page/Cpb';
import Bread from './page/Bread';
import Oil from './page/Oil';
import Culture from './page/Culture';
import Eat from './page/Eat';
import Not from './page/Not';
import Delivery from './page/Delivery';


const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Main>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/specialcoffee' element={<Specialcoffee/>} />
            <Route path='/coffee' element={<Coffee/>} />
            <Route path='/gift' element={<Gift/>} />
            <Route path='/pay' element={<Pay/>} />
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
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
