import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import MainLayout from './layout/MainLayout'
import { Toaster } from "react-hot-toast";
import HomePage from './pages/HomePage'
import Cart from './pages/Cart'
import ProductDetails from './pages/DetailsProduct'
import Products from './pages/Products'
import SearchResults from './pages/SearchResults'
import Orders from './pages/Orders'

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/categoria/:categoryId" element={<Products />} />
          <Route path="/carrito" element={<Cart />} />
          <Route path="/busqueda" element={<SearchResults />} />
          <Route path="/producto/:id" element={<ProductDetails />} />
          <Route path="/mis-pedidos" element={<Orders />} />
        </Route>
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  </StrictMode>
)
