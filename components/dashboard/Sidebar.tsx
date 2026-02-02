"use client"

import {
    LayoutDashboard,
    ArrowLeftRight,
    CreditCard,
    FileText,
    Coins,
    Gem,
    Mail,
    FileText as InvoiceIcon,
    Settings,
    Wallet,
    ChevronDown,
    Lock
  } from "lucide-react";
  import { useState } from "react";
  
  export default function Sidebar() {
    const [transferOpen, setTransferOpen] = useState(true);
  
    return (
      <div className="w-72 bg-alfa-dark text-white flex flex-col justify-between p-6 h-screen">
        
        {/* Logo */}
        <div>
          <div className="flex items-center gap-2 mb-10">
            <div className="w-10 h-10 bg-alfa-light rounded-lg flex items-center justify-center">
              <span className="text-alfa-dark font-bold text-xl">A</span>
            </div>
            <h1 className="text-2xl font-bold">alfa</h1>
          </div>
  
          <nav className="space-y-2">
            <SidebarItem icon={<LayoutDashboard />} label="Dashboard" active />
            
            {/* Transfer Section with Expandable */}
            <div>
              <div 
                className="flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer hover:bg-white/10 transition"
                onClick={() => setTransferOpen(!transferOpen)}
              >
                <div className="flex items-center gap-3">
                  <ArrowLeftRight size={20} />
                  <span>Transfer</span>
                </div>
                <ChevronDown size={16} className={`transition-transform ${transferOpen ? 'rotate-180' : ''}`} />
              </div>
              
              {transferOpen && (
                <div className="ml-4 mt-2 space-y-1 border-l-2 border-white/20 pl-4">
                  <SidebarSubItem label="Add Money" />
                  <SidebarSubItem label="Transfer" />
                  <SidebarSubItem label="Request" />
                  <SidebarSubItem label="History" />
                </div>
              )}
            </div>
  
            <SidebarItem icon={<CreditCard />} label="Cards" />
            <SidebarItem icon={<InvoiceIcon />} label="Invoices" />
            <SidebarItem icon={<Coins />} label="Saving Plans" />
            <SidebarItem icon={<Gem />} label="Schedules" />
            <SidebarItem icon={<Mail />} label="Calendar" />
            <SidebarItem icon={<FileText />} label="Withdrawals" />
            <SidebarItem icon={<Settings />} label="Help & Support" />
            <SidebarItem icon={<Settings />} label="Deposits" />
          </nav>
        </div>
  
        {/* Pro Card */}
        <div className="bg-alfa-primary rounded-2xl p-5">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 bg-alfa-dark rounded-lg flex items-center justify-center">
              <Lock size={16} />
            </div>
          </div>
          <p className="text-sm mb-4 text-gray-300">
            Gain full access to your finances with detailed analytics and graphs.
          </p>
  
          <button className="bg-alfa-light text-alfa-dark w-full py-2.5 rounded-xl font-semibold hover:bg-alfa-accent transition">
            Get Pro
          </button>
        </div>
      </div>
    );
  }
  
  function SidebarItem({
    icon,
    label,
    active,
  }: any) {
    return (
      <div
        className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
        ${active ? "bg-alfa-light text-alfa-dark font-medium" : "hover:bg-white/10"}`}
      >
        {icon}
        <span>{label}</span>
      </div>
    );
  }

  function SidebarSubItem({ label }: { label: string }) {
    return (
      <div className="px-4 py-2 text-sm cursor-pointer hover:text-alfa-light transition">
        {label}
      </div>
    );
  }
  