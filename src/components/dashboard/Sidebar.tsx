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
  Lock,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Sidebar() {
  const [transferOpen, setTransferOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px se chhota ho to mobile/tablet
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Close sidebar when clicking outside on mobile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const sidebar = document.getElementById('sidebar');
      const menuButton = document.getElementById('menu-button');
      
      if (isSidebarOpen && sidebar && !sidebar.contains(event.target as Node) && 
          menuButton && !menuButton.contains(event.target as Node)) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isSidebarOpen]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const sidebarContent = (
    <div 
      id="sidebar"
      className={`bg-alfa-dark text-white flex flex-col justify-between p-6 h-screen fixed lg:relative z-40
        ${isMobile ? 'w-64' : 'w-60'} 
        transition-transform duration-300 ease-in-out
        ${isMobile && !isSidebarOpen ? '-translate-x-full' : 'translate-x-0'}
        lg:translate-x-0`}
      style={{ fontFamily: 'var(--font-urbanist), sans-serif' }}
    >
      
      {/* Logo */}
      <div>
        <div className="flex items-center justify-between lg:justify-start gap-2 mb-10">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-alfa-light rounded-lg flex items-center justify-center">
              <Image 
                src="/logo.png" 
                alt="alfa logo" 
                width={100} 
                height={32} 
                className="text-alfa-dark font-bold text-xl"
              />
            </div>
            <h1 style={{ fontFamily: "'Clash Display', sans-serif", fontWeight: 600, fontSize: '32px', lineHeight: '90%', letterSpacing: '0%', textAlign: 'center' }}>alfa</h1>
          </div>
          
          {/* Close button for mobile */}
          {isMobile && (
            <button 
              onClick={toggleSidebar}
              className="lg:hidden p-2 rounded-lg hover:bg-white/10"
            >
              <X size={24} />
            </button>
          )}
        </div>

        <nav className="space-y-1">
          <SidebarItem 
            icon={<LayoutDashboard size={18} />} 
            label="Dashboard" 
            active 
            onClick={() => isMobile && setIsSidebarOpen(false)}
          />
          
          {/* Transfer Section with Expandable */}
          <div>
            <div 
              className="flex items-center justify-between px-4 py-3 rounded-xl cursor-pointer hover:bg-white/10 transition"
              onClick={() => setTransferOpen(!transferOpen)}
            >
              <div className="flex items-center gap-3" style={{ fontFamily: 'var(--font-urbanist), sans-serif' }}>
                <ArrowLeftRight size={18} />
                <span style={{ fontWeight: 600, fontSize: '12px', lineHeight: '100%', letterSpacing: '0%' }}>Transfer</span>
              </div>
              <ChevronDown size={16} className={`transition-transform ${transferOpen ? 'rotate-180' : ''}`} />
            </div>
            
            {transferOpen && (
              <div className="ml-4 mt-2 space-y-1 border-l-2 border-white/20 pl-4">
                <SidebarSubItem 
                  label="Add Money" 
                  onClick={() => isMobile && setIsSidebarOpen(false)}
                />
                <SidebarSubItem 
                  label="Transfer" 
                  onClick={() => isMobile && setIsSidebarOpen(false)}
                />
                <SidebarSubItem 
                  label="Request" 
                  onClick={() => isMobile && setIsSidebarOpen(false)}
                />
                <SidebarSubItem 
                  label="History" 
                  onClick={() => isMobile && setIsSidebarOpen(false)}
                />
              </div>
            )}
          </div>

          <SidebarItem 
            icon={<CreditCard size={18} />} 
            label="Cards" 
            onClick={() => isMobile && setIsSidebarOpen(false)}
          />
          <SidebarItem 
            icon={<InvoiceIcon size={18} />} 
            label="Invoices" 
            onClick={() => isMobile && setIsSidebarOpen(false)}
          />
          <SidebarItem 
            icon={<Coins size={18} />} 
            label="Saving Plans" 
            onClick={() => isMobile && setIsSidebarOpen(false)}
          />
          <SidebarItem 
            icon={<Gem  size={18}/>} 
            label="Schedules" 
            onClick={() => isMobile && setIsSidebarOpen(false)}
          />
          <SidebarItem 
            icon={<Mail size={18} />} 
            label="Calendar" 
            onClick={() => isMobile && setIsSidebarOpen(false)}
          />
          <SidebarItem 
            icon={<FileText size={18} />} 
            label="Withdrawals" 
            onClick={() => isMobile && setIsSidebarOpen(false)}
          />
          <SidebarItem 
            icon={<Settings size={18} />} 
            label="Help & Support" 
            onClick={() => isMobile && setIsSidebarOpen(false)}
          />
          <SidebarItem 
            icon={<Settings size={18} />} 
            label="Deposits" 
            onClick={() => isMobile && setIsSidebarOpen(false)}
          />
        </nav>
      </div>

      {/* Pro Card */}
      <div className="bg-alfa-primary rounded-2xl p-5">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 bg-alfa-dark rounded-lg flex items-center justify-center">
            <Lock size={16} />
          </div>
        </div>
        <p className="text-sm mb-4 text-gray-300" style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 600, fontSize: '12px', lineHeight: '100%', letterSpacing: '0%' }}>
          Gain full access to your finances with detailed analytics and graphs.
        </p>

        <button 
          className="bg-alfa-light text-alfa-dark w-full py-2.5 rounded-xl font-semibold hover:bg-alfa-accent transition" 
          style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 600, fontSize: '12px', lineHeight: '100%', letterSpacing: '0%', textAlign: 'center' }}
          onClick={() => isMobile && setIsSidebarOpen(false)}
        >
          Get Pro
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          id="menu-button"
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 bg-alfa-dark text-white rounded-lg shadow-lg lg:hidden"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Sidebar Overlay for Mobile */}
      {isMobile && isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {sidebarContent}
    </>
  );
}

function SidebarItem({
  icon,
  label,
  active,
  onClick
}: any) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition
      ${active ? "bg-alfa-light text-alfa-dark font-medium" : "hover:bg-white/10"}`}
      style={{ fontFamily: 'var(--font-urbanist), sans-serif' }}
    >
      {icon}
      <span style={{ fontWeight: 600, fontSize: '12px', lineHeight: '100%', letterSpacing: '0%' }}>{label}</span>
    </div>
  );
}

function SidebarSubItem({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <div 
      onClick={onClick}
      className="px-4 py-2 text-sm cursor-pointer hover:text-alfa-light transition" 
      style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 600, fontSize: '12px', lineHeight: '100%', letterSpacing: '0%' }}
    >
      {label}
    </div>
  );
}