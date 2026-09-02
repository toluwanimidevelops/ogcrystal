"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  BookOpen,
  SquarePlus,
  Users,
  Mail,
  MessageSquare,
  LogOut,
} from "lucide-react";

const data = [
  { name: "Dashboard", link: "/dashboard", icon: LayoutDashboard },
  { name: "Drafts", link: "/dashboard/drafts", icon: FileText },
  { name: "Blogs", link: "/dashboard/blogs", icon: BookOpen },
  { name: "Create Blogs", link: "/dashboard/createblog", icon: SquarePlus },
  { name: "Mailing List", link: "/dashboard/mailinglist", icon: Users },
  { name: "Send Mails", link: "/dashboard/sendmail", icon: Mail },
  { name: "Comments", link: "/dashboard/comments", icon: MessageSquare },
];

const Sidebar = () => {
  const pathname = usePathname();

  const handleLogout = () => {
    // Add logout logic here
  };

  return (
    <aside className="bg-linear-to-br  from-[#071a3d]/92 to-[#071a3d] w-62 h-screen flex flex-col justify-between  py-6 overflow-y-auto">
      <div>
        {/* Logo Section */}
        <div className="flex flex-col items-center justify-center mb-8">
          <img
            src="/logo/ogcrystalwhite.png"
            alt="Logo"
            className="w-15 mt-4"
          />
          <h1 className="text-center text-white mt-4 capitalize font-medium text-xl">
            OG Crystals
          </h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-1.5 ">
          {data.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.link;

            return (
              <Link
                key={item.link}
                href={item.link}
                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium transition-all  ${
                  isActive
                    ? "bg-linear-to-l from-[#f6f6fa] to-[#f5f5f9] text-[#071a3d] border-l-4 border-[#B8944D] "
                    : "text-gray-300 hover:text-white hover:bg-white/5"
                }`}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? "text-[#B8944D]" : "text-gray-400"
                  }`}
                />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Logout Button */}
      <div className="px-4 mt-auto pt-6">
        <button
          onClick={handleLogout}
          className="flex items-center w-full gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:text-red-300 hover:bg-red-500/10 rounded-xl transition-all cursor-pointer"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;