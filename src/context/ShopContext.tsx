'use client'

import React, { createContext, useContext, useState } from 'react'

export interface Product {
  id: string
  name: string
  subtitle: string
  price: number // base price in INR
  category: 'outerwear' | 'knitwear' | 'shirting' | 'trousers' | 'accessories' | 't-shirts' | 'shirts' | 'dresses'
  mainCategory?: 'T-Shirts' | 'Shirts' | 'Dresses'
  subCategory?: 'Anime' | 'Kdrama' | 'Bollywood' | 'Cartoon' | 'Vintage' | 'Customise'
  fabric: string
  color: string
  colorHex: string
  colorOptions: { name: string; hex: string }[]
  sizes: string[]
  primaryImage: string
  hoverImage: string
  detailImages?: string[]
  description: string
  details: string[]
  modelStats?: string
  stockCount?: number
  isNew?: boolean
  isEssential?: boolean
  sku?: string
}

export interface CartItem {
  product: Product
  size: string
  color: string
  quantity: number
}

export interface Order {
  id: string
  date: string
  items: CartItem[]
  subtotal: number
  discount: number
  total: number
  status: 'Confirmed' | 'Processing' | 'Shipped' | 'Out for Delivery' | 'Delivered'
  courier: 'Delhivery' | 'Shiprocket'
  trackingNumber: string
  estimatedDelivery: string
  shippingAddress: Address
  paymentMethod: string
}

export interface Address {
  id: string
  label: 'Home' | 'Work' | 'Studio'
  fullName: string
  phone: string
  line1: string
  line2?: string
  pincode: string
  city: string
  state: string
  isDefault: boolean
}

interface Coupon {
  code: string
  discountPercent: number
  minSpend: number
  description: string
}

interface ShopContextType {
  cart: CartItem[]
  isCartOpen: boolean
  setIsCartOpen: (open: boolean) => void
  addToCart: (product: Product, size?: string, color?: string) => void
  removeFromCart: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  clearCart: () => void
  cartSubtotal: number
  cartDiscount: number
  cartTotal: number
  cartCount: number
  appliedCoupon: Coupon | null
  applyCoupon: (code: string) => { success: boolean; message: string }
  removeCoupon: () => void
  isSearchOpen: boolean
  setIsSearchOpen: (open: boolean) => void
  quickViewProduct: Product | null
  setQuickViewProduct: (product: Product | null) => void
  currency: 'INR' | 'USD' | 'EUR' | 'GBP'
  setCurrency: (c: 'INR' | 'USD' | 'EUR' | 'GBP') => void
  formatPrice: (amountInINR: number) => string
  wishlist: string[]
  toggleWishlist: (id: string) => void
  user: { name: string; phone: string; email: string } | null
  updateUser: (updated: { name: string; phone: string; email: string }) => void
  isAuthOpen: boolean
  setIsAuthOpen: (open: boolean) => void
  login: (phoneOrEmail: string) => void
  logout: () => void
  isProfileOpen: boolean
  setIsProfileOpen: (open: boolean) => void
  activeProfileTab: 'orders' | 'tracking' | 'addresses' | 'returns' | 'settings'
  setActiveProfileTab: (tab: 'orders' | 'tracking' | 'addresses' | 'returns' | 'settings') => void
  orders: Order[]
  addOrder: (order: Order) => void
  addresses: Address[]
  addAddress: (addr: Address) => void
  isCheckoutOpen: boolean
  setIsCheckoutOpen: (open: boolean) => void
  isAdminOpen: boolean
  setIsAdminOpen: (open: boolean) => void
  selectedMainCategory: 't-shirts' | 'shirts' | 'dresses'
  setSelectedMainCategory: (cat: 't-shirts' | 'shirts' | 'dresses') => void
  selectedSubCategory: string
  setSelectedSubCategory: (sub: string) => void
}

const ShopContext = createContext<ShopContextType | undefined>(undefined)

export const CURRENCY_RATES = {
  INR: { symbol: '₹', rate: 1 },
  USD: { symbol: '$', rate: 0.0118 },
  EUR: { symbol: '€', rate: 0.0109 },
  GBP: { symbol: '£', rate: 0.0093 },
}

export const VALID_COUPONS: Coupon[] = [
  { code: 'RUHWELCOMESYOU25', discountPercent: 25, minSpend: 800, description: 'Welcome Offer: 25% off (upto ₹200 off) for first 2K customers' },
  { code: 'WELCOME10', discountPercent: 10, minSpend: 3000, description: '10% off on your inaugural RŪH order' },
  { code: 'INTENTION15', discountPercent: 15, minSpend: 10000, description: '15% off on permanent foundation capsules' },
  { code: 'RUHGST', discountPercent: 5, minSpend: 5000, description: '5% instant credit on corporate GST orders' },
]

export function ShopProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([
    {
      product: {
        id: 't-anime-01',
        name: 'Attack on Titan — Survey Corps Wings Washed Boxy Tee',
        subtitle: 'Anime Archive · 280 GSM Heavyweight',
        price: 3499,
        category: 't-shirts',
        mainCategory: 'T-Shirts',
        subCategory: 'Anime',
        fabric: '100% Organic Combed Cotton · 280 GSM Dense Jersey',
        color: 'Washed Charcoal',
        colorHex: '#25272D',
        colorOptions: [{ name: 'Washed Charcoal', hex: '#25272D' }],
        sizes: ['S', 'M', 'L', 'XL'],
        primaryImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop',
        hoverImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
        description: 'Drop-shoulder architectural anime tee featuring distressed Survey Corps wings screenprint.',
        details: ['Screenprinted graphic', 'Pre-shrunk dense jersey', 'Ribbed collar'],
      },
      size: 'L',
      color: 'Washed Charcoal',
      quantity: 1,
    },
    {
      product: {
        id: 't-vintage-01',
        name: '90s Distressed Grunge Boxy Washed Tee',
        subtitle: 'Vintage Archive · Enzyme Acid Washed',
        price: 3199,
        category: 't-shirts',
        mainCategory: 'T-Shirts',
        subCategory: 'Vintage',
        fabric: '100% Bio-Washed Cotton · 260 GSM',
        color: 'Faded Black',
        colorHex: '#1B1C20',
        colorOptions: [{ name: 'Faded Black', hex: '#1B1C20' }],
        sizes: ['M', 'L', 'XL'],
        primaryImage: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=1200&auto=format&fit=crop',
        hoverImage: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1200&auto=format&fit=crop',
        description: 'Hand-distressed hems with authentic sun-faded wash and boxy relaxed drape.',
        details: ['Enzyme stone wash', 'Drop shoulder', 'Double-needle seam stitching'],
      },
      size: 'M',
      color: 'Faded Black',
      quantity: 1,
    },
  ])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null)
  const [currency, setCurrency] = useState<'INR' | 'USD' | 'EUR' | 'GBP'>('INR')
  const [wishlist, setWishlist] = useState<string[]>(['t-anime-01', 't-vintage-01'])
  const [appliedCoupon, setAppliedCoupon] = useState<Coupon | null>(null)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isAdminOpen, setIsAdminOpen] = useState(false)

  // Auth & Profile State
  const [user, setUser] = useState<{ name: string; phone: string; email: string } | null>({
    name: 'Sneha Acharya',
    phone: '+91 98450 12345',
    email: 'sneha@example.com',
  })

  const updateUser = (updated: { name: string; phone: string; email: string }) => {
    setUser(updated)
  }
  const [isAuthOpen, setIsAuthOpen] = useState(false)
  const [isProfileOpen, setIsProfileOpen] = useState(false)
  const [activeProfileTab, setActiveProfileTab] = useState<'orders' | 'tracking' | 'addresses' | 'returns' | 'settings'>('orders')
  const [selectedMainCategory, setSelectedMainCategory] = useState<'t-shirts' | 'shirts' | 'dresses'>('t-shirts')
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>('all')

  // Sample Addresses
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 'addr-1',
      label: 'Home',
      fullName: 'Sneha Acharya',
      phone: '+91 98450 12345',
      line1: '14, Palm Grove Residency, 5th Main',
      line2: 'Indiranagar',
      pincode: '560038',
      city: 'Bengaluru',
      state: 'Karnataka',
      isDefault: true,
    },
    {
      id: 'addr-2',
      label: 'Studio',
      fullName: 'Sneha Acharya / RŪH Design',
      phone: '+91 98450 12345',
      line1: 'Studio 402, The Mill Workspace, Lower Parel',
      line2: 'Senapati Bapat Marg',
      pincode: '400013',
      city: 'Mumbai',
      state: 'Maharashtra',
      isDefault: false,
    },
  ])

  // Sample Past Orders
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'RUH-2026-9481',
      date: '08 Nov 2026',
      items: [
        {
          product: {
            id: 'ruh-01',
            name: 'The Double-Faced Cashmere Overcoat',
            subtitle: 'Edition 01 Tailoring',
            price: 74900,
            category: 'outerwear',
            fabric: '90% Wool, 10% Cashmere',
            color: 'Midnight Black',
            colorHex: '#111318',
            colorOptions: [{ name: 'Midnight Black', hex: '#111318' }],
            sizes: ['M'],
            primaryImage: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=1200&auto=format&fit=crop',
            hoverImage: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1200&auto=format&fit=crop',
            description: 'Unstructured tailored overcoat.',
            details: ['Biella Wool-Cashmere Blend'],
          },
          size: 'M',
          color: 'Midnight Black',
          quantity: 1,
        },
      ],
      subtotal: 74900,
      discount: 7490,
      total: 67410,
      status: 'In Transit' as any,
      courier: 'Delhivery',
      trackingNumber: 'DEL-849204918-IN',
      estimatedDelivery: '12 Nov 2026',
      shippingAddress: {
        id: 'addr-1',
        label: 'Home',
        fullName: 'Sneha Acharya',
        phone: '+91 98450 12345',
        line1: '14, Palm Grove Residency, 5th Main',
        pincode: '560038',
        city: 'Bengaluru',
        state: 'Karnataka',
        isDefault: true,
      },
      paymentMethod: 'UPI (GPay / Razorpay)',
    },
  ])

  const addToCart = (product: Product, size = 'M', color = '') => {
    const selectedColor = color || product.color
    setCart((prev) => {
      const existing = prev.find(
        (item) => item.product.id === product.id && item.size === size && item.color === selectedColor
      )
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id && item.size === size && item.color === selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prev, { product, size, color: selectedColor, quantity: 1 }]
    })
    setIsCartOpen(true)
  }

  const removeFromCart = (productId: string, size: string) => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.size === size)))
  }

  const updateQuantity = (productId: string, size: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, size)
      return
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.size === size ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => setCart([])

  const cartSubtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0)
  const cartDiscount = appliedCoupon ? Math.round((cartSubtotal * appliedCoupon.discountPercent) / 100) : 0
  const cartTotal = Math.max(0, cartSubtotal - cartDiscount)
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  const applyCoupon = (code: string) => {
    const match = VALID_COUPONS.find((c) => c.code.toUpperCase() === code.trim().toUpperCase())
    if (!match) {
      return { success: false, message: 'Invalid promotion code. Try WELCOME10 or INTENTION15.' }
    }
    if (cartSubtotal < match.minSpend) {
      return {
        success: false,
        message: `Code applies on orders above ₹${match.minSpend.toLocaleString('en-IN')}`,
      }
    }
    setAppliedCoupon(match)
    return { success: true, message: `Applied ${match.code}: ${match.description}` }
  }

  const removeCoupon = () => setAppliedCoupon(null)

  const toggleWishlist = (id: string) => {
    setWishlist((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const login = (phoneOrEmail: string) => {
    setUser({
      name: phoneOrEmail.includes('@') ? phoneOrEmail.split('@')[0] : 'Client',
      phone: phoneOrEmail.includes('@') ? '+91 98450 12345' : phoneOrEmail,
      email: phoneOrEmail.includes('@') ? phoneOrEmail : 'client@ruh.in',
    })
    setIsAuthOpen(false)
  }

  const logout = () => setUser(null)

  const addOrder = (newOrder: Order) => {
    setOrders((prev) => [newOrder, ...prev])
    clearCart()
  }

  const addAddress = (addr: Address) => {
    setAddresses((prev) => [...prev, addr])
  }

  const formatPrice = (amountInINR: number) => {
    const { symbol, rate } = CURRENCY_RATES[currency]
    const converted = Math.round(amountInINR * rate)
    if (currency === 'INR') {
      return `₹${converted.toLocaleString('en-IN')}`
    }
    return `${symbol}${converted.toLocaleString()}`
  }

  return (
    <ShopContext.Provider
      value={{
        cart,
        isCartOpen,
        setIsCartOpen,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartSubtotal,
        cartDiscount,
        cartTotal,
        cartCount,
        appliedCoupon,
        applyCoupon,
        removeCoupon,
        isSearchOpen,
        setIsSearchOpen,
        quickViewProduct,
        setQuickViewProduct,
        currency,
        setCurrency,
        formatPrice,
        wishlist,
        toggleWishlist,
        user,
        updateUser,
        isAuthOpen,
        setIsAuthOpen,
        login,
        logout,
        isProfileOpen,
        setIsProfileOpen,
        activeProfileTab,
        setActiveProfileTab,
        orders,
        addOrder,
        addresses,
        addAddress,
        isCheckoutOpen,
        setIsCheckoutOpen,
        isAdminOpen,
        setIsAdminOpen,
        selectedMainCategory,
        setSelectedMainCategory,
        selectedSubCategory,
        setSelectedSubCategory,
      }}
    >
      {children}
    </ShopContext.Provider>
  )
}

export function useShop() {
  const context = useContext(ShopContext)
  if (!context) throw new Error('useShop must be used within ShopProvider')
  return context
}
