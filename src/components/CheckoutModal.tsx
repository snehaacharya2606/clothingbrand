'use client'

import React, { useState } from 'react'
import { useShop, Order } from '../context/ShopContext'

const PINCODE_MAP: Record<string, { city: string; state: string }> = {
  '560001': { city: 'Bengaluru', state: 'Karnataka' },
  '560038': { city: 'Bengaluru', state: 'Karnataka' },
  '400001': { city: 'Mumbai', state: 'Maharashtra' },
  '400013': { city: 'Mumbai', state: 'Maharashtra' },
  '110001': { city: 'New Delhi', state: 'Delhi' },
  '600001': { city: 'Chennai', state: 'Tamil Nadu' },
  '700001': { city: 'Kolkata', state: 'West Bengal' },
  '500001': { city: 'Hyderabad', state: 'Telangana' },
}

export default function CheckoutModal() {
  const {
    isCheckoutOpen,
    setIsCheckoutOpen,
    cart,
    cartSubtotal,
    cartDiscount,
    cartTotal,
    appliedCoupon,
    applyCoupon,
    removeCoupon,
    formatPrice,
    addOrder,
    user,
  } = useShop()

  const [step, setStep] = useState<1 | 2 | 3>(1) // 1: Address, 2: Payment, 3: Confirmation
  const [couponInput, setCouponInput] = useState('')
  const [couponMsg, setCouponMsg] = useState('')

  // Form Fields
  const [fullName, setFullName] = useState(user?.name || 'Sneha Acharya')
  const [phone, setPhone] = useState(user?.phone || '+91 98450 12345')
  const [email, setEmail] = useState(user?.email || 'sneha@example.com')
  const [line1, setLine1] = useState('14, Palm Grove Residency, 5th Main')
  const [line2, setLine2] = useState('Indiranagar')
  const [pincode, setPincode] = useState('560038')
  const [city, setCity] = useState('Bengaluru')
  const [state, setState] = useState('Karnataka')

  // B2B GST
  const [needsGst, setNeedsGst] = useState(false)
  const [gstin, setGstin] = useState('')
  const [companyName, setCompanyName] = useState('')

  // Payment Selection
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking' | 'cod'>('upi')
  const [upiId, setUpiId] = useState('sneha@okhdfcbank')
  const [placedOrder, setPlacedOrder] = useState<Order | null>(null)

  if (!isCheckoutOpen) return null

  const handlePincodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 6)
    setPincode(val)
    if (PINCODE_MAP[val]) {
      setCity(PINCODE_MAP[val].city)
      setState(PINCODE_MAP[val].state)
    }
  }

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault()
    const res = applyCoupon(couponInput)
    setCouponMsg(res.message)
  }

  const handleCompleteOrder = () => {
    const orderId = `RUH-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`
    const newOrder: Order = {
      id: orderId,
      date: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }),
      items: [...cart],
      subtotal: cartSubtotal,
      discount: cartDiscount,
      total: cartTotal,
      status: 'Confirmed',
      courier: 'Delhivery',
      trackingNumber: `DEL-${Math.floor(100000000 + Math.random() * 900000000)}-IN`,
      estimatedDelivery: '4 Business Days',
      shippingAddress: {
        id: `addr-${Date.now()}`,
        label: 'Home',
        fullName,
        phone,
        line1,
        line2,
        pincode,
        city,
        state,
        isDefault: true,
      },
      paymentMethod:
        paymentMethod === 'upi'
          ? `UPI (${upiId}) via Razorpay`
          : paymentMethod === 'card'
          ? 'Credit Card via Razorpay Secure'
          : paymentMethod === 'netbanking'
          ? 'Net Banking'
          : 'Cash on Delivery (OTP Verified)',
    }
    setPlacedOrder(newOrder)
    addOrder(newOrder)
    setStep(3)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111318]/75 backdrop-blur-sm transition-opacity"
        onClick={() => {
          if (step !== 3) setIsCheckoutOpen(false)
        }}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-4xl bg-[#F0EEE9] text-[#111318] rounded-2xl shadow-2xl border border-[#C6A56B]/40 overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 bg-[#111318] text-[#F0EEE9] flex items-center justify-between border-b border-[#C6A56B]/30">
          <div className="flex items-center gap-3">
            <span className="text-[#C6A56B] font-serif text-lg tracking-wider">RŪH</span>
            <span className="text-[11px] text-[#F0EEE9]/60 uppercase tracking-[0.16em]">
              Secure Indian Payment Rails (Razorpay / Cashfree)
            </span>
          </div>
          {step !== 3 && (
            <button
              type="button"
              onClick={() => setIsCheckoutOpen(false)}
              className="text-[#F0EEE9]/70 hover:text-[#C6A56B] text-sm cursor-pointer"
            >
              ✕
            </button>
          )}
        </div>

        {/* Step Indicator */}
        {step !== 3 && (
          <div className="px-6 py-3 bg-[#EAE6DE] border-b border-[#111318]/10 flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.12em]">
            <div className={`flex items-center gap-2 ${step === 1 ? 'text-[#111318]' : 'text-[#111318]/50'}`}>
              <span className="w-5 h-5 rounded-full bg-[#111318] text-[#F0EEE9] flex items-center justify-center text-[10px]">
                1
              </span>
              <span>Delivery & GST</span>
            </div>
            <span className="text-[#111318]/30">―――</span>
            <div className={`flex items-center gap-2 ${step === 2 ? 'text-[#111318]' : 'text-[#111318]/50'}`}>
              <span className="w-5 h-5 rounded-full bg-[#111318] text-[#F0EEE9] flex items-center justify-center text-[10px]">
                2
              </span>
              <span>Indian Payment Rails</span>
            </div>
          </div>
        )}

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {step === 1 && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {/* Form Left (7 cols) */}
              <div className="md:col-span-7 space-y-4">
                <h3 className="font-serif text-xl text-[#111318] font-normal mb-2">
                  Client & Shipping Destination
                </h3>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#111318]/70 block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-[#111318]/20 px-3 py-2 text-xs focus:outline-none focus:border-[#C6A56B]"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#111318]/70 block mb-1">
                      Phone (+91 OTP) *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-white border border-[#111318]/20 px-3 py-2 text-xs focus:outline-none focus:border-[#C6A56B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#111318]/70 block mb-1">
                    Email Address (For Tax Receipt & Care Guide) *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-white border border-[#111318]/20 px-3 py-2 text-xs focus:outline-none focus:border-[#C6A56B]"
                  />
                </div>

                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#111318]/70 block mb-1">
                    Street Address & Apartment *
                  </label>
                  <input
                    type="text"
                    required
                    value={line1}
                    onChange={(e) => setLine1(e.target.value)}
                    placeholder="House / Flat No, Building name"
                    className="w-full bg-white border border-[#111318]/20 px-3 py-2 text-xs focus:outline-none focus:border-[#C6A56B]"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    value={line2}
                    onChange={(e) => setLine2(e.target.value)}
                    placeholder="Locality / Landmark"
                    className="w-full bg-white border border-[#111318]/20 px-3 py-2 text-xs focus:outline-none focus:border-[#C6A56B]"
                  />
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#111318]/70 block mb-1">
                      Pincode *
                    </label>
                    <input
                      type="text"
                      maxLength={6}
                      required
                      value={pincode}
                      onChange={handlePincodeChange}
                      placeholder="e.g. 560038"
                      className="w-full bg-white border border-[#111318]/20 px-3 py-2 text-xs focus:outline-none focus:border-[#C6A56B] font-mono"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#111318]/70 block mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={city}
                      className="w-full bg-[#EAE6DE] border border-[#111318]/15 px-3 py-2 text-xs text-[#111318]/80 cursor-not-allowed"
                    />
                  </div>
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#111318]/70 block mb-1">
                      State
                    </label>
                    <input
                      type="text"
                      readOnly
                      value={state}
                      className="w-full bg-[#EAE6DE] border border-[#111318]/15 px-3 py-2 text-xs text-[#111318]/80 cursor-not-allowed"
                    />
                  </div>
                </div>

                {/* GST Toggle */}
                <div className="pt-3 border-t border-[#111318]/10">
                  <label className="flex items-center gap-2 cursor-pointer text-[11px] text-[#111318]">
                    <input
                      type="checkbox"
                      checked={needsGst}
                      onChange={(e) => setNeedsGst(e.target.checked)}
                      className="rounded-none text-[#111318]"
                    />
                    <span className="font-semibold">Add Corporate GSTIN for 18% Input Tax Credit</span>
                  </label>
                  {needsGst && (
                    <div className="grid grid-cols-2 gap-3 mt-3 animate-fadeIn">
                      <input
                        type="text"
                        placeholder="GSTIN (15 Digits)"
                        value={gstin}
                        onChange={(e) => setGstin(e.target.value.toUpperCase())}
                        className="bg-white border border-[#111318]/20 px-3 py-2 text-xs uppercase font-mono"
                      />
                      <input
                        type="text"
                        placeholder="Company / Legal Entity Name"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="bg-white border border-[#111318]/20 px-3 py-2 text-xs"
                      />
                    </div>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="w-full ruh-btn-primary py-3.5 text-[11px] tracking-[0.16em] mt-4"
                >
                  Continue to Indian Payment Rails →
                </button>
              </div>

              {/* Order Summary Right (5 cols) */}
              <div className="md:col-span-5 bg-[#EAE6DE] p-5 border border-[#111318]/10 flex flex-col justify-between">
                <div>
                  <h4 className="font-serif text-lg text-[#111318] mb-3 pb-2 border-b border-[#111318]/10">
                    Order Summary ({cart.length} items)
                  </h4>

                  <div className="space-y-3 max-h-48 overflow-y-auto mb-4">
                    {cart.map((item, idx) => (
                      <div key={idx} className="flex gap-3 text-[11px]">
                        <img
                          src={item.product.primaryImage}
                          alt={item.product.name}
                          className="w-12 h-14 object-cover border border-[#111318]/10 flex-shrink-0"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-[#111318] line-clamp-1">{item.product.name}</p>
                          <p className="text-[#111318]/60">Qty: {item.quantity} · Size: {item.size}</p>
                          <p className="font-semibold text-[#111318]">{formatPrice(item.product.price * item.quantity)}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Promo Code Input */}
                  <div className="pt-3 border-t border-[#111318]/10 mb-4">
                    <form onSubmit={handleApplyCoupon} className="flex gap-2">
                      <input
                        type="text"
                        value={couponInput}
                        onChange={(e) => setCouponInput(e.target.value.toUpperCase())}
                        placeholder="Coupon Code"
                        className="flex-1 bg-white border border-[#111318]/20 px-2.5 py-1.5 text-xs font-mono uppercase"
                      />
                      <button
                        type="submit"
                        className="bg-[#111318] text-[#F0EEE9] px-3 py-1.5 text-[10px] uppercase font-semibold cursor-pointer"
                      >
                        Apply
                      </button>
                    </form>
                    {couponMsg && (
                      <p className="text-[10px] text-[#C6A56B] font-medium mt-1">
                        {couponMsg}
                      </p>
                    )}
                    {appliedCoupon && (
                      <div className="flex items-center justify-between mt-1 text-[10px] text-[#C6A56B]">
                        <span>Applied: {appliedCoupon.code} (-{appliedCoupon.discountPercent}%)</span>
                        <button type="button" onClick={removeCoupon} className="underline text-red-700 cursor-pointer">
                          Remove
                        </button>
                      </div>
                    )}
                  </div>

                  <div className="space-y-1.5 text-[12px] pt-3 border-t border-[#111318]/10">
                    <div className="flex justify-between text-[#111318]/70">
                      <span>Bag Subtotal</span>
                      <span>{formatPrice(cartSubtotal)}</span>
                    </div>
                    {cartDiscount > 0 && (
                      <div className="flex justify-between text-[#C6A56B] font-semibold">
                        <span>Campaign Privilege ({appliedCoupon?.code})</span>
                        <span>-{formatPrice(cartDiscount)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-[#111318]/70">
                      <span>Express Shipping (Delhivery Air)</span>
                      <span className="text-[#111318] font-semibold">Complimentary</span>
                    </div>
                    <div className="pt-2 border-t border-[#111318]/10 flex justify-between font-serif text-base text-[#111318] font-normal">
                      <span>Total Payable</span>
                      <span className="font-semibold">{formatPrice(cartTotal)}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#111318]/10 text-[10px] text-[#111318]/50 text-center font-light">
                  Includes Midnight Black rigid box packaging & GST invoice.
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="text-center mb-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] font-semibold block mb-1">
                  PAYMENT GATEWAY (RAZORPAY INTEGRATED)
                </span>
                <h3 className="font-serif text-2xl text-[#111318]">
                  Select Indian Payment Method
                </h3>
                <p className="text-xs text-[#111318]/60 mt-1">
                  Total Amount: <strong className="text-[#111318] font-bold">{formatPrice(cartTotal)}</strong>
                </p>
              </div>

              {/* Payment Methods Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {[
                  { id: 'upi', label: 'UPI / QR Code', sub: 'Instant GPay, PhonePe, Paytm' },
                  { id: 'card', label: 'Credit / Debit', sub: 'Visa, Mastercard, RuPay' },
                  { id: 'netbanking', label: 'Net Banking', sub: 'HDFC, ICICI, SBI, Axis' },
                  { id: 'cod', label: 'Cash on Delivery', sub: 'SMS OTP Verified' },
                ].map((m) => (
                  <button
                    key={m.id}
                    type="button"
                    onClick={() => setPaymentMethod(m.id as any)}
                    className={`p-3.5 text-left rounded-xl border transition-all cursor-pointer ${
                      paymentMethod === m.id
                        ? 'border-[#C6A56B] bg-[#111318] text-[#F0EEE9] shadow-md'
                        : 'border-[#111318]/15 bg-white hover:border-[#111318] text-[#111318]'
                    }`}
                  >
                    <span className="text-[11px] font-bold block uppercase">{m.label}</span>
                    <span className="text-[9px] opacity-70 block mt-0.5 leading-tight">{m.sub}</span>
                  </button>
                ))}
              </div>

              {/* Selected Payment Configuration */}
              <div className="p-6 bg-white rounded-xl border border-[#111318]/15 space-y-4">
                {paymentMethod === 'upi' && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-3 bg-[#F0EEE9] border border-[#C6A56B]/30">
                      <div className="w-20 h-20 bg-white border border-black/10 flex items-center justify-center p-1">
                        <img
                          src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=upi://pay?pa=ruh.clothing@okhdfcbank&pn=RUH_Apparel"
                          alt="UPI QR Code"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="flex-1 text-[11px]">
                        <p className="font-semibold text-[#111318]">Scan with any Indian UPI App</p>
                        <p className="text-[#111318]/60 mt-0.5">Google Pay, PhonePe, Paytm, CRED UPI</p>
                        <span className="inline-block mt-1 px-2 py-0.5 bg-[#111318] text-[#F0EEE9] text-[9px] font-mono">
                          VPA: ruh.clothing@okhdfcbank
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-[#111318]/70 block mb-1">
                        Or Enter UPI ID / VPA
                      </label>
                      <input
                        type="text"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                        placeholder="yourname@okhdfcbank"
                        className="w-full bg-[#F0EEE9] border border-[#111318]/20 px-3 py-2 text-xs focus:outline-none focus:border-[#C6A56B] font-mono"
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'card' && (
                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="text-[10px] uppercase text-[#111318]/70 block mb-1">Card Number</label>
                      <input
                        type="text"
                        defaultValue="4111 2222 3333 4444"
                        className="w-full bg-[#F0EEE9] border border-[#111318]/20 px-3 py-2 font-mono"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] uppercase text-[#111318]/70 block mb-1">Expiry</label>
                        <input
                          type="text"
                          defaultValue="08/29"
                          className="w-full bg-[#F0EEE9] border border-[#111318]/20 px-3 py-2 font-mono"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase text-[#111318]/70 block mb-1">CVV</label>
                        <input
                          type="password"
                          defaultValue="782"
                          className="w-full bg-[#F0EEE9] border border-[#111318]/20 px-3 py-2 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'netbanking' && (
                  <div>
                    <label className="text-[10px] uppercase text-[#111318]/70 block mb-1">Choose Bank</label>
                    <select className="w-full bg-[#F0EEE9] border border-[#111318]/20 px-3 py-2 text-xs">
                      <option>HDFC Bank</option>
                      <option>ICICI Bank</option>
                      <option>State Bank of India (SBI)</option>
                      <option>Axis Bank</option>
                      <option>Kotak Mahindra Bank</option>
                    </select>
                  </div>
                )}

                {paymentMethod === 'cod' && (
                  <div className="p-3 bg-[#EAE6DE] text-xs text-[#111318]/80 leading-relaxed">
                    <p className="font-semibold text-[#111318] mb-1">Cash on Delivery Verification</p>
                    <p>An automated WhatsApp/SMS verification code will be dispatched to <strong>{phone}</strong> to confirm this high-value capsule garment dispatch.</p>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="ruh-btn-secondary py-3 px-6 text-[11px]"
                >
                  ← Back
                </button>
                <button
                  type="button"
                  onClick={handleCompleteOrder}
                  className="flex-1 ruh-btn-primary py-3.5 text-[11px] tracking-[0.16em]"
                >
                  Authorize Payment & Place Order ({formatPrice(cartTotal)})
                </button>
              </div>
            </div>
          )}

          {step === 3 && placedOrder && (
            <div className="max-w-xl mx-auto text-center py-6 animate-fadeIn">
              <div className="w-14 h-14 rounded-full bg-[#C6A56B] text-[#111318] font-bold text-2xl flex items-center justify-center mx-auto mb-4">
                ✓
              </div>
              <span className="text-[10px] uppercase tracking-[0.22em] text-[#C6A56B] font-semibold block mb-1">
                DISPATCH RESERVED · EDITION 01
              </span>
              <h2 className="font-serif text-3xl text-[#111318] font-normal mb-2">
                Thank You for Choosing RŪH
              </h2>
              <p className="text-xs text-[#111318]/70 font-light max-w-md mx-auto mb-6">
                Your order <strong>{placedOrder.id}</strong> has been logged. A confirmation dispatch and digital GST invoice receipt have been sent to <strong>{email}</strong>.
              </p>

              {/* Order Card Preview */}
              <div className="bg-[#EAE6DE] p-6 border border-[#111318]/15 text-left mb-6 text-xs space-y-3">
                <div className="flex justify-between pb-3 border-b border-[#111318]/10 font-semibold">
                  <span>Order Identifier:</span>
                  <span className="font-mono text-[#111318]">{placedOrder.id}</span>
                </div>
                <div className="flex justify-between">
                  <span>Courier Partner:</span>
                  <span>{placedOrder.courier} Express Air</span>
                </div>
                <div className="flex justify-between">
                  <span>AWB Tracking Number:</span>
                  <span className="font-mono text-[#C6A56B] font-bold">{placedOrder.trackingNumber}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery:</span>
                  <span>{placedOrder.estimatedDelivery} to {city}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#111318]/10 font-bold">
                  <span>Paid Amount:</span>
                  <span>{formatPrice(placedOrder.total)} ({placedOrder.paymentMethod})</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => alert(`Downloading GST Tax Invoice for ${placedOrder.id}...`)}
                  className="px-5 py-2.5 bg-white border border-[#111318]/25 text-[11px] uppercase tracking-wider font-semibold cursor-pointer"
                >
                  Download GST Tax Invoice (PDF)
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setIsCheckoutOpen(false)
                    setStep(1)
                  }}
                  className="px-6 py-2.5 bg-[#111318] text-[#F0EEE9] hover:bg-[#C6A56B] hover:text-[#111318] text-[11px] uppercase tracking-[0.14em] font-semibold cursor-pointer"
                >
                  Return to Archive
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

