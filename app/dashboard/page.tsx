import Header from "@/components/dashboard/Header"
import CreditCard from "@/components/dashboard/CreditCard"
import Stats from "@/components/dashboard/Stats"
import Cashflow from "@/components/dashboard/Cashflow"
import Transactions from "@/components/dashboard/Transactions"
import RightPanel from "@/components/dashboard/RightPanel"

export default function Page(){
  return(
    <div className="grid grid-cols-12 gap-6">

      {/* LEFT */}
      <div className="col-span-8 space-y-6">
        <Header/>
        <CreditCard/>
        <Stats/>
        <Cashflow/>
        <Transactions/>
      </div>

      {/* RIGHT */}
      <div className="col-span-4">
        <RightPanel/>
      </div>

    </div>
  )
}
