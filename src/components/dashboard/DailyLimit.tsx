import { MoreVertical } from "lucide-react"

export default function DailyLimit() {
  const spent = 2500;
  const limit = 20000;
  const percentage = (spent / limit) * 100;

  return (
    <div className="bg-white p-6 rounded-2xl relative">
      <div className="flex justify-between items-center mb-4">
        <h3 style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36' }}>
          Daily Limit
        </h3>
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical size={18} />
        </button>
      </div>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36' }}>
            £{spent.toLocaleString()}.00 spent of £{limit.toLocaleString()}.00
          </span>
          <span style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 700, fontSize: '16px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36' }}>
            {percentage.toFixed(1)}%
          </span>
        </div>
        
        <div className="w-full bg-alfa-light rounded-full h-3 overflow-hidden">
          <div 
            className="bg-alfa-dark h-full rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}

