'use client'

import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useShop } from '@/context/ShopContext'
import Link from 'next/link'

export default function OrdersPage() {
  const { orders, formatPrice } = useShop()

  return (
    <div className="ruh-app min-h-screen flex flex-col bg-[#F0EEE9] text-[#111318]">
      <Header />
      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-8 py-12 sm:py-16">
        {/* Page Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#111318]/10 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-[#9B7C38]" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9B7C38] font-bold">
                ACCOUNT ARCHIVE
              </span>
            </div>
            <h1 className="font-serif text-3xl sm:text-4xl text-[#111318] font-medium">My Orders & Invoices</h1>
            <p className="text-xs sm:text-sm text-[#5A5D66] font-light mt-1">
              Track your confirmed garment dispatches, courier tracking numbers, and settled invoice prices.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="px-4 py-2 rounded-full bg-white border border-[#111318]/10 text-xs font-mono font-semibold text-[#111318] shadow-sm">
              {orders.length} Dispatches Recorded
            </span>
          </div>
        </div>

        {/* Orders List */}
        {orders.length === 0 ? (
          <div className="p-16 text-center bg-white rounded-2xl border border-[#111318]/8 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#FAF8F5] text-xl flex items-center justify-center mx-auto text-[#9B7C38]">
              🛍️
            </div>
            <h3 className="font-serif text-xl text-[#111318]">No orders found yet</h3>
            <p className="text-xs text-[#5A5D66] max-w-sm mx-auto">
              Your bag is currently empty. Explore our 280 GSM heavyweight foundational archive to place your inaugural commission.
            </p>
            <div className="pt-2">
              <Link
                href="/products"
                className="inline-block px-6 py-2.5 rounded-full bg-[#111318] hover:bg-[#252830] text-[#F0EEE9] text-xs font-semibold uppercase tracking-wider shadow-sm"
              >
                Browse T-Shirt Collection →
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <div
                key={order.id}
                className="bg-white rounded-2xl border border-[#111318]/8 shadow-sm hover:shadow-md transition-shadow p-6 sm:p-8 space-y-6"
              >
                {/* Order Top Bar: ID, Date, Status */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#111318]/8">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="font-mono text-xs sm:text-sm font-bold text-[#9B7C38] bg-[#FAF3E0] px-3 py-1 rounded-lg border border-[#9B7C38]/25">
                      {order.id}
                    </span>
                    <span className="text-xs text-[#6E7380] font-mono">
                      Placed on {order.date}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border ${
                        order.status === 'Delivered'
                          ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                          : 'bg-blue-100 text-blue-900 border-blue-300'
                      }`}
                    >
                      ● {order.status}
                    </span>
                  </div>

                  <div className="text-xs text-[#5A5D66] font-mono flex items-center gap-2">
                    <span>Courier: <strong className="text-[#111318]">{order.courier}</strong></span>
                    {order.trackingNumber && (
                      <span className="bg-[#FAF8F5] px-2 py-0.5 rounded border border-[#111318]/8">
                        {order.trackingNumber}
                      </span>
                    )}
                  </div>
                </div>

                {/* Items Purchased & EXTREME RIGHT FINAL PRICE */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                  {/* Left: Garments List */}
                  <div className="space-y-3 flex-1">
                    {order.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-4 p-3 bg-[#FAF8F5] rounded-xl border border-[#111318]/6"
                      >
                        <div className="w-14 h-16 bg-white rounded-lg border border-[#111318]/8 overflow-hidden flex-shrink-0">
                          {item.product.primaryImage ? (
                            <img
                              src={item.product.primaryImage}
                              alt={item.product.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-xs text-[#9B7C38]">
                              RŪH
                            </div>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="font-serif text-sm text-[#111318] font-semibold truncate">
                            {item.product.name}
                          </h4>
                          <p className="text-xs text-[#5A5D66] font-mono mt-0.5">
                            Size: <span className="font-bold text-[#9B7C38]">{item.size}</span> · Color: {item.color} · Qty: {item.quantity}
                          </p>
                        </div>
                        <span className="font-mono text-xs font-semibold text-[#111318]">
                          {formatPrice(item.product.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Right: Prominent Final Price on the Extreme Right */}
                  <div className="lg:border-l lg:border-[#111318]/8 lg:pl-8 flex flex-col justify-center items-start lg:items-end flex-shrink-0 min-w-[220px]">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-[#6E7380] font-bold block mb-1">
                      FINAL INVOICE PRICE
                    </span>
                    <p className="font-serif text-3xl sm:text-4xl text-[#111318] font-bold text-right tracking-tight">
                      {formatPrice(order.total)}
                    </p>
                    <span className="text-[11px] text-emerald-700 font-medium mt-1 flex items-center gap-1">
                      <span>✓</span> All Taxes & GST Paid
                    </span>
                    <div className="mt-4 flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => alert(`Downloading Invoice for ${order.id}...`)}
                        className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#FAF8F5] border border-[#111318]/15 text-xs font-semibold text-[#111318] shadow-sm transition-all"
                      >
                        Receipt ↗
                      </button>
                      <button
                        type="button"
                        onClick={() => alert(`Tracking parcel ${order.trackingNumber} with ${order.courier}...`)}
                        className="px-3.5 py-1.5 rounded-lg bg-[#111318] hover:bg-[#252830] text-[#F0EEE9] text-xs font-semibold transition-all shadow-sm"
                      >
                        Track Parcel
                      </button>
                    </div>
                  </div>
                </div>

                {/* Shipping Destination Footer */}
                <div className="pt-3 border-t border-[#111318]/6 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#6E7380]">
                  <span>
                    Delivering to: <strong className="text-[#111318]">{order.shippingAddress.fullName}</strong> · {order.shippingAddress.line1}, {order.shippingAddress.city} - {order.shippingAddress.pincode}
                  </span>
                  <span className="font-mono text-[11px] text-[#9B7C38]">
                    Method: {order.paymentMethod}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

