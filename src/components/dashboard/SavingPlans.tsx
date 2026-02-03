import { Plus, MoreVertical, AlertTriangle, Plane } from "lucide-react"

const savingPlans = [
  {
    name: "Emergency Fund",
    current: 5000,
    target: 10000,
    percentage: 50,
    icon: AlertTriangle
  },
  {
    name: "Vacation Fund",
    current: 3500,
    target: 8000,
    percentage: 25,
    icon: Plane
  }
]

const totalSavings = 84500;

export default function SavingPlans() {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 700, fontSize: '18px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36' }}>
          Saving Plans
        </h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-white border border-alfa-light rounded-xl hover:bg-alfa-muted transition">
          <Plus size={16} className="text-alfa-light" />
          <span style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 600, fontSize: '14px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36' }}>
            Add Plan
          </span>
        </button>
      </div>

      <div className="mb-6">
        <p style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36', marginBottom: '8px' }}>
          Total Savings
        </p>
        <p style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 700, fontSize: '48px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36' }}>
          £{totalSavings.toLocaleString()}
        </p>
      </div>

      <div className="space-y-4">
        {savingPlans.map((plan, index) => {
          const IconComponent = plan.icon;
          return (
            <div key={index} className="bg-white border border-gray-200 p-4 rounded-xl relative">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
                <MoreVertical size={18} />
              </button>
              
              <div className="flex items-start gap-3 mb-3">
                <div className="w-10 h-10 bg-white border border-alfa-light rounded-lg flex items-center justify-center">
                  <IconComponent size={20} className="text-alfa-light" />
                </div>
                <div className="flex-1">
                  <p style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36', marginBottom: '8px' }}>
                    {plan.name}
                  </p>
                  
                  <div className="w-full bg-alfa-light rounded-full h-2 overflow-hidden mb-2">
                    <div 
                      className="bg-alfa-dark h-full rounded-full transition-all"
                      style={{ width: `${plan.percentage}%` }}
                    />
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36' }}>
                      £{plan.current.toLocaleString()} {plan.percentage}%
                    </span>
                    <span style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36' }}>
                      Target: £{plan.target.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

