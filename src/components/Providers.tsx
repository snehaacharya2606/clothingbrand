'use client'

import React from 'react'
import { ShopProvider } from '../context/ShopContext'
import CartDrawer from './CartDrawer'
import CheckoutModal from './CheckoutModal'
import SearchModal from './SearchModal'
import PDPModal from './PDPModal'
import AuthModal from './AuthModal'
import CustomerDashboard from './CustomerDashboard'
import FloatingWhatsApp from './FloatingWhatsApp'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ShopProvider>
      {children}
      <CartDrawer />
      <CheckoutModal />
      <SearchModal />
      <PDPModal />
      <AuthModal />
      <CustomerDashboard />
      <FloatingWhatsApp />
    </ShopProvider>
  )
}

