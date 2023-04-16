import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Login from './pages/login';
import Shop from './pages/shop';

function App() {
  return (
    <Router>
      <nav>
        <button><Link to="/login">Login</Link></button>
        <button><Link to="/shop">Shop</Link></button>
      </nav>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="shop" element={<Shop />} />
        <Route path="*" element={<Shop />} />
      </Routes>
    </Router>
  );
}

export default App;
