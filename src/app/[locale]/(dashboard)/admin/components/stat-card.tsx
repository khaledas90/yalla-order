import type { ReactNode } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: string
  icon: ReactNode
  iconColor: string
  change: {
    value: string
    positive: boolean
  }
  className?: string
}

export function StatCard({ title, value, icon, iconColor, change, className }: StatCardProps) {
  return (
    <Card className={cn("overflow-hidden rounded-3xl shadow-sm", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-500">{title}</p>
            <h3 className="mt-1 text-2xl font-bold">{value}</h3>
            <p className={cn("mt-1 text-xs", change.positive ? "text-green-500" : "text-red-500")}>{change.value}</p>
          </div>
          <div className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", iconColor)}>{icon}</div>
        </div>
        <div className="mt-4 flex w-full justify-between">
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-1 rounded-full bg-gray-200"
              style={{
                height: `${Math.random() * 24 + 8}px`,
              }}
            />
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
