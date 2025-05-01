import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Customer from './components/Customer.jsx'
import Seller from './components/Seller.jsx'
import Product from './components/Product.jsx'
import Data from './components/Data.jsx'
import DataLayout from './components/DataLayout.jsx'
import ProductDetail from './components/ProductDetail.jsx'
import Image from './components/Image.jsx'
import NotFound from './components/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        {/** Star Segment */}
        <Route path="/images/*" element={<Image />}/>
        {/* Nested Routes */}
        <Route path='/data' element={<DataLayout />}>
          {/* Index Route */}
          <Route index element={<Data />} />
          <Route path="customers" element={<Customer />}/>
          <Route path="sellers" element={<Seller />}/>
          <Route path="products" element={<Product />}/>
          {/* Dynamic Nested Routes with Params */}
          <Route path="products/:id/:name" element={<ProductDetail />}/>
        </Route>
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
