import { Card } from "@/components/ui/card"

export default function CreditCard() {
  return (
    <Card
      className="
        relative
        h-[330px]
        rounded-[28px]
        border-0
        shadow-lg
        overflow-hidden
        bg-[#0B3B36]
        flex flex-col
        
        p-7
      "
    >
      {/* TOP ROW */}
      <div className="flex justify-between items-start">
        
        {/* GOLD EMV CHIP */}
        <div className="relative w-[52px] h-[38px]">
          <div className="absolute inset-0 rounded-md bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-inner" />
          <div className="absolute inset-2 rounded-sm bg-gradient-to-br from-yellow-300 to-yellow-500 opacity-60" />
          <div className="absolute top-1 left-1 w-3 h-3 rounded-sm bg-yellow-700/30" />
          <div className="absolute bottom-1 right-1 w-2 h-2 rounded-sm bg-yellow-700/30" />
        </div>

        {/* CONTACTLESS PAYMENT SYMBOL */}
        <div className="flex items-center gap-1">
          <div className="w-1 h-6 bg-white rounded-full" />
          <div className="w-1 h-5 bg-white rounded-full" />
          <div className="w-1 h-4 bg-white rounded-full" />
        </div>
      </div>

      {/* CENTER LOGO */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[#A7E3A1] text-7xl font-bold tracking-tight leading-none">
          A
        </h1>

        <p className="text-[#A7E3A1] text-3xl font-semibold tracking-tight">
          alfa
        </p>
      </div>

      {/* BOTTOM LIGHTER BAND */}
      <div
        className="
          absolute
          top-60
          left-0
          w-full
          h-[90px]
          bg-[#7FB3B0]
          rounded-t-[26px]
          flex
          items-center
          justify-between
          px-6
        "
      >
        {/* LEFT - Alfa and Expiry */}
        <div>
          <p className="text-[#0B3B36] font-bold text-lg">
            Alfa
          </p>

          <p className="text-[#0B3B36] text-sm font-medium mt-0.5">
            EXP 09/24
          </p>
        </div>

        {/* RIGHT - Mastercard Logo */}
        <div className="relative flex items-center">
          <div className="flex items-center gap-0">
            <div className="w-10 h-10 bg-[#EB001B] rounded-full -mr-3 z-10" />
            <div className="w-10 h-10 bg-[#F79E1B] rounded-full" />
          </div>
          <span className="ml-3 text-white text-xs font-semibold tracking-tight">
            Mastercard
          </span>
        </div>
      </div>
    </Card>
  )
}
