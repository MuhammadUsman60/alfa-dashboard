import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, TrendingDown, Wallet, Banknote, PiggyBank } from "lucide-react"

const stats = [
  {
    title: "Total Income",
    value: "£78,000",
    change: "+17.8%",
    positive: true,
    icon: Banknote,
  },
  {
    title: "Total Expense",
    value: "£43,000",
    change: "-17.8%",
    positive: false,
    icon: Wallet,
  },
  {
    title: "Total Savings",
    value: "£56,000",
    change: "+12.4%",
    positive: true,
    icon: PiggyBank,
  },
]

export default function Stats() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {stats.map((s) => {
        const Icon = s.icon

        return (
          <Card
            key={s.title}
            className="
              rounded-2xl
              border-[#E6ECEA]
              bg-[#F8FBFA]
              shadow-sm
              hover:shadow-md
              transition
            "
          >
            <CardContent className="p-5 space-y-5">

              {/* TOP ROW */}
              <div className="flex items-center justify-between">

                {/* ICON */}
                <div className="w-11 h-11 rounded-xl bg-[#EAF4F2] flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#0F3D3A]" />
                </div>

                {/* CHANGE BADGE */}
                <div
                  className={`
                    flex items-center gap-1
                    px-2 py-[2px]
                    rounded-md
                    text-xs
                    font-semibold
                    ${
                      s.positive
                        ? "bg-[#DBF5E6] text-[#1F9254]"
                        : "bg-[#FFE4E6] text-[#D11A2A]"
                    }
                  `}
                >
                  {s.positive ? (
                    <TrendingUp size={12} />
                  ) : (
                    <TrendingDown size={12} />
                  )}

                  {s.change}
                </div>
              </div>

              {/* VALUE */}
              <div className="space-y-1">
                <h3 className="text-[28px] font-bold text-[#0B2B2A] tracking-tight">
                  {s.value}
                </h3>

                <p className="text-sm text-gray-500">
                  {s.title}
                </p>
              </div>

            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
