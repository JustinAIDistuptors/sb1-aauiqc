import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Future from './pages/Future';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Tools from './pages/Tools';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/future" element={<Future />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tools" element={<Tools />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;