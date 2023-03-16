
import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Signup from './Pages/Signup';
import Register from './Pages/Registration';
import DispData from "./Pages/Dispdata";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/registration' element={<Register/>}/>
        <Route path='/dispdata' element={<DispData/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
