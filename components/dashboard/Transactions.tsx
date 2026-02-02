import {
    Table,TableBody,TableCell,TableHead,TableHeader,TableRow
    } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
    
const transactions = [
  {
    name: "Electricity Bill",
    category: "Payments",
    date: "01 Mar 2024",
    time: "10:30 AM",
    amount: "£295.81",
    note: "Monthly utility payment",
    status: "Failed"
  },
  {
    name: "Weekly Groceries",
    category: "Shopping",
    date: "28 Feb 2024",
    time: "02:15 PM",
    amount: "£204.07",
    note: "Supermarket purchase",
    status: "Completed"
  },
  {
    name: "Movie Night",
    category: "Entertainment",
    date: "25 Feb 2024",
    time: "08:00 PM",
    amount: "£97.84",
    note: "Cinema tickets",
    status: "Pending"
  },
  {
    name: "Medical Check-up",
    category: "Healthcare",
    date: "22 Feb 2024",
    time: "11:00 AM",
    amount: "£323.33",
    note: "Doctor appointment",
    status: "Pending"
  },
  {
    name: "Dinner at Italian Restaurant",
    category: "Dining Out",
    date: "20 Feb 2024",
    time: "07:30 PM",
    amount: "£226.25",
    note: "Restaurant bill",
    status: "Pending"
  }
]

export default function Transactions(){
  const getStatusColor = (status: string) => {
    switch(status) {
      case "Completed":
        return "bg-green-100 text-green-700 border-green-200"
      case "Pending":
        return "bg-orange-100 text-orange-700 border-orange-200"
      case "Failed":
        return "bg-red-100 text-red-700 border-red-200"
      default:
        return "bg-gray-100 text-gray-700 border-gray-200"
    }
  }

  return(
    <div className="bg-white p-6 rounded-2xl">
      <h3 className="font-semibold text-gray-800 mb-6">
        Recent Transactions
      </h3>
  
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-alfa-border">
              <TableHead className="text-gray-600 font-semibold">Transaction Name</TableHead>
              <TableHead className="text-gray-600 font-semibold">Date & Time</TableHead>
              <TableHead className="text-gray-600 font-semibold">Amount</TableHead>
              <TableHead className="text-gray-600 font-semibold">Note</TableHead>
              <TableHead className="text-gray-600 font-semibold">Status</TableHead>
            </TableRow>
          </TableHeader>
  
          <TableBody>
            {transactions.map((tx, index) => (
              <TableRow key={index} className="border-alfa-border">
                <TableCell>
                  <div>
                    <p className="font-medium text-gray-800">{tx.name}</p>
                    <p className="text-sm text-gray-500">{tx.category}</p>
                  </div>
                </TableCell>
                <TableCell>
                  <div>
                    <p className="text-gray-800">{tx.date}</p>
                    <p className="text-sm text-gray-500">{tx.time}</p>
                  </div>
                </TableCell>
                <TableCell className="font-semibold text-gray-800">{tx.amount}</TableCell>
                <TableCell className="text-gray-600">{tx.note}</TableCell>
                <TableCell>
                  <Badge className={`${getStatusColor(tx.status)} border font-medium`}>
                    {tx.status}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}
    