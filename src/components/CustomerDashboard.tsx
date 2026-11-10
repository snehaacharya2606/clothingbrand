'use client'

import React, { useState } from 'react'
import { useShop, Order } from '../context/ShopContext'
import { PRODUCTS } from '../data/products'

export default function CustomerDashboard() {
  const {
    isProfileOpen,
    setIsProfileOpen,
    user,
    updateUser,
    logout,
    orders,
    addresses,
    addAddress,
    formatPrice,
    wishlist,
    toggleWishlist,
    addToCart,
    activeProfileTab,
    setActiveProfileTab,
  } = useShop()

  // Profile modification state
  const [editName, setEditName] = useState(user?.name || 'Sneha Acharya')
  const [editPhone, setEditPhone] = useState(user?.phone || '+91 98450 12345')
  const [editEmail, setEditEmail] = useState(user?.email || 'sneha@example.com')
  const [profileSavedToast, setProfileSavedToast] = useState(false)

  // Return request state
  const [returnOrderId, setReturnOrderId] = useState('')
  const [returnReason, setReturnReason] = useState('Size does not fit as expected')
  const [returnAction, setReturnAction] = useState<'Exchange Size' | 'Store Credit' | 'Refund to Source'>('Exchange Size')
  const [returnSubmitted, setReturnSubmitted] = useState(false)

  // New address state
  const [isAddingAddr, setIsAddingAddr] = useState(false)
  const [newLabel, setNewLabel] = useState<'Home' | 'Work' | 'Studio'>('Work')
  const [newLine1, setNewLine1] = useState('')
  const [newPincode, setNewPincode] = useState('')
  const [newCity, setNewCity] = useState('')
  const [newState, setNewState] = useState('')

  if (!isProfileOpen) return null

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault()
    if (!editName.trim()) return
    updateUser({
      name: editName.trim(),
      phone: editPhone.trim(),
      email: editEmail.trim(),
    })
    setProfileSavedToast(true)
    setTimeout(() => setProfileSavedToast(false), 3000)
  }

  const handleReturnSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setReturnSubmitted(true)
  }

  const handleCreateAddress = (e: React.FormEvent) => {
    e.preventDefault()
    addAddress({
      id: `addr-${Date.now()}`,
      label: newLabel,
      fullName: user?.name || 'Sneha Acharya',
      phone: user?.phone || '+91 98450 12345',
      line1: newLine1,
      pincode: newPincode,
      city: newCity || 'Bengaluru',
      state: newState || 'Karnataka',
      isDefault: false,
    })
    setIsAddingAddr(false)
    setNewLine1('')
    setNewPincode('')
  }

  const activeOrder = orders[0]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111318]/75 backdrop-blur-sm transition-opacity"
        onClick={() => setIsProfileOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl bg-[#F0EEE9] text-[#111318] rounded-2xl shadow-2xl border border-[#C6A56B]/40 overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col animate-fadeIn">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#111318] text-[#F0EEE9] flex items-center justify-between border-b border-[#C6A56B]/30">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-full bg-[#C6A56B] text-[#111318] flex items-center justify-center font-bold text-sm">
              {user?.name?.charAt(0) || 'R'}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="font-serif text-lg text-[#F0EEE9] leading-tight">
                  {user?.name || 'Client Archive'}
                </h2>
                <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#C6A56B]/20 text-[#C6A56B] border border-[#C6A56B]/30 font-bold">
                  Verified Member
                </span>
              </div>
              <span className="text-[10px] text-[#F0EEE9]/60 tracking-[0.14em] uppercase block mt-0.5 font-mono">
                {user?.phone || '+91 98450 12345'} · {user?.email || 'client@ruh.in'}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={logout}
              className="text-[10px] uppercase tracking-wider text-[#F0EEE9]/70 hover:text-red-400 cursor-pointer"
            >
              Sign Out
            </button>
            <button
              type="button"
              onClick={() => setIsProfileOpen(false)}
              className="w-8 h-8 rounded-full bg-[#1F222B] hover:bg-[#F0EEE9] hover:text-[#111318] text-[#F0EEE9] flex items-center justify-center transition-colors cursor-pointer text-xs"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="px-6 bg-[#EAE6DE] border-b border-[#111318]/10 flex items-center gap-2 overflow-x-auto text-[11px] font-semibold uppercase tracking-[0.12em]">
          {[
            { id: 'orders', label: `My Orders (${orders.length})` },
            { id: 'settings', label: 'Modify Profile Settings' },
            { id: 'tracking', label: 'Delhivery Live Tracking' },
            { id: 'addresses', label: `Addresses (${addresses.length})` },
            { id: 'returns', label: 'Returns & Exchange' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveProfileTab(tab.id as any)}
              className={`py-3 px-4 border-b-2 transition-colors cursor-pointer whitespace-nowrap ${
                activeProfileTab === tab.id
                  ? 'border-[#111318] text-[#111318] font-bold bg-[#F0EEE9]'
                  : 'border-transparent text-[#111318]/60 hover:text-[#111318]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {/* =================================================================
              TAB 1: ORDERS WITH FINAL PRICE ON THE EXTREME RIGHT
              ================================================================= */}
          {activeProfileTab === 'orders' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#111318]/10">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.16em] text-[#C6A56B] font-semibold block">
                    ORDERS ARCHIVE & OFFICIAL RECEIPTS
                  </span>
                  <p className="text-xs text-[#111318]/60 font-light mt-0.5">
                    Itemized list of purchases with courier fulfillment status and final prices.
                  </p>
                </div>
                <span className="text-xs font-mono text-[#111318]/50">{orders.length} Past Orders</span>
              </div>

              {orders.map((ord) => (
                <div
                  key={ord.id}
                  className="p-5 sm:p-6 bg-white rounded-xl border border-[#111318]/12 hover:border-[#C6A56B]/60 transition-all shadow-sm space-y-4"
                >
                  {/* Top Bar: Order ID, Date, Delivery Courier Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#111318]/8 text-xs">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono font-bold text-sm text-[#111318]">{ord.id}</span>
                      <span className="text-[#111318]/30">·</span>
                      <span className="text-[#111318]/60 font-mono">Placed on {ord.date}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-0.5 bg-emerald-500/10 text-emerald-800 text-[10px] uppercase font-bold tracking-wider rounded-full border border-emerald-500/30">
                        ● {ord.status}
                      </span>
                      <button
                        type="button"
                        onClick={() => alert(`Downloading official GST Tax Invoice for order ${ord.id}...`)}
                        className="text-[10px] uppercase tracking-wider text-[#111318] hover:text-[#C6A56B] underline cursor-pointer font-semibold"
                      >
                        Download Invoice
                      </button>
                    </div>
                  </div>

                  {/* Main Order Content: Items on Left, FINAL PRICE ON THE EXTREME RIGHT */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6">
                    {/* Left: Items in Order */}
                    <div className="flex-1 space-y-3">
                      {ord.items.map((it, idx) => (
                        <div key={idx} className="flex gap-4 items-center">
                          <img
                            src={it.product.primaryImage}
                            alt={it.product.name}
                            className="w-14 h-18 object-cover rounded-md border border-[#111318]/10 bg-[#E8E5DD] flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0 text-xs">
                            <span className="text-[9px] uppercase tracking-wider text-[#C6A56B] font-semibold block">
                              {it.product.subtitle || 'Edition 01'}
                            </span>
                            <h4 className="font-serif font-medium text-sm text-[#111318] truncate leading-tight">
                              {it.product.name}
                            </h4>
                            <p className="text-[11px] text-[#111318]/60 mt-0.5 font-mono">
                              Size: <strong className="text-[#111318]">{it.size}</strong> · Color: {it.color} · Qty: {it.quantity}
                            </p>
                          </div>
                        </div>
                      ))}

                      <div className="text-[11px] text-[#111318]/60 pt-1 font-light">
                        Shipped via <strong>{ord.courier} Express</strong> (AWB: <span className="font-mono">{ord.trackingNumber}</span>) · Delivery to {ord.shippingAddress?.city || 'Bengaluru'}
                      </div>
                    </div>

                    {/* EXTREME RIGHT: FINAL PRICE (EXACT REQUIREMENT) */}
                    <div className="text-right flex-shrink-0 sm:pl-8 sm:border-l border-[#111318]/10 pt-4 sm:pt-0 flex flex-col justify-center">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#111318]/50 font-bold block mb-0.5">
                        FINAL PRICE
                      </span>
                      <p className="font-serif text-2xl sm:text-3xl font-bold text-[#111318] leading-none">
                        {formatPrice(ord.total)}
                      </p>
                      {ord.discount > 0 && (
                        <span className="text-[10px] font-mono text-emerald-700 block mt-1">
                          Saved {formatPrice(ord.discount)} with promo
                        </span>
                      )}
                      <span className="text-[10px] font-mono text-[#111318]/60 block mt-1">
                        Paid via {ord.paymentMethod}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* =================================================================
              TAB 2: PROFILE MODIFICATION SETTINGS (EXACT REQUIREMENT)
              ================================================================= */}
          {activeProfileTab === 'settings' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="pb-3 border-b border-[#111318]/10">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#C6A56B] font-semibold block mb-0.5">
                  ACCOUNT CONFIGURATION
                </span>
                <h3 className="font-serif text-2xl text-[#111318]">Modify Personal Information</h3>
                <p className="text-xs text-[#111318]/60 font-light mt-0.5">
                  Update your contact details, mobile phone for SMS tracking, and primary email address.
                </p>
              </div>

              {profileSavedToast && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-800 rounded-xl text-xs font-semibold flex items-center gap-2 animate-fadeIn">
                  <span>✓</span>
                  <span>Your profile information has been saved successfully!</span>
                </div>
              )}

              <form onSubmit={handleProfileSave} className="p-6 bg-white rounded-xl border border-[#111318]/12 space-y-4 shadow-sm text-xs">
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[#111318]/70 block mb-1 font-bold">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={editName}
                    onChange={(e) => setEditName(e.target.value)}
                    placeholder="e.g. Sneha Acharya"
                    className="w-full px-4 py-2.5 bg-[#F0EEE9] border border-[#111318]/20 rounded-xl text-[#111318] outline-none focus:border-[#C6A56B] font-medium"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#111318]/70 block mb-1 font-bold">
                      Mobile Phone Number *
                    </label>
                    <input
                      type="text"
                      required
                      value={editPhone}
                      onChange={(e) => setEditPhone(e.target.value)}
                      placeholder="+91 98450 12345"
                      className="w-full px-4 py-2.5 bg-[#F0EEE9] border border-[#111318]/20 rounded-xl text-[#111318] outline-none focus:border-[#C6A56B] font-mono font-medium"
                    />
                    <span className="text-[9px] text-[#111318]/50 mt-1 block">Used for Delhivery delivery OTP & SMS updates</span>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#111318]/70 block mb-1 font-bold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={editEmail}
                      onChange={(e) => setEditEmail(e.target.value)}
                      placeholder="sneha@example.com"
                      className="w-full px-4 py-2.5 bg-[#F0EEE9] border border-[#111318]/20 rounded-xl text-[#111318] outline-none focus:border-[#C6A56B] font-medium"
                    />
                    <span className="text-[9px] text-[#111318]/50 mt-1 block">Used for digital GST invoices & receipts</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#111318]/10 flex items-center justify-end gap-3">
                  <button
                    type="submit"
                    className="ruh-btn-primary text-xs py-2.5 px-6 cursor-pointer"
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* TAB 3: LIVE COURIER TRACKING */}
          {activeProfileTab === 'tracking' && (
            <div className="space-y-6 max-w-3xl mx-auto">
              <div className="p-6 bg-white rounded-xl border border-[#111318]/15 space-y-4 shadow-sm">
                <div className="flex flex-col sm:flex-row justify-between pb-4 border-b border-[#111318]/10 gap-2">
                  <div>
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#C6A56B] font-bold block mb-1">
                      DELHIVERY AIR COURIER WEBHOOK
                    </span>
                    <h3 className="font-serif text-xl text-[#111318]">
                      AWB #{activeOrder?.trackingNumber || 'DEL-849204918-IN'}
                    </h3>
                  </div>
                  <div className="text-right">
                    <span className="text-[11px] text-[#111318]/60 block">Est. Delivery</span>
                    <span className="font-semibold text-sm text-[#111318]">{activeOrder?.estimatedDelivery || '12 Nov 2026'}</span>
                  </div>
                </div>

                <div className="py-6">
                  <div className="relative flex items-center justify-between">
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-[#111318]/15 -z-0" />
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3/4 h-1 bg-[#C6A56B] -z-0" />

                    {[
                      { step: 'Order Placed', time: '08 Nov, 10:30 AM', done: true },
                      { step: 'Packed in Mumbai Hub', time: '09 Nov, 02:15 PM', done: true },
                      { step: 'In Transit via Air', time: '10 Nov, 06:40 AM', done: true },
                      { step: 'Out for Delivery', time: 'Pending', done: false },
                    ].map((s, idx) => (
                      <div key={idx} className="flex flex-col items-center relative z-10 text-center">
                        <span
                          className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                            s.done ? 'bg-[#111318] text-[#C6A56B] border border-[#C6A56B]' : 'bg-[#EAE6DE] text-[#111318]/40 border border-[#111318]/20'
                          }`}
                        >
                          {s.done ? '✓' : idx + 1}
                        </span>
                        <span className="text-[11px] font-semibold text-[#111318] mt-2 block whitespace-nowrap">
                          {s.step}
                        </span>
                        <span className="text-[9px] text-[#111318]/50 block">{s.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#F0EEE9] rounded-xl text-xs text-[#111318]/75 flex items-center justify-between">
                  <span>Current Hub: <strong>Bengaluru Central Delivery Center</strong></span>
                  <button
                    type="button"
                    onClick={() => alert('Dispatching SMS notification update to your registered phone...')}
                    className="text-[10px] uppercase tracking-wider text-[#C6A56B] font-bold underline cursor-pointer"
                  >
                    Send Tracking SMS
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: SAVED ADDRESSES */}
          {activeProfileTab === 'addresses' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-3 border-b border-[#111318]/10">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#C6A56B] font-semibold">
                  DELIVERY ADDRESS BOOK
                </span>
                <button
                  type="button"
                  onClick={() => setIsAddingAddr(!isAddingAddr)}
                  className="ruh-btn-primary text-[10px] py-1.5 px-4 cursor-pointer"
                >
                  + Add Address
                </button>
              </div>

              {isAddingAddr && (
                <form onSubmit={handleCreateAddress} className="p-5 bg-white rounded-xl border border-[#C6A56B] space-y-3 animate-fadeIn text-xs shadow-sm">
                  <div className="grid grid-cols-3 gap-2">
                    {(['Home', 'Work', 'Studio'] as const).map((lbl) => (
                      <button
                        key={lbl}
                        type="button"
                        onClick={() => setNewLabel(lbl)}
                        className={`py-1.5 rounded-lg border text-center font-medium ${newLabel === lbl ? 'bg-[#111318] text-[#F0EEE9]' : 'bg-[#F0EEE9]'}`}
                      >
                        {lbl}
                      </button>
                    ))}
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Street Address, Building, Floor"
                    value={newLine1}
                    onChange={(e) => setNewLine1(e.target.value)}
                    className="w-full bg-[#F0EEE9] border border-[#111318]/20 px-3 py-2 rounded-lg text-xs outline-none"
                  />
                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      required
                      placeholder="Pincode (e.g. 560038)"
                      value={newPincode}
                      onChange={(e) => setNewPincode(e.target.value)}
                      className="bg-[#F0EEE9] border border-[#111318]/20 px-3 py-2 rounded-lg text-xs outline-none"
                    />
                    <input
                      type="text"
                      placeholder="City"
                      value={newCity}
                      onChange={(e) => setNewCity(e.target.value)}
                      className="bg-[#F0EEE9] border border-[#111318]/20 px-3 py-2 rounded-lg text-xs outline-none"
                    />
                    <input
                      type="text"
                      placeholder="State"
                      value={newState}
                      onChange={(e) => setNewState(e.target.value)}
                      className="bg-[#F0EEE9] border border-[#111318]/20 px-3 py-2 rounded-lg text-xs outline-none"
                    />
                  </div>
                  <div className="flex justify-end gap-2 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingAddr(false)}
                      className="px-3 py-1.5 text-xs text-[#111318]/60"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="ruh-btn-primary px-4 py-1.5 text-[10px]"
                    >
                      Save Address
                    </button>
                  </div>
                </form>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {addresses.map((addr) => (
                  <div key={addr.id} className="p-4 bg-white rounded-xl border border-[#111318]/15 space-y-2 text-xs shadow-sm">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-[#111318] text-[#F0EEE9]">
                        {addr.label}
                      </span>
                      {addr.isDefault && (
                        <span className="text-[10px] text-[#C6A56B] font-semibold">● Default Delivery</span>
                      )}
                    </div>
                    <p className="font-semibold text-[#111318]">{addr.fullName}</p>
                    <p className="text-[#111318]/70 leading-relaxed">
                      {addr.line1}, {addr.line2 ? `${addr.line2}, ` : ''}{addr.city}, {addr.state} — {addr.pincode}
                    </p>
                    <p className="text-[11px] text-[#111318]/50 font-mono">Phone: {addr.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: RETURNS & EXCHANGE */}
          {activeProfileTab === 'returns' && (
            <div className="max-w-2xl mx-auto space-y-6">
              <div className="pb-3 border-b border-[#111318]/10">
                <span className="text-[11px] uppercase tracking-[0.16em] text-[#C6A56B] font-semibold block mb-0.5">
                  EFFORTLESS CONCIERGE CARE
                </span>
                <h3 className="font-serif text-2xl text-[#111318]">7-Day Exchange & Returns</h3>
                <p className="text-xs text-[#111318]/60 font-light mt-0.5">
                  Complimentary doorstep reverse-pickup via Delhivery. Size exchanges dispatched same-day.
                </p>
              </div>

              {returnSubmitted ? (
                <div className="p-8 bg-white rounded-xl border border-emerald-500/30 text-center space-y-3 shadow-md animate-fadeIn">
                  <span className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center mx-auto text-lg">
                    ✓
                  </span>
                  <h4 className="font-serif text-lg text-[#111318]">Reverse Pickup Scheduled</h4>
                  <p className="text-xs text-[#111318]/70 max-w-md mx-auto">
                    Delhivery courier agent will arrive within 24-48 hours. Keep garment unwashed with tags intact in archival cedar packaging.
                  </p>
                  <button
                    type="button"
                    onClick={() => setReturnSubmitted(false)}
                    className="ruh-btn-secondary text-[10px] py-2 px-4 mt-2"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form onSubmit={handleReturnSubmit} className="p-6 bg-white rounded-xl border border-[#111318]/12 space-y-4 shadow-sm text-xs">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#111318]/70 block mb-1 font-bold">
                      Select Order *
                    </label>
                    <select
                      value={returnOrderId}
                      onChange={(e) => setReturnOrderId(e.target.value)}
                      className="w-full px-4 py-2 bg-[#F0EEE9] border border-[#111318]/20 rounded-xl text-xs outline-none"
                    >
                      {orders.map((o) => (
                        <option key={o.id} value={o.id}>
                          {o.id} — Placed on {o.date} ({formatPrice(o.total)})
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#111318]/70 block mb-1 font-bold">
                      Reason for Return / Exchange *
                    </label>
                    <select
                      value={returnReason}
                      onChange={(e) => setReturnReason(e.target.value)}
                      className="w-full px-4 py-2 bg-[#F0EEE9] border border-[#111318]/20 rounded-xl text-xs outline-none"
                    >
                      <option value="Size does not fit as expected">Size does not fit as expected (Need Exchange)</option>
                      <option value="Prefer a different colorway">Prefer a different colorway</option>
                      <option value="Fit silhouette style preference">Fit silhouette style preference</option>
                      <option value="Defect or stitching inconsistency">Defect or stitching inconsistency</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#111318]/70 block mb-1 font-bold">
                      Desired Resolution *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['Exchange Size', 'Store Credit', 'Refund to Source'] as const).map((act) => (
                        <button
                          key={act}
                          type="button"
                          onClick={() => setReturnAction(act)}
                          className={`py-2 px-2 text-[10px] font-bold uppercase rounded-lg border transition-all ${
                            returnAction === act ? 'bg-[#111318] text-[#F0EEE9] border-[#111318]' : 'bg-[#F0EEE9] text-[#111318]/70'
                          }`}
                        >
                          {act}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full ruh-btn-primary py-2.5 text-xs tracking-wider cursor-pointer"
                    >
                      Confirm Reverse Pickup
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
