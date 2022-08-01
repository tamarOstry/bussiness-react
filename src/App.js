import React from 'react';
import  HomeUser  from './components/homeUser';
import { LoginAdmin } from './components/loginAdmin';
import  {BusinessDetails}  from './components/businessDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BusinessContext } from './api/businessContext';
import { ServicesContext } from './api/serviceContext';
import {Services} from './components/services';
import {Meetings} from './components/meetings';
import {BusinessServices} from './components/businessServices';
function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path='/' element={<HomeUser />} />
            <Route path='/admin' element={<LoginAdmin />} />
            <Route path='/businessDetails' element={<BusinessContext><BusinessDetails/></BusinessContext>} />
            <Route path='/services' element={<ServicesContext><Services/></ServicesContext>} />
            <Route path='/meetings' element={<Meetings/>} />
            <Route path='/businessServices' element={<BusinessServices/>} />
          </Routes>
        </Router>
    </div>
  );
}
export default App;