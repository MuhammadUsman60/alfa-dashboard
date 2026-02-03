// import {
//     Table,TableBody,TableCell,TableHead,TableHeader,TableRow
//     } from "@/components/ui/table"
// import { Badge } from "@/components/ui/badge"
// import { ChevronDown, Filter, ArrowUpDown } from "lucide-react"
    
// const transactions = [
//   {
//     name: "Electricity Bill",
//     category: "Payments",
//     date: "2028-03-01",
//     time: "04:28:48",
//     amount: "£295.81",
//     note: "Payment for monthly electricity bill",
//     status: "Failed"
//   },
//   {
//     name: "Weekly Groceries",
//     category: "Shopping",
//     date: "2028-03-04",
//     time: "04:28:48",
//     amount: "£204.07",
//     note: "Groceries shopping at local supermarket",
//     status: "Completed"
//   },
//   {
//     name: "Movie Night",
//     category: "Entertainment",
//     date: "2028-02-27",
//     time: "04:28:48",
//     amount: "£97.84",
//     note: "Tickets for movies and snacks",
//     status: "Pending"
//   },
//   {
//     name: "Medical Check-up",
//     category: "Healthcare",
//     date: "2028-02-07",
//     time: "04:28:48",
//     amount: "£323.33",
//     note: "Routine health check-up and medications",
//     status: "Pending"
//   },
//   {
//     name: "Dinner at Italian Restaurant",
//     category: "Dining Out",
//     date: "2028-02-11",
//     time: "04:28:48",
//     amount: "£226.25",
//     note: "Dining out with family at a local Italian restaurant",
//     status: "Pending"
//   }
// ]

// export default function Transactions(){
//   const getStatusColor = (status: string) => {
//     switch(status) {
//       case "Completed":
//         return "bg-green-50 text-green-700"
//       case "Pending":
//         return "bg-yellow-50 text-yellow-700"
//       case "Failed":
//         return "bg-red-50 text-red-700"
//       default:
//         return "bg-gray-50 text-gray-700"
//     }
//   }

//   return(
//     <div className="bg-white p-6 rounded-2xl">
//       <div className="flex justify-between items-center mb-6">
//         <h3 style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 700, fontSize: '22px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36' }}>
//           Recent Transactions
//         </h3>
        
//         <div className="flex items-center gap-3">
//           <button className="flex items-center gap-2 px-4 py-2 bg-[#F1F5F4] rounded-lg hover:bg-[#E5E9EA] transition">
//             <span style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36' }}>
//               This Month
//             </span>
//             <ChevronDown size={16} className="text-[#0B3B36]" />
//           </button>
          
//           <button className="w-10 h-10 bg-[#F1F5F4] rounded-lg flex items-center justify-center hover:bg-[#E5E9EA] transition">
//             <Filter size={18} className="text-[#0B3B36]" />
//           </button>
//         </div>
//       </div>
  
//       <div className="overflow-x-auto">
//         <Table>
//           <TableHeader>
//             <TableRow className="bg-[#F1F5F4] border-0">
//               <TableHead className="text-[#0B3B36] font-medium py-3">
//                 <div className="flex items-center gap-2">
//                   <span style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '120%', letterSpacing: '0%' }}>
//                     Transaction Name
//                   </span>
//                   <ArrowUpDown size={14} className="text-[#0B3B36]" />
//                 </div>
//               </TableHead>
//               <TableHead className="text-[#0B3B36] font-medium py-3">
//                 <div className="flex items-center gap-2">
//                   <span style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '120%', letterSpacing: '0%' }}>
//                     Date & Time
//                   </span>
//                   <ArrowUpDown size={14} className="text-[#0B3B36]" />
//                 </div>
//               </TableHead>
//               <TableHead className="text-[#0B3B36] font-medium py-3">
//                 <div className="flex items-center gap-2">
//                   <span style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '120%', letterSpacing: '0%' }}>
//                     Amount
//                   </span>
//                   <ArrowUpDown size={14} className="text-[#0B3B36]" />
//                 </div>
//               </TableHead>
//               <TableHead className="text-[#0B3B36] font-medium py-3">
//                 <div className="flex items-center gap-2">
//                   <span style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '120%', letterSpacing: '0%' }}>
//                     Note
//                   </span>
//                   <ArrowUpDown size={14} className="text-[#0B3B36]" />
//                 </div>
//               </TableHead>
//               <TableHead className="text-[#0B3B36] font-medium py-3">
//                 <div className="flex items-center gap-2">
//                   <span style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 500, fontSize: '14px', lineHeight: '120%', letterSpacing: '0%' }}>
//                     Status
//                   </span>
//                   <ArrowUpDown size={14} className="text-[#0B3B36]" />
//                 </div>
//               </TableHead>
//             </TableRow>
//           </TableHeader>
  
//           <TableBody>
//             {transactions.map((tx, index) => (
//               <TableRow key={index} className="border-b border-gray-200 hover:bg-gray-50">
//                 <TableCell className="py-4">
//                   <div>
//                     <p style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36', marginBottom: '4px' }}>
//                       {tx.name}
//                     </p>
//                     <p style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '120%', letterSpacing: '0%', color: '#6B7280' }}>
//                       {tx.category}
//                     </p>
//                   </div>
//                 </TableCell>
//                 <TableCell className="py-4">
//                   <div>
//                     <p style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36', marginBottom: '4px' }}>
//                       {tx.date}
//                     </p>
//                     <p style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '120%', letterSpacing: '0%', color: '#6B7280' }}>
//                       {tx.time}
//                     </p>
//                   </div>
//                 </TableCell>
//                 <TableCell className="py-4">
//                   <p style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 400, fontSize: '16px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36' }}>
//                     {tx.amount}
//                   </p>
//                 </TableCell>
//                 <TableCell className="py-4">
//                   <p style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '120%', letterSpacing: '0%', color: '#0B3B36' }}>
//                     {tx.note}
//                   </p>
//                 </TableCell>
//                 <TableCell className="py-4">
//                   <Badge className={`${getStatusColor(tx.status)} border-0 rounded-md px-3 py-1`} style={{ fontFamily: 'var(--font-urbanist), sans-serif', fontWeight: 400, fontSize: '14px', lineHeight: '120%', letterSpacing: '0%' }}>
//                     {tx.status}
//                   </Badge>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </div>
//     </div>
//   )
// }


import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, Filter, ArrowUpDown } from "lucide-react"

const transactions = [
  {
    name: "Electricity Bill",
    category: "Payments",
    date: "2028-03-01",
    time: "04:28:48",
    amount: "£295.81",
    note: "Payment for monthly electricity bill",
    status: "Failed"
  },
  {
    name: "Weekly Groceries",
    category: "Shopping",
    date: "2028-03-04",
    time: "04:28:48",
    amount: "£204.07",
    note: "Groceries shopping at local supermarket",
    status: "Completed"
  },
  {
    name: "Movie Night",
    category: "Entertainment",
    date: "2028-02-27",
    time: "04:28:48",
    amount: "£97.84",
    note: "Tickets for movies and snacks",
    status: "Pending"
  },
  {
    name: "Medical Check-up",
    category: "Healthcare",
    date: "2028-02-07",
    time: "04:28:48",
    amount: "£323.33",
    note: "Routine health check-up and medications",
    status: "Pending"
  },
  {
    name: "Dinner at Italian Restaurant",
    category: "Dining Out",
    date: "2028-02-11",
    time: "04:28:48",
    amount: "£226.25",
    note: "Dining out with family at a local Italian restaurant",
    status: "Pending"
  }
]

export default function Transactions(){
  const getStatusColor = (status: string) => {
    switch(status) {
      case "Completed":
        return "bg-green-50 text-green-700"
      case "Pending":
        return "bg-yellow-50 text-yellow-700"
      case "Failed":
        return "bg-red-50 text-red-700"
      default:
        return "bg-gray-50 text-gray-700"
    }
  }

  return (
    <div className="bg-white p-4 sm:p-6 rounded-2xl">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mb-6">
        <h3 className="text-[20px] sm:text-[22px] font-bold text-[#0B3B36]">
          Recent Transactions
        </h3>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#F1F5F4] rounded-lg">
            <span className="text-sm text-[#0B3B36]">This Month</span>
            <ChevronDown size={16} />
          </button>

          <button className="w-10 h-10 bg-[#F1F5F4] rounded-lg flex items-center justify-center">
            <Filter size={18} />
          </button>
        </div>
      </div>

      {/* ================= DESKTOP / TABLET TABLE ================= */}
      <div className="hidden sm:block overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-[#F1F5F4]">
              <TableHead>Transaction Name</TableHead>
              <TableHead>Date & Time</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead className="hidden lg:table-cell">Note</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {transactions.map((tx, i) => (
              <TableRow key={i} className="hover:bg-gray-50">
                <TableCell>
                  <p className="font-semibold">{tx.name}</p>
                  <p className="text-sm text-gray-500">{tx.category}</p>
                </TableCell>

                <TableCell>
                  <p>{tx.date}</p>
                  <p className="text-sm text-gray-500">{tx.time}</p>
                </TableCell>

                <TableCell className="font-medium">
                  {tx.amount}
                </TableCell>

                <TableCell className="hidden lg:table-cell">
                  {tx.note}
                </TableCell>

                <TableCell>
                  <Badge
                    className={`${getStatusColor(
                      tx.status
                    )} border-0 rounded-md`}
                  >
                    {tx.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* ================= MOBILE CARD VIEW ================= */}
      <div className="sm:hidden space-y-4">
        {transactions.map((tx, i) => (
          <div
            key={i}
            className="border rounded-xl p-4 space-y-3 bg-[#F9FAFB]"
          >
            <div>
              <p className="font-semibold text-[#0B3B36]">{tx.name}</p>
              <p className="text-sm text-gray-500">{tx.category}</p>
            </div>

            <div className="flex justify-between text-sm">
              <span>{tx.date}</span>
              <span className="text-gray-500">{tx.time}</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-medium">{tx.amount}</span>
              <Badge
                className={`${getStatusColor(
                  tx.status
                )} border-0 rounded-md`}
              >
                {tx.status}
              </Badge>
            </div>

            <p className="text-sm text-gray-600">{tx.note}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

    