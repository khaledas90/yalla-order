"use client"

import { Bell, Menu } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useSidebar } from "@/hooks/use-sidebar"
import { useMediaQuery } from "@/hooks/use-media-query"

export function Header() {
  const { toggleSidebar } = useSidebar()
  const isMobile = useMediaQuery("(max-width: 768px)")

  return (
    <div className="flex h-14 items-center justify-between border-b px-4 md:px-6 w-full bg-white shadow-sm">
      <div className="flex items-center gap-4">
        {isMobile ? (
          <Button variant="ghost" size="icon" onClick={toggleSidebar}>
            <Menu className="h-5 w-5 hidden" />
          </Button>
        ) : null}
        <div className="w-full max-w-md">
          <Input type="search" placeholder="Search..." className="h-9 bg-gray-100 rounded-xl" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button title="button" className="rounded-full p-2 hover:bg-gray-100">
          <Bell className="h-5 w-5 text-gray-500" />
        </button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="John Doe" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      </div>
    </div>
  )
}
