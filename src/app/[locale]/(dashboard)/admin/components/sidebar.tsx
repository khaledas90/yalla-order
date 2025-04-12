"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import {
  BarChart3,
  Package,
  FolderClosed,
  Users,
  PanelRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import React from "react";

// Create a context to share sidebar state
interface SidebarContextType {
  isCollapsed: boolean;
  toggleSidebar: () => void;
}

export const SidebarContext = React.createContext<SidebarContextType>({
  isCollapsed: false,
  toggleSidebar: () => {},
});

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    // Close mobile sidebar when navigating
    setIsMobileOpen(false);
  }, [pathname]);

  const routes = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: BarChart3,
    },
    {
      name: "Products",
      path: "/admin/products",
      icon: Package,
    },
    {
      name: "Categories",
      path: "/admin/categories",
      icon: FolderClosed,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: Users,
    },
  ];

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Provide sidebar state to consumers
  const sidebarContextValue = {
    isCollapsed,
    toggleSidebar,
  };

  // Wrap the return with the context provider
  return (
    <SidebarContext.Provider value={sidebarContextValue}>
      <>
        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="fixed left-4 top-2 z-50 md:hidden"
          onClick={toggleMobileSidebar}
        >
          <PanelRight className="h-5 w-5" />
        </Button>

        {/* Mobile overlay */}
        {isMobile && isMobileOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/50"
            onClick={() => setIsMobileOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div
          className={cn(
            "flex flex-col bg-gray-50 transition-all duration-300 ease-in-out h-screen sticky top-0 shadow-md",
            isCollapsed ? "w-[70px]" : "w-[220px]",
            isMobile &&
              (isMobileOpen ? "fixed inset-y-0 left-0 z-50" : "hidden"),
            "md:block",
            className
          )}
        >
          <div className="flex h-14 items-center gap-2 border-b">
            <div
              className={cn(
                "flex items-center gap-2 ps-3 font-semibold text-purple-700 transition-all",
                isCollapsed && "justify-center"
              )}
            >
              <BarChart3 className="h-6 w-6" />
              {!isCollapsed && <span>Analytics</span>}
            </div>
            {!isMobile && (
              <Button
                variant="ghost"
                size="icon"
                className="ml-auto"
                onClick={toggleSidebar}
              >
                <PanelRight className="h-5 w-5" />
              </Button>
            )}
          </div>
          <div className="flex-1 overflow-y-auto py-4">
            <div className="px-2 py-2">
              <div className="space-y-1">
                {routes.map((route) => (
                  <Link
                    key={route.path}
                    href={route.path}
                    className={cn(
                      "flex items-center gap-3 rounded-3xl px-3 py-2 text-sm font-medium transition-all hover:text-purple-700",
                      pathname === route.path
                        ? "bg-purple-100 text-purple-700"
                        : "text-gray-500 hover:bg-gray-100",
                      isCollapsed && "justify-center px-0"
                    )}
                  >
                    <route.icon className="h-5 w-5" />
                    {!isCollapsed && <span>{route.name}</span>}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="border-t p-4">
            <div
              className={cn(
                "flex items-center gap-3",
                isCollapsed && "flex-col"
              )}
            >
              <Avatar className="h-8 w-8">
                <AvatarImage
                  src="/placeholder.svg?height=32&width=32"
                  alt="John Doe"
                />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              {!isCollapsed && (
                <div className="flex flex-col text-xs">
                  <span className="font-medium">John Doe</span>
                  <span className="text-gray-500">admin@example.com</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    </SidebarContext.Provider>
  );
}
