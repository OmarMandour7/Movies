import React from 'react'

import { Search, Bell, ChevronRight, Play } from "lucide-react";
const NavBar = () => {
    const cx = (...a) => a.filter(Boolean).join(" ");
    const TOKENS = {
  bg: "#0b0f14",
  card: "#0f141a",
  muted: "#9aa4b2",
  text: "#e5e7eb",
  white: "#ffffff",
  primary: "#ef4444", // action red
  ring: "rgba(239,68,68,.35)",
};

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/5 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Left: Brand & Nav */}
        <div className="flex items-center gap-6">
          <a href="#" className="flex items-center gap-2">
            <div className="h-7 w-7 grid place-items-center rounded-md bg-gradient-to-br from-black to-black-100">
              <span className="sr-only">StreamVibe</span>
              <Play className="h-4 w-4 text-white" />
            </div>
            <span className="font-semibold text-white">StreamVibe</span>
          </a>

          <nav className="hidden md:flex items-center gap-1 text-sm text-gray-300">
            {[
              { label: "Home", active: true },
              { label: "Movies & Shows" },
              { label: "Support" },
              { label: "Subscriptions" },
            ].map((item) => (
              <a
                key={item.label}
                href="#"
                className={cx(
                  "rounded-lg px-3 py-2 transition",
                  item.active ? "text-white bg-white/5" : "hover:bg-white/5"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-1">
          <button className="h-9 w-9 grid place-items-center rounded-lg text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]" style={{"--ring": TOKENS.ring}}>
            <Search className="h-5 w-5" />
          </button>
          <button className="h-9 w-9 grid place-items-center rounded-lg text-gray-300 hover:text-white hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]" style={{"--ring": TOKENS.ring}}>
            <Bell className="h-5 w-5" />
          </button>
          <img
            src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=80&q=60"
            alt="Avatar"
            className="ml-2 h-9 w-9 rounded-lg object-cover"
          />
        </div>
      </div>
    </header>
  )
}

export default NavBar