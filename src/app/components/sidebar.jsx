"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { label: "Essential Documents", icon: "essentials-icon.png", href: "/essentialDocuments" },
  { label: "Settling in", icon: "settling-icon.png", href: "/settling" },
  { label: "Campus Orientation", icon: "orientation-icon.png", href: "/campus-study" },
  { label: "Campus Life", icon: "community-icon.png", href: "/social" },
  { label: "Work Opportunities", icon: "work-icon.png", href: "/work" },
  { label: "Lifestyle", icon: "lifestyle-icon.png", href: "/lifestyle" },
  { label: "Join ISAUW", icon: "isauw-logo-icon.png", href: "/join-isauw" },
  { label: "Checklist", icon: "checklist-icon.png", href: "/checklistSummary" },
];

export default function NewSidebar({ open, setOpen }) {
  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50
        relative overflow-hidden
        h-screen border-r border-red-100
        bg-[#FFF6EE]
        transition-[width] duration-300
        ${open ? "w-[280px]" : "w-[70px]"}
      `}
      style={{
        backgroundImage: `url(${open ? "/sidebar-open.png" : "/sidebar-closed.png"})`,
        backgroundSize: "cover",
        backgroundPosition: "left top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="relative z-10 flex h-full flex-col">
        {/* toggle button row */}
        {/* <div className="flex items-center justify-start pt-6 pb-4 pl-6">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="rounded-md p-2 hover:bg-red-50/60 transition"
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? (
              <XMarkIcon className="h-6 w-6 text-[#A0241A]" />
            ) : (
              <Bars3Icon className="h-6 w-6 text-[#A0241A]" />
            )}
          </button>
        </div> */}

        {/* navigation items */}
        <nav className="flex-1 overflow-y-auto px-6 mt-20">
          <ul className="space-y-6">
            {navigation.map((item, index) => (
              <li key={item.label}>
                {/* separators between items when open */}
                {index !== 0 && open && (
                  <div className="h-px w-full bg-[#B04030] opacity-60 mb-5" />
                )}

                <a
                  href={item.href}
                  className={`
                    group flex items-center rounded-md py-2
                    text-[#7A1410] hover:text-[#9b1f19] hover:bg-red-50/40
                    transition-all duration-200
                    ${open ? "gap-3 pl-4 pr-2" : "justify-center px-0"}
                  `}
                >
                  <img
                    src={`/icons/${item.icon}`}
                    alt=""
                    className="h-6 w-6 shrink-0"
                  />
                  {open && (
                    <span className="text-[16px] font-semibold whitespace-nowrap">
                      {item.label}
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
