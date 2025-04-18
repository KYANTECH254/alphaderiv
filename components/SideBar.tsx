"use client";

import { ReactNode, useState } from "react";
import {
  Menu,
  X,
  Home,
  HelpCircle,
  Plane,
} from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

const navItems = [
  { name: "Over Under Bot", href: "/bot", icon: <Home size={18} /> },
  { name: "Aviator", href: "/aviator", icon: <Plane size={18} /> },
  { name: "Help", href: "/help", icon: <HelpCircle size={18} /> },
];

interface SidebarProps {
  token: string;
  children: ReactNode;
}

export default function Sidebar({ token, children }: SidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);
  return (
    <div className="flex">
      <aside
        className={clsx(
          "bg-[#202123] text-white h-screen transition-all duration-300 flex-col z-20 fixed sm:relative top-0 left-0",
          "sm:flex",                  
          isOpen ? "flex" : "hidden", 
          isOpen ? "w-[260px]" : "w-[60px]"
        )}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-white/10">
          {isOpen && <span className="text-xl uppercase font-bold">AlphaBot</span>}
          <button onClick={toggleSidebar}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-2 py-4 space-y-1">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={`${item.href}?token=${token}`}
              className="flex items-center gap-3 text-sm px-3 py-2 rounded-md hover:bg-[#2A2B32] transition-colors"
            >
              {item.icon}
              {isOpen && <span className="truncate">{item.name}</span>}
            </Link>
          ))}
        </nav>
      </aside>

      <button
        onClick={toggleSidebar}
        className={clsx(
          "sm:hidden fixed top-4 left-4 z-30 p-2 bg-[#202123] text-white rounded-md",
          isOpen && "hidden" 
        )}
      >
        <Menu size={20} />
      </button>

      <main
        className={clsx(
          "flex-1 p-4 overflow-y-auto h-screen",
          isOpen && "ml-[260px] sm:ml-[260px]",
          !isOpen && "ml-[0px] sm:ml-[60px]"
        )}
      >
        {children}
      </main>
    </div>
  );
}
