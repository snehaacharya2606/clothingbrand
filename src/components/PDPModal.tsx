'use client'

import React, { useState } from 'react'
import { useShop, Product } from '../context/ShopContext'

export default function PDPModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, formatPrice } = useShop()
  const [selectedSize, setSelectedSize] = useState<string>('')
  const [selectedColor, setSelectedColor] = useState<string>('')
  const [selectedFit, setSelectedFit] = useState<'Standard' | 'Relaxed'>('Standard')
  const [activeImageIdx, setActiveImageIdx] = useState(0)
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false)
  const [unit, setUnit] = useState<'cm' | 'in'>('cm')
  const [deliveryPincode, setDeliveryPincode] = useState('')
  const [pincodeStatus, setPincodeStatus] = useState<string | null>(null)

  if (!quickViewProduct) return null

  const p = quickViewProduct
  const images = p.detailImages && p.detailImages.length > 0
    ? p.detailImages
    : [p.primaryImage, p.hoverImage]

  const currentSize = selectedSize || p.sizes[0] || 'M'
  const currentColor = selectedColor || p.color

  const handlePincodeCheck = (e: React.FormEvent) => {
    e.preventDefault()
    if (deliveryPincode.trim().length === 6) {
      setPincodeStatus('Available: Express Courier Dispatch in 24h via Delhivery')
    } else {
      setPincodeStatus('Please enter a valid 6-digit Indian PIN code')
    }
  }

  // Size chart measurements (cm vs inches)
  const SIZES_CHART = [
    { size: 'XS', chestCm: '96', chestIn: '37.8', lengthCm: '68', lengthIn: '26.7', shoulderCm: '44', shoulderIn: '17.3' },
    { size: 'S', chestCm: '102', chestIn: '40.1', lengthCm: '70', lengthIn: '27.5', shoulderCm: '46', shoulderIn: '18.1' },
    { size: 'M', chestCm: '108', chestIn: '42.5', lengthCm: '72', lengthIn: '28.3', shoulderCm: '48', shoulderIn: '18.9' },
    { size: 'L', chestCm: '114', chestIn: '44.8', lengthCm: '74', lengthIn: '29.1', shoulderCm: '50', shoulderIn: '19.7' },
    { size: 'XL', chestCm: '120', chestIn: '47.2', lengthCm: '76', lengthIn: '29.9', shoulderCm: '52', shoulderIn: '20.4' },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111318]/75 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-5xl bg-[#F0EEE9] text-[#111318] shadow-2xl border border-[#C6A56B]/30 overflow-hidden z-10 my-6 max-h-[92vh] flex flex-col">
        {/* Top Bar with SKU and Close */}
        <div className="px-6 py-3.5 bg-[#EAE6DE] border-b border-[#111318]/10 flex items-center justify-between">
          <div className="flex items-center gap-3 text-[11px] font-mono text-[#111318]/70">
            <span>SKU: {p.sku || 'RUH-ED01-CORE'}</span>
            <span>·</span>
            <span className="text-[#C6A56B] font-semibold uppercase tracking-wider">{p.subtitle}</span>
          </div>
          <button
            type="button"
            onClick={() => setQuickViewProduct(null)}
            className="w-7 h-7 rounded-full bg-[#111318] text-[#F0EEE9] hover:bg-[#C6A56B] hover:text-[#111318] flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-y-auto">
          {/* Left Gallery Column (7 cols) */}
          <div className="md:col-span-7 p-6 bg-[#E7E4DC] border-b md:border-b-0 md:border-r border-[#111318]/10 flex flex-col justify-between">
            {/* Main Stage */}
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#111318]/5 shadow-sm border border-[#111318]/10 mb-4">
              <img
                src={images[activeImageIdx]}
                alt={p.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-105"
              />
              {/* Badge */}
              <div className="absolute top-4 left-4 bg-[#111318]/90 text-[#F0EEE9] text-[9px] uppercase tracking-[0.16em] px-2.5 py-1 border border-[#C6A56B]/40">
                Studio View 0{activeImageIdx + 1}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex items-center gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveImageIdx(idx)}
                  className={`w-16 h-20 bg-[#F0EEE9] overflow-hidden border-2 transition-all cursor-pointer ${
                    activeImageIdx === idx
                      ? 'border-[#C6A56B] shadow-md scale-102'
                      : 'border-[#111318]/15 hover:border-[#111318]/50 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumbnail" className="w-full h-full object-cover object-top" />
                </button>
              ))}
            </div>

            {/* Model Dimensions Footnote */}
            <div className="mt-4 pt-3 border-t border-[#111318]/10 text-[11px] text-[#111318]/65 font-light flex items-center justify-between">
              <span>{p.modelStats || "Model is 6'0\" (183 cm) wearing size M"}</span>
              <span className="text-[#C6A56B] font-medium">True to Tailored Size</span>
            </div>
          </div>

          {/* Right Product Specifications (5 cols) */}
          <div className="md:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Category & Title */}
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] font-semibold block mb-1">
                {p.category}
              </span>
              <h1 className="font-serif text-2xl sm:text-3xl text-[#111318] font-normal leading-snug mb-2">
                {p.name}
              </h1>
              <p className="text-xl font-medium text-[#111318] mb-4">
                {formatPrice(p.price)}
              </p>

              {/* Stock Status Indicator */}
              <div className="mb-5 flex items-center gap-2 text-[11px] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#C6A56B] animate-pulse" />
                {p.stockCount && p.stockCount <= 5 ? (
                  <span className="text-[#955251] font-semibold">
                    Low Stock — Only {p.stockCount} pieces remaining in Edition 01
                  </span>
                ) : (
                  <span className="text-[#111318]/80">
                    In Stock at Mumbai & Bengaluru Fulfillment Centers
                  </span>
                )}
              </div>

              {/* Color Selector */}
              <div className="mb-5">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.12em] font-semibold mb-2">
                  <span>Color: <strong className="font-bold text-[#111318]">{currentColor}</strong></span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  {p.colorOptions.map((opt, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedColor(opt.name)}
                      className={`ruh-color-pill ${currentColor === opt.name ? 'active' : ''}`}
                    >
                      <span className="ruh-color-disc" style={{ backgroundColor: opt.hex }} />
                      <span>{opt.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Fit Profile Selector */}
              <div className="mb-5">
                <span className="text-[11px] uppercase tracking-[0.12em] font-semibold block mb-2">
                  Silhouette Calibration:
                </span>
                <div className="ruh-segmented-control w-full p-1">
                  {(['Standard', 'Relaxed'] as const).map((fit) => (
                    <button
                      key={fit}
                      type="button"
                      onClick={() => setSelectedFit(fit)}
                      className={`ruh-segmented-btn flex-1 text-center py-2 ${selectedFit === fit ? 'active' : ''}`}
                    >
                      {fit} Cut
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector + Size Guide Link */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.12em] font-semibold mb-2">
                  <span>Select Size:</span>
                  <button
                    type="button"
                    onClick={() => setIsSizeGuideOpen(!isSizeGuideOpen)}
                    className="text-[#C6A56B] hover:text-[#111318] underline underline-offset-4 cursor-pointer lowercase first-letter:uppercase"
                  >
                    {isSizeGuideOpen ? 'Close Chart' : 'Size Guide & Measurements'}
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {p.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSelectedSize(s)}
                      className={`ruh-size-chip ${currentSize === s ? 'active' : ''}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Interactive Size Chart Dropdown */}
              {isSizeGuideOpen && (
                <div className="p-4 bg-[#EAE6DE] rounded-xl border border-[#C6A56B]/40 mb-6 animate-fadeIn text-[11px]">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#111318]/10">
                    <span className="font-semibold uppercase tracking-[0.12em]">
                      Garment Measurements
                    </span>
                    <div className="ruh-segmented-control p-0.5">
                      <button
                        type="button"
                        onClick={() => setUnit('cm')}
                        className={`ruh-segmented-btn text-[9px] py-0.5 px-2.5 ${unit === 'cm' ? 'active' : ''}`}
                      >
                        cm
                      </button>
                      <button
                        type="button"
                        onClick={() => setUnit('in')}
                        className={`ruh-segmented-btn text-[9px] py-0.5 px-2.5 ${unit === 'in' ? 'active' : ''}`}
                      >
                        inches
                      </button>
                    </div>
                  </div>
                  <table className="w-full text-center">
                    <thead>
                      <tr className="border-b border-[#111318]/10 text-[#111318]/60 font-medium">
                        <th className="py-1 text-left">Size</th>
                        <th>Chest</th>
                        <th>Length</th>
                        <th>Shoulder</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#111318]/5">
                      {SIZES_CHART.map((row) => (
                        <tr key={row.size} className={currentSize === row.size ? 'font-bold text-[#111318] bg-white/40' : ''}>
                          <td className="py-1 text-left">{row.size}</td>
                          <td>{unit === 'cm' ? `${row.chestCm} cm` : `${row.chestIn}"`}</td>
                          <td>{unit === 'cm' ? `${row.lengthCm} cm` : `${row.lengthIn}"`}</td>
                          <td>{unit === 'cm' ? `${row.shoulderCm} cm` : `${row.shoulderIn}"`}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <p className="text-[10px] text-[#111318]/60 mt-2 font-light">
                    Measurements taken flat. Tailored with a relaxed architectural drape.
                  </p>
                </div>
              )}

              {/* Pincode Delivery Estimator (Indian Logistics) */}
              <div className="p-3.5 bg-white/70 rounded-xl border border-[#111318]/10 mb-6">
                <span className="text-[10px] uppercase tracking-[0.14em] font-semibold text-[#111318]/70 block mb-1">
                  Indian Delivery & Logistics
                </span>
                <form onSubmit={handlePincodeCheck} className="flex gap-2">
                  <input
                    type="text"
                    maxLength={6}
                    value={deliveryPincode}
                    onChange={(e) => setDeliveryPincode(e.target.value)}
                    placeholder="Enter 6-digit Pincode"
                    className="flex-1 bg-white rounded-full border border-[#111318]/20 px-3 py-1.5 text-xs focus:outline-none focus:border-[#C6A56B]"
                  />
                  <button
                    type="submit"
                    className="ruh-btn-primary py-1.5 px-4 text-[10px]"
                  >
                    Check
                  </button>
                </form>
                {pincodeStatus && (
                  <p className="text-[10px] text-[#C6A56B] mt-1.5 font-medium">
                    {pincodeStatus}
                  </p>
                )}
              </div>

              {/* Textile Composition & Care */}
              <div className="border-t border-[#111318]/10 pt-4 space-y-2 text-[12px] text-[#111318]/75">
                <div>
                  <strong className="text-[#111318] font-semibold">Textile: </strong>
                  <span>{p.fabric}</span>
                </div>
                <div>
                  <strong className="text-[#111318] font-semibold">Provenance: </strong>
                  <span>Woven in Biella, Italy / Kojima, Japan</span>
                </div>
                <div>
                  <strong className="text-[#111318] font-semibold">Care: </strong>
                  <span>Dry clean or cold hand-wash only. Archival cedar storage recommended.</span>
                </div>
              </div>
            </div>

            {/* Add to Bag CTA */}
            <div className="pt-4 border-t border-[#111318]/10">
              <button
                type="button"
                onClick={() => {
                  addToCart(p, currentSize, currentColor)
                  setQuickViewProduct(null)
                }}
                className="w-full ruh-btn-primary py-4 text-[12px] tracking-[0.16em]"
              >
                Add {currentSize} ({currentColor}) to Bag — {formatPrice(p.price)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

