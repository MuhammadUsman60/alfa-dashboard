export default function DailyLimit() {
  const spent = 2500;
  const limit = 20000;
  const percentage = (spent / limit) * 100;

  return (
    <div className="bg-white p-6 rounded-2xl">
      <h3 className="font-semibold text-gray-800 mb-4">Daily Limit</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-gray-800">£{spent.toLocaleString()}.00</span>
          <span className="text-sm text-gray-500">of £{limit.toLocaleString()}.00</span>
        </div>
        
        <div className="w-full bg-alfa-muted rounded-full h-3 overflow-hidden">
          <div 
            className="bg-alfa-light h-full rounded-full transition-all"
            style={{ width: `${percentage}%` }}
          />
        </div>
        
        <p className="text-sm text-gray-500">
          {percentage.toFixed(1)}% of daily limit used
        </p>
      </div>
    </div>
  );
}

