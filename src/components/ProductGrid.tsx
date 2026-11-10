'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import { PRODUCTS } from '../data/products'
import { useShop, Product } from '../context/ShopContext'

const MAIN_CATEGORIES = [
  { id: 't-shirts', label: 'T-Shirts', status: 'active' },
  { id: 'shirts', label: 'Shirts', status: 'coming-soon' },
  { id: 'dresses', label: 'Dresses', status: 'coming-soon' },
]

const TSHIRT_SUBCATEGORIES = [
  { id: 'all', label: 'All T-Shirts' },
  { id: 'Anime', label: 'Anime' },
  { id: 'Kdrama', label: 'Kdrama' },
  { id: 'Bollywood', label: 'Bollywood' },
  { id: 'Cartoon', label: 'Cartoon' },
  { id: 'Vintage', label: 'Vintage' },
  { id: 'customise', label: 'Customise on your own', status: 'coming-soon' },
]

export default function ProductGrid() {
  const {
    addToCart,
    formatPrice,
    setQuickViewProduct,
    wishlist,
    toggleWishlist,
    selectedMainCategory,
    setSelectedMainCategory,
    selectedSubCategory,
    setSelectedSubCategory,
  } = useShop()

  const searchParams = useSearchParams()

  // Sync category and subcategory from URL parameters if present
  useEffect(() => {
    if (!searchParams) return
    const cat = searchParams.get('category')
    const sub = searchParams.get('sub')
    if (cat && (cat === 't-shirts' || cat === 'shirts' || cat === 'dresses')) {
      setSelectedMainCategory(cat as any)
    }
    if (sub) {
      setSelectedSubCategory(sub)
    }
  }, [searchParams, setSelectedMainCategory, setSelectedSubCategory])

  const [activeSizeFilter, setActiveSizeFilter] = useState<string>('all')
  const [sortBy, setSortBy] = useState<'featured' | 'low-to-high' | 'high-to-low'>('featured')
  const [gridCols, setGridCols] = useState<2 | 4>(4)

  // 4 to 5 products initially with "See More" option
  const INITIAL_VISIBLE_COUNT = 4
  const [visibleCount, setVisibleCount] = useState<number>(INITIAL_VISIBLE_COUNT)

  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  // Filter products
  const filtered = useMemo(() => {
    let list = [...PRODUCTS]

    // Subcategory filter (Anime, Kdrama, Bollywood, Vintage)
    if (selectedSubCategory !== 'all' && selectedSubCategory !== 'customise') {
      list = list.filter((p) => p.subCategory === selectedSubCategory)
    }

    // Size filter
    if (activeSizeFilter !== 'all') {
      list = list.filter((p) => p.sizes.includes(activeSizeFilter))
    }

    // Sorting
    if (sortBy === 'low-to-high') {
      list.sort((a, b) => a.price - b.price)
    } else if (sortBy === 'high-to-low') {
      list.sort((a, b) => b.price - a.price)
    }

    return list
  }, [selectedSubCategory, activeSizeFilter, sortBy])

  // Products to display based on visibleCount
  const displayedProducts = filtered.slice(0, visibleCount)
  const hasMore = filtered.length > visibleCount

  return (
    <section
      id="products"
      className="w-full bg-[#F0EEE9] py-10 sm:py-16 lg:py-24 px-4 sm:px-8 border-b border-[#111318]/10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A56B]" />
            <span className="text-[10px] uppercase tracking-[0.22em] text-[#C6A56B] font-semibold">
              02 / CATALOG & PERMANENT CAPSULE
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#111318] font-normal mb-3">
            Heavyweight T-Shirt Collection
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#111318]/70 leading-relaxed font-light">
            Engineered silhouettes crafted from 280 GSM dense combed cotton jerseys. Dedicated anime, K-drama, retro Bollywood, and vintage wash drops.
          </p>
        </div>

        {/* ===================================================================
            CATEGORY DROPDOWN & SELECTOR: T-SHIRTS, SHIRTS (COMING SOON), DRESSES (COMING SOON)
            =================================================================== */}
        <div className="flex flex-col items-center justify-center mb-8 gap-4">
          <div className="flex items-center justify-center flex-wrap gap-3">
            {MAIN_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => {
                  setSelectedMainCategory(cat.id as any)
                  setVisibleCount(INITIAL_VISIBLE_COUNT)
                }}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] transition-all cursor-pointer flex items-center gap-2 border ${
                  selectedMainCategory === cat.id
                    ? 'bg-[#111318] text-[#F0EEE9] border-[#C6A56B]/50 shadow-lg'
                    : 'bg-white/80 text-[#111318]/70 hover:text-[#111318] border-[#111318]/10 hover:border-[#111318]'
                }`}
              >
                <span>{cat.label}</span>
                {cat.status === 'coming-soon' && (
                  <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded-full bg-[#C6A56B]/20 text-[#C6A56B] border border-[#C6A56B]/30">
                    Coming Soon
                  </span>
                )}
                {cat.status === 'active' && (
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                )}
              </button>
            ))}
          </div>

          {/* Subcategories (Anime, Kdrama, Bollywood, Vintage, Customise on your own) */}
          {selectedMainCategory === 't-shirts' && (
            <div className="flex items-center justify-center flex-wrap gap-2 pt-2 border-t border-[#111318]/8 w-full max-w-3xl">
              <span className="text-[10px] uppercase tracking-wider text-[#111318]/50 mr-1 font-bold">
                T-Shirt Genre:
              </span>
              {TSHIRT_SUBCATEGORIES.map((sub) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => {
                    setSelectedSubCategory(sub.id)
                    setVisibleCount(INITIAL_VISIBLE_COUNT)
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-wider font-semibold transition-all cursor-pointer flex items-center gap-1.5 border ${
                    selectedSubCategory === sub.id
                      ? 'bg-[#C6A56B] text-[#111318] font-bold border-[#C6A56B] shadow-sm'
                      : 'bg-white/60 text-[#111318]/80 hover:bg-white border-[#111318]/10'
                  }`}
                >
                  <span>{sub.label}</span>
                  {sub.status === 'coming-soon' && (
                    <span className="text-[8px] font-mono px-1.5 py-0.2 rounded bg-[#111318]/10 text-[#111318]">
                      Coming Soon
                    </span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Coming Soon Notice for Shirts / Dresses / Customise */}
        {selectedMainCategory !== 't-shirts' && (
          <div className="p-12 text-center bg-white/70 rounded-2xl border border-[#C6A56B]/40 max-w-xl mx-auto my-8 space-y-3 shadow-md animate-fadeIn">
            <span className="w-10 h-10 rounded-full bg-[#C6A56B]/20 text-[#C6A56B] flex items-center justify-center mx-auto font-serif text-lg font-bold">
              ✦
            </span>
            <h3 className="font-serif text-2xl text-[#111318] capitalize">
              {selectedMainCategory} Collection In Production
            </h3>
            <p className="text-xs text-[#111318]/70 font-light leading-relaxed">
              Our bespoke {selectedMainCategory} capsules are being tailored in our Biella & Coimbatore partner workshops. Expected release: Edition 02 — Early 2027.
            </p>
            <button
              type="button"
              onClick={() => setSelectedMainCategory('t-shirts')}
              className="ruh-btn-primary text-[10px] py-2 px-5 mt-2 cursor-pointer"
            >
              Browse Active T-Shirts Drop
            </button>
          </div>
        )}

        {selectedMainCategory === 't-shirts' && selectedSubCategory === 'customise' && (
          <div className="p-12 text-center bg-white/70 rounded-2xl border border-[#C6A56B]/40 max-w-xl mx-auto my-8 space-y-3 shadow-md animate-fadeIn">
            <span className="w-10 h-10 rounded-full bg-[#C6A56B]/20 text-[#C6A56B] flex items-center justify-center mx-auto font-serif text-lg font-bold">
              ✍
            </span>
            <h3 className="font-serif text-2xl text-[#111318]">
              Customise On Your Own — Studio
            </h3>
            <p className="text-xs text-[#111318]/70 font-light leading-relaxed">
              Our 1-of-1 bespoke studio tool is in final testing. You will be able to upload custom anime or cinema artwork, select blank garment weights (240 to 320 GSM), and configure hand-finished vintage enzyme stone washes.
            </p>
            <button
              type="button"
              onClick={() => setSelectedSubCategory('all')}
              className="ruh-btn-secondary text-[10px] py-2 px-5 mt-2 cursor-pointer"
            >
              View In-Stock T-Shirts
            </button>
          </div>
        )}

        {/* Secondary Filter & Sort Bar */}
        {selectedMainCategory === 't-shirts' && selectedSubCategory !== 'customise' && (
          <>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-3 px-5 mb-8 bg-[#EBE8E1] rounded-2xl border border-[#111318]/8 text-[11px] uppercase tracking-[0.14em]">
              {/* Left Filters */}
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-[#111318]/60 font-semibold">Size:</span>
                <div className="flex items-center gap-1">
                  {['all', 'S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                    <button
                      key={sz}
                      type="button"
                      onClick={() => {
                        setActiveSizeFilter(sz)
                        setVisibleCount(INITIAL_VISIBLE_COUNT)
                      }}
                      className={`ruh-size-chip ${activeSizeFilter === sz ? 'active' : ''}`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right View Toggles & Sorter */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[#111318]/60 font-semibold">Sort:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as any)}
                    className="ruh-select"
                  >
                    <option value="featured">Featured Essentials</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                  </select>
                </div>

                <div className="hidden sm:flex items-center border border-[#111318]/15 rounded-md overflow-hidden bg-white/70">
                  <button
                    type="button"
                    onClick={() => setGridCols(2)}
                    className={`px-2.5 py-1 text-[10px] tracking-wider transition-colors ${
                      gridCols === 2 ? 'bg-[#111318] text-[#F0EEE9] font-bold' : 'text-[#111318]/60 hover:text-[#111318]'
                    }`}
                  >
                    2 Col
                  </button>
                  <button
                    type="button"
                    onClick={() => setGridCols(4)}
                    className={`px-2.5 py-1 text-[10px] tracking-wider transition-colors ${
                      gridCols === 4 ? 'bg-[#111318] text-[#F0EEE9] font-bold' : 'text-[#111318]/60 hover:text-[#111318]'
                    }`}
                  >
                    4 Col
                  </button>
                </div>
              </div>
            </div>

            {/* Product Count Indicator */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#111318]/8 text-xs">
              <span className="font-mono text-[#111318]/60">
                Displaying {displayedProducts.length} of {filtered.length} curated silhouettes
              </span>
              <span className="text-[10px] uppercase tracking-wider text-[#C6A56B] font-bold">
                ● 280 GSM Pure Combed Cotton
              </span>
            </div>

            {/* Product Cards Grid (4 to 5 products initially) */}
            <div
              className={`grid gap-6 sm:gap-8 ${
                gridCols === 2
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : 'grid-cols-2 sm:grid-cols-2 lg:grid-cols-4'
              }`}
            >
              {displayedProducts.map((product) => {
                const isHovered = hoveredProduct === product.id
                const isSaved = wishlist.includes(product.id)

                return (
                  <div
                    key={product.id}
                    className="group flex flex-col justify-between"
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                  >
                    <div>
                      {/* Image Frame */}
                      <div className="relative aspect-[3/4] w-full bg-[#E5E2DA] overflow-hidden rounded-xl border border-[#111318]/8 shadow-sm">
                        <img
                          src={isHovered ? product.hoverImage : product.primaryImage}
                          alt={product.name}
                          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-104 cursor-pointer"
                          onClick={() => setQuickViewProduct(product)}
                        />

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 flex flex-col gap-1.5 pointer-events-none">
                          {product.subCategory && (
                            <span className="px-2 py-0.5 rounded-full bg-[#111318]/90 text-[#F0EEE9] text-[9px] uppercase tracking-[0.16em] font-semibold backdrop-blur-sm border border-[#C6A56B]/30">
                              {product.subCategory}
                            </span>
                          )}
                          {product.isNew && (
                            <span className="px-2 py-0.5 rounded-full bg-[#C6A56B] text-[#111318] text-[9px] uppercase tracking-[0.16em] font-bold shadow-sm">
                              New Drop
                            </span>
                          )}
                        </div>

                        {/* Wishlist Button */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleWishlist(product.id)
                          }}
                          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/80 hover:bg-white text-[#111318] flex items-center justify-center transition-all shadow-sm cursor-pointer"
                          aria-label={isSaved ? 'Remove from wishlist' : 'Add to wishlist'}
                        >
                          <svg
                            className={`w-4 h-4 ${isSaved ? 'text-red-500 fill-current' : 'text-[#111318]'}`}
                            fill={isSaved ? 'currentColor' : 'none'}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                          </svg>
                        </button>

                        {/* Quick View Button on Hover */}
                        <button
                          type="button"
                          onClick={() => setQuickViewProduct(product)}
                          className="absolute bottom-3 left-3 right-3 py-2.5 px-4 bg-[#111318]/90 hover:bg-[#111318] text-[#F0EEE9] text-[10px] uppercase tracking-[0.16em] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-sm border border-[#C6A56B]/30 cursor-pointer shadow-lg"
                        >
                          Quick View & Sizing
                        </button>
                      </div>

                      {/* Product Metadata */}
                      <div className="pt-3.5 space-y-1">
                        <div className="flex items-center justify-between text-[10px] text-[#111318]/50 uppercase tracking-[0.14em]">
                          <span>{product.subtitle}</span>
                          <span className="font-mono text-[#C6A56B] font-bold">{product.fabric.split('·')[0]}</span>
                        </div>

                        <h3
                          onClick={() => setQuickViewProduct(product)}
                          className="font-serif text-[15px] sm:text-base text-[#111318] font-normal group-hover:text-[#C6A56B] transition-colors leading-snug cursor-pointer line-clamp-1"
                        >
                          {product.name}
                        </h3>

                        {/* Price */}
                        <p className="font-serif text-sm font-semibold text-[#111318]">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                    </div>

                    {/* Quick Add Action */}
                    <div className="pt-3">
                      <button
                        type="button"
                        onClick={() => addToCart(product, product.sizes[0], product.colorOptions[0]?.name)}
                        className="w-full py-2 px-3 text-[10px] uppercase tracking-[0.16em] font-bold rounded-full bg-white hover:bg-[#111318] text-[#111318] hover:text-[#F0EEE9] border border-[#111318]/20 hover:border-[#111318] transition-all cursor-pointer shadow-sm flex items-center justify-center gap-1.5"
                      >
                        <span>+ Add to Bag</span>
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* =================================================================
                "SEE MORE" / "SHOW LESS" TOGGLE OPTION (EXACT USER REQUIREMENT)
                ================================================================= */}
            <div className="mt-12 text-center pt-8 border-t border-[#111318]/10">
              {hasMore ? (
                <div className="space-y-3">
                  <p className="text-xs text-[#111318]/60 font-mono">
                    Showing {displayedProducts.length} of {filtered.length} total silhouettes
                  </p>
                  <button
                    type="button"
                    onClick={() => setVisibleCount((prev) => prev + 4)}
                    className="ruh-btn-primary px-8 py-3 text-xs tracking-[0.18em] cursor-pointer"
                  >
                    See More T-Shirts ({filtered.length - displayedProducts.length} More) ↓
                  </button>
                </div>
              ) : filtered.length > INITIAL_VISIBLE_COUNT ? (
                <div className="space-y-3">
                  <p className="text-xs text-[#111318]/60 font-mono">
                    All {filtered.length} silhouettes loaded
                  </p>
                  <button
                    type="button"
                    onClick={() => setVisibleCount(INITIAL_VISIBLE_COUNT)}
                    className="ruh-btn-secondary px-6 py-2.5 text-xs tracking-[0.16em] cursor-pointer"
                  >
                    ↑ Show Less (Initial 4)
                  </button>
                </div>
              ) : null}
            </div>
          </>
        )}
      </div>
    </section>
  )
}
