'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useShop, Address } from '@/context/ShopContext'

export default function ProfilePage() {
  const { user, updateUser, addresses, addAddress } = useShop()

  // Profile Form State
  const [name, setName] = useState(user?.name || 'Sneha Acharya')
  const [phone, setPhone] = useState(user?.phone || '+91 98450 12345')
  const [email, setEmail] = useState(user?.email || 'sneha@example.com')
  const [toast, setToast] = useState<string | null>(null)

  // Address Modal State
  const [isAddingAddr, setIsAddingAddr] = useState(false)
  const [newLabel, setNewLabel] = useState<'Home' | 'Work' | 'Studio'>('Home')
  const [newFullName, setNewFullName] = useState('')
  const [newPhone, setNewPhone] = useState('')
  const [newLine1, setNewLine1] = useState('')
  const [newCity, setNewCity] = useState('')
  const [newState, setNewState] = useState('')
  const [newPincode, setNewPincode] = useState('')

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault()
    updateUser({ name, phone, email })
    setToast('Profile modifications saved successfully!')
    setTimeout(() => setToast(null), 3000)
  }

  const handleAddAddress = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newLine1.trim() || !newCity.trim() || !newPincode.trim()) return

    const addr: Address = {
      id: `addr-${Date.now()}`,
      label: newLabel,
      fullName: newFullName || name,
      phone: newPhone || phone,
      line1: newLine1,
      city: newCity,
      state: newState || 'Maharashtra',
      pincode: newPincode,
      isDefault: false,
    }

    addAddress(addr)
    setIsAddingAddr(false)
    setToast('New delivery address added!')
    setTimeout(() => setToast(null), 3000)

    setNewLine1('')
    setNewCity('')
    setNewPincode('')
  }

  return (
    <div className="ruh-app min-h-screen flex flex-col bg-[#F0EEE9] text-[#111318]">
      <Header />

      {/* Floating Save Toast */}
      {toast && (
        <div className="fixed top-6 right-6 z-50 bg-[#111318] text-[#F0EEE9] px-5 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 text-xs font-semibold animate-fadeIn border border-[#9B7C38]/40">
          <span className="text-[#C6A56B]">✓</span>
          <span>{toast}</span>
        </div>
      )}

      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-8 py-12 sm:py-16">
        {/* Page Title */}
        <div className="pb-6 border-b border-[#111318]/10 mb-8">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-[#9B7C38]" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9B7C38] font-bold">
              USER ACCOUNT
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl text-[#111318] font-medium">Profile Settings & Modification</h1>
          <p className="text-xs sm:text-sm text-[#5A5D66] font-light mt-1">
            Update your personal contact details, email notifications, and default shipping addresses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column: Avatar Card */}
          <div className="md:col-span-1 space-y-4">
            <div className="bg-white rounded-2xl border border-[#111318]/8 p-6 text-center space-y-3 shadow-sm">
              <div className="w-20 h-20 rounded-full bg-[#FAF3E0] text-[#9B7C38] font-serif font-bold text-2xl flex items-center justify-center mx-auto border border-[#9B7C38]/30 shadow-inner">
                {name.split(' ').map((n) => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-serif text-lg text-[#111318] font-semibold">{name}</h3>
                <p className="text-xs text-[#5A5D66] font-mono mt-0.5">{email}</p>
                <p className="text-xs text-[#6E7380] font-mono">{phone}</p>
              </div>
              <div className="pt-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase bg-emerald-50 text-emerald-800 border border-emerald-200 font-bold">
                  ● Verified Member
                </span>
              </div>
            </div>

            <div className="bg-[#FAF8F5] rounded-2xl border border-[#111318]/8 p-4 text-xs text-[#5A5D66] space-y-2">
              <span className="font-bold text-[#111318] uppercase tracking-wider text-[10px] block">
                Privacy & Data Security
              </span>
              <p className="leading-relaxed">
                Your personal contact information is only used for order confirmations, GST invoices, and live courier tracking notifications.
              </p>
            </div>
          </div>

          {/* Right Column: Modification Form */}
          <div className="md:col-span-2 space-y-8">
            {/* 1. Modify Personal Details Form */}
            <form onSubmit={handleSaveProfile} className="bg-white rounded-2xl border border-[#111318]/8 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="pb-3 border-b border-[#111318]/8">
                <h3 className="font-serif text-xl text-[#111318] font-semibold">Modify Name, Phone & Email</h3>
                <p className="text-xs text-[#5A5D66] mt-0.5">Edit your credentials below and save changes.</p>
              </div>

              <div className="space-y-4 text-xs">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-bold block mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-sm text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38] transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-bold block mb-1.5">
                    Phone / Mobile Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. +91 98450 12345"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-sm text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38] transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-bold block mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. you@example.com"
                    className="w-full px-4 py-3 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-sm text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38] transition-colors font-mono"
                  />
                </div>
              </div>

              <div className="pt-2 flex items-center justify-end">
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-[#111318] hover:bg-[#252830] text-[#F0EEE9] text-xs font-semibold uppercase tracking-widest shadow-md transition-all cursor-pointer"
                >
                  Save Profile Modifications
                </button>
              </div>
            </form>

            {/* 2. Saved Addresses List */}
            <div className="bg-white rounded-2xl border border-[#111318]/8 p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center justify-between pb-3 border-b border-[#111318]/8">
                <div>
                  <h3 className="font-serif text-xl text-[#111318] font-semibold">Saved Shipping Addresses</h3>
                  <p className="text-xs text-[#5A5D66] mt-0.5">Manage default destination for dispatches.</p>
                </div>

                <button
                  type="button"
                  onClick={() => setIsAddingAddr(true)}
                  className="px-3.5 py-1.5 rounded-lg bg-[#FAF8F5] hover:bg-[#111318] hover:text-[#F0EEE9] text-xs font-semibold text-[#111318] border border-[#111318]/12 transition-all cursor-pointer"
                >
                  + Add Address
                </button>
              </div>

              <div className="space-y-3">
                {addresses.map((addr) => (
                  <div
                    key={addr.id}
                    className="p-4 bg-[#FAF8F5] rounded-xl border border-[#111318]/8 flex items-start justify-between gap-4 text-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-bold text-[#111318] font-mono text-xs">{addr.label}</span>
                        {addr.isDefault && (
                          <span className="text-[9px] uppercase font-bold text-emerald-800 bg-emerald-100 px-2 py-0.2 rounded">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="font-medium text-[#111318]">{addr.fullName} · {addr.phone}</p>
                      <p className="text-[#5A5D66] mt-0.5">{addr.line1}, {addr.city} - {addr.pincode}, {addr.state}</p>
                    </div>

                    <button
                      type="button"
                      onClick={() => alert(`Address ${addr.label} set as primary.`)}
                      className="text-[11px] font-semibold text-[#9B7C38] hover:underline flex-shrink-0"
                    >
                      Use Default
                    </button>
                  </div>
                ))}
              </div>

              {/* Add Address Sub-form */}
              {isAddingAddr && (
                <form onSubmit={handleAddAddress} className="pt-4 border-t border-[#111318]/8 space-y-4 text-xs">
                  <h4 className="font-bold text-[#111318] uppercase tracking-wider text-[11px]">New Shipping Destination</h4>

                  <div className="grid grid-cols-3 gap-3">
                    {(['Home', 'Work', 'Studio'] as const).map((lbl) => (
                      <button
                        key={lbl}
                        type="button"
                        onClick={() => setNewLabel(lbl)}
                        className={`py-2 rounded-lg text-xs font-semibold border ${
                          newLabel === lbl
                            ? 'bg-[#111318] text-[#F0EEE9] border-[#111318]'
                            : 'bg-[#FAF8F5] text-[#5A5D66] border-[#111318]/10'
                        }`}
                      >
                        {lbl}
                      </button>
                    ))}
                  </div>

                  <div>
                    <label className="text-[10px] uppercase font-bold text-[#6E7380] block mb-1">Street Address *</label>
                    <input
                      type="text"
                      required
                      value={newLine1}
                      onChange={(e) => setNewLine1(e.target.value)}
                      placeholder="Flat, building, road, area"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-xs text-[#111318] outline-none focus:bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[10px] uppercase font-bold text-[#6E7380] block mb-1">City *</label>
                      <input
                        type="text"
                        required
                        value={newCity}
                        onChange={(e) => setNewCity(e.target.value)}
                        placeholder="e.g. Mumbai"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-xs text-[#111318] outline-none focus:bg-white"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold text-[#6E7380] block mb-1">PIN Code *</label>
                      <input
                        type="text"
                        required
                        value={newPincode}
                        onChange={(e) => setNewPincode(e.target.value)}
                        placeholder="e.g. 400013"
                        className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-xs text-[#111318] outline-none focus:bg-white font-mono"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setIsAddingAddr(false)}
                      className="px-3.5 py-2 text-[#6E7380] text-xs font-semibold"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-5 py-2 rounded-xl bg-[#111318] text-[#F0EEE9] text-xs font-semibold uppercase tracking-wider"
                    >
                      Save Address
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

