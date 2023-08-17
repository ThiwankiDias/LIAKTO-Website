
import './App.css';

import React from 'react';
import Home from './routes/Home';
import About from './routes/About';
import Service from './routes/Service';
import Contact from './routes/Contact';
import LoginRoute from './routes/LoginRoute';
import {Route, Routes} from 'react-router-dom';
import SignRoute from './routes/signRoute';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={ <Home/>} />
        <Route path='/about' element={ <About/>} />
        <Route path='/service' element={ <Service/>} />
        <Route path='/contact' element={ <Contact/>} />
        <Route path='/login' element={ <LoginRoute/>} />
        <Route path='/signup' element={<SignRoute/>}/>
      </Routes>
        
       
    </div>
  );
}

export default App;
