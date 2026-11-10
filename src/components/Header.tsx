'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { useRouter, usePathname } from 'next/navigation'
import { useShop } from '../context/ShopContext'
import AnnouncementBar from './AnnouncementBar'

export default function Header() {
  const router = useRouter()
  const pathname = usePathname()
  const {
    cartCount,
    setIsCartOpen,
    setIsSearchOpen,
    user,
    setSelectedMainCategory,
    setSelectedSubCategory,
  } = useShop()

  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  // Cascading Flyout Menu States (Matching User Sketch)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const [activeMainHover, setActiveMainHover] = useState<'tshirts' | 'shirts' | 'mobile-covers' | null>('tshirts')
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const profileTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Products hover timeout handlers
  const handleProductsMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setProductsDropdownOpen(true)
  }

  const handleProductsMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setProductsDropdownOpen(false)
      setActiveMainHover('tshirts')
    }, 220)
  }

  // Profile Preview hover timeout handlers
  const handleProfileMouseEnter = () => {
    if (profileTimeoutRef.current) clearTimeout(profileTimeoutRef.current)
    setProfileDropdownOpen(true)
  }

  const handleProfileMouseLeave = () => {
    profileTimeoutRef.current = setTimeout(() => {
      setProfileDropdownOpen(false)
    }, 220)
  }

  // Selection Handler: Updates filter state and navigates to Products page
  const handleSelectSubCategory = (genre: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setProductsDropdownOpen(false)
    setMobileMenuOpen(false)
    setSelectedMainCategory('t-shirts')
    setSelectedSubCategory(genre)

    // Navigate to products page with category filter on
    router.push(`/products?category=t-shirts&sub=${encodeURIComponent(genre)}`)
  }

  const handleSelectMainCategory = (cat: 't-shirts' | 'shirts' | 'mobile-covers') => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setProductsDropdownOpen(false)
    setMobileMenuOpen(false)
    if (cat === 't-shirts') {
      setSelectedMainCategory('t-shirts')
      setSelectedSubCategory('all')
      router.push('/products?category=t-shirts&sub=all')
    } else if (cat === 'shirts') {
      setSelectedMainCategory('shirts')
      setSelectedSubCategory('all')
      router.push('/products?category=shirts')
    } else {
      setSelectedMainCategory('t-shirts')
      setSelectedSubCategory('all')
      router.push('/products?category=mobile-covers')
    }
  }

  return (
    <>
      <div
        className="sticky top-0 z-50 w-full"
        style={{ position: 'sticky', top: 0, zIndex: 50, width: '100%' }}
      >
        <AnnouncementBar />
        <header
          className={`w-full transition-all duration-300 ${
            isScrolled
              ? 'bg-[#F0EEE9]/95 backdrop-blur-md shadow-sm border-b border-[#111318]/10 py-2 sm:py-3'
              : 'bg-[#F0EEE9] border-b border-[#111318]/8 py-2.5 sm:py-4'
          }`}
        >
        {/* ===================================================================
            MOBILE HEADER (EXACTLY MATCHING SNEHA ACHARYA ARCHITECTURE WIREFRAME)
            Top: Centered RŪH Logo
            Bottom: Scrollable Strip (Home | Products | Orders | Partner With Us | [Bag] | (Profile))
            =================================================================== */}
        <div className="header-mobile-view px-3">
          {/* Top Logo Row with Search Icon */}
          <div className="relative w-full flex items-center justify-center py-1">
            <Link href="/" className="inline-block">
              <img
                src="/logo.png"
                alt="RŪH Logo"
                className="h-8 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setIsSearchOpen(true)}
              className="absolute right-0 p-1.5 text-[#111318] hover:text-[#9B7C38] transition-colors"
              aria-label="Search"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>

          {/* Horizontally Scrollable Navigation Strip */}
          <nav
            aria-label="Mobile scrollable primary navigation"
            className="w-full flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth py-2 pt-2.5 border-t border-[#111318]/8 text-xs uppercase tracking-[0.1em] font-semibold whitespace-nowrap"
          >
            <Link
              href="/"
              className={`px-2 py-1 rounded-full transition-colors flex-shrink-0 ${
                pathname === '/' ? 'text-[#9B7C38] font-bold' : 'text-[#111318] hover:text-[#9B7C38]'
              }`}
            >
              Home
            </Link>

            <Link
              href="/products"
              className={`px-2 py-1 rounded-full transition-colors flex-shrink-0 ${
                pathname.startsWith('/products') ? 'text-[#9B7C38] font-bold' : 'text-[#111318] hover:text-[#9B7C38]'
              }`}
            >
              Products
            </Link>

            <Link
              href="/orders"
              className={`px-2 py-1 rounded-full transition-colors flex-shrink-0 ${
                pathname.startsWith('/orders') ? 'text-[#9B7C38] font-bold' : 'text-[#111318] hover:text-[#9B7C38]'
              }`}
            >
              Orders
            </Link>

            <a
              href="/#partner"
              className="px-2 py-1 rounded-full text-[#111318] hover:text-[#9B7C38] transition-colors flex-shrink-0"
            >
              Partner With Us
            </a>

            {/* Cart / Bag Button */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-[#111318]/15 text-[#111318] hover:border-[#111318] transition-all flex-shrink-0 shadow-xs cursor-pointer"
              aria-label="Bag"
            >
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25c-.669 0-1.188-.578-1.119-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span className="font-mono text-[11px] font-bold">({cartCount})</span>
            </button>

            {/* Profile Avatar / Link */}
            <Link
              href="/profile"
              className="w-7 h-7 rounded-full bg-white border border-[#111318]/20 flex items-center justify-center text-[10px] font-bold text-[#111318] hover:border-[#C6A56B] flex-shrink-0 shadow-xs cursor-pointer"
              aria-label="Profile"
              title="Profile"
            >
              {user ? (
                user.name.slice(0, 2).toUpperCase()
              ) : (
                <svg className="w-3.5 h-3.5 text-[#111318]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              )}
            </Link>
          </nav>
        </div>

        {/* ===================================================================
            DESKTOP HEADER LOCKUP (LOGO LEFT, NAV RIGHT)
            =================================================================== */}
        <div className="header-desktop-view max-w-7xl mx-auto px-4 sm:px-8 items-center justify-between">
          {/* Left Brand Logo Lockup */}
          <Link href="/" className="group flex items-center gap-2.5 flex-shrink-0">
            <img
              src="/logo.png"
              alt="RŪH Logo"
              className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* ===================================================================
              DESKTOP PRIMARY NAVIGATION BAR (ORDER EXACTLY MATCHING USER SKETCH)
              Products | Founders Story | Orders | Profile | Home | Bag | User Profile Preview
              =================================================================== */}
          <nav
            aria-label="Desktop primary"
            className="flex items-center gap-6 xl:gap-8 text-xs font-semibold uppercase tracking-[0.12em]"
          >
            {/* 1. Products Tab (With Hover Cascading Flyout) */}
            <div
              className="relative py-2"
              onMouseEnter={handleProductsMouseEnter}
              onMouseLeave={handleProductsMouseLeave}
            >
              <Link
                href="/products"
                className={`flex items-center gap-1.5 py-1 transition-colors cursor-pointer ${
                  pathname.startsWith('/products') || productsDropdownOpen
                    ? 'text-[#9B7C38] font-bold'
                    : 'text-[#111318] hover:text-[#9B7C38]'
                }`}
              >
                <span>Products</span>
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    productsDropdownOpen ? 'rotate-180 text-[#9B7C38]' : 'text-[#111318]/50'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </Link>

              {/* -----------------------------------------------------------------
                  CASCADING FLYOUT MENUS (EXACTLY MATCHING USER WIREFRAME DRAWING)
                  Card 1: Tshirts > | Shirts > | Mobile Covers > | Tune in for more
                  Card 2 (on hover Tshirts): Anime | Kdrama | Bollywood | Cartoon | Customise on your own
                  ----------------------------------------------------------------- */}
              {productsDropdownOpen && (
                <div
                  className="absolute left-0 top-full pt-2 flex items-start z-50 animate-fadeIn"
                  onMouseEnter={handleProductsMouseEnter}
                  onMouseLeave={handleProductsMouseLeave}
                >
                  {/* Card 1: Main Categories */}
                  <div className="w-56 bg-white rounded-2xl shadow-2xl border border-[#111318]/12 p-3 space-y-1.5">
                    {/* Tshirts > */}
                    <button
                      type="button"
                      onMouseEnter={() => setActiveMainHover('tshirts')}
                      onClick={() => handleSelectMainCategory('t-shirts')}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        activeMainHover === 'tshirts'
                          ? 'bg-[#111318] text-[#F0EEE9] shadow-sm'
                          : 'text-[#111318] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <span className="capitalize">Tshirts</span>
                      <span className="text-sm font-bold font-mono">›</span>
                    </button>

                    {/* Shirts > */}
                    <button
                      type="button"
                      onMouseEnter={() => setActiveMainHover('shirts')}
                      onClick={() => handleSelectMainCategory('shirts')}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        activeMainHover === 'shirts'
                          ? 'bg-[#111318] text-[#F0EEE9] shadow-sm'
                          : 'text-[#111318] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <span className="capitalize">Shirts</span>
                      <span className="text-sm font-bold font-mono">›</span>
                    </button>

                    {/* Mobile Covers > */}
                    <button
                      type="button"
                      onMouseEnter={() => setActiveMainHover('mobile-covers')}
                      onClick={() => handleSelectMainCategory('mobile-covers')}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                        activeMainHover === 'mobile-covers'
                          ? 'bg-[#111318] text-[#F0EEE9] shadow-sm'
                          : 'text-[#111318] hover:bg-[#FAF8F5]'
                      }`}
                    >
                      <span className="capitalize">Mobile Covers</span>
                      <span className="text-sm font-bold font-mono">›</span>
                    </button>

                    {/* Tune in for more */}
                    <div className="pt-2 border-t border-[#111318]/8 px-3.5 py-1.5 text-[11px] text-[#8C887F] font-mono italic text-center">
                      Tune in for more ✨
                    </div>
                  </div>

                  {/* Card 2: Flyout to the Right */}
                  <div className="pl-2">
                    {/* If hovering Tshirts */}
                    {activeMainHover === 'tshirts' && (
                      <div className="w-64 bg-white rounded-2xl shadow-2xl border border-[#111318]/12 p-3 space-y-1.5 animate-fadeIn">
                        <div className="px-3 py-1 pb-2 border-b border-[#111318]/8 flex items-center justify-between">
                          <span className="text-[10px] uppercase font-bold text-[#9B7C38] tracking-wider">
                            T-Shirt Archives
                          </span>
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        </div>

                        {/* Anime */}
                        <button
                          type="button"
                          onClick={() => handleSelectSubCategory('Anime')}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#111318] hover:bg-[#FAF8F5] hover:text-[#9B7C38] transition-all flex items-center justify-between group cursor-pointer"
                        >
                          <span>Anime</span>
                          <span className="text-[10px] text-[#8C887F] font-mono group-hover:text-[#9B7C38]">AOT · JJK</span>
                        </button>

                        {/* Kdrama */}
                        <button
                          type="button"
                          onClick={() => handleSelectSubCategory('Kdrama')}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#111318] hover:bg-[#FAF8F5] hover:text-[#9B7C38] transition-all flex items-center justify-between group cursor-pointer"
                        >
                          <span>Kdrama</span>
                          <span className="text-[10px] text-[#8C887F] font-mono group-hover:text-[#9B7C38]">CLOY · DanBam</span>
                        </button>

                        {/* Bollywood */}
                        <button
                          type="button"
                          onClick={() => handleSelectSubCategory('Bollywood')}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#111318] hover:bg-[#FAF8F5] hover:text-[#9B7C38] transition-all flex items-center justify-between group cursor-pointer"
                        >
                          <span>Bollywood</span>
                          <span className="text-[10px] text-[#8C887F] font-mono group-hover:text-[#9B7C38]">DDLJ · Retro</span>
                        </button>

                        {/* Cartoon */}
                        <button
                          type="button"
                          onClick={() => handleSelectSubCategory('Cartoon')}
                          className="w-full text-left px-3.5 py-2.5 rounded-xl text-xs font-semibold text-[#111318] hover:bg-[#FAF8F5] hover:text-[#9B7C38] transition-all flex items-center justify-between group cursor-pointer"
                        >
                          <span>Cartoon</span>
                          <span className="text-[10px] text-[#8C887F] font-mono group-hover:text-[#9B7C38]">90s Archive</span>
                        </button>

                        {/* Customise on your own */}
                        <div className="pt-1.5 border-t border-[#111318]/8">
                          <button
                            type="button"
                            onClick={() => alert('Customise Studio will launch in Phase 2!')}
                            className="w-full text-left px-3.5 py-2 rounded-xl text-xs font-medium text-[#8C887F] hover:bg-[#FAF8F5] transition-all flex items-center justify-between"
                          >
                            <span>Customise on your own</span>
                            <span className="text-[9px] font-mono uppercase bg-[#FAF3E0] text-[#9B7C38] px-2 py-0.5 rounded-full border border-[#9B7C38]/20 font-bold">
                              Coming Soon
                            </span>
                          </button>
                        </div>
                      </div>
                    )}

                    {/* If hovering Shirts (Case 1: Coming Soon) */}
                    {activeMainHover === 'shirts' && (
                      <div className="w-56 bg-white rounded-2xl shadow-2xl border border-[#111318]/12 p-6 flex flex-col items-center justify-center text-center animate-fadeIn space-y-2">
                        <span className="w-8 h-8 rounded-full bg-[#FAF3E0] text-[#9B7C38] flex items-center justify-center font-bold text-sm">
                          ✦
                        </span>
                        <h4 className="text-sm font-semibold text-[#111318]">Shirts</h4>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#FAF3E0] text-[#9B7C38] border border-[#9B7C38]/25">
                          Coming Soon
                        </span>
                        <p className="text-[11px] text-[#5A5D66] font-light pt-1">
                          In atelier production for Edition 02.
                        </p>
                      </div>
                    )}

                    {/* If hovering Mobile Covers (Case 1: Coming Soon) */}
                    {activeMainHover === 'mobile-covers' && (
                      <div className="w-56 bg-white rounded-2xl shadow-2xl border border-[#111318]/12 p-6 flex flex-col items-center justify-center text-center animate-fadeIn space-y-2">
                        <span className="w-8 h-8 rounded-full bg-[#FAF3E0] text-[#9B7C38] flex items-center justify-center font-bold text-sm">
                          📱
                        </span>
                        <h4 className="text-sm font-semibold text-[#111318]">Mobile Covers</h4>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-[#FAF3E0] text-[#9B7C38] border border-[#9B7C38]/25">
                          Coming Soon
                        </span>
                        <p className="text-[11px] text-[#5A5D66] font-light pt-1">
                          Protective anime & cartoon cases dropping next.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* 2. Orders */}
            <Link
              href="/orders"
              className={`py-1 transition-colors ${
                pathname === '/orders' ? 'text-[#9B7C38] font-bold' : 'text-[#111318] hover:text-[#9B7C38]'
              }`}
            >
              Orders
            </Link>

            {/* 3. Profile */}
            <Link
              href="/profile"
              className={`py-1 transition-colors ${
                pathname === '/profile' ? 'text-[#9B7C38] font-bold' : 'text-[#111318] hover:text-[#9B7C38]'
              }`}
            >
              Profile
            </Link>

            {/* 4. Home */}
            <Link
              href="/"
              className={`py-1 transition-colors ${
                pathname === '/' ? 'text-[#9B7C38] font-bold' : 'text-[#111318] hover:text-[#9B7C38]'
              }`}
            >
              Home
            </Link>

            {/* 5. Partner with us */}
            <a
              href="/#partner"
              className="py-1 transition-colors text-[#111318] hover:text-[#9B7C38]"
            >
              Partner with us
            </a>

            {/* 6. Bag Pill */}
            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="px-4 py-2 rounded-full bg-white hover:bg-[#111318] hover:text-[#F0EEE9] text-[#111318] border border-[#111318]/15 shadow-sm transition-all flex items-center gap-2 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5 text-[#9B7C38]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
              </svg>
              <span>Bag ({cartCount})</span>
            </button>

            {/* 7. User Profile Preview (Avatar circle + chevron as drawn in sketch) */}
            <div
              className="relative py-2"
              onMouseEnter={handleProfileMouseEnter}
              onMouseLeave={handleProfileMouseLeave}
            >
              <button
                type="button"
                onClick={() => setProfileDropdownOpen((prev) => !prev)}
                className="flex items-center gap-1.5 p-1 rounded-full hover:bg-white transition-all cursor-pointer"
                title="User Profile Preview"
              >
                <div className="w-8 h-8 rounded-full bg-[#FAF3E0] text-[#9B7C38] font-serif font-bold text-xs flex items-center justify-center border border-[#9B7C38]/30 shadow-sm">
                  {user?.name ? user.name.split(' ').map((n) => n[0]).join('') : 'SA'}
                </div>
                <svg
                  className={`w-3.5 h-3.5 text-[#111318]/60 transition-transform duration-200 ${
                    profileDropdownOpen ? 'rotate-180 text-[#9B7C38]' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </button>

              {/* User Profile Preview Card (Flyout Card) */}
              {profileDropdownOpen && (
                <div
                  className="absolute right-0 top-full pt-2 w-64 z-50 animate-fadeIn"
                  onMouseEnter={handleProfileMouseEnter}
                  onMouseLeave={handleProfileMouseLeave}
                >
                  <div className="bg-white rounded-2xl shadow-2xl border border-[#111318]/12 p-4 space-y-3">
                    <div className="flex items-center gap-3 pb-3 border-b border-[#111318]/8">
                      <div className="w-10 h-10 rounded-full bg-[#FAF3E0] text-[#9B7C38] font-serif font-bold text-sm flex items-center justify-center border border-[#9B7C38]/30">
                        {user?.name ? user.name.split(' ').map((n) => n[0]).join('') : 'SA'}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-serif text-sm font-bold text-[#111318] truncate">
                          {user?.name || 'Sneha Acharya'}
                        </p>
                        <p className="text-[11px] text-[#5A5D66] font-mono truncate">
                          {user?.email || 'sneha@example.com'}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-1 text-xs font-semibold">
                      <Link
                        href="/orders"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center justify-between p-2 rounded-xl text-[#111318] hover:bg-[#FAF8F5] hover:text-[#9B7C38] transition-colors"
                      >
                        <span>My Past Orders</span>
                        <span className="font-mono text-xs">→</span>
                      </Link>

                      <Link
                        href="/profile"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center justify-between p-2 rounded-xl text-[#111318] hover:bg-[#FAF8F5] hover:text-[#9B7C38] transition-colors"
                      >
                        <span>Account Modification</span>
                        <span className="font-mono text-xs">→</span>
                      </Link>

                      <Link
                        href="/dashboard"
                        onClick={() => setProfileDropdownOpen(false)}
                        className="flex items-center justify-between p-2 rounded-xl text-[#9B7C38] hover:bg-[#FAF3E0] transition-colors"
                      >
                        <span>CMS Operations Hub</span>
                        <span className="font-mono text-xs">↗</span>
                      </Link>
                    </div>

                    <div className="pt-2 border-t border-[#111318]/8">
                      <button
                        type="button"
                        onClick={() => {
                          setProfileDropdownOpen(false)
                          alert('Signed out of RŪH session.')
                        }}
                        className="w-full py-1.5 text-center text-[11px] font-semibold text-[#8C887F] hover:text-[#111318] transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>
      </header>
      </div>

      {/* =====================================================================
          MOBILE DRAWER MENU (RESPONSIVE SUPPORT)
          ===================================================================== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex animate-fadeIn">
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative w-4/5 max-w-sm bg-[#F0EEE9] text-[#111318] h-full shadow-2xl flex flex-col justify-between p-6 z-10 border-r border-[#111318]/15 overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#111318]/10">
                <img
                  src="/logo.png"
                  alt="RŪH"
                  className="h-8 w-auto object-contain"
                />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#111318] hover:text-[#9B7C38] cursor-pointer"
                  aria-label="Close menu"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <nav className="mt-6 flex flex-col gap-3 text-xs uppercase tracking-[0.12em] font-semibold">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-[#111318] hover:text-[#9B7C38]"
                >
                  Home
                </Link>

                <div className="p-3 bg-white rounded-xl border border-[#111318]/8 space-y-2">
                  <span className="text-[#9B7C38] font-bold block">Products Archive</span>
                  <div className="pl-2 space-y-1 text-xs normal-case tracking-normal">
                    <button
                      type="button"
                      onClick={() => handleSelectSubCategory('Anime')}
                      className="block text-left w-full py-1 text-[#111318] hover:text-[#9B7C38]"
                    >
                      • Anime Archive
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectSubCategory('Kdrama')}
                      className="block text-left w-full py-1 text-[#111318] hover:text-[#9B7C38]"
                    >
                      • Kdrama Aesthetic
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectSubCategory('Bollywood')}
                      className="block text-left w-full py-1 text-[#111318] hover:text-[#9B7C38]"
                    >
                      • Bollywood Cinema
                    </button>
                    <button
                      type="button"
                      onClick={() => handleSelectSubCategory('Cartoon')}
                      className="block text-left w-full py-1 text-[#111318] hover:text-[#9B7C38]"
                    >
                      • Cartoon Archive
                    </button>
                  </div>
                </div>

                <Link
                  href="/orders"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-[#111318] hover:text-[#9B7C38]"
                >
                  Orders
                </Link>

                <Link
                  href="/profile"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-[#111318] hover:text-[#9B7C38]"
                >
                  Profile
                </Link>

                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-[#111318] hover:text-[#9B7C38]"
                >
                  Home
                </Link>

                <a
                  href="/#partner"
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 text-[#111318] hover:text-[#9B7C38]"
                >
                  Partner with us
                </a>

                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    setIsCartOpen(true)
                  }}
                  className="py-2 text-left text-[#9B7C38] font-bold"
                >
                  Shopping Bag ({cartCount})
                </button>
              </nav>
            </div>

            <div className="border-t border-[#111318]/10 pt-4 mt-6">
              <div className="flex items-center justify-between text-xs text-[#111318]/60 font-mono">
                <span>RŪH Apparel · Est. 2026</span>
                <span className="text-[#9B7C38] font-bold">280 GSM Core</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
