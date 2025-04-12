import type React from "react";
import { Sidebar } from "./components/sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 w-full">{children}</div>
    </div>
  );
}
