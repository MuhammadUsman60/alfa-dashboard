import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import CreditCard from "@/components/dashboard/CreditCard";
import ActionButtons from "@/components/dashboard/ActionButtons";
import DailyLimit from "@/components/dashboard/DailyLimit";
import SavingPlans from "@/components/dashboard/SavingPlans";
import Stats from "@/components/dashboard/Stats";
import Cashflow from "@/components/dashboard/Cashflow";
import Transactions from "@/components/dashboard/Transactions";
import RightPanel from "@/components/dashboard/RightPanel";
import Footer from "@/components/dashboard/Footer";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-alfa-bg">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6">
        <Header />
        
        <div className="grid grid-cols-12 gap-6">
          
          {/* LEFT PANEL - Credit Card, Actions, Daily Limit, Saving Plans */}
          <div className="col-span-3 space-y-6">
            <CreditCard />
            <ActionButtons />
            <DailyLimit />
            <SavingPlans />
          </div>

          {/* MAIN CONTENT AREA - Stats, Cashflow, Transactions */}
          <div className="col-span-6 space-y-6">
            <Stats />
            <Cashflow />
            <Transactions />
          </div>

          {/* RIGHT PANEL - Expense Chart, Currency, Activity */}
          <div className="col-span-3 space-y-6">
            <RightPanel />
          </div>

        </div>
        
        <Footer />
      </main>
    </div>
  );
}
