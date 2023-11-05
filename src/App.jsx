import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Overview from './pages/Overview.jsx';
import SalesReport from './pages/SalesReport.jsx';
import Customer from './pages/Customer.jsx';
import Inventory from './pages/Inventory.jsx';
import AddProduct from './pages/AddProduct.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/sales-report" element={<SalesReport />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/inventory/add" element={<AddProduct />} />
        <Route path="/customers" element={<Customer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
