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
  DocumentIcon,
  AcademicCapIcon,
  UserPlusIcon,
  BuildingOfficeIcon,
  TicketIcon,
  ChatBubbleLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import { Festive } from "next/font/google";

const navigation = [
  {
    name: "Essentials Document and Preparation",
    icon: DocumentIcon,
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
    icon: HomeIcon,
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
    icon: AcademicCapIcon,
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
    icon: UserPlusIcon,
    current: false,
    children: [
      { name: "Student Organization & Clubs", href: "#" },
      { name: "Religious and Spiritual Resources", href: "#" },
      { name: "Events & Entertainment", href: "#" },
    ],
  },
  {
    name: "Job and Internship Opportunities",
    icon: BuildingOfficeIcon,
    current: false,
    children: [
      { name: "On-campus Job", href: "#" },
      { name: "Curricular Practical Training (CPT)", href: "#" },
      { name: "Optional Practical Training (OPT)", href: "#" },
    ],
  },
  {
    name: "Lifestyle & Adjustments",
    icon: TicketIcon,
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
    icon: ChatBubbleLeftEllipsisIcon,
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
      className={classNames(
        "transition-all duration-300 overflow-hidden bg-white border-r border-gray-200",
        open
          ? "w-full md:w-sm lg:w-md" // open sidebar width
          : "w-0 md:w-16 lg:w-20" // hide on small, show collapsed on md+
      )}
    >
      <div className="flex flex-col w-full h-screen item-center overflow-y-auto py-4">
        <nav className="mt-7 w-full">
          <ul role="list" className="space-y-1 px-2 mt-10">
            {navigation.map((item) => (
              <li key={item.name}>
                {!item.children ? (
                  <a
                    href={item.href}
                    className={classNames(
                      item.current ? "bg-gray-50" : "hover:bg-gray-50",
                      "group flex w-full items-center p-2 rounded-md lg:text-base text-sm font-semibold text-gray-700",
                      open ? "justify-start gap-x-3" : "justify-center"
                    )}
                  >
                    <item.icon
                      className="size-6 shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    {open && (
                      <span className="ml-1 whitespace-nowrap">
                        {item.name}
                      </span>
                    )}
                  </a>
                ) : (
                  <div>
                    <button
                      onClick={() =>
                        setOpenSection(
                          openSection === item.name ? null : item.name
                        )
                      }
                      disabled={!open}
                      className={classNames(
                        item.current ? "bg-gray-50" : "hover:bg-gray-50",
                        "group flex w-full rounded-md lg:text-base p-2 text-sm font-semibold text-gray-700 my-2",
                        open ? "justify-start gap-x-3" : "justify-center"
                      )}
                    >
                      <item.icon
                        className="size-6 shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      {open && (
                        <span className="ml-1 whitespace-nowrap">
                          {item.name}
                        </span>
                      )}
                      {open && (
                        <ChevronRightIcon
                          className={classNames(
                            "ml-auto size-5 shrink-0 text-gray-400",
                            openSection === item.name &&
                              "rotate-90 text-gray-500"
                          )}
                          aria-hidden="true"
                        />
                      )}
                    </button>

                    {open && openSection === item.name && (
                      <ul className="mt-1 px-2">
                        {item.children.map((subItem) => (
                          <li key={subItem.name}>
                            <a
                              href={subItem.href}
                              className={classNames(
                                subItem.current
                                  ? "bg-gray-50"
                                  : "hover:bg-gray-50",
                                "block rounded-md py-2 pl-9 pr-2 text-sm text-gray-700"
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
        </nav>
      </div>
    </div>
  );
}
