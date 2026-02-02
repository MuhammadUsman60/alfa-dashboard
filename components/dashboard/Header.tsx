import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { Search, Bell, MessageCircle } from "lucide-react"

export default function Header() {
  return (
    <div className="flex items-center justify-between mb-8">
      
      {/* LEFT */}
      <h1 className="text-[26px] font-semibold text-[#0B2B2A] tracking-tight">
        Dashboard
      </h1>

      {/* RIGHT */}
      <div className="flex items-center gap-4">

        {/* SEARCH */}
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <Input
            placeholder="Search placeholder"
            className="
              w-[320px]
              h-[46px]
              pl-11
              rounded-full
              border-0
              bg-[#F1F5F4]
              focus-visible:ring-1
              focus-visible:ring-[#DDE6E4]
              shadow-none
            "
          />
        </div>

        {/* ICON BUTTONS */}
        <div className="flex items-center gap-3">

          <button
            className="
              w-11 h-11
              rounded-full
              bg-[#F1F5F4]
              flex items-center justify-center
              hover:bg-[#E7EFED]
              transition
            "
          >
            <MessageCircle size={18} className="text-[#0B2B2A]" />
          </button>

          <button
            className="
              relative
              w-11 h-11
              rounded-full
              bg-[#F1F5F4]
              flex items-center justify-center
              hover:bg-[#E7EFED]
              transition
            "
          >
            <Bell size={18} className="text-[#0B2B2A]" />

            {/* notification dot */}
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"/>
          </button>
        </div>

        {/* USER */}
        <div className="flex items-center gap-3 ml-2">
          <span className="text-[15px] font-semibold text-[#0B2B2A]">
            Andrew Forbist
          </span>

          <Avatar className="w-11 h-11 border border-white shadow-sm">
            <AvatarImage src="https://i.pravatar.cc/100?img=12" />
          </Avatar>
        </div>

      </div>
    </div>
  )
}
