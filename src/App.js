import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './compo/Home';
import Contact from './compo/Contact';
import Deposit from './compo/Deposit';
import Withdraw from './compo/Withdraw';
import Createacc from './compo/Createacc';
import Balance from './compo/Balance';
import About from './compo/About';
import Pinch from './compo/Pinch';
import Accsum from './compo/Accsum';
import Fund from './compo/Fund';
import Nav from './compo/Nav';






function App() {
  
  return (
    <div >
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/deposit' element={<Deposit />}></Route>
          <Route path='/withdraw' element={<Withdraw />}></Route>
          <Route path='/createacc' element={<Createacc />}></Route>
          <Route path='/balance' element={<Balance />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/pinch' element={<Pinch />}></Route>
          <Route path='/accsum' element={<Accsum />}></Route>
          <Route path='/fund' element={<Fund />}></Route>


      </Routes>
      </BrowserRouter>
     
  


</div>
  );
}

export default App;
