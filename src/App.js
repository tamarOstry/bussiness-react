import './App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import React from 'react';
import {HomeUser} from './components/homeUser';
import {LoginAdmin} from './components/loginAdmin';
import {AdminDetails} from './components/adminDetails';

function App() {
  return (
    <div>
     <BrowserRouter>
      <Route path='/' component={HomeUser} exact />
      <Route path='/admin' component={LoginAdmin} />
      <Route path='/adminDetails' component={AdminDetails} />
    </BrowserRouter>
    </div>
  );
}

export default App;
