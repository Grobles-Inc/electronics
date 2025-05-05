import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import MainLayout from './layout/MainLayout'

import HomePage from './pages/HomePage'
import Cart from './pages/Cart'
import ProductDetails from './pages/DetailsProduct'
import Products from './pages/Products'
import SearchResults from './pages/SearchResults'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/producto/:id" element={<ProductDetails />} />
          <Route path="/busqueda" element={<SearchResults />} />
          <Route path=":categoryId" element={<Products />} />
        </Route>
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
