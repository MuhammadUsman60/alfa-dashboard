import ExpenseChart from "./ExpenseChart"
import CurrencyCard from "./CurrencyCard"
import Activity from "./Activity"

export default function RightPanel(){
  return(
    <div className="space-y-6">
      <ExpenseChart/>
      <CurrencyCard/>
      <Activity/>
    </div>
  )
}
