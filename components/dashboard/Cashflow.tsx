"use client"

import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Cell
} from "recharts"

const data=[
 {month:"Jan",income:6000,expense:4000},
 {month:"Feb",income:5500,expense:3500},
 {month:"Mar",income:7000,expense:4500},
 {month:"Apr",income:6500,expense:4200},
 {month:"May",income:6800,expense:4400},
 {month:"Jun",income:6000,expense:4000},
 {month:"Jul",income:7200,expense:4800},
 {month:"Aug",income:6500,expense:4300},
 {month:"Sep",income:7000,expense:4600},
 {month:"Oct",income:6800,expense:4500},
 {month:"Nov",income:7200,expense:4700},
 {month:"Dec",income:7500,expense:5000},
]

export default function Cashflow(){
  return(
    <div className="bg-white p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-gray-800">Cashflow</h3>
        <div className="text-right">
          <p className="text-sm text-gray-500">Total Balance</p>
          <p className="text-2xl font-bold text-gray-800">£562,000</p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-alfa-primary rounded"></div>
            <span className="text-gray-600">Income</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-alfa-light rounded"></div>
            <span className="text-gray-600">Expense</span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="month" tick={{ fill: '#6B7280', fontSize: 12 }} />
          <YAxis tick={{ fill: '#6B7280', fontSize: 12 }} />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#fff', 
              border: '1px solid #E4ECEA', 
              borderRadius: '8px' 
            }}
          />
          <Bar dataKey="income" fill="#0F4F46" radius={[8, 8, 0, 0]} />
          <Bar dataKey="expense" fill="#A7E3A1" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 p-3 bg-alfa-muted rounded-lg">
        <p className="text-sm text-gray-600">
          <span className="font-semibold">June 2029</span> Income £6,000 Expense £4,000
        </p>
      </div>
    </div>
  )
}
