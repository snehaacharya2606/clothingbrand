'use client'

import React, { useState, useMemo } from 'react'
import { useShop } from '../context/ShopContext'
import { PRODUCTS } from '../data/products'

export default function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct, formatPrice } = useShop()
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.fabric.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    )
  }, [query])

  if (!isSearchOpen) return null

  const trendingKeywords = ['Overcoat', 'Cashmere', 'Heavyweight Tee', 'Wool Trouser', 'Bridle Leather']
  const categoryShortcuts = [
    { label: 'Outerwear', query: 'outerwear' },
    { label: 'Knitwear', query: 'knitwear' },
    { label: 'Trousers', query: 'trouser' },
    { label: 'Shirting', query: 'shirting' },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#111318]/70 backdrop-blur-md transition-opacity duration-300"
        onClick={() => setIsSearchOpen(false)}
      />

      {/* Search Modal Dialog Card */}
      <div className="relative w-full max-w-2xl bg-[#F0EEE9] text-[#111318] rounded-2xl shadow-2xl border border-[#C6A56B]/30 z-10 overflow-hidden animate-fadeIn">
        {/* Search Input Bar (No Browser Outlines or Bevels) */}
        <div className="p-5 sm:p-6 border-b border-[#111318]/10 flex items-center gap-3.5 bg-[#F0EEE9]">
          <svg className="w-5 h-5 text-[#C6A56B] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>

          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search silhouettes, materials, cashmere, wool..."
            className="ruh-search-input flex-1 bg-transparent text-base sm:text-lg text-[#111318] placeholder-[#111318]/40 font-serif border-0 outline-0 shadow-none"
            style={{ border: 'none', outline: 'none', boxShadow: 'none', background: 'transparent' }}
          />

          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="px-2 py-1 text-[11px] uppercase tracking-wider text-[#111318]/50 hover:text-[#111318] font-semibold transition-colors cursor-pointer"
            >
              Clear
            </button>
          )}

          <button
            type="button"
            onClick={() => setIsSearchOpen(false)}
            className="w-8 h-8 rounded-full bg-[#111318]/5 hover:bg-[#111318] text-[#111318] hover:text-[#F0EEE9] flex items-center justify-center transition-all cursor-pointer flex-shrink-0"
            aria-label="Close search"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Trending Suggestion Pills (Wrapped Without Chunky Horizontal Scrollbar) */}
        <div className="px-5 sm:px-6 py-3 bg-[#E8E5DD]/90 border-b border-[#111318]/8 flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.14em]">
          <span className="text-[#111318]/60 font-bold mr-1">Trending:</span>
          {trendingKeywords.map((kw) => (
            <button
              key={kw}
              type="button"
              onClick={() => setQuery(kw)}
              className={`ruh-tab-pill py-1 px-3 text-[10px] bg-white/70 hover:bg-white border border-[#111318]/10 rounded-full transition-all cursor-pointer ${
                query.toLowerCase() === kw.toLowerCase() ? 'active' : ''
              }`}
            >
              {kw}
            </button>
          ))}
        </div>

        {/* Content Area: Empty State or Live Results */}
        <div className="max-h-[62vh] overflow-y-auto p-5 sm:p-6">
          {query.trim() === '' ? (
            <div className="space-y-5 py-1">
              {/* Category Quick Filters */}
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-[#111318]/8 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#C6A56B] font-bold">
                    EXPLORE ARCHIVE CATEGORIES
                  </span>
                  <span className="text-[10px] text-[#111318]/40 font-mono">Edition 01</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {categoryShortcuts.map((cat) => (
                    <button
                      key={cat.label}
                      type="button"
                      onClick={() => setQuery(cat.query)}
                      className="px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-[0.14em] font-semibold bg-white/50 hover:bg-[#111318] hover:text-[#F0EEE9] text-[#111318] border border-[#111318]/10 transition-all cursor-pointer"
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Curated Bestseller Spotlight */}
              <div>
                <div className="flex items-center justify-between pb-2 border-b border-[#111318]/8 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#C6A56B] font-bold">
                    CURATED CAPSULE FOUNDATIONS
                  </span>
                  <span className="text-[10px] text-[#111318]/40 font-mono">Permanent Archive</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {PRODUCTS.slice(0, 3).map((prod) => (
                    <div
                      key={prod.id}
                      onClick={() => {
                        setQuickViewProduct(prod)
                        setIsSearchOpen(false)
                      }}
                      className="p-3 bg-white/60 hover:bg-white rounded-xl border border-[#111318]/10 hover:border-[#C6A56B]/60 transition-all cursor-pointer group shadow-sm flex flex-col justify-between"
                    >
                      <div className="aspect-[3/4] w-full rounded-lg overflow-hidden bg-[#E7E4DC] mb-2.5">
                        <img
                          src={prod.primaryImage}
                          alt={prod.name}
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
                        />
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-[0.14em] text-[#C6A56B] font-semibold block mb-0.5">
                          {prod.category}
                        </span>
                        <h4 className="font-serif text-xs text-[#111318] group-hover:text-[#C6A56B] transition-colors line-clamp-1 leading-snug">
                          {prod.name}
                        </h4>
                        <p className="text-[11px] font-semibold text-[#111318] mt-1">
                          {formatPrice(prod.price)}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : results.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-12 h-12 rounded-full bg-[#111318]/5 flex items-center justify-center mx-auto mb-3 text-[#C6A56B]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
              </div>
              <p className="font-serif text-lg text-[#111318] mb-1">
                No matching silhouettes found
              </p>
              <p className="text-[12px] text-[#111318]/60 font-light max-w-sm mx-auto mb-4">
                We couldn&apos;t find anything for &ldquo;{query}&rdquo;. Try searching for general terms like &quot;outerwear&quot;, &quot;trousers&quot;, or &quot;cashmere&quot;.
              </p>
              <button
                type="button"
                onClick={() => setQuery('')}
                className="ruh-btn-secondary text-[10px] py-2 px-4"
              >
                Clear Search Query
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-[#111318]/8">
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#C6A56B] font-bold">
                  Found {results.length} {results.length === 1 ? 'Silhouette' : 'Silhouettes'}
                </span>
                <span className="text-[10px] text-[#111318]/50 font-mono">Archive Match</span>
              </div>

              {results.map((product) => (
                <div
                  key={product.id}
                  onClick={() => {
                    setQuickViewProduct(product)
                    setIsSearchOpen(false)
                  }}
                  className="flex items-center gap-4 p-3 bg-white/60 hover:bg-white rounded-xl border border-[#111318]/10 hover:border-[#C6A56B]/60 transition-all cursor-pointer group shadow-sm"
                >
                  <div className="w-16 h-20 rounded-lg bg-[#E7E4DC] overflow-hidden flex-shrink-0">
                    <img
                      src={product.primaryImage}
                      alt={product.name}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[9px] uppercase tracking-[0.14em] text-[#C6A56B] font-semibold block">
                      {product.subtitle || product.category}
                    </span>
                    <h4 className="font-serif text-[15px] text-[#111318] group-hover:text-[#C6A56B] transition-colors leading-snug truncate">
                      {product.name}
                    </h4>
                    <p className="text-[11px] text-[#111318]/60 mt-0.5 line-clamp-1 font-light">
                      {product.fabric}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="text-[13px] font-semibold text-[#111318] block">
                      {formatPrice(product.price)}
                    </span>
                    <span className="text-[10px] text-[#C6A56B] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Quick View →
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
