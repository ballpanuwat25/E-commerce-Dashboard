import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Overview from './pages/Overview.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
