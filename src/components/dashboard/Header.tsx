"use client"

import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Search, Bell, MoreVertical, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

export default function Header() {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 md:mb-8">
      
      {/* Top Row: Title & User Info (Mobile) */}
      <div className="flex items-center justify-between w-full sm:w-auto">
        <h1 style={{ 
          fontFamily: 'var(--font-urbanist), sans-serif', 
          fontWeight: 700, 
          fontSize: isMobile ? '20px' : '22px', 
          lineHeight: '120%', 
          letterSpacing: '0%', 
          color: '#0B2B2A',
        }}>
          Dashboard
        </h1>
        
        {/* Mobile User Info */}
        {isMobile && (
          <div className="flex items-center gap-2">
            <Avatar className="w-9 h-9 border border-white shadow-sm">
              <AvatarImage src="https://i.pravatar.cc/100?img=12" />
            </Avatar>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        )}
      </div>

      {/* Bottom Row: Search & Actions (Mobile) or Full Row (Desktop) */}
      <div className="flex items-center gap-3 w-full sm:w-auto">
        
        {/* Search Bar - Responsive */}
        <div className={`relative flex-1 sm:flex-none ${isMobile ? 'w-full' : ''}`}>
          {!isMobile && (
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          )}
          
          <Input
            placeholder={isMobile ? "Search..." : "Search placeholder"}
            className={`
              ${isMobile ? 'w-full' : isTablet ? 'w-[200px]' : 'w-[280px]'}
              h-[42px] md:h-[46px]
              ${!isMobile && 'pl-11'}
              pr-4
              rounded-full
              border-0
              bg-[#E5E9EA]
              focus-visible:ring-1
              focus-visible:ring-[#DDE6E4]
              shadow-none
              text-gray-600
              text-sm md:text-base
            `}
            style={{ fontFamily: 'var(--font-urbanist), sans-serif' }}
          />
          
          {isMobile && (
            <Search
              size={18}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
            />
          )}
        </div>

        {/* Actions - Hide some on mobile */}
        <div className="flex items-center gap-2">
          {/* More Vertical - Hide on mobile */}
          {!isMobile && (
            <button className="hidden md:flex w-10 h-10 rounded-full bg-[#ECF4E9] items-center justify-center hover:opacity-90 transition">
              <MoreVertical size={18} className="text-alfa-dark" />
            </button>
          )}

          {/* Notification */}
          <button className="relative w-10 h-10 rounded-full bg-[#ECF4E9] flex items-center justify-center hover:opacity-90 transition">
            <Bell size={18} className="text-alfa-dark" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"/>
          </button>

          {/* User - Desktop/Tablet */}
          {!isMobile && (
            <div className="hidden md:flex items-center gap-3 ml-2">
              <span style={{ 
                fontFamily: 'var(--font-urbanist), sans-serif', 
                fontWeight: 700, 
                fontSize: '16px', 
                lineHeight: '120%', 
                letterSpacing: '0%', 
                color: '#0B3B36' 
              }}>
                Andrew Forbist
              </span>
              <Avatar className="w-10 h-10 border border-white shadow-sm">
                <AvatarImage src="https://i.pravatar.cc/100?img=12" />
              </Avatar>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}