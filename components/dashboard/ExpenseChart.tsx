"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts"
import { ChevronDown } from "lucide-react"

const data = [
 {name:"Rent & Living",value:2100,percentage:60,color:"#0F4F46"},
 {name:"Investment",value:525,percentage:15,color:"#A7E3A1"},
 {name:"Education",value:420,percentage:12,color:"#7ED957"},
 {name:"Food & Drink",value:280,percentage:8,color:"#B4F1B0"},
]

const totalExpense = 3500;

export default function ExpenseChart(){
  return(
    <div className="bg-white p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-gray-800">Statistic</h3>
        <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-800">
          This Month
          <ChevronDown size={16} />
        </button>
      </div>

      <div className="relative flex items-center justify-center mb-6" style={{ height: '180px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie 
              data={data} 
              dataKey="value" 
              innerRadius={60} 
              outerRadius={90}
              startAngle={90}
              endAngle={-270}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <p className="text-sm text-gray-500">Total Expense</p>
          <p className="text-2xl font-bold text-gray-800">£{totalExpense.toLocaleString()}</p>
        </div>
      </div>

      <div className="space-y-3">
        {data.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <div>
                <p className="text-sm font-medium text-gray-800">
                  {item.percentage}% {item.name}
                </p>
              </div>
            </div>
            <p className="text-sm font-semibold text-gray-800">£{item.value.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
    