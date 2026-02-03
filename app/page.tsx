import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import DailyLimit from "@/components/dashboard/DailyLimit";
import SavingPlans from "@/components/dashboard/SavingPlans";
import Stats from "@/components/dashboard/Stats";
import Transactions from "@/components/dashboard/Transactions";
import Footer from "@/components/dashboard/Footer";

export default function Home() {
  return (
    <div className="flex h-screen overflow-hidden bg-alfa-bg">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-4 md:p-6">
        <Header />
        
        {/* Main Content Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mt-4 md:mt-6">
          
          {/* LEFT PANEL - Credit Card, Actions, Daily Limit, Saving Plans */}
          {/* Mobile: Full width, Tablet: 6 columns, Desktop: 3 columns */}
          <div className="lg:col-span-3 xl:col-span-3 space-y-4 md:space-y-6 order-1 lg:order-1">
            <DailyLimit />
            <SavingPlans />
          </div>

          {/* MAIN CONTENT AREA - Stats, Cashflow, Transactions */}
          {/* Mobile: Full width, Tablet: Full width, Desktop: 9 columns */}
          <div className="lg:col-span-9 xl:col-span-9 space-y-4 md:space-y-6 order-3 lg:order-2">
            <Stats />
            <Transactions />
          </div>

          {/* RIGHT PANEL - Expense Chart, Currency, Activity */}
          {/* Optional: Uncomment for larger screens */}
          {/* 
          <div className="lg:col-span-3 xl:col-span-3 space-y-4 md:space-y-6 order-2 lg:order-3">
            <RightPanel />
          </div> 
          */}

        </div>
        
        <Footer />
      </main>
    </div>
  );
}