export interface CustomerDispositionItem {
  name: string
  size: string
  color: string
  quantity: number
  price: number
}

export interface CustomerReview {
  rating: number // 1 - 5
  title: string
  comment: string
  date: string
  verified: boolean
}

export interface CustomerPurchaseRecord {
  id: string
  customerName: string
  email: string
  phone: string
  city: string
  state: string
  orderId: string
  orderDate: string
  totalSpend: number
  itemsBought: CustomerDispositionItem[]
  disposition: 'Kept' | 'Returned' | 'Exchanged'
  dispositionNotes?: string
  review?: CustomerReview
}

export interface Vendor {
  id: string
  name: string
  specialty: string
  certification: string
  contactPerson: string
  role: string
  email: string
  phone: string
  address: string
  city: string
  country: string
  postalCode: string
  paymentTerms: string
  totalUnitsSupplied: number
  totalContractValue: number
  activeSilhouettes: string[]
}

export interface VendorAllocation {
  vendorId: string
  vendorName: string
  unitsAllocated: number
  unitCost: number
  contactPerson: string
  phone: string
  email: string
  status: 'In Weaving' | 'In Tailoring' | 'Quality Inspection' | 'Delivered to BOM' | 'Shipped'
}

export interface ProductSupplyAllocation {
  productId: string
  productName: string
  sku: string
  category: string
  totalOrdered: number
  totalReceived: number
  vendors: VendorAllocation[]
}

export interface ProcurementPO {
  id: string
  poNumber: string
  date: string
  productName: string
  sku: string
  vendorId: string
  vendorName: string
  batchUnits: number
  unitCost: number
  totalCost: number
  shippingAndCustoms: number
  paymentStatus: 'Paid in Full' | '50% Advance Settled' | 'Pending Net 30'
  expectedDelivery: string
  leadTimeDays: number
}

export interface SalesTransaction {
  id: string
  orderId: string
  date: string
  customerName: string
  customerEmail: string
  city: string
  state: string
  itemsSold: { name: string; sku: string; quantity: number; price: number }[]
  grossAmount: number
  discountAmount: number
  discountCodeApplied?: string
  netRevenue: number
  paymentMethod: 'UPI Intent' | 'Credit Card' | 'Netbanking' | 'COD'
  gstAmount: number
}

export interface FestiveEvent {
  id: string
  name: string
  tagline: string
  promoCode: string
  discountType: 'percentage' | 'flat'
  discountValue: number
  minOrderValue: number
  giftInclusion: string
  startDate: string
  endDate: string
  status: 'Active' | 'Scheduled' | 'Completed'
  totalOrdersCount: number
  totalGrossRevenue: number
  totalDiscountAbsorbed: number
  bannerActive: boolean
}

export interface EventOrder {
  id: string
  orderId: string
  eventId: string
  date: string
  customerName: string
  customerCity: string
  promoCode: string
  items: {
    name: string
    size: string
    color: string
    originalPrice: number
    discountedPrice: number
    quantity: number
  }[]
  grossTotal: number
  discountTotal: number
  netTotal: number
  orderStatus: 'Dispatched' | 'Delivered' | 'In Transit' | 'Processing'
  giftIncluded: boolean
}

// -------------------------------------------------------------
// SEED MOCK DATA
// -------------------------------------------------------------

export const INITIAL_CUSTOMERS: CustomerPurchaseRecord[] = [
  {
    id: 'cust-01',
    customerName: 'Sneha Acharya',
    email: 'sneha.acharya@studio.in',
    phone: '+91 98201 44820',
    city: 'Mumbai',
    state: 'Maharashtra',
    orderId: 'RUH-8941-MH',
    orderDate: 'Nov 04, 2026',
    totalSpend: 74900,
    itemsBought: [
      { name: 'The Double-Faced Cashmere Overcoat', size: 'M', color: 'Midnight Black', quantity: 1, price: 74900 }
    ],
    disposition: 'Kept',
    dispositionNotes: 'Client confirmed perfect architectural drape over winter knitwear.',
    review: {
      rating: 5,
      title: 'Incredible cloth and drape',
      comment: 'The double-faced cashmere wool feels substantial yet remarkably unrestrictive. The hand-finished bound seams rival Savile Row bespoke.',
      date: 'Nov 08, 2026',
      verified: true
    }
  },
  {
    id: 'cust-02',
    customerName: 'Aarav Singhania',
    email: 'aarav.singhania@heritage.com',
    phone: '+91 98110 92318',
    city: 'New Delhi',
    state: 'Delhi',
    orderId: 'RUH-8924-DL',
    orderDate: 'Nov 02, 2026',
    totalSpend: 42800,
    itemsBought: [
      { name: 'Relaxed High-Twist Wool Trouser', size: '32', color: 'Midnight Black', quantity: 1, price: 18900 },
      { name: 'Heavyweight Boxy Foundation Tee', size: 'L', color: 'Warm Ivory', quantity: 2, price: 7900 },
      { name: 'English Bridle Leather Dress Belt', size: 'M', color: 'Oak Bark Tan', quantity: 1, price: 8100 }
    ],
    disposition: 'Kept',
    dispositionNotes: 'Complete foundational capsule retained.',
    review: {
      rating: 5,
      title: 'Dense, architectural 280 GSM cotton',
      comment: 'The boxy tee does not collapse or curl at the ribbed collar after wash. Exact proportions I was searching for.',
      date: 'Nov 06, 2026',
      verified: true
    }
  },
  {
    id: 'cust-03',
    customerName: 'Devika Mehra',
    email: 'devika.m@designarch.org',
    phone: '+91 98302 77144',
    city: 'Bengaluru',
    state: 'Karnataka',
    orderId: 'RUH-8890-KA',
    orderDate: 'Oct 28, 2026',
    totalSpend: 18900,
    itemsBought: [
      { name: 'Relaxed High-Twist Wool Trouser', size: '30', color: 'Warm Charcoal', quantity: 1, price: 18900 }
    ],
    disposition: 'Exchanged',
    dispositionNotes: 'Exchanged from Size 30 to Size 32 for higher rise and deeper break over loafers.',
    review: {
      rating: 4,
      title: 'Superb fabric, recommend sizing up for slouch',
      comment: 'Biella high-twist wool resists creasing completely. Sized up one waist size for the intended slouchy silhouette.',
      date: 'Nov 01, 2026',
      verified: true
    }
  },
  {
    id: 'cust-04',
    customerName: 'Kabir Varma',
    email: 'kabir.varma@capital.co',
    phone: '+91 99401 55219',
    city: 'Hyderabad',
    state: 'Telangana',
    orderId: 'RUH-8845-TS',
    orderDate: 'Oct 24, 2026',
    totalSpend: 28900,
    itemsBought: [
      { name: '7-Gauge Pure Mongolian Cashmere Crewneck', size: 'XL', color: 'Camel Melange', quantity: 1, price: 28900 }
    ],
    disposition: 'Returned',
    dispositionNotes: 'Client requested return: sleeve length was 2cm longer than client preference. Refund credited via original UPI rail within 24h.',
    review: {
      rating: 4,
      title: 'Plush knitwear, slightly generous sleeve length',
      comment: 'The yarn density is extraordinary. The sleeves run intentionally long for stack styling; needed shorter sleeve for formal desk work.',
      date: 'Oct 29, 2026',
      verified: true
    }
  },
  {
    id: 'cust-05',
    customerName: 'Rhea Nambiar',
    email: 'rhea.nambiar@atelier.in',
    phone: '+91 97412 88910',
    city: 'Chennai',
    state: 'Tamil Nadu',
    orderId: 'RUH-8812-TN',
    orderDate: 'Oct 20, 2026',
    totalSpend: 54700,
    itemsBought: [
      { name: 'Architectural Japanese Selvedge Denim', size: '28', color: 'Raw Indigo', quantity: 1, price: 21900 },
      { name: 'Poplin Tailored Overshirt', size: 'S', color: 'Optic Ivory', quantity: 1, price: 16900 },
      { name: 'Heavyweight Boxy Foundation Tee', size: 'S', color: 'Midnight Black', quantity: 2, price: 7900 }
    ],
    disposition: 'Kept',
    dispositionNotes: 'Retained all pieces. Joined VIP Tier 01 Archive roster.',
    review: {
      rating: 5,
      title: 'Authentic 14oz shuttle loom denim',
      comment: 'The selvedge ID line and copper burr rivets are top-notch. Rigid at first, breaking in beautifully.',
      date: 'Oct 25, 2026',
      verified: true
    }
  },
  {
    id: 'cust-06',
    customerName: 'Aditya Kapoor',
    email: 'aditya.k@fintech.io',
    phone: '+91 98199 11200',
    city: 'Mumbai',
    state: 'Maharashtra',
    orderId: 'RUH-8790-MH',
    orderDate: 'Oct 15, 2026',
    totalSpend: 74900,
    itemsBought: [
      { name: 'The Double-Faced Cashmere Overcoat', size: 'L', color: 'Warm Camel', quantity: 1, price: 74900 }
    ],
    disposition: 'Exchanged',
    dispositionNotes: 'Color swap requested: Exchanged Warm Camel for Midnight Black. Delivered via white-glove exchange.',
    review: {
      rating: 5,
      title: 'Seamless exchange process',
      comment: 'Decided on Midnight Black instead of Camel. Concierge team arranged the swap the same afternoon. Exemplary luxury service.',
      date: 'Oct 19, 2026',
      verified: true
    }
  }
]

export const INITIAL_VENDORS: Vendor[] = [
  {
    id: 'vend-01',
    name: 'Biella Tessile S.p.A.',
    specialty: 'Double-faced cashmere-wool cloth, high-twist worsted yarns',
    certification: 'OEKO-TEX Standard 100, Responsible Wool Standard (RWS)',
    contactPerson: 'Marco Bellini',
    role: 'Director of Archival Textiles',
    email: 'm.bellini@biellatessile.it',
    phone: '+39 015 849 2210',
    address: 'Via Martiri della Libertà, 42',
    city: 'Biella',
    country: 'Italy',
    postalCode: '13900',
    paymentTerms: 'Net 45 Days',
    totalUnitsSupplied: 450,
    totalContractValue: 6250000,
    activeSilhouettes: ['The Double-Faced Cashmere Overcoat', 'Relaxed High-Twist Wool Trouser']
  },
  {
    id: 'vend-02',
    name: 'Kurabo Industries & Mills',
    specialty: '14oz shuttle loom raw selvedge denim, natural indigo dyeing',
    certification: 'GOTS Certified Organic Indigo, Zero Liquid Discharge (ZLD)',
    contactPerson: 'Kenji Takahashi',
    role: 'Senior Weaving Specialist',
    email: 'k.takahashi@kurabo-denim.jp',
    phone: '+81 86 422 1890',
    address: '1-1-1 Bingo-machi, Chuo-ku',
    city: 'Okayama',
    country: 'Japan',
    postalCode: '710-0826',
    paymentTerms: '50% Advance, 50% on Bill of Lading',
    totalUnitsSupplied: 320,
    totalContractValue: 2880000,
    activeSilhouettes: ['Architectural Japanese Selvedge Denim']
  },
  {
    id: 'vend-03',
    name: 'Coimbatore Heritage Spinning & Knitwear',
    specialty: '280-320 GSM organic combed cotton dense loopback & jersey',
    certification: '100% GOTS Organic Cotton, Fair Trade Certified',
    contactPerson: 'V. Sundaram',
    role: 'Managing Partner',
    email: 'sundaram@coimbatorecotton.in',
    phone: '+91 422 259 8810',
    address: 'Plot 18, Peelamedu Industrial Estate, Avinashi Road',
    city: 'Coimbatore',
    country: 'India',
    postalCode: '641004',
    paymentTerms: 'Net 30 Days',
    totalUnitsSupplied: 1200,
    totalContractValue: 3450000,
    activeSilhouettes: ['Heavyweight Boxy Foundation Tee', 'Poplin Tailored Overshirt']
  },
  {
    id: 'vend-04',
    name: 'Ulaanbaatar Fiber Guild',
    specialty: 'Grade-A 100% pure Mongolian cashmere, 7-gauge & 12-gauge yarns',
    certification: 'Sustainable Cashmere Alliance (SCA), Nomadic Herd Welfare',
    contactPerson: 'Altantsetseg Batbayar',
    role: 'Procurement Director',
    email: 'altan@mongoliancashmere.mn',
    phone: '+976 11 341 902',
    address: 'Khan-Uul District, 3rd Khoroo, Peace Avenue',
    city: 'Ulaanbaatar',
    country: 'Mongolia',
    postalCode: '17042',
    paymentTerms: 'Letter of Credit (LC)',
    totalUnitsSupplied: 280,
    totalContractValue: 3920000,
    activeSilhouettes: ['7-Gauge Pure Mongolian Cashmere Crewneck']
  },
  {
    id: 'vend-05',
    name: 'Walsall Heritage Leather Tannery',
    specialty: 'Traditional oak bark pit-tanned English bridle leather, solid brass hardware',
    certification: 'Leather Working Group (LWG) Gold Rated',
    contactPerson: 'Arthur Pendelton',
    role: 'Master Currier',
    email: 'arthur@walsall-bridle.co.uk',
    phone: '+44 1922 621 004',
    address: 'Station Street Works, Walsall',
    city: 'West Midlands',
    country: 'United Kingdom',
    postalCode: 'WS2 9JR',
    paymentTerms: 'Net 30 Days',
    totalUnitsSupplied: 190,
    totalContractValue: 855000,
    activeSilhouettes: ['English Bridle Leather Dress Belt']
  }
]

export const INITIAL_SUPPLY_ALLOCATIONS: ProductSupplyAllocation[] = [
  {
    productId: 'ruh-01',
    productName: 'The Double-Faced Cashmere Overcoat',
    sku: 'RUH-OC-01-BLK',
    category: 'Outerwear',
    totalOrdered: 200,
    totalReceived: 145,
    vendors: [
      {
        vendorId: 'vend-01',
        vendorName: 'Biella Tessile S.p.A. (Italy)',
        unitsAllocated: 120,
        unitCost: 24500,
        contactPerson: 'Marco Bellini',
        phone: '+39 015 849 2210',
        email: 'm.bellini@biellatessile.it',
        status: 'Delivered to BOM'
      },
      {
        vendorId: 'vend-04',
        vendorName: 'Ulaanbaatar Fiber Guild (Mongolia)',
        unitsAllocated: 80,
        unitCost: 26000,
        contactPerson: 'Altantsetseg Batbayar',
        phone: '+976 11 341 902',
        email: 'altan@mongoliancashmere.mn',
        status: 'Quality Inspection'
      }
    ]
  },
  {
    productId: 'ruh-02',
    productName: 'Heavyweight Boxy Foundation Tee',
    sku: 'RUH-TEE-02-IVR',
    category: 'Shirting',
    totalOrdered: 800,
    totalReceived: 650,
    vendors: [
      {
        vendorId: 'vend-03',
        vendorName: 'Coimbatore Heritage Spinning (India)',
        unitsAllocated: 800,
        unitCost: 2200,
        contactPerson: 'V. Sundaram',
        phone: '+91 422 259 8810',
        email: 'sundaram@coimbatorecotton.in',
        status: 'Delivered to BOM'
      }
    ]
  },
  {
    productId: 'ruh-03',
    productName: 'Relaxed High-Twist Wool Trouser',
    sku: 'RUH-TR-03-NVY',
    category: 'Trousers',
    totalOrdered: 300,
    totalReceived: 210,
    vendors: [
      {
        vendorId: 'vend-01',
        vendorName: 'Biella Tessile S.p.A. (Italy)',
        unitsAllocated: 300,
        unitCost: 6800,
        contactPerson: 'Marco Bellini',
        phone: '+39 015 849 2210',
        email: 'm.bellini@biellatessile.it',
        status: 'Delivered to BOM'
      }
    ]
  },
  {
    productId: 'ruh-04',
    productName: 'Architectural Japanese Selvedge Denim',
    sku: 'RUH-DN-04-IND',
    category: 'Trousers',
    totalOrdered: 250,
    totalReceived: 180,
    vendors: [
      {
        vendorId: 'vend-02',
        vendorName: 'Kurabo Industries & Mills (Japan)',
        unitsAllocated: 250,
        unitCost: 8200,
        contactPerson: 'Kenji Takahashi',
        phone: '+81 86 422 1890',
        email: 'k.takahashi@kurabo-denim.jp',
        status: 'Shipped'
      }
    ]
  },
  {
    productId: 'ruh-05',
    productName: '7-Gauge Pure Mongolian Cashmere Crewneck',
    sku: 'RUH-KN-05-CM',
    category: 'Knitwear',
    totalOrdered: 180,
    totalReceived: 120,
    vendors: [
      {
        vendorId: 'vend-04',
        vendorName: 'Ulaanbaatar Fiber Guild (Mongolia)',
        unitsAllocated: 180,
        unitCost: 11500,
        contactPerson: 'Altantsetseg Batbayar',
        phone: '+976 11 341 902',
        email: 'altan@mongoliancashmere.mn',
        status: 'In Tailoring'
      }
    ]
  }
]

export const INITIAL_PROCUREMENT_POS: ProcurementPO[] = [
  {
    id: 'po-101',
    poNumber: 'PO-2026-IT-01',
    date: 'Oct 12, 2026',
    productName: 'The Double-Faced Cashmere Overcoat',
    sku: 'RUH-OC-01-BLK',
    vendorId: 'vend-01',
    vendorName: 'Biella Tessile S.p.A. (Italy)',
    batchUnits: 120,
    unitCost: 24500,
    totalCost: 2940000,
    shippingAndCustoms: 240000,
    paymentStatus: 'Paid in Full',
    expectedDelivery: 'Nov 02, 2026',
    leadTimeDays: 21
  },
  {
    id: 'po-102',
    poNumber: 'PO-2026-JP-02',
    date: 'Oct 18, 2026',
    productName: 'Architectural Japanese Selvedge Denim',
    sku: 'RUH-DN-04-IND',
    vendorId: 'vend-02',
    vendorName: 'Kurabo Industries & Mills (Japan)',
    batchUnits: 250,
    unitCost: 8200,
    totalCost: 2050000,
    shippingAndCustoms: 180000,
    paymentStatus: '50% Advance Settled',
    expectedDelivery: 'Nov 18, 2026',
    leadTimeDays: 30
  },
  {
    id: 'po-103',
    poNumber: 'PO-2026-IN-03',
    date: 'Oct 22, 2026',
    productName: 'Heavyweight Boxy Foundation Tee',
    sku: 'RUH-TEE-02-IVR',
    vendorId: 'vend-03',
    vendorName: 'Coimbatore Heritage Spinning (India)',
    batchUnits: 800,
    unitCost: 2200,
    totalCost: 1760000,
    shippingAndCustoms: 45000,
    paymentStatus: 'Paid in Full',
    expectedDelivery: 'Nov 04, 2026',
    leadTimeDays: 14
  },
  {
    id: 'po-104',
    poNumber: 'PO-2026-MN-04',
    date: 'Oct 29, 2026',
    productName: '7-Gauge Pure Mongolian Cashmere Crewneck',
    sku: 'RUH-KN-05-CM',
    vendorId: 'vend-04',
    vendorName: 'Ulaanbaatar Fiber Guild (Mongolia)',
    batchUnits: 180,
    unitCost: 11500,
    totalCost: 2070000,
    shippingAndCustoms: 195000,
    paymentStatus: 'Pending Net 30',
    expectedDelivery: 'Nov 25, 2026',
    leadTimeDays: 28
  },
  {
    id: 'po-105',
    poNumber: 'PO-2026-UK-05',
    date: 'Nov 02, 2026',
    productName: 'English Bridle Leather Dress Belt',
    sku: 'RUH-ACC-05-TAN',
    vendorId: 'vend-05',
    vendorName: 'Walsall Heritage Leather Tannery (UK)',
    batchUnits: 190,
    unitCost: 3400,
    totalCost: 646000,
    shippingAndCustoms: 65000,
    paymentStatus: 'Paid in Full',
    expectedDelivery: 'Nov 12, 2026',
    leadTimeDays: 10
  }
]

export const INITIAL_SALES_TRANSACTIONS: SalesTransaction[] = [
  {
    id: 'tx-01',
    orderId: 'RUH-8941-MH',
    date: 'Nov 04, 2026',
    customerName: 'Sneha Acharya',
    customerEmail: 'sneha.acharya@studio.in',
    city: 'Mumbai',
    state: 'Maharashtra',
    itemsSold: [{ name: 'The Double-Faced Cashmere Overcoat', sku: 'RUH-OC-01-BLK', quantity: 1, price: 74900 }],
    grossAmount: 74900,
    discountAmount: 0,
    netRevenue: 74900,
    paymentMethod: 'UPI Intent',
    gstAmount: 8988
  },
  {
    id: 'tx-02',
    orderId: 'RUH-8924-DL',
    date: 'Nov 02, 2026',
    customerName: 'Aarav Singhania',
    customerEmail: 'aarav.singhania@heritage.com',
    city: 'New Delhi',
    state: 'Delhi',
    itemsSold: [
      { name: 'Relaxed High-Twist Wool Trouser', sku: 'RUH-TR-03-NVY', quantity: 1, price: 18900 },
      { name: 'Heavyweight Boxy Foundation Tee', sku: 'RUH-TEE-02-IVR', quantity: 2, price: 7900 },
      { name: 'English Bridle Leather Dress Belt', sku: 'RUH-ACC-05-TAN', quantity: 1, price: 8100 }
    ],
    grossAmount: 42800,
    discountAmount: 4280,
    discountCodeApplied: 'WELCOME10',
    netRevenue: 38520,
    paymentMethod: 'Credit Card',
    gstAmount: 4622
  },
  {
    id: 'tx-03',
    orderId: 'RUH-8890-KA',
    date: 'Oct 28, 2026',
    customerName: 'Devika Mehra',
    customerEmail: 'devika.m@designarch.org',
    city: 'Bengaluru',
    state: 'Karnataka',
    itemsSold: [{ name: 'Relaxed High-Twist Wool Trouser', sku: 'RUH-TR-03-NVY', quantity: 1, price: 18900 }],
    grossAmount: 18900,
    discountAmount: 0,
    netRevenue: 18900,
    paymentMethod: 'UPI Intent',
    gstAmount: 2268
  },
  {
    id: 'tx-04',
    orderId: 'RUH-8812-TN',
    date: 'Oct 20, 2026',
    customerName: 'Rhea Nambiar',
    customerEmail: 'rhea.nambiar@atelier.in',
    city: 'Chennai',
    state: 'Tamil Nadu',
    itemsSold: [
      { name: 'Architectural Japanese Selvedge Denim', sku: 'RUH-DN-04-IND', quantity: 1, price: 21900 },
      { name: 'Heavyweight Boxy Foundation Tee', sku: 'RUH-TEE-02-IVR', quantity: 2, price: 7900 }
    ],
    grossAmount: 37700,
    discountAmount: 5655,
    discountCodeApplied: 'ARCHIVE15',
    netRevenue: 32045,
    paymentMethod: 'Netbanking',
    gstAmount: 3845
  },
  {
    id: 'tx-05',
    orderId: 'RUH-8790-MH',
    date: 'Oct 15, 2026',
    customerName: 'Aditya Kapoor',
    customerEmail: 'aditya.k@fintech.io',
    city: 'Mumbai',
    state: 'Maharashtra',
    itemsSold: [{ name: 'The Double-Faced Cashmere Overcoat', sku: 'RUH-OC-01-BLK', quantity: 1, price: 74900 }],
    grossAmount: 74900,
    discountAmount: 0,
    netRevenue: 74900,
    paymentMethod: 'Credit Card',
    gstAmount: 8988
  }
]

export const INITIAL_EVENTS: FestiveEvent[] = [
  {
    id: 'event-diwali',
    name: 'Diwali Archival Radiance — Festive 2026',
    tagline: 'Celebration of light, architectural purity, and tactile restraint.',
    promoCode: 'DIWALI25',
    discountType: 'percentage',
    discountValue: 25,
    minOrderValue: 25000,
    giftInclusion: 'Complimentary Archival Cedar Hanger & Garment Travel Bag',
    startDate: 'Oct 20, 2026',
    endDate: 'Nov 18, 2026',
    status: 'Active',
    totalOrdersCount: 38,
    totalGrossRevenue: 2486000,
    totalDiscountAbsorbed: 621500,
    bannerActive: true
  },
  {
    id: 'event-winter-solstice',
    name: 'Winter Solstice Private Archive',
    tagline: 'Private drop of heavyweight Italian outerwear for members.',
    promoCode: 'SOLSTICE15',
    discountType: 'percentage',
    discountValue: 15,
    minOrderValue: 35000,
    giftInclusion: 'Hand-poured Sandalwood & Cedar Wardrobe Scent Tablet',
    startDate: 'Dec 01, 2026',
    endDate: 'Dec 24, 2026',
    status: 'Scheduled',
    totalOrdersCount: 0,
    totalGrossRevenue: 0,
    totalDiscountAbsorbed: 0,
    bannerActive: false
  }
]

export const INITIAL_EVENT_ORDERS: EventOrder[] = [
  {
    id: 'eo-01',
    orderId: 'RUH-DW-1082',
    eventId: 'event-diwali',
    date: 'Nov 06, 2026',
    customerName: 'Pooja Singhal',
    customerCity: 'Jaipur, Rajasthan',
    promoCode: 'DIWALI25',
    items: [
      { name: 'The Double-Faced Cashmere Overcoat', size: 'S', color: 'Warm Camel', originalPrice: 74900, discountedPrice: 56175, quantity: 1 }
    ],
    grossTotal: 74900,
    discountTotal: 18725,
    netTotal: 56175,
    orderStatus: 'Dispatched',
    giftIncluded: true
  },
  {
    id: 'eo-02',
    orderId: 'RUH-DW-1077',
    eventId: 'event-diwali',
    date: 'Nov 04, 2026',
    customerName: 'Vikramaditya Roy',
    customerCity: 'Kolkata, West Bengal',
    promoCode: 'DIWALI25',
    items: [
      { name: '7-Gauge Pure Mongolian Cashmere Crewneck', size: 'L', color: 'Midnight Black', originalPrice: 28900, discountedPrice: 21675, quantity: 1 },
      { name: 'Relaxed High-Twist Wool Trouser', size: '34', color: 'Warm Charcoal', originalPrice: 18900, discountedPrice: 14175, quantity: 1 }
    ],
    grossTotal: 47800,
    discountTotal: 11950,
    netTotal: 35850,
    orderStatus: 'Delivered',
    giftIncluded: true
  },
  {
    id: 'eo-03',
    orderId: 'RUH-DW-1064',
    eventId: 'event-diwali',
    date: 'Nov 01, 2026',
    customerName: 'Meera Chidambaram',
    customerCity: 'Bengaluru, Karnataka',
    promoCode: 'DIWALI25',
    items: [
      { name: 'Architectural Japanese Selvedge Denim', size: '29', color: 'Raw Indigo', originalPrice: 21900, discountedPrice: 16425, quantity: 1 },
      { name: 'Heavyweight Boxy Foundation Tee', size: 'M', color: 'Warm Ivory', originalPrice: 7900, discountedPrice: 5925, quantity: 1 }
    ],
    grossTotal: 29800,
    discountTotal: 7450,
    netTotal: 22350,
    orderStatus: 'Delivered',
    giftIncluded: true
  },
  {
    id: 'eo-04',
    orderId: 'RUH-DW-1051',
    eventId: 'event-diwali',
    date: 'Oct 28, 2026',
    customerName: 'Nikhil Agarwal',
    customerCity: 'Surat, Gujarat',
    promoCode: 'DIWALI25',
    items: [
      { name: 'The Double-Faced Cashmere Overcoat', size: 'XL', color: 'Midnight Black', originalPrice: 74900, discountedPrice: 56175, quantity: 1 }
    ],
    grossTotal: 74900,
    discountTotal: 18725,
    netTotal: 56175,
    orderStatus: 'In Transit',
    giftIncluded: true
  }
]

