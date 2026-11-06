
import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Leadings from './pages/leading/Leadings.jsx';
import Product from './pages/productdetail/Product.jsx';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Leadings />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
