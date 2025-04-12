"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { Users, Package, FolderClosed, DollarSign } from "lucide-react"
import { Header } from "./components/header"
import { StatCard } from "./components/stat-card"
import { AreaChart } from "./components/charts/area-chart"
import { BarChart } from "./components/charts/bar-chart"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useSidebar } from "@/hooks/use-sidebar"

// Sample data for charts
const revenueData = [
  { name: "Jan", value: 4000 },
  { name: "Feb", value: 3000 },
  { name: "Mar", value: 5000 },
  { name: "Apr", value: 4000 },
  { name: "May", value: 2000 },
  { name: "Jun", value: 1500 },
  { name: "Jul", value: 3500 },
]

const trafficData = [
  { name: "Jan", visits: 4000, orders: 2400 },
  { name: "Feb", visits: 3000, orders: 1500 },
  { name: "Mar", visits: 5000, orders: 3000 },
  { name: "Apr", visits: 2800, orders: 4000 },
  { name: "May", visits: 1800, orders: 5000 },
  { name: "Jun", visits: 2500, orders: 4000 },
  { name: "Jul", visits: 3500, orders: 4500 },
]

// Sample data for recent orders
const recentOrders = [
  {
    customer: { name: "Tony Reichert", avatar: "/placeholder.svg?height=32&width=32" },
    product: "Nike Air Max",
    amount: "$299.99",
    status: "completed",
  },
  {
    customer: { name: "Zoey Lang", avatar: "/placeholder.svg?height=32&width=32" },
    product: "iPhone 15 Pro",
    amount: "$999.99",
    status: "pending",
  },
  {
    customer: { name: "Jane Fisher", avatar: "/placeholder.svg?height=32&width=32" },
    product: "MacBook Pro",
    amount: "$1999.99",
    status: "processing",
  },
  {
    customer: { name: "William Howard", avatar: "/placeholder.svg?height=32&width=32" },
    product: "AirPods Pro",
    amount: "$249.99",
    status: "completed",
  },
]

export default function Home() {
  const { isCollapsed } = useSidebar()
  const [, setContentWidth] = useState("100%")

  useEffect(() => {
    // Update content width based on sidebar state
    setContentWidth("100%")
  }, [isCollapsed])

  return (
    <div className="flex flex-col h-screen w-full">
      <Header />
      <main className="flex-1 p-4 md:p-6 overflow-y-auto w-full">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Users"
            value="12,345"
            icon={<Users className="h-6 w-6 text-white" />}
            iconColor="bg-purple-500"
            change={{ value: "+10.2% from last month", positive: true }}
          />
          <StatCard
            title="Total Products"
            value="1,234"
            icon={<Package className="h-6 w-6 text-white" />}
            iconColor="bg-green-500"
            change={{ value: "+5.2% from last month", positive: true }}
          />
          <StatCard
            title="Total Categories"
            value="156"
            icon={<FolderClosed className="h-6 w-6 text-white" />}
            iconColor="bg-yellow-500"
            change={{ value: "+2.3% from last month", positive: true }}
          />
          <StatCard
            title="Total Sales"
            value="$89,123"
            icon={<DollarSign className="h-6 w-6 text-white" />}
            iconColor="bg-purple-500"
            change={{ value: "-0.5% from last month", positive: false }}
          />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <AreaChart
            title="Revenue Overview"
            subtitle="Monthly revenue statistics"
            data={revenueData}
            dataKey="value"
            gradientColor="#8b5cf6"
          />
          <BarChart title="Traffic Analytics" subtitle="Monthly visits and orders" data={trafficData} />
        </div>

        <div className="mt-6">
          <h2 className="mb-4 text-xl font-bold">Recent Orders</h2>
          <div className="rounded-3xl border bg-white shadow-sm">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>CUSTOMER</TableHead>
                  <TableHead>PRODUCT</TableHead>
                  <TableHead>AMOUNT</TableHead>
                  <TableHead>STATUS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentOrders.map((order, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={order.customer.avatar || "/placeholder.svg"} alt={order.customer.name} />
                          <AvatarFallback>
                            {order.customer.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {order.customer.name}
                      </div>
                    </TableCell>
                    <TableCell>{order.product}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={cn(
                          "rounded-xl",
                          order.status === "completed"
                            ? "border-green-500 bg-green-50 text-green-700"
                            : order.status === "pending"
                              ? "border-yellow-500 bg-yellow-50 text-yellow-700"
                              : "border-purple-500 bg-purple-50 text-purple-700",
                        )}
                      >
                        {order.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </main>
    </div>
  )
}
