'use client'

import React, { useState } from 'react'
import { useShop } from '../context/ShopContext'

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    cartCount,
    formatPrice,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    setIsCheckoutOpen,
  } = useShop()

  const [couponInput, setCouponInput] = useState('')
  const [couponMsg, setCouponMsg] = useState('')

  if (!isCartOpen) return null

  const freeShippingThreshold = 2500 // ₹2,500
  const progressPercent = Math.min(100, Math.round((cartSubtotal / freeShippingThreshold) * 100))
  const remaining = freeShippingThreshold - cartSubtotal

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault()
    const res = applyCoupon(couponInput)
    setCouponMsg(res.message)
  }

  const handleProceedToCheckout = () => {
    setIsCartOpen(false)
    setIsCheckoutOpen(true)
  }

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111318]/65 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      {/* Drawer */}
      <div className="relative w-full max-w-md bg-[#F0EEE9] text-[#111318] h-full shadow-2xl flex flex-col justify-between z-10 border-l border-[#111318]/15">
        {/* Drawer Header */}
        <div className="p-6 border-b border-[#111318]/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <h2 className="font-serif text-xl sm:text-2xl text-[#111318] font-normal">
              Your Wardrobe Bag
            </h2>
            <span className="text-[12px] text-[#C6A56B] font-semibold">
              ({cartCount} {cartCount === 1 ? 'piece' : 'pieces'})
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="p-1.5 text-[#111318] hover:text-[#C6A56B] transition-colors cursor-pointer"
            aria-label="Close Bag"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="px-6 py-3.5 bg-[#EAE6DE] border-b border-[#111318]/8">
          <div className="flex items-center justify-between text-[11px] font-medium tracking-[0.06em] text-[#111318] mb-1.5">
            {remaining > 0 ? (
              <span>
                Add <strong className="text-[#C6A56B] font-semibold">{formatPrice(remaining)}</strong> more for Complimentary Express Delivery
              </span>
            ) : (
              <span className="text-[#111318] font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#C6A56B]" />
                You Qualify for Complimentary Express Delivery
              </span>
            )}
          </div>
          <div className="w-full bg-[#111318]/15 h-1.5 rounded-full overflow-hidden">
            <div
              className="bg-[#C6A56B] h-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* Item List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-5">
          {cart.length === 0 ? (
            <div className="text-center py-16 flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#111318]/5 flex items-center justify-center mb-4 text-[#111318]/40">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </div>
              <p className="font-serif text-lg text-[#111318] mb-1">
                Your wardrobe bag is empty
              </p>
              <p className="text-[12px] text-[#111318]/60 font-light max-w-xs mb-6">
                Explore our Edition 01 permanent foundations designed to wear on repeat.
              </p>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="ruh-btn-primary"
              >
                Explore Foundations
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={`${item.product.id}-${item.size}-${item.color}`}
                className="flex gap-4 pb-5 border-b border-[#111318]/8"
              >
                {/* Thumbnail */}
                <div className="w-18 h-22 bg-[#E7E4DC] flex-shrink-0 overflow-hidden border border-[#111318]/10">
                  <img
                    src={item.product.primaryImage}
                    alt={item.product.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif text-[13px] text-[#111318] font-normal leading-snug">
                        {item.product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.product.id, item.size)}
                        className="text-[#111318]/40 hover:text-[#111318] p-0.5 cursor-pointer text-xs"
                        title="Remove piece"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="text-[10px] text-[#111318]/60 mt-1 flex items-center gap-2">
                      <span>Size: <strong>{item.size}</strong></span>
                      <span>·</span>
                      <span>{item.color}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    {/* Quantity Selector */}
                    <div className="flex items-center rounded-full border border-[#111318]/20 bg-white overflow-hidden px-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity - 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs hover:bg-[#111318]/5 text-[#111318] cursor-pointer"
                      >
                        -
                      </button>
                      <span className="w-6 text-center text-xs font-mono font-medium">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.product.id, item.size, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center text-xs hover:bg-[#111318]/5 text-[#111318] cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <span className="text-[12px] font-semibold text-[#111318]">
                      {formatPrice(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Checkout Summary */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-[#111318]/10 bg-[#EAE6DE] space-y-3">
            {/* Promo code entry */}
            <form onSubmit={handleApplyCoupon} className="flex gap-2">
              <input
                type="text"
                placeholder="PROMO CODE (e.g. WELCOME10)"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                className="flex-1 bg-white rounded-full border border-[#111318]/20 px-3 py-1.5 text-xs font-mono uppercase focus:border-[#C6A56B]"
              />
              <button
                type="submit"
                className="ruh-btn-primary py-1.5 px-4 text-[10px]"
              >
                Apply
              </button>
            </form>
            {couponMsg && (
              <p className="text-[10px] text-[#C6A56B] font-medium">{couponMsg}</p>
            )}
            {appliedCoupon && (
              <div className="flex items-center justify-between text-[10px] text-[#C6A56B]">
                <span>Applied: {appliedCoupon.code} (-{appliedCoupon.discountPercent}%)</span>
                <button type="button" onClick={removeCoupon} className="underline text-red-600 cursor-pointer">
                  Remove
                </button>
              </div>
            )}

            <div className="space-y-1.5 text-[11px] pt-2 border-t border-[#111318]/10">
              <div className="flex justify-between text-[#111318]/70">
                <span>Subtotal</span>
                <span>{formatPrice(cartSubtotal)}</span>
              </div>
              {cartDiscount > 0 && (
                <div className="flex justify-between text-[#C6A56B] font-semibold">
                  <span>Privilege Savings</span>
                  <span>-{formatPrice(cartDiscount)}</span>
                </div>
              )}
              <div className="flex justify-between text-[#111318]/70">
                <span>Doorstep Packaging & Delivery</span>
                <span className="text-[#111318] font-semibold">
                  {cartSubtotal >= freeShippingThreshold ? 'Complimentary' : formatPrice(250)}
                </span>
              </div>
              <div className="pt-2 border-t border-[#111318]/10 flex justify-between text-[14px] font-serif font-normal text-[#111318]">
                <span>Total Payable</span>
                <span className="font-semibold">{formatPrice(cartTotal)}</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleProceedToCheckout}
              className="w-full ruh-btn-primary py-3.5 text-[11px] tracking-[0.16em]"
            >
              Proceed to Secure Checkout · {formatPrice(cartTotal)}
            </button>

            <p className="text-[10px] text-center text-[#111318]/60 uppercase tracking-[0.1em]">
              UPI · Cards · Net Banking · Cash on Delivery
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
