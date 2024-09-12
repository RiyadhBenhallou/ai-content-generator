"use client";
import { Bot, Home, History, CreditCard, Settings } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export default function SideNav() {
  const pathname = usePathname();
  return (
    <div className="min-h-screen p-4 border-r-1 border-gray-300">
      <div className="flex justify-center mb-8">
        <Bot className="text-blue-600" size={50} />
      </div>
      <nav className="flex flex-col gap-4">
        <Button
          asChild
          variant="ghost"
          className={`w-full justify-start ${
            pathname === "/dashboard"
              ? "bg-blue-600 text-white hover:bg-blue-600 hover:text-white"
              : "hover:bg-blue-600 hover:text-white"
          }`}
        >
          <Link href="/dashboard" className="flex items-center space-x-2">
            <Home size={24} />
            <span>Home</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className={`w-full justify-start ${
            pathname === "/dashboard/history"
              ? "bg-blue-600 text-white hover:bg-blue-600 hover:text-white"
              : "hover:bg-blue-600 hover:text-white"
          }`}
        >
          <Link
            href="/dashboard/history"
            className="flex items-center space-x-2"
          >
            <History size={24} />
            <span>History</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className={`w-full justify-start ${
            pathname === "/dashboard/billing"
              ? "bg-blue-600 text-white hover:bg-blue-600 hover:text-white"
              : "hover:bg-blue-600 hover:text-white"
          }`}
        >
          <Link
            href="/dashboard/billing"
            className="flex items-center space-x-2"
          >
            <CreditCard size={24} />
            <span>Billing</span>
          </Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          className={`w-full justify-start ${
            pathname === "/dashboard/settings"
              ? "bg-blue-600 text-white hover:bg-blue-600 hover:text-white"
              : "hover:bg-blue-600 hover:text-white"
          }`}
        >
          <Link
            href="/dashboard/settings"
            className="flex items-center space-x-2"
          >
            <Settings size={24} />
            <span>Settings</span>
          </Link>
        </Button>
      </nav>
    </div>
  );
}
