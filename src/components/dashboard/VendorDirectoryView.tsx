'use client'

import React, { useState } from 'react'
import { Vendor } from '../../data/dashboardData'

interface Props {
  vendors: Vendor[]
  formatPrice: (val: number) => string
  onAddVendor: (vendor: Vendor) => void
}

export default function VendorDirectoryView({ vendors, formatPrice, onAddVendor }: Props) {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // New Vendor Form State
  const [formName, setFormName] = useState('')
  const [formSpecialty, setFormSpecialty] = useState('')
  const [formCertification, setFormCertification] = useState('OEKO-TEX Standard 100')
  const [formContactPerson, setFormContactPerson] = useState('')
  const [formRole, setFormRole] = useState('Production Lead')
  const [formEmail, setFormEmail] = useState('')
  const [formPhone, setFormPhone] = useState('')
  const [formAddress, setFormAddress] = useState('')
  const [formCity, setFormCity] = useState('')
  const [formCountry, setFormCountry] = useState('India')
  const [formPostalCode, setFormPostalCode] = useState('')
  const [formPaymentTerms, setFormPaymentTerms] = useState('Net 30 Days')
  const [formActiveSilhouettes, setFormActiveSilhouettes] = useState('')

  const totalSpend = vendors.reduce((acc, v) => acc + v.totalContractValue, 0)
  const totalUnits = vendors.reduce((acc, v) => acc + v.totalUnitsSupplied, 0)

  const filteredVendors = vendors.filter((v) => {
    if (!searchQuery.trim()) return true
    const q = searchQuery.toLowerCase()
    return (
      v.name.toLowerCase().includes(q) ||
      v.specialty.toLowerCase().includes(q) ||
      v.country.toLowerCase().includes(q) ||
      v.contactPerson.toLowerCase().includes(q)
    )
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formName.trim() || !formContactPerson.trim()) return

    const newVendor: Vendor = {
      id: `vend-${Date.now()}`,
      name: formName.trim(),
      specialty: formSpecialty.trim() || 'Fine Textile Weaving & Garment Assembly',
      certification: formCertification.trim(),
      contactPerson: formContactPerson.trim(),
      role: formRole.trim(),
      email: formEmail.trim(),
      phone: formPhone.trim(),
      address: formAddress.trim(),
      city: formCity.trim(),
      country: formCountry.trim(),
      postalCode: formPostalCode.trim(),
      paymentTerms: formPaymentTerms,
      totalUnitsSupplied: 0,
      totalContractValue: 0,
      activeSilhouettes: formActiveSilhouettes
        ? formActiveSilhouettes.split(',').map((s) => s.trim())
        : ['New Commission']
    }

    onAddVendor(newVendor)
    setIsAddModalOpen(false)

    // Reset Form
    setFormName('')
    setFormSpecialty('')
    setFormContactPerson('')
    setFormEmail('')
    setFormPhone('')
    setFormAddress('')
    setFormCity('')
    setFormPostalCode('')
    setFormActiveSilhouettes('')
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Module Title & Add Button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#111318]/10">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9B7C38] font-bold block mb-1">
            SUPPLIER ECOSYSTEM · ATELIER DIRECTORY
          </span>
          <h2 className="font-serif text-2xl text-[#111318] font-semibold">Vendor Registry & Contact Book</h2>
          <p className="text-xs text-[#5A5D66] font-normal mt-1">
            All registered fabric mills, spinning partners, and tailoring ateliers with full address books, order volumes, and procurement contacts.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsAddModalOpen(true)}
          className="px-5 py-2.5 rounded-xl bg-[#111318] hover:bg-[#252830] text-[#F0EEE9] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md transition-all"
        >
          <span>+ Add New Vendor</span>
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 bg-white rounded-2xl border border-[#111318]/8 shadow-sm">
          <span className="text-[11px] uppercase tracking-[0.12em] text-[#6E7380] font-semibold block">Registered Mills</span>
          <p className="font-serif text-3xl text-[#111318] font-bold mt-1.5">{vendors.length} <span className="text-xs font-sans text-[#6E7380] font-normal">Ateliers</span></p>
          <span className="text-[11px] text-[#9B7C38] font-medium mt-1 block">Tirupur, Ludhiana, Surat & Como</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-[#111318]/8 shadow-sm">
          <span className="text-[11px] uppercase tracking-[0.12em] text-[#6E7380] font-semibold block">Total Units Procured</span>
          <p className="font-serif text-3xl text-[#111318] font-bold mt-1.5">{totalUnits.toLocaleString()} <span className="text-xs font-sans text-[#6E7380] font-normal">Units</span></p>
          <span className="text-[11px] text-emerald-700 font-medium mt-1 block">100% Quality Inspected</span>
        </div>

        <div className="p-5 bg-white rounded-2xl border border-[#9B7C38]/25 shadow-sm">
          <span className="text-[11px] uppercase tracking-[0.12em] text-[#9B7C38] font-bold block">Lifetime Contract Spend</span>
          <p className="font-serif text-3xl text-[#9B7C38] font-bold mt-1.5">{formatPrice(totalSpend)}</p>
          <span className="text-[11px] text-[#6E7380] mt-1 block">Total PO capital deployed</span>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4 bg-white rounded-2xl border border-[#111318]/8 shadow-sm">
        <div className="relative">
          <svg className="w-4 h-4 text-[#8C887F] absolute left-3.5 top-1/2 -translate-y-1/2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search vendors by company name, material specialty, country, or representative..."
            className="w-full pl-10 pr-4 py-2.5 bg-[#FAF8F5] rounded-xl border border-[#111318]/12 text-xs text-[#111318] placeholder-[#8C887F] outline-none focus:bg-white focus:border-[#9B7C38] transition-colors"
          />
        </div>
      </div>

      {/* Vendor Cards Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {filteredVendors.map((vendor) => (
          <div
            key={vendor.id}
            className="p-6 bg-white rounded-2xl border border-[#111318]/8 hover:border-[#9B7C38]/40 shadow-sm hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
          >
            <div>
              {/* Header: Name, Country, Certification */}
              <div className="flex items-start justify-between gap-3 pb-3 border-b border-[#111318]/8">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#FAF3E0] text-[#9B7C38] font-bold border border-[#9B7C38]/30">
                      {vendor.country}
                    </span>
                    <span className="text-[11px] text-[#6E7380] font-mono">{vendor.paymentTerms}</span>
                  </div>
                  <h3 className="font-serif text-xl text-[#111318] font-semibold mt-1">{vendor.name}</h3>
                  <p className="text-xs text-[#5A5D66] mt-0.5">{vendor.specialty}</p>
                </div>

                <div className="text-right flex-shrink-0">
                  <span className="text-[11px] text-[#6E7380] block font-mono">Total Volume</span>
                  <span className="font-mono text-sm text-[#111318] font-bold">{vendor.totalUnitsSupplied} Units</span>
                  <span className="text-xs text-[#9B7C38] font-bold block font-mono">{formatPrice(vendor.totalContractValue)}</span>
                </div>
              </div>

              {/* Physical Address Block */}
              <div className="mt-3 p-3.5 bg-[#FAF8F5] rounded-xl border border-[#111318]/6 space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#9B7C38] font-bold block">
                  Registered Mill Facility & Address:
                </span>
                <p className="text-xs text-[#2D3139] font-mono leading-relaxed">
                  {vendor.address}, {vendor.city}, {vendor.postalCode}, {vendor.country}
                </p>
                <div className="pt-1 text-[11px] text-[#6E7380] italic">
                  Certification: <span className="font-medium text-[#111318]">{vendor.certification}</span>
                </div>
              </div>

              {/* Silhouettes Supplied */}
              <div className="mt-3">
                <span className="text-[10px] uppercase tracking-wider text-[#6E7380] font-bold block mb-1.5">
                  Contracted Silhouettes ({vendor.activeSilhouettes.length}):
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {vendor.activeSilhouettes.map((sil, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-lg text-[11px] font-medium bg-[#FAF8F5] text-[#111318] border border-[#111318]/10"
                    >
                      {sil}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Person Details & Actions */}
            <div className="pt-3 border-t border-[#111318]/8 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
              <div>
                <p className="text-xs font-semibold text-[#111318]">
                  {vendor.contactPerson} <span className="text-[11px] font-normal text-[#6E7380]">({vendor.role})</span>
                </p>
                <p className="text-xs text-[#5A5D66] font-mono mt-0.5">{vendor.email} · {vendor.phone}</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${vendor.email}?subject=RŪH Inquiry: Supplier Contract`}
                  className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-[#111318] hover:text-[#F0EEE9] text-[#111318] text-xs font-semibold transition-colors border border-[#111318]/15 shadow-sm"
                >
                  ✉ Email
                </a>
                <a
                  href={`https://wa.me/${vendor.phone.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors shadow-sm"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =====================================================================
          ADD NEW VENDOR MODAL (Clean, readable white card)
          ===================================================================== */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-2xl bg-white border border-[#111318]/12 rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-[#111318]/10">
              <div>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#9B7C38] font-bold block mb-1">
                  SUPPLIER ONBOARDING
                </span>
                <h3 className="font-serif text-xl text-[#111318] font-semibold">Register New Mill or Atelier</h3>
              </div>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#FAF8F5] hover:bg-[#111318] hover:text-white text-[#111318] flex items-center justify-center transition-colors cursor-pointer text-xs"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                    Vendor Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Vardhman Textiles Ltd."
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                    Material Specialty *
                  </label>
                  <input
                    type="text"
                    required
                    value={formSpecialty}
                    onChange={(e) => setFormSpecialty(e.target.value)}
                    placeholder="e.g. 280 GSM Dense Combed Cotton Jersey"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formContactPerson}
                    onChange={(e) => setFormContactPerson(e.target.value)}
                    placeholder="e.g. Rajiv Sundaram"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                    Representative Role
                  </label>
                  <input
                    type="text"
                    value={formRole}
                    onChange={(e) => setFormRole(e.target.value)}
                    placeholder="e.g. Production Lead"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                    Payment Terms
                  </label>
                  <select
                    value={formPaymentTerms}
                    onChange={(e) => setFormPaymentTerms(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                  >
                    <option value="Net 30 Days">Net 30 Days</option>
                    <option value="Net 45 Days">Net 45 Days</option>
                    <option value="50% Advance, 50% on Delivery">50% Advance, 50% on Delivery</option>
                    <option value="100% Pre-Shipment">100% Pre-Shipment</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="e.g. orders@vardhman.com"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="text"
                    required
                    value={formPhone}
                    onChange={(e) => setFormPhone(e.target.value)}
                    placeholder="e.g. +91 98450 67890"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                  Full Mill / Factory Address *
                </label>
                <input
                  type="text"
                  required
                  value={formAddress}
                  onChange={(e) => setFormAddress(e.target.value)}
                  placeholder="e.g. Plot 42, Focal Point Industrial Area, Phase V"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formCity}
                    onChange={(e) => setFormCity(e.target.value)}
                    placeholder="e.g. Ludhiana"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={formPostalCode}
                    onChange={(e) => setFormPostalCode(e.target.value)}
                    placeholder="e.g. 141010"
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                  />
                </div>

                <div>
                  <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                    Country
                  </label>
                  <input
                    type="text"
                    value={formCountry}
                    onChange={(e) => setFormCountry(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] uppercase tracking-wider text-[#111318]/70 font-semibold block mb-1">
                  Contracted Silhouettes (Comma separated)
                </label>
                <input
                  type="text"
                  value={formActiveSilhouettes}
                  onChange={(e) => setFormActiveSilhouettes(e.target.value)}
                  placeholder="e.g. Heavyweight Washed Tee, Survey Corps Tee"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#111318]/15 rounded-xl text-[#111318] outline-none focus:bg-white focus:border-[#9B7C38]"
                />
              </div>

              <div className="pt-4 border-t border-[#111318]/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-[#5A5D66] hover:bg-[#FAF8F5] text-xs font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-[#111318] hover:bg-[#252830] text-[#F0EEE9] text-xs font-semibold uppercase tracking-wider shadow-sm"
                >
                  Confirm & Register Vendor
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
