import { Plus } from "lucide-react"

const savingPlans = [
  {
    name: "Emergency Fund",
    current: 5000,
    target: 10000,
    percentage: 50
  },
  {
    name: "Vacation Fund",
    current: 3500,
    target: 8000,
    percentage: 44
  }
]

const totalSavings = 84500;

export default function SavingPlans() {
  return (
    <div className="bg-white p-6 rounded-2xl">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-semibold text-gray-800">Saving Plans</h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-alfa-primary text-white rounded-xl hover:bg-alfa-dark transition text-sm font-medium">
          <Plus size={16} />
          Add Plan
        </button>
      </div>

      <div className="mb-6 p-4 bg-alfa-muted rounded-xl">
        <p className="text-sm text-gray-600 mb-1">Total Savings</p>
        <p className="text-2xl font-bold text-gray-800">£{totalSavings.toLocaleString()}</p>
      </div>

      <div className="space-y-4">
        {savingPlans.map((plan, index) => (
          <div key={index} className="space-y-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-medium text-gray-800">{plan.name}</p>
                <p className="text-sm text-gray-500">
                  £{plan.current.toLocaleString()} {plan.percentage}%
                </p>
              </div>
              <p className="text-sm text-gray-600">
                Target: £{plan.target.toLocaleString()}
              </p>
            </div>
            
            <div className="w-full bg-alfa-muted rounded-full h-2 overflow-hidden">
              <div 
                className="bg-alfa-light h-full rounded-full transition-all"
                style={{ width: `${plan.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

