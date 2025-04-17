"use client";
import { useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import {
  CalendarIcon,
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import { Festive } from "next/font/google";

const navigation = [
  {
    name: "Essentials Document and Preparation",
    icon: UsersIcon,
    current: false,
    children: [
      { name: "Visa & Documentation", href: "#" },
      { name: "Housing Arrangement", href: "#" },
      { name: "Health and Insurance", href: "#" },
      { name: "Packing Guide", href: "#" },
    ],
  },
  {
    name: "Settling in",
    icon: UsersIcon,
    current: false,
    children: [
      { name: "Phone & Connectivity", href: "#" },
      { name: "Banking & Finances", href: "#" },
      { name: "Transportation Options", href: "#" },
      { name: "Everyday Essentials", href: "#" },
    ],
  },
  {
    name: "Campus Orientation and Study Essentials",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "Orientation & Onboarding", href: "#" },
      { name: "Campus Access", href: "#" },
      { name: "University Tools & Academic Success", href: "#" },
      { name: "Transfer Credits", href: "#" },
      { name: "Best Study Spots", href: "#" },
      { name: "Course Materials & Textbook", href: "#" },
    ],
  },
  {
    name: "Social and Academic Integration",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "Student Organization & Clubs", href: "#" },
      { name: "Religious and Spiritual Resources", href: "#" },
      { name: "Events & Entertainment", href: "#" },
    ],
  },
  {
    name: "Job and Internship Opportunities",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "On-campus Job", href: "#" },
      { name: "Curricular Practical Training (CPT)", href: "#" },
      { name: "Optional Practical Training (OPT)", href: "#" },
    ],
  },
  {
    name: "Lifestyle & Adjustments",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "Cultural Adjustment", href: "#" },
      { name: "Shopping Options", href: "#" },
      { name: "Restaurant Options", href: "#" },
      { name: "Weather Gear", href: "#" },
    ],
  },
  {
    name: "Sign Up for ISAUW",
    icon: FolderIcon,
    current: false,
    href: "#",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar({ open, setOpen }) {
  const [openSection, setOpenSection] = useState(null);
  return (
    <div
      className={`transition-all duration-300 ease-in-out overflow-hidden
        ${open ? "w-md" : "w-0"} 
        bg-white border-r border-gray-200`}
    >
      <div className="flex grow h-full flex-col gap-y-5 overflow-y-auto px-6">
        <nav className="flex flex-1 flex-col mt-25">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    {!item.children ? (
                      <a
                        href={item.href}
                        className={classNames(
                          item.current ? "bg-gray-50" : "hover:bg-gray-50",
                          "group flex gap-x-3 rounded-md p-2 text-base/6 font-semibold text-gray-700"
                        )}
                      >
                        <item.icon
                          className="size-6 shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ) : (
                      <div>
                        <button
                          onClick={() =>
                            setOpenSection(
                              openSection === item.name ? null : item.name
                            )
                          }
                          className={classNames(
                            item.current ? "bg-gray-50" : "hover:bg-gray-50",
                            "group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-base/6 font-semibold text-gray-700"
                          )}
                        >
                          <item.icon
                            className="size-6 shrink-0 text-gray-400"
                            aria-hidden="true"
                          />
                          {item.name}
                          <ChevronRightIcon
                            className={classNames(
                              "ml-auto size-5 shrink-0 text-gray-400",
                              openSection === item.name &&
                                "rotate-90 text-gray-500"
                            )}
                            aria-hidden="true"
                          />
                        </button>

                        {openSection === item.name && (
                          <ul className="mt-1 px-2">
                            {item.children.map((subItem) => (
                              <li key={subItem.name}>
                                <a
                                  href={subItem.href}
                                  className={classNames(
                                    subItem.current
                                      ? "bg-gray-50"
                                      : "hover:bg-gray-50",
                                    "block rounded-md py-2 pl-9 pr-2 text-base/6 text-gray-700"
                                  )}
                                >
                                  {subItem.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
