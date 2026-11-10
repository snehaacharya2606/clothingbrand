'use client'

import React, { useState } from 'react'
import { ProcurementPO, SalesTransaction } from '../../data/dashboardData'

interface Props {
  procurementPOs: ProcurementPO[]
  salesTransactions: SalesTransaction[]
  formatPrice: (val: number) => string
}

export default function DualFinanceView({ procurementPOs, salesTransactions, formatPrice }: Props) {
  const [activeFinanceTab, setActiveFinanceTab] = useState<'backend' | 'frontend' | 'margin'>('backend')

  // Backend Procurement Calculations
  const totalProcurementSpend = procurementPOs.reduce((acc, po) => acc + po.totalCost, 0)
  const totalLandingCosts = procurementPOs.reduce((acc, po) => acc + po.shippingAndCustoms, 0)
  const totalUnitsProcured = procurementPOs.reduce((acc, po) => acc + po.batchUnits, 0)
  const avgCostPerUnit = totalUnitsProcured > 0 ? Math.round(totalProcurementSpend / totalUnitsProcured) : 0

  // Frontend Sales Calculations
  const totalGrossSales = salesTransactions.reduce((acc, tx) => acc + tx.grossAmount, 0)
  const totalDiscountsAbsorbed = salesTransactions.reduce((acc, tx) => acc + tx.discountAmount, 0)
  const totalNetRevenue = salesTransactions.reduce((acc, tx) => acc + tx.netRevenue, 0)
  const totalGstCollected = salesTransactions.reduce((acc, tx) => acc + tx.gstAmount, 0)
  const totalUnitsSold = salesTransactions.reduce(
    (acc, tx) => acc + tx.itemsSold.reduce((sum, item) => sum + item.quantity, 0),
    0
  )
  const avgSellingPrice = totalUnitsSold > 0 ? Math.round(totalGrossSales / totalUnitsSold) : 0

  // Net Profit & Unit Economics (Realized vs Landed Cost)
  const estimatedSoldCOGS = totalUnitsSold * avgCostPerUnit
  const grossProfit = totalNetRevenue - estimatedSoldCOGS
  const grossMarginPct = totalNetRevenue > 0 ? ((grossProfit / totalNetRevenue) * 100).toFixed(1) : '0'

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Module Title & Tab Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#111318]/10">
        <div>
          <span className="text-[10px] uppercase tracking-[0.2em] text-[#9B7C38] font-bold block mb-1">
            FINANCIAL RECONCILIATION & TREASURY
          </span>
          <h2 className="font-serif text-2xl text-[#111318] font-semibold">Dual Finance & Unit Economics Hub</h2>
          <p className="text-xs text-[#5A5D66] font-normal mt-1">
            Reconciling Backend Procurement Costs (COGS Outflow) vs Frontend Retail Consumer Sales (Revenue Inflow) & Gross Profit Margin.
          </p>
        </div>

        {/* View Switcher Pills */}
        <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-xl border border-[#111318]/12 shadow-sm">
          <button
            type="button"
            onClick={() => setActiveFinanceTab('backend')}
            className={`px-3.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
              activeFinanceTab === 'backend'
                ? 'bg-[#111318] text-[#F0EEE9] shadow-sm'
                : 'text-[#5A5D66] hover:text-[#111318] hover:bg-[#FAF8F5]'
            }`}
          >
            1. Backend Costs (COGS)
          </button>
          <button
            type="button"
            onClick={() => setActiveFinanceTab('frontend')}
            className={`px-3.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
              activeFinanceTab === 'frontend'
                ? 'bg-[#111318] text-[#F0EEE9] shadow-sm'
                : 'text-[#5A5D66] hover:text-[#111318] hover:bg-[#FAF8F5]'
            }`}
          >
            2. Customer Sales (Revenue)
          </button>
          <button
            type="button"
            onClick={() => setActiveFinanceTab('margin')}
            className={`px-3.5 py-1.5 rounded-lg text-[11px] font-semibold transition-all cursor-pointer ${
              activeFinanceTab === 'margin'
                ? 'bg-[#9B7C38] text-white shadow-sm'
                : 'text-[#5A5D66] hover:text-[#111318] hover:bg-[#FAF8F5]'
            }`}
          >
            3. Gross Margin Engine
          </button>
        </div>
      </div>

      {/* =====================================================================
          TAB 1: BACKEND PROCUREMENT FINANCE (COGS & OUTFLOW)
          ===================================================================== */}
      {activeFinanceTab === 'backend' && (
        <div className="space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-white rounded-2xl border border-[#111318]/8 shadow-sm">
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#6E7380] font-semibold block">Total PO Capital Spent</span>
              <p className="font-serif text-3xl text-[#111318] font-bold mt-1.5">{formatPrice(totalProcurementSpend)}</p>
              <span className="text-[11px] text-[#9B7C38] font-medium mt-1 block">Deployed across {procurementPOs.length} Purchase Orders</span>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#111318]/8 shadow-sm">
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#6E7380] font-semibold block">Total Batch Units Bought</span>
              <p className="font-serif text-3xl text-[#111318] font-bold mt-1.5">{totalUnitsProcured.toLocaleString()} <span className="text-xs font-sans text-[#6E7380] font-normal">Units</span></p>
              <span className="text-[11px] text-emerald-700 font-medium mt-1 block">Avg Batch: ~{Math.round(totalUnitsProcured / procurementPOs.length)} Units</span>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#9B7C38]/25 shadow-sm">
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#9B7C38] font-bold block">Average Unit Landed Cost</span>
              <p className="font-serif text-3xl text-[#9B7C38] font-bold mt-1.5">{formatPrice(avgCostPerUnit)}</p>
              <span className="text-[11px] text-[#6E7380] mt-1 block">Weighted raw manufacturing cost</span>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#111318]/8 shadow-sm">
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#6E7380] font-semibold block">Freight, Customs & Duties</span>
              <p className="font-serif text-3xl text-[#111318] font-bold mt-1.5">{formatPrice(totalLandingCosts)}</p>
              <span className="text-[11px] text-[#6E7380] mt-1 block">Landed at central warehouse</span>
            </div>
          </div>

          {/* PO Ledger Table */}
          <div className="bg-white rounded-2xl border border-[#111318]/8 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-[#111318]/8 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#9B7C38] font-bold block">
                  MANUFACTURING & RAW MATERIAL PURCHASE ORDERS (PO)
                </span>
                <p className="text-xs text-[#5A5D66] mt-0.5">
                  Detailed ledger of all products bought from fabric mills and workshops with itemized unit cost.
                </p>
              </div>
              <span className="text-xs font-mono font-semibold text-[#111318] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#111318]/8">
                {procurementPOs.length} PO Records
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF8F5] text-[#111318]/70 uppercase tracking-wider text-[11px] border-b border-[#111318]/8">
                  <tr>
                    <th className="py-3.5 px-4 font-bold">PO Reference</th>
                    <th className="py-3.5 px-4 font-bold">Silhouette & SKU</th>
                    <th className="py-3.5 px-4 font-bold">Vendor / Mill</th>
                    <th className="py-3.5 px-4 text-center font-bold">Batch Size</th>
                    <th className="py-3.5 px-4 text-right font-bold">Cost / Unit</th>
                    <th className="py-3.5 px-4 text-right font-bold">Batch Total</th>
                    <th className="py-3.5 px-4 text-right font-bold">Customs/Duty</th>
                    <th className="py-3.5 px-4 text-center font-bold">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#111318]/6">
                  {procurementPOs.map((po) => (
                    <tr key={po.id} className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-[#9B7C38]">
                        {po.poNumber}
                        <span className="block text-[10px] text-[#6E7380] font-normal">{po.date}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="font-serif text-sm text-[#111318] font-medium">{po.productName}</p>
                        <span className="text-[11px] font-mono text-[#6E7380]">{po.sku}</span>
                      </td>
                      <td className="py-3.5 px-4 text-xs text-[#2D3139] font-medium">
                        {po.vendorName}
                      </td>
                      <td className="py-3.5 px-4 text-center font-mono font-bold text-[#111318]">
                        {po.batchUnits} <span className="text-[10px] text-[#6E7380] font-normal">Units</span>
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono text-[#111318]">
                        {formatPrice(po.unitCost)}
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono font-bold text-[#111318]">
                        {formatPrice(po.totalCost)}
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono text-[#6E7380] text-[11px]">
                        +{formatPrice(po.shippingAndCustoms)}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span
                          className={`px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-bold border ${
                            po.paymentStatus === 'Paid in Full'
                              ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                              : po.paymentStatus === '50% Advance Settled'
                              ? 'bg-[#FAF3E0] text-[#9B7C38] border-[#9B7C38]/40'
                              : 'bg-amber-100 text-amber-800 border-amber-300'
                          }`}
                        >
                          ● {po.paymentStatus}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 2: FRONTEND RETAIL SALES FINANCE (REVENUE INFLOW)
          ===================================================================== */}
      {activeFinanceTab === 'frontend' && (
        <div className="space-y-6">
          {/* KPI Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 bg-emerald-50/70 rounded-2xl border border-emerald-200 shadow-sm">
              <span className="text-[11px] uppercase tracking-[0.12em] text-emerald-900 font-bold block">Net Realized Revenue</span>
              <p className="font-serif text-3xl text-emerald-950 font-bold mt-1.5">{formatPrice(totalNetRevenue)}</p>
              <span className="text-[11px] text-emerald-700 mt-1 block">Net bank settlement realization</span>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#111318]/8 shadow-sm">
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#6E7380] font-semibold block">Gross Merchandising Value (GMV)</span>
              <p className="font-serif text-3xl text-[#111318] font-bold mt-1.5">{formatPrice(totalGrossSales)}</p>
              <span className="text-[11px] text-[#9B7C38] font-medium mt-1 block">Pre-discount order volume</span>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#111318]/8 shadow-sm">
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#6E7380] font-semibold block">Discounts Distributed</span>
              <p className="font-serif text-3xl text-amber-800 font-bold mt-1.5">-{formatPrice(totalDiscountsAbsorbed)}</p>
              <span className="text-[11px] text-[#6E7380] mt-1 block">Welcome & Promo Codes</span>
            </div>

            <div className="p-5 bg-white rounded-2xl border border-[#9B7C38]/25 shadow-sm">
              <span className="text-[11px] uppercase tracking-[0.12em] text-[#9B7C38] font-bold block">Average Realized Price</span>
              <p className="font-serif text-3xl text-[#9B7C38] font-bold mt-1.5">{formatPrice(avgSellingPrice)}</p>
              <span className="text-[11px] text-[#6E7380] mt-1 block">Across {totalUnitsSold} garments sold</span>
            </div>
          </div>

          {/* Sales Transaction Ledger */}
          <div className="bg-white rounded-2xl border border-[#111318]/8 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-[#111318]/8 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase tracking-[0.16em] text-[#9B7C38] font-bold block">
                  RETAIL CONSUMER SALES TRANSACTIONS
                </span>
                <p className="text-xs text-[#5A5D66] mt-0.5">
                  Itemized sales orders with customer receipt details, discount deductions, and GST realization.
                </p>
              </div>
              <span className="text-xs font-mono font-semibold text-[#111318] bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#111318]/8">
                {salesTransactions.length} Paid Orders
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAF8F5] text-[#111318]/70 uppercase tracking-wider text-[11px] border-b border-[#111318]/8">
                  <tr>
                    <th className="py-3.5 px-4 font-bold">Order ID & Date</th>
                    <th className="py-3.5 px-4 font-bold">Client & Location</th>
                    <th className="py-3.5 px-4 font-bold">Items Sold</th>
                    <th className="py-3.5 px-4 text-right font-bold">Gross GMV</th>
                    <th className="py-3.5 px-4 text-right font-bold">Discount</th>
                    <th className="py-3.5 px-4 text-right font-bold">Net Revenue</th>
                    <th className="py-3.5 px-4 text-center font-bold">Payment Rail</th>
                    <th className="py-3.5 px-4 text-right font-bold">GST (12%)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#111318]/6">
                  {salesTransactions.map((tx) => (
                    <tr key={tx.id} className="hover:bg-[#FAF8F5] transition-colors">
                      <td className="py-3.5 px-4 font-mono font-bold text-[#9B7C38]">
                        {tx.orderId}
                        <span className="block text-[10px] text-[#6E7380] font-normal">{tx.date}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <p className="font-serif text-sm text-[#111318] font-semibold">{tx.customerName}</p>
                        <span className="text-[11px] font-mono text-[#6E7380]">{tx.city}, {tx.state}</span>
                      </td>
                      <td className="py-3.5 px-4">
                        <div className="space-y-0.5">
                          {tx.itemsSold.map((it, iIdx) => (
                            <p key={iIdx} className="text-xs text-[#2D3139]">
                              {it.quantity}x {it.name}
                            </p>
                          ))}
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono text-[#111318]">
                        {formatPrice(tx.grossAmount)}
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono text-amber-800 text-xs font-semibold">
                        {tx.discountAmount > 0 ? `-${formatPrice(tx.discountAmount)}` : '—'}
                        {tx.discountCodeApplied && (
                          <span className="block text-[10px] text-[#9B7C38]">{tx.discountCodeApplied}</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono font-bold text-emerald-800 text-sm">
                        {formatPrice(tx.netRevenue)}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#FAF8F5] text-[#111318] border border-[#111318]/10">
                          {tx.paymentMethod}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right font-mono text-[#6E7380] text-xs">
                        {formatPrice(tx.gstAmount)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================================
          TAB 3: UNIT ECONOMICS & PROFIT MARGIN ENGINE
          ===================================================================== */}
      {activeFinanceTab === 'margin' && (
        <div className="space-y-6">
          {/* Comparison Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-6 bg-emerald-50/70 rounded-2xl border border-emerald-200 shadow-sm">
              <span className="text-[11px] uppercase tracking-[0.16em] text-emerald-900 font-bold block">
                TOTAL INFLOW (NET SALES)
              </span>
              <p className="font-serif text-3xl text-emerald-950 font-bold mt-1.5">{formatPrice(totalNetRevenue)}</p>
              <span className="text-xs text-emerald-700 mt-1 block">Realized across sample orders</span>
            </div>

            <div className="p-6 bg-amber-50/70 rounded-2xl border border-amber-200 shadow-sm">
              <span className="text-[11px] uppercase tracking-[0.16em] text-amber-900 font-bold block">
                ESTIMATED SOLD COGS (OUTFLOW)
              </span>
              <p className="font-serif text-3xl text-amber-950 font-bold mt-1.5">-{formatPrice(estimatedSoldCOGS)}</p>
              <span className="text-xs text-amber-800 mt-1 block">Manufacturing & landing expenditure</span>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#9B7C38]/30 shadow-sm">
              <span className="text-[11px] uppercase tracking-[0.16em] text-[#9B7C38] font-bold block">
                GROSS PROFIT MARGIN
              </span>
              <p className="font-serif text-3xl text-[#9B7C38] font-bold mt-1.5">{grossMarginPct}%</p>
              <span className="text-xs text-[#2D3139] font-medium mt-1 block">Net Gross Margin: {formatPrice(grossProfit)}</span>
            </div>
          </div>

          {/* Visual Profitability Ratio Bar */}
          <div className="p-6 bg-white rounded-2xl border border-[#111318]/8 shadow-sm space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg text-[#111318] font-semibold">Capital Realization vs Production Deployment</h3>
                <p className="text-xs text-[#5A5D66] mt-0.5">
                  Visual ratio of capital recovered through luxury retail sales versus procurement outlays.
                </p>
              </div>
              <span className="text-xs font-mono text-[#9B7C38] font-bold">
                {grossMarginPct}% Luxury Markup Retained
              </span>
            </div>

            <div className="w-full bg-[#FAF8F5] h-6 rounded-full overflow-hidden flex border border-[#111318]/10 p-0.5">
              <div
                className="bg-emerald-600 h-full rounded-l-full transition-all duration-700 flex items-center justify-center text-[10px] font-bold text-white shadow-inner"
                style={{ width: `${grossMarginPct}%` }}
              >
                Profit {grossMarginPct}%
              </div>
              <div
                className="bg-amber-600 h-full rounded-r-full transition-all duration-700 flex items-center justify-center text-[10px] font-bold text-white shadow-inner"
                style={{ width: `${(100 - Number(grossMarginPct)).toFixed(1)}%` }}
              >
                COGS {(100 - Number(grossMarginPct)).toFixed(1)}%
              </div>
            </div>

            <div className="grid grid-cols-2 text-xs pt-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded bg-emerald-600" />
                <span className="text-[#111318] font-medium">Gross Profit Contribution: {formatPrice(grossProfit)}</span>
              </div>
              <div className="flex items-center gap-2 justify-end">
                <span className="w-3 h-3 rounded bg-amber-600" />
                <span className="text-[#111318] font-medium">Cost of Goods (COGS): {formatPrice(estimatedSoldCOGS)}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
