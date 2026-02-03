import { Card, CardContent } from "@/components/ui/card"
import {
  TrendingUp,
  TrendingDown,
  Wallet,
  ArrowLeftRight,
  MoreVertical,
} from "lucide-react"

const stats = [
  {
    title: "Total Income",
    value: "£78,000",
    change: "+ 1.78 %",
    positive: true,
    icon: ArrowLeftRight,
  },
  {
    title: "Total Expense",
    value: "£43,000",
    change: "- 1.78 %",
    positive: false,
    icon: ArrowLeftRight,
  },
  {
    title: "Total Savings",
    value: "£56,000",
    change: "+ 1.24 %",
    positive: true,
    icon: Wallet,
  },
]

export default function Stats() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((s) => {
        const Icon = s.icon

        return (
          <Card
            key={s.title}
            className="rounded-2xl border-0 bg-white shadow-sm hover:shadow-md transition"
          >
            <CardContent className="p-4 sm:p-6 space-y-5">
              {/* TOP ROW */}
              <div className="flex items-center justify-between">
                {/* ICON */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-[#E5E9EA] flex items-center justify-center">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-alfa-dark" />
                </div>

                {/* MENU */}
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreVertical size={18} />
                </button>
              </div>

              {/* CHANGE BADGE */}
              <div
                className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                  s.positive
                    ? "bg-[#DBF5E6] text-[#1F9254]"
                    : "bg-[#FFE4E6] text-[#D11A2A]"
                }`}
                style={{ fontFamily: "var(--font-urbanist), sans-serif" }}
              >
                {s.positive ? (
                  <TrendingUp size={12} />
                ) : (
                  <TrendingDown size={12} />
                )}
                <span>{s.change}</span>
              </div>

              {/* VALUE */}
              <div className="space-y-1">
                <h3
                  className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#0B3B36]"
                  style={{ fontFamily: "var(--font-urbanist), sans-serif" }}
                >
                  {s.value}
                </h3>

                <p
                  className="text-sm sm:text-base text-[#0B3B36]"
                  style={{ fontFamily: "var(--font-urbanist), sans-serif" }}
                >
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
