import Sidebar from "@/components/dashboard/Sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {children}
      </div>
    </div>
  )
}
