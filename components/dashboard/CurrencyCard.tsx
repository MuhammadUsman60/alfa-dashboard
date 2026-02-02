import { ChevronDown, ArrowDown } from "lucide-react"

export default function CurrencyCard(){
    return(
      <div className="bg-white p-6 rounded-2xl">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-gray-800">CC</h3>
          <span className="text-xs text-gray-500">2 min ago</span>
        </div>
  
        <div className="space-y-4">
          <div>
            <p className="text-sm text-gray-500 mb-2">Amount</p>
            <div className="flex items-center gap-2">
              <input
                className="border border-alfa-border w-full p-3 rounded-xl bg-white"
                defaultValue="£1,000"
              />
              <button className="flex items-center gap-1 px-3 py-3 border border-alfa-border rounded-xl bg-white hover:bg-alfa-muted">
                <span className="text-sm font-medium">GBP</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-10 h-10 rounded-full bg-alfa-muted flex items-center justify-center">
              <ArrowDown className="text-alfa-primary" size={20} />
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 mb-2">Converted to</p>
            <div className="flex items-center gap-2">
              <input
                className="border border-alfa-border w-full p-3 rounded-xl bg-white"
                defaultValue="€920.50"
                readOnly
              />
              <button className="flex items-center gap-1 px-3 py-3 border border-alfa-border rounded-xl bg-white hover:bg-alfa-muted">
                <span className="text-sm font-medium">EUR</span>
                <ChevronDown size={16} />
              </button>
            </div>
          </div>
  
          <button className="bg-alfa-primary text-white w-full py-3 rounded-xl font-semibold hover:bg-alfa-dark transition">
            Exchange Now
          </button>
        </div>
      </div>
    )
  }
  