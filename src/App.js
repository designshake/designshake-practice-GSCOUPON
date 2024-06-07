
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


function App() {
  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
