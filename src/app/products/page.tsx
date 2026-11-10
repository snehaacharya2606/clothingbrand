'use client'

import React, { Suspense } from 'react'
import Header from '@/components/Header'
import ProductGrid from '@/components/ProductGrid'
import Footer from '@/components/Footer'

export default function ProductsPage() {
  return (
    <div className="ruh-app min-h-screen flex flex-col bg-[#F0EEE9] text-[#111318]">
      <Header />
      <main className="flex-1 py-4">
        <Suspense fallback={<div className="p-12 text-center text-xs">Loading Products...</div>}>
          <ProductGrid />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

