import React from 'react';
import { HomeUser } from './components/homeUser';
import { LoginAdmin } from './components/loginAdmin';
import { BusinessDetails } from './components/businessDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomeUser />} />
          <Route path='/admin' element={<LoginAdmin />} />
          <Route path='/businessDetails' element={<BusinessDetails />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;