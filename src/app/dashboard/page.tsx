'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ShopProvider, useShop, Product, Order } from '../../context/ShopContext'
import { PRODUCTS as INITIAL_PRODUCTS } from '../../data/products'
import {
  CustomerPurchaseRecord,
  Vendor,
  ProductSupplyAllocation,
  ProcurementPO,
  SalesTransaction,
  FestiveEvent,
  EventOrder,
  INITIAL_CUSTOMERS,
  INITIAL_VENDORS,
  INITIAL_SUPPLY_ALLOCATIONS,
  INITIAL_PROCUREMENT_POS,
  INITIAL_SALES_TRANSACTIONS,
  INITIAL_EVENTS,
  INITIAL_EVENT_ORDERS,
} from '../../data/dashboardData'

import CustomerIntelligenceView from '../../components/dashboard/CustomerIntelligenceView'
import ProcurementSupplyView from '../../components/dashboard/ProcurementSupplyView'
import VendorDirectoryView from '../../components/dashboard/VendorDirectoryView'
import DualFinanceView from '../../components/dashboard/DualFinanceView'
import FestiveEventsView from '../../components/dashboard/FestiveEventsView'

function DashboardContent() {
  const { orders, formatPrice, currency } = useShop()
  const [activeTab, setActiveTab] = useState<
    | 'customer-intelligence'
    | 'procurement'
    | 'vendors'
    | 'finance'
    | 'events'
    | 'analytics'
    | 'pim'
    | 'oms'
    | 'discounts'
    | 'cms'
    | 'settings'
  >('customer-intelligence')
  
  // Dashboard 1 & 2 + Vendors + Finance + Events State
  const [customerList, setCustomerList] = useState<CustomerPurchaseRecord[]>(INITIAL_CUSTOMERS)
  const [vendorList, setVendorList] = useState<Vendor[]>(INITIAL_VENDORS)
  const [supplyAllocations, setSupplyAllocations] = useState<ProductSupplyAllocation[]>(INITIAL_SUPPLY_ALLOCATIONS)
  const [procurementPOs, setProcurementPOs] = useState<ProcurementPO[]>(INITIAL_PROCUREMENT_POS)
  const [salesTransactions, setSalesTransactions] = useState<SalesTransaction[]>(INITIAL_SALES_TRANSACTIONS)
  const [eventsList, setEventsList] = useState<FestiveEvent[]>(INITIAL_EVENTS)
  const [eventOrdersList, setEventOrdersList] = useState<EventOrder[]>(INITIAL_EVENT_ORDERS)

  const handleAddVendor = (newVendor: Vendor) => {
    setVendorList((prev) => [newVendor, ...prev])
    showNotification(`New supplier registered: ${newVendor.name}`)
  }

  const handleCreateEvent = (newEvent: FestiveEvent) => {
    setEventsList((prev) => [newEvent, ...prev])
    showNotification(`Festive campaign scheduled: ${newEvent.name} (${newEvent.promoCode})`)
  }

  // Local state for products in CMS
  const [productList, setProductList] = useState<Product[]>(INITIAL_PRODUCTS)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  
  // Warehouse allocation state (Mumbai vs Bengaluru)
  const [warehouseStock, setWarehouseStock] = useState<Record<string, { mumbai: number; bengaluru: number }>>({
    'prod-1': { mumbai: 8, bengaluru: 4 },
    'prod-2': { mumbai: 12, bengaluru: 6 },
    'prod-3': { mumbai: 6, bengaluru: 3 },
    'prod-4': { mumbai: 15, bengaluru: 9 },
    'prod-5': { mumbai: 18, bengaluru: 10 },
    'prod-6': { mumbai: 7, bengaluru: 2 },
    'prod-7': { mumbai: 14, bengaluru: 8 },
    'prod-8': { mumbai: 10, bengaluru: 5 },
  })

  // Local state for coupons
  const [coupons, setCoupons] = useState([
    { code: 'WELCOME10', discountPercent: 10, minOrder: 15000, usages: 42, status: 'Active', type: 'First Order' },
    { code: 'ARCHIVE15', discountPercent: 15, minOrder: 35000, usages: 19, status: 'Active', type: 'VIP Client' },
    { code: 'FOUNDATION20', discountPercent: 20, minOrder: 50000, usages: 8, status: 'Active', type: 'Tier 01 Private' },
  ])
  const [newCode, setNewCode] = useState('')
  const [newPercent, setNewPercent] = useState('10')
  const [newMinOrder, setNewMinOrder] = useState('20000')

  // CMS Editorial State
  const [heroKicker, setHeroKicker] = useState('01 / PERMANENT COLLECTION')
  const [heroHeadline, setHeroHeadline] = useState('Considered\nEssentials.')
  const [heroSubtext, setHeroSubtext] = useState('A modular wardrobe built on architectural tailoring, Grade-A pure Mongolian cashmere, and heavyweight cotton jersey.')
  // const [announcementText, setAnnouncementText] = useState('BUY LESS. CHOOSE WITH INTENTION. WEAR OFTEN. · COMPLIMENTARY DELIVERY OVER ₹2,500')
  const [cmsSavedToast, setCmsSavedToast] = useState(false)

  // Orders fulfillment workflow state
  const [orderList, setOrderList] = useState<Order[]>(orders)
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)
  const [notificationMsg, setNotificationMsg] = useState<string | null>(null)

  // New product form
  const [newProdName, setNewProdName] = useState('')
  const [newProdCategory, setNewProdCategory] = useState('outerwear')
  const [newProdPrice, setNewProdPrice] = useState('24900')
  const [newProdFabric, setNewProdFabric] = useState('100% Biella Wool')
  const [newProdDesc, setNewProdDesc] = useState('')
  const [newProdImage, setNewProdImage] = useState('https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1200&auto=format&fit=crop')

  // Calculated Analytics
  const totalRevenue = orderList.reduce((acc, o) => acc + o.total, 1845000)
  const totalOrders = orderList.length + 42
  const aov = Math.round(totalRevenue / totalOrders)
  const abandonmentRate = '18.4%'

  const showNotification = (msg: string) => {
    setNotificationMsg(msg)
    setTimeout(() => setNotificationMsg(null), 3500)
  }

  const handleUpdateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrderList((prev) =>
      prev.map((ord) => (ord.id === orderId ? { ...ord, status: newStatus } : ord))
    )
    showNotification(`Order ${orderId} status shifted to: ${newStatus}`)
  }

  const handleStockAdjust = (prodId: string, hub: 'mumbai' | 'bengaluru', delta: number) => {
    setWarehouseStock((prev) => {
      const current = prev[prodId] || { mumbai: 10, bengaluru: 5 }
      const updated = Math.max(0, current[hub] + delta)
      return {
        ...prev,
        [prodId]: { ...current, [hub]: updated },
      }
    })
    showNotification(`Updated inventory for ${hub.toUpperCase()} hub`)
  }

  const handleCreateCoupon = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newCode.trim()) return
    const codeClean = newCode.trim().toUpperCase()
    setCoupons((prev) => [
      ...prev,
      {
        code: codeClean,
        discountPercent: Number(newPercent),
        minOrder: Number(newMinOrder),
        usages: 0,
        status: 'Active',
        type: 'Custom Promotion',
      },
    ])
    setNewCode('')
    showNotification(`New promo rule created: ${codeClean} (-${newPercent}%)`)
  }

  const handleSaveCMS = (e: React.FormEvent) => {
    e.preventDefault()
    setCmsSavedToast(true)
    setTimeout(() => setCmsSavedToast(false), 3000)
    showNotification('Editorial and Announcement broadcast updated live!')
  }

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newProdName.trim()) return
    const newId = `prod-${Date.now()}`
    const p: Product = {
      id: newId,
      name: newProdName,
      subtitle: 'Edition 01 / Capsule',
      category: newProdCategory as any,
      price: Number(newProdPrice),
      description: newProdDesc || 'Engineered wardrobe foundation crafted with intentional textile restraint.',
      fabric: newProdFabric,
      color: 'Midnight Black',
      colorHex: '#111318',
      details: ['Hand-finished seams', 'Pre-shrunk architectural silhouette', 'Archival cedar packaging included'],
      sizes: ['S', 'M', 'L', 'XL'],
      colorOptions: [{ name: 'Black', hex: '#111318' }, { name: 'Ivory', hex: '#F0EEE9' }],
      primaryImage: newProdImage,
      hoverImage: newProdImage,
      isNew: true,
      stockCount: 15,
    }
    setProductList((prev) => [p, ...prev])
    setWarehouseStock((prev) => ({
      ...prev,
      [newId]: { mumbai: 10, bengaluru: 5 },
    }))
    setIsAddModalOpen(false)
    setNewProdName('')
    setNewProdDesc('')
    showNotification(`New piece registered: ${p.name}`)
  }

  return (
    <div
      className="ruh-dashboard-container bg-[#F0EEE9] text-[#111318] font-sans"
      style={{
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
        width: '100%',
        background: '#F0EEE9',
      }}
    >
      {/* Toast Notification */}
      {notificationMsg && (
        <div className="fixed top-5 right-5 z-50 bg-[#C6A56B] text-[#111318] px-4 py-2.5 rounded-full font-semibold text-xs tracking-wider shadow-2xl animate-fadeIn flex items-center gap-2">
          <span>✓</span>
          <span>{notificationMsg}</span>
        </div>
      )}

      {/* =====================================================================
          PERSISTENT LEFT SIDEBAR
          ===================================================================== */}
      <aside
        className="ruh-dashboard-sidebar bg-white border-r border-[#111318]/10 flex flex-col justify-between flex-shrink-0 shadow-sm"
        style={{
          width: '285px',
          minWidth: '285px',
          maxWidth: '285px',
          height: '100vh',
          position: 'sticky',
          top: 0,
          overflowY: 'auto',
          flexShrink: 0,
          background: '#FFFFFF',
        }}
      >
        <div>
          {/* Brand Header */}
          <div className="p-6 border-b border-[#111318]/10 bg-[#FAF8F5]">
            <Link href="/" className="group flex flex-col">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-[#C6A56B] text-[#111318] font-serif font-bold text-sm flex items-center justify-center">
                  R
                </span>
                <div>
                  <h1 className="font-serif text-lg tracking-widest text-[#111318] group-hover:text-[#9B7C38] transition-colors leading-none font-bold">
                    RŪH
                  </h1>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-[#9B7C38] block mt-1 font-bold">
                    CMS & Operations
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Core Operations Section */}
          <div className="px-5 pt-4 pb-1">
            <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#8C887F]">
              Core Operations
            </span>
          </div>

          <nav className="p-3 space-y-1">
            {[
              { id: 'customer-intelligence', label: '1. Customer CRM & Reviews', icon: '👤', badge: `${customerList.length} Clients` },
              { id: 'procurement', label: '2. Supply & Procurement', icon: '🏭', badge: `${supplyAllocations.length} Silhouettes` },
              { id: 'vendors', label: '3. Vendor Directory', icon: '📑', badge: `${vendorList.length} Ateliers` },
              { id: 'finance', label: '4. Dual Finance & Margin', icon: '💳', badge: 'COGS vs Sales' },
              { id: 'events', label: '5. Festive Events (Diwali)', icon: '✨', badge: 'Diwali Offer' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center justify-between px-3.5 py-3 rounded-xl text-[11px] font-semibold uppercase tracking-[0.1em] transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-[#111318] text-[#F0EEE9] shadow-md font-bold'
                    : 'text-[#4A4D55] hover:text-[#111318] hover:bg-[#FAF8F5]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-base">{item.icon}</span>
                  <span className="truncate">{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded-full font-bold ${
                      activeTab === item.id
                        ? 'bg-[#C6A56B] text-[#111318]'
                        : 'bg-[#FAF8F5] text-[#6E7380] border border-[#111318]/10'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>

          {/* Store Catalog & Logistics Section */}
          <div className="px-5 pt-3 pb-1 border-t border-[#111318]/6">
            <span className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#8C887F]">
              Catalog & Store Rules
            </span>
          </div>

          <nav className="p-3 pt-1 space-y-1">
            {[
              { id: 'pim', label: '6. PIM & Warehouses', icon: '📦', badge: `${productList.length} SKUs` },
              { id: 'oms', label: '7. OMS & Fulfillment', icon: '🚚', badge: `${orderList.length} Orders` },
              { id: 'discounts', label: '8. Marketing & Coupons', icon: '🏷️', badge: `${coupons.length} Rules` },
              { id: 'cms', label: '9. Editorial Broadcast', icon: '✍️', badge: 'Edition 01' },
              { id: 'analytics', label: '10. Executive Telemetry', icon: '📊', badge: 'Live' },
              { id: 'settings', label: '11. Store Configuration', icon: '⚙️', badge: 'INR Rails' },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveTab(item.id as any)}
                className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[11px] font-semibold uppercase tracking-[0.1em] transition-all cursor-pointer ${
                  activeTab === item.id
                    ? 'bg-[#111318] text-[#F0EEE9] shadow-md font-bold'
                    : 'text-[#5A5D66] hover:text-[#111318] hover:bg-[#FAF8F5]'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-sm">{item.icon}</span>
                  <span className="truncate">{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded-full ${
                      activeTab === item.id
                        ? 'bg-[#C6A56B] text-[#111318] font-bold'
                        : 'bg-[#FAF8F5] text-[#6E7380] border border-[#111318]/10'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Sidebar Footer / User Profile & Storefront Link */}
        <div className="p-4 border-t border-[#111318]/10 bg-[#FAF8F5] space-y-3">
          <Link
            href="/"
            className="w-full py-2.5 px-3 rounded-xl bg-white border border-[#111318]/15 hover:border-[#111318] text-[#111318] hover:bg-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
          >
            <span>← Return to Storefront</span>
            <span className="text-xs">↗</span>
          </Link>

          <div className="p-3 bg-white rounded-xl border border-[#111318]/10 flex items-center gap-3 shadow-sm">
            <div className="w-8 h-8 rounded-full bg-[#FAF3E0] text-[#9B7C38] flex items-center justify-center font-bold text-xs border border-[#9B7C38]/30">
              SA
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-bold text-[#111318] truncate">Sneha Acharya</p>
              <p className="text-[9px] text-[#C6A56B] uppercase tracking-wider font-mono">Studio Director</p>
            </div>
          </div>
        </div>
      </aside>

      {/* =====================================================================
          MAIN DASHBOARD DISPLAY
          ===================================================================== */}
      <main
        className="ruh-dashboard-main flex-1 flex flex-col min-w-0"
        style={{
          flex: 1,
          minWidth: 0,
          height: '100vh',
          overflowY: 'auto',
          background: '#F0EEE9',
        }}
      >
        {/* Top Header Bar */}
        <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 py-4 border-b border-[#111318]/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] font-bold">
                  CENTRAL OPERATIONS HUB
                </span>
                <span className="text-[#111318]/30">·</span>
                <span className="text-[10px] text-[#5A5D66] font-mono">
                  MUMBAI & BENGALURU AIR HUBS ONLINE
                </span>
              </div>
              <h2 className="font-serif text-xl text-[#111318] font-bold capitalize">
                {activeTab === 'customer-intelligence' && 'Customer CRM & Post-Purchase Disposition'}
                {activeTab === 'procurement' && 'Supply & Atelier Procurement Allocation'}
                {activeTab === 'vendors' && 'Global Fabric Mills & Supplier Directory'}
                {activeTab === 'finance' && 'Dual Finance Hub: COGS Outflow vs Sales Inflow'}
                {activeTab === 'events' && 'Festive Campaigns & Diwali Offer Bought Dashboard'}
                {activeTab === 'analytics' && 'Executive Performance & Revenue Telemetry'}
                {activeTab === 'pim' && 'Product Information Management (PIM) & Warehouses'}
                {activeTab === 'oms' && 'Order Management System (OMS) & Logistics Webhooks'}
                {activeTab === 'discounts' && 'Marketing Engine & Discount Rules'}
                {activeTab === 'cms' && 'Editorial Drop & Broadcast CMS'}
                {activeTab === 'settings' && 'Store Configuration & Indian Logistics Rails'}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {activeTab === 'pim' && (
              <button
                type="button"
                onClick={() => setIsAddModalOpen(true)}
                className="ruh-btn-gold py-2 px-4 text-[10px]"
              >
                + Register New Capsule Piece
              </button>
            )}
            <Link
              href="/"
              target="_blank"
              className="py-2 px-3.5 rounded-xl bg-white text-[#111318] hover:bg-[#FAF8F5] border border-[#111318]/15 text-xs font-semibold shadow-sm transition-all"
              title="Open storefront preview in new tab"
            >
              Live Shop ↗
            </Link>
          </div>
        </header>

        {/* Tab Content Canvas */}
        <div className="p-6 sm:p-8 space-y-8 flex-1">
          {/* =================================================================
              DASHBOARD 1: CUSTOMER DISPOSITION & REVIEWS INTELLIGENCE
              ================================================================= */}
          {activeTab === 'customer-intelligence' && (
            <CustomerIntelligenceView
              customers={customerList}
              formatPrice={formatPrice}
            />
          )}

          {/* =================================================================
              DASHBOARD 2: VENDOR SUPPLY & PRODUCT PROCUREMENT MATRIX
              ================================================================= */}
          {activeTab === 'procurement' && (
            <ProcurementSupplyView
              allocations={supplyAllocations}
              formatPrice={formatPrice}
            />
          )}

          {/* =================================================================
              PAGE 3: VENDOR DIRECTORY & ONBOARDING HUB
              ================================================================= */}
          {activeTab === 'vendors' && (
            <VendorDirectoryView
              vendors={vendorList}
              formatPrice={formatPrice}
              onAddVendor={handleAddVendor}
            />
          )}

          {/* =================================================================
              PAGE 4: DUAL FINANCE HUB (BACKEND COGS VS FRONTEND SALES)
              ================================================================= */}
          {activeTab === 'finance' && (
            <DualFinanceView
              procurementPOs={procurementPOs}
              salesTransactions={salesTransactions}
              formatPrice={formatPrice}
            />
          )}

          {/* =================================================================
              PAGE 5: FESTIVE CAMPAIGNS & DIWALI OFFER BOUGHT DASHBOARD
              ================================================================= */}
          {activeTab === 'events' && (
            <FestiveEventsView
              events={eventsList}
              eventOrders={eventOrdersList}
              formatPrice={formatPrice}
              onCreateEvent={handleCreateEvent}
            />
          )}

          {/* =================================================================
              TAB 6: EXECUTIVE TELEMETRY
              ================================================================= */}
          {activeTab === 'analytics' && (
            <div className="space-y-8">
              {/* Metric Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-5 bg-[#16181E] rounded-2xl border border-[#F0EEE9]/10 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#C6A56B] font-semibold">
                      NET SALES VOLUME (MTD)
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono font-bold">+18.4%</span>
                  </div>
                  <p className="font-serif text-3xl text-[#F0EEE9] font-normal">
                    {formatPrice(totalRevenue)}
                  </p>
                  <p className="text-[11px] text-[#F0EEE9]/60 mt-1 font-light">
                    Across {totalOrders} luxury capsule dispatches
                  </p>
                </div>

                <div className="p-5 bg-[#16181E] rounded-2xl border border-[#F0EEE9]/10 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#C6A56B] font-semibold">
                      AVERAGE ORDER VALUE (AOV)
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono font-bold">+9.2%</span>
                  </div>
                  <p className="font-serif text-3xl text-[#F0EEE9] font-normal">
                    {formatPrice(aov)}
                  </p>
                  <p className="text-[11px] text-[#F0EEE9]/60 mt-1 font-light">
                    Multi-piece capsule basket composition
                  </p>
                </div>

                <div className="p-5 bg-[#16181E] rounded-2xl border border-[#F0EEE9]/10 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#C6A56B] font-semibold">
                      CART ABANDONMENT RATE
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono font-bold">-4.1%</span>
                  </div>
                  <p className="font-serif text-3xl text-[#F0EEE9] font-normal">
                    {abandonmentRate}
                  </p>
                  <p className="text-[11px] text-[#F0EEE9]/60 mt-1 font-light">
                    Optimized via WhatsApp OTP 1-click checkout
                  </p>
                </div>

                <div className="p-5 bg-[#16181E] rounded-2xl border border-[#F0EEE9]/10 shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] uppercase tracking-[0.16em] text-[#C6A56B] font-semibold">
                      FULFILLMENT RATE (SLA)
                    </span>
                    <span className="text-[10px] text-[#C6A56B] font-mono font-bold">99.2%</span>
                  </div>
                  <p className="font-serif text-3xl text-[#F0EEE9] font-normal">
                    24h Air
                  </p>
                  <p className="text-[11px] text-[#F0EEE9]/60 mt-1 font-light">
                    Delhivery Express Air Priority routing
                  </p>
                </div>
              </div>

              {/* Real-time Order Stream & SKU Sales Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Left: Top Grossing Silhouettes */}
                <div className="lg:col-span-7 bg-[#16181E] p-6 rounded-2xl border border-[#F0EEE9]/10 space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F0EEE9]/10">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#C6A56B] font-bold">
                      TOP PERFORMING FOUNDATIONS (EDITION 01)
                    </span>
                    <span className="text-[10px] text-[#F0EEE9]/50 font-mono">Ranked by Revenue</span>
                  </div>
                  <div className="space-y-3">
                    {productList.slice(0, 5).map((p, idx) => (
                      <div
                        key={p.id}
                        className="p-3 bg-[#111318] rounded-xl border border-[#F0EEE9]/8 flex items-center justify-between gap-4"
                      >
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-xs text-[#C6A56B] font-bold w-4">
                            0{idx + 1}
                          </span>
                          <img
                            src={p.primaryImage}
                            alt={p.name}
                            className="w-10 h-12 object-cover rounded-lg border border-[#F0EEE9]/10"
                          />
                          <div>
                            <h4 className="font-serif text-sm text-[#F0EEE9]">{p.name}</h4>
                            <p className="text-[10px] text-[#F0EEE9]/50">{p.fabric}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className="text-xs font-semibold text-[#F0EEE9]">
                            {formatPrice(p.price)}
                          </span>
                          <span className="text-[10px] text-emerald-400 block font-mono">
                            {(14 - idx * 2)} units sold
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right: Payment Rail Breakdown */}
                <div className="lg:col-span-5 bg-[#16181E] p-6 rounded-2xl border border-[#F0EEE9]/10 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-[#F0EEE9]/10">
                    <span className="text-[10px] uppercase tracking-[0.18em] text-[#C6A56B] font-bold">
                      INDIAN PAYMENT RAIL DISTRIBUTION
                    </span>
                    <span className="text-[10px] text-emerald-400 font-mono">100% Settled</span>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>UPI Intent & QR (GPay, PhonePe, CRED)</span>
                        <span className="font-bold text-[#C6A56B]">64%</span>
                      </div>
                      <div className="w-full bg-[#111318] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#C6A56B] h-full" style={{ width: '64%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Credit / Debit Cards (Visa, Mastercard, RuPay)</span>
                        <span className="font-bold text-[#F0EEE9]">24%</span>
                      </div>
                      <div className="w-full bg-[#111318] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#F0EEE9] h-full" style={{ width: '24%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Net Banking (HDFC, ICICI, SBI)</span>
                        <span className="font-bold text-[#F0EEE9]/80">8%</span>
                      </div>
                      <div className="w-full bg-[#111318] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#F0EEE9]/60 h-full" style={{ width: '8%' }} />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Cash on Delivery (WhatsApp Verified)</span>
                        <span className="font-bold text-[#F0EEE9]/60">4%</span>
                      </div>
                      <div className="w-full bg-[#111318] h-2 rounded-full overflow-hidden">
                        <div className="bg-[#F0EEE9]/40 h-full" style={{ width: '4%' }} />
                      </div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-[#111318] rounded-xl border border-[#C6A56B]/20 text-[11px] text-[#F0EEE9]/70 leading-relaxed">
                    <strong className="text-[#C6A56B]">Merchant Settlement Note: </strong>
                    All UPI & Card transactions auto-reconciled with Razorpay T+1 settlement to HDFC Current Account.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* =================================================================
              TAB 2: PIM & WAREHOUSE INVENTORY MATRIX
              ================================================================= */}
          {activeTab === 'pim' && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#F0EEE9]/10 gap-3">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] font-bold">
                    CAPSULE INVENTORY MATRIX
                  </span>
                  <p className="text-xs text-[#F0EEE9]/70 mt-0.5">
                    Live stock balances across Mumbai Central & Bengaluru South logistics centers.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-emerald-400 font-mono">
                    ● Auto-syncing with Storefront PDP
                  </span>
                </div>
              </div>

              {/* Table */}
              <div className="bg-[#16181E] rounded-2xl border border-[#F0EEE9]/10 overflow-hidden shadow-lg">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#111318] text-[#C6A56B] text-[10px] uppercase tracking-[0.14em] border-b border-[#F0EEE9]/10">
                    <tr>
                      <th className="py-3.5 px-4">Garment</th>
                      <th className="py-3.5 px-4">Category</th>
                      <th className="py-3.5 px-4">Base Price</th>
                      <th className="py-3.5 px-4">Mumbai Hub</th>
                      <th className="py-3.5 px-4">Bengaluru Hub</th>
                      <th className="py-3.5 px-4">Total Available</th>
                      <th className="py-3.5 px-4 text-right">Quick Stock Adjust</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#F0EEE9]/8">
                    {productList.map((p) => {
                      const counts = warehouseStock[p.id] || { mumbai: 8, bengaluru: 4 }
                      const totalStock = counts.mumbai + counts.bengaluru
                      const isLowStock = totalStock <= 8

                      return (
                        <tr key={p.id} className="hover:bg-[#1F222B]/50 transition-colors">
                          <td className="py-3.5 px-4">
                            <div className="flex items-center gap-3">
                              <img
                                src={p.primaryImage}
                                alt={p.name}
                                className="w-10 h-12 object-cover rounded-lg border border-[#F0EEE9]/10 flex-shrink-0"
                              />
                              <div>
                                <p className="font-serif font-medium text-sm text-[#F0EEE9]">{p.name}</p>
                                <p className="text-[10px] text-[#F0EEE9]/50 font-mono">SKU: RUH-{p.id.toUpperCase()}</p>
                              </div>
                            </div>
                          </td>
                          <td className="py-3.5 px-4 uppercase text-[10px] tracking-wider text-[#F0EEE9]/70">
                            {p.category}
                          </td>
                          <td className="py-3.5 px-4 font-semibold text-[#F0EEE9]">
                            {formatPrice(p.price)}
                          </td>
                          <td className="py-3.5 px-4 font-mono">
                            <span className="text-[#F0EEE9]">{counts.mumbai} units</span>
                          </td>
                          <td className="py-3.5 px-4 font-mono">
                            <span className="text-[#F0EEE9]">{counts.bengaluru} units</span>
                          </td>
                          <td className="py-3.5 px-4">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-mono font-bold ${
                                isLowStock
                                  ? 'bg-red-500/20 text-red-300 border border-red-500/40'
                                  : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              }`}
                            >
                              {totalStock} in stock {isLowStock ? '(Low Stock)' : ''}
                            </span>
                          </td>
                          <td className="py-3.5 px-4 text-right">
                            <div className="inline-flex items-center gap-1.5 bg-[#111318] p-1 rounded-xl border border-[#F0EEE9]/10">
                              <span className="text-[9px] uppercase tracking-wider text-[#F0EEE9]/50 px-1">BOM:</span>
                              <button
                                type="button"
                                onClick={() => handleStockAdjust(p.id, 'mumbai', -1)}
                                className="w-5 h-5 rounded-md bg-[#1F222B] text-xs hover:bg-[#C6A56B] hover:text-[#111318] transition-colors"
                              >
                                -
                              </button>
                              <button
                                type="button"
                                onClick={() => handleStockAdjust(p.id, 'mumbai', 1)}
                                className="w-5 h-5 rounded-md bg-[#1F222B] text-xs hover:bg-[#C6A56B] hover:text-[#111318] transition-colors"
                              >
                                +
                              </button>
                              <span className="text-[9px] uppercase tracking-wider text-[#F0EEE9]/50 px-1 ml-1">BLR:</span>
                              <button
                                type="button"
                                onClick={() => handleStockAdjust(p.id, 'bengaluru', -1)}
                                className="w-5 h-5 rounded-md bg-[#1F222B] text-xs hover:bg-[#C6A56B] hover:text-[#111318] transition-colors"
                              >
                                -
                              </button>
                              <button
                                type="button"
                                onClick={() => handleStockAdjust(p.id, 'bengaluru', 1)}
                                className="w-5 h-5 rounded-md bg-[#1F222B] text-xs hover:bg-[#C6A56B] hover:text-[#111318] transition-colors"
                              >
                                +
                              </button>
                            </div>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* =================================================================
              TAB 3: OMS & LOGISTICS WEBHOOKS
              ================================================================= */}
          {activeTab === 'oms' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-[#F0EEE9]/10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] font-bold">
                    ORDER MANAGEMENT SYSTEM (OMS)
                  </span>
                  <p className="text-xs text-[#F0EEE9]/70 mt-0.5">
                    Direct integration with Delhivery & Shiprocket APIs. Generate packing slips & dispatch webhooks.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-full font-mono">
                    Delhivery Air Priority Webhooks: ACTIVE
                  </span>
                </div>
              </div>

              {/* Order Cards */}
              <div className="space-y-4">
                {orderList.map((ord) => (
                  <div
                    key={ord.id}
                    className="p-5 bg-[#16181E] rounded-2xl border border-[#F0EEE9]/10 space-y-4 shadow-sm"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#F0EEE9]/10">
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm font-bold text-[#C6A56B]">{ord.id}</span>
                          <span className="text-[10px] text-[#F0EEE9]/50 font-mono">Placed: {ord.date}</span>
                          <span className="text-[10px] text-emerald-400 font-mono">AWB: {ord.trackingNumber}</span>
                        </div>
                        <p className="text-xs text-[#F0EEE9]/80 mt-1">
                          Client: <strong>{ord.shippingAddress.fullName}</strong> ({ord.shippingAddress.phone})
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        {/* Status Badge */}
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider font-mono ${
                            ord.status === 'Delivered'
                              ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                              : ord.status === 'Shipped' || ord.status === 'Out for Delivery'
                              ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                              : 'bg-[#C6A56B]/20 text-[#C6A56B] border border-[#C6A56B]/40'
                          }`}
                        >
                          {ord.status}
                        </span>

                        {/* Status Workflow Selector */}
                        <select
                          value={ord.status}
                          onChange={(e) => handleUpdateOrderStatus(ord.id, e.target.value as any)}
                          className="bg-[#111318] border border-[#F0EEE9]/20 text-xs px-2.5 py-1 rounded-full text-[#F0EEE9] focus:outline-none focus:border-[#C6A56B]"
                        >
                          <option value="Confirmed">Confirmed</option>
                          <option value="Processing">Processing / Packed</option>
                          <option value="Shipped">Dispatched (Delhivery Air)</option>
                          <option value="Out for Delivery">Out for Delivery</option>
                          <option value="Delivered">Delivered</option>
                        </select>
                      </div>
                    </div>

                    {/* Items Breakdown */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
                      <div className="md:col-span-6 space-y-2">
                        {ord.items.map((item, i) => (
                          <div key={i} className="flex items-center gap-3 text-xs">
                            <img
                              src={item.product.primaryImage}
                              alt={item.product.name}
                              className="w-8 h-10 object-cover rounded-md border border-[#F0EEE9]/10"
                            />
                            <div>
                              <p className="font-serif text-[#F0EEE9]">{item.product.name}</p>
                              <p className="text-[10px] text-[#F0EEE9]/50">
                                Size: {item.size} · Color: {item.color} · Qty: {item.quantity}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="md:col-span-3 text-xs text-[#F0EEE9]/70 space-y-1">
                        <p>Destination: <strong>{ord.shippingAddress.city}, {ord.shippingAddress.state}</strong></p>
                        <p className="font-mono">Pincode: {ord.shippingAddress.pincode}</p>
                        <p>Payment: <span className="uppercase text-[#C6A56B]">{ord.paymentMethod}</span></p>
                      </div>

                      <div className="md:col-span-3 flex flex-col gap-2 justify-end">
                        <button
                          type="button"
                          onClick={() => {
                            showNotification(`Packing Slip & Label printed for ${ord.id}`)
                          }}
                          className="ruh-btn-secondary py-1.5 px-3 text-[10px] text-[#F0EEE9] border-[#F0EEE9]/20 hover:border-[#C6A56B]"
                        >
                          📄 Print Delhivery Label
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            showNotification(`GST Tax Invoice generated for ${ord.id}`)
                          }}
                          className="ruh-btn-gold py-1.5 px-3 text-[10px]"
                        >
                          🧾 Download GST Invoice
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =================================================================
              TAB 4: DISCOUNTS & MARKETING ENGINE
              ================================================================= */}
          {activeTab === 'discounts' && (
            <div className="space-y-8">
              <div className="flex items-center justify-between pb-4 border-b border-[#F0EEE9]/10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] font-bold">
                    MARKETING & COUPON RULES
                  </span>
                  <p className="text-xs text-[#F0EEE9]/70 mt-0.5">
                    Generate instant promo codes and configure automatic tier incentives.
                  </p>
                </div>
              </div>

              {/* Creator Form */}
              <form onSubmit={handleCreateCoupon} className="p-6 bg-[#16181E] rounded-2xl border border-[#C6A56B]/30 space-y-4">
                <h3 className="font-serif text-lg text-[#F0EEE9] font-normal">
                  Generate New Privilege Coupon
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#F0EEE9]/70 block mb-1">
                      Coupon Code *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. FESTIVE25"
                      value={newCode}
                      onChange={(e) => setNewCode(e.target.value)}
                      className="w-full bg-[#111318] rounded-xl border border-[#F0EEE9]/20 px-3.5 py-2.5 text-xs font-mono uppercase focus:border-[#C6A56B]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#F0EEE9]/70 block mb-1">
                      Discount Percentage (%)
                    </label>
                    <input
                      type="number"
                      min={5}
                      max={50}
                      required
                      value={newPercent}
                      onChange={(e) => setNewPercent(e.target.value)}
                      className="w-full bg-[#111318] rounded-xl border border-[#F0EEE9]/20 px-3.5 py-2.5 text-xs font-mono focus:border-[#C6A56B]"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-[#F0EEE9]/70 block mb-1">
                      Minimum Basket Value (₹)
                    </label>
                    <input
                      type="number"
                      min={0}
                      step={1000}
                      required
                      value={newMinOrder}
                      onChange={(e) => setNewMinOrder(e.target.value)}
                      className="w-full bg-[#111318] rounded-xl border border-[#F0EEE9]/20 px-3.5 py-2.5 text-xs font-mono focus:border-[#C6A56B]"
                    />
                  </div>
                </div>

                <button type="submit" className="ruh-btn-gold py-2.5 px-6 text-[11px]">
                  Authorize & Publish Coupon Code
                </button>
              </form>

              {/* Active Coupons Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {coupons.map((c) => (
                  <div
                    key={c.code}
                    className="p-5 bg-[#16181E] rounded-2xl border border-[#F0EEE9]/10 space-y-3 shadow-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-lg font-bold text-[#C6A56B]">{c.code}</span>
                        <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                          {c.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#F0EEE9] font-medium">{c.type}</p>
                      <p className="text-[11px] text-[#F0EEE9]/60 mt-1 font-mono">
                        Benefit: <strong>{c.discountPercent}% OFF</strong> (Min. {formatPrice(c.minOrder)})
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F0EEE9]/10 flex items-center justify-between text-[10px] text-[#F0EEE9]/50 font-mono">
                      <span>{c.usages} redemptions logged</span>
                      <button
                        type="button"
                        onClick={() => {
                          setCoupons((prev) => prev.filter((item) => item.code !== c.code))
                          showNotification(`Deactivated coupon ${c.code}`)
                        }}
                        className="text-red-400 hover:underline cursor-pointer"
                      >
                        Deactivate
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* =================================================================
              TAB 5: EDITORIAL & BROADCAST CMS
              ================================================================= */}
          {activeTab === 'cms' && (
            <div className="max-w-3xl space-y-8">
              <div className="pb-4 border-b border-[#F0EEE9]/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] font-bold">
                  EDITORIAL & BROADCAST CMS
                </span>
                <p className="text-xs text-[#F0EEE9]/70 mt-0.5">
                  Update customer-facing announcements, billboard campaign text, and textile stories.
                </p>
              </div>

              <form onSubmit={handleSaveCMS} className="space-y-6 bg-[#16181E] p-6 sm:p-8 rounded-2xl border border-[#F0EEE9]/10">
                {/* Announcement Bar */}
                {/* <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-wider text-[#C6A56B] font-bold block">
                    Top Announcement Bar Broadcast Text
                  </label>
                  <input
                    type="text"
                    value={announcementText}
                    onChange={(e) => setAnnouncementText(e.target.value)}
                    className="w-full bg-[#111318] rounded-xl border border-[#F0EEE9]/20 px-3.5 py-2.5 text-xs text-[#F0EEE9] focus:border-[#C6A56B]"
                  />
                  <p className="text-[10px] text-[#F0EEE9]/50 font-light">
                    Rendered dynamically on the storefront header utility banner.
                  </p>
                </div> */}

                {/* Hero Kicker */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-wider text-[#C6A56B] font-bold block">
                    Billboard Campaign Kicker Tag
                  </label>
                  <input
                    type="text"
                    value={heroKicker}
                    onChange={(e) => setHeroKicker(e.target.value)}
                    className="w-full bg-[#111318] rounded-xl border border-[#F0EEE9]/20 px-3.5 py-2.5 text-xs text-[#F0EEE9] focus:border-[#C6A56B]"
                  />
                </div>

                {/* Hero Headline */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-wider text-[#C6A56B] font-bold block">
                    Hero Headline (Playfair Display)
                  </label>
                  <textarea
                    rows={2}
                    value={heroHeadline}
                    onChange={(e) => setHeroHeadline(e.target.value)}
                    className="w-full bg-[#111318] rounded-xl border border-[#F0EEE9]/20 p-3.5 text-sm font-serif text-[#F0EEE9] focus:border-[#C6A56B]"
                  />
                </div>

                {/* Hero Subtext */}
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-wider text-[#C6A56B] font-bold block">
                    Hero Subtext (Inter)
                  </label>
                  <textarea
                    rows={3}
                    value={heroSubtext}
                    onChange={(e) => setHeroSubtext(e.target.value)}
                    className="w-full bg-[#111318] rounded-xl border border-[#F0EEE9]/20 p-3.5 text-xs leading-relaxed text-[#F0EEE9] focus:border-[#C6A56B]"
                  />
                </div>

                <div className="pt-4 border-t border-[#F0EEE9]/10 flex items-center justify-between">
                  {cmsSavedToast ? (
                    <span className="text-xs text-emerald-400 font-semibold">
                      ✓ Broadcast saved & dispatched to storefront
                    </span>
                  ) : (
                    <span className="text-[11px] text-[#F0EEE9]/50">
                      Changes propagate instantly to the live storefront
                    </span>
                  )}
                  <button type="submit" className="ruh-btn-gold py-2.5 px-6 text-[11px]">
                    Publish Broadcast Live
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* =================================================================
              TAB 6: SETTINGS & LOGISTICS
              ================================================================= */}
          {activeTab === 'settings' && (
            <div className="max-w-3xl space-y-6">
              <div className="pb-4 border-b border-[#F0EEE9]/10">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#C6A56B] font-bold">
                  STORE CONFIGURATION & LOGISTICS
                </span>
                <p className="text-xs text-[#F0EEE9]/70 mt-0.5">
                  Manage GST tax invoicing rules, free delivery threshold, and courier partners.
                </p>
              </div>

              <div className="bg-[#16181E] p-6 rounded-2xl border border-[#F0EEE9]/10 space-y-6 text-xs">
                <div>
                  <h4 className="font-serif text-base text-[#F0EEE9] mb-1">Corporate GST & Entity Details</h4>
                  <p className="text-[#F0EEE9]/60 text-[11px] mb-3">Printed automatically on client B2B tax receipts.</p>
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      readOnly
                      value="GSTIN: 29AAAAA0000A1Z5"
                      className="bg-[#111318] rounded-xl border border-[#F0EEE9]/20 p-2.5 font-mono text-[#F0EEE9]"
                    />
                    <input
                      type="text"
                      readOnly
                      value="RŪH Contemporary Apparel Pvt Ltd"
                      className="bg-[#111318] rounded-xl border border-[#F0EEE9]/20 p-2.5 text-[#F0EEE9]"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-[#F0EEE9]/10">
                  <h4 className="font-serif text-base text-[#F0EEE9] mb-1">Complimentary Delivery Threshold</h4>
                  <p className="text-[#F0EEE9]/60 text-[11px] mb-3">Free shipping threshold across all Indian pincodes.</p>
                  <input
                    type="text"
                    readOnly
                    value="₹ 2,500 INR (Standard Express Delivery: ₹ 250 below threshold)"
                    className="w-full bg-[#111318] rounded-xl border border-[#F0EEE9]/20 p-2.5 font-mono text-[#F0EEE9]"
                  />
                </div>

                <div className="pt-4 border-t border-[#F0EEE9]/10">
                  <h4 className="font-serif text-base text-[#F0EEE9] mb-1">Integrated Logistics Webhook Partner</h4>
                  <p className="text-[#F0EEE9]/60 text-[11px] mb-3">Automated reverse pickup and doorstep dispatch.</p>
                  <div className="flex items-center gap-3 p-3 bg-[#111318] rounded-xl border border-[#C6A56B]/20">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <div>
                      <p className="font-bold text-[#F0EEE9]">Delhivery Surface & Express Air API</p>
                      <p className="text-[10px] text-[#F0EEE9]/60">Client Token: live_delhivery_ruh_2026_priority</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* =====================================================================
          REGISTER NEW PRODUCT MODAL
          ===================================================================== */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-[#111318]/80 backdrop-blur-sm"
            onClick={() => setIsAddModalOpen(false)}
          />
          <div className="relative w-full max-w-xl bg-[#16181E] text-[#F0EEE9] p-6 rounded-2xl border border-[#C6A56B]/40 shadow-2xl z-10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-[#F0EEE9]/10">
              <h3 className="font-serif text-xl text-[#F0EEE9]">
                Register New Capsule Piece (PIM)
              </h3>
              <button
                type="button"
                onClick={() => setIsAddModalOpen(false)}
                className="text-[#F0EEE9]/50 hover:text-[#F0EEE9] text-base"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddProduct} className="space-y-4 text-xs">
              <div>
                <label className="text-[10px] uppercase text-[#F0EEE9]/70 block mb-1">
                  Garment Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. The Double-Breasted Wool Blazer"
                  value={newProdName}
                  onChange={(e) => setNewProdName(e.target.value)}
                  className="w-full bg-[#111318] rounded-xl border border-[#F0EEE9]/20 px-3.5 py-2.5 text-xs text-[#F0EEE9] focus:border-[#C6A56B]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-[10px] uppercase text-[#F0EEE9]/70 block mb-1">
                    Category *
                  </label>
                  <select
                    value={newProdCategory}
                    onChange={(e) => setNewProdCategory(e.target.value)}
                    className="w-full bg-[#111318] rounded-xl border border-[#F0EEE9]/20 px-3 py-2 text-xs text-[#F0EEE9]"
                  >
                    <option value="outerwear">Outerwear</option>
                    <option value="knitwear">Knitwear</option>
                    <option value="shirting">Shirting & Tees</option>
                    <option value="trousers">Trousers</option>
                    <option value="accessories">Objects & Leather</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase text-[#F0EEE9]/70 block mb-1">
                    Price (₹ INR) *
                  </label>
                  <input
                    type="number"
                    required
                    value={newProdPrice}
                    onChange={(e) => setNewProdPrice(e.target.value)}
                    className="w-full bg-[#111318] rounded-xl border border-[#F0EEE9]/20 px-3 py-2 font-mono text-xs text-[#F0EEE9]"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] uppercase text-[#F0EEE9]/70 block mb-1">
                  Textile Provenance & Fabric *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 100% Mongolian Cashmere / 320 GSM"
                  value={newProdFabric}
                  onChange={(e) => setNewProdFabric(e.target.value)}
                  className="w-full bg-[#111318] rounded-xl border border-[#F0EEE9]/20 px-3.5 py-2 text-xs text-[#F0EEE9]"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-[#F0EEE9]/70 block mb-1">
                  Editorial Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe the architectural silhouette..."
                  value={newProdDesc}
                  onChange={(e) => setNewProdDesc(e.target.value)}
                  className="w-full bg-[#111318] rounded-xl border border-[#F0EEE9]/20 p-2.5 text-xs text-[#F0EEE9]"
                />
              </div>

              <div>
                <label className="text-[10px] uppercase text-[#F0EEE9]/70 block mb-1">
                  High-Resolution Image URL
                </label>
                <input
                  type="url"
                  value={newProdImage}
                  onChange={(e) => setNewProdImage(e.target.value)}
                  className="w-full bg-[#111318] rounded-xl border border-[#F0EEE9]/20 px-3 py-2 text-xs text-[#F0EEE9] font-mono"
                />
              </div>

              <div className="pt-3 border-t border-[#F0EEE9]/10 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="ruh-btn-secondary py-2.5 px-4 text-[10px] text-[#F0EEE9]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 ruh-btn-gold py-2.5 text-[10px]"
                >
                  Publish Piece to Catalog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default function DashboardPage() {
  return (
    <ShopProvider>
      <DashboardContent />
    </ShopProvider>
  )
}