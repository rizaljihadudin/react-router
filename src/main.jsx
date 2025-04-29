import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Customer from './components/Customer.jsx'
import Seller from './components/Seller.jsx'
import Product from './components/Product.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        {/* Nested Routes */}
        <Route path='/data'>
          <Route path="customers" element={<Customer />}/>
          <Route path="sellers" element={<Seller />}/>
          <Route path="product" element={<Product />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
