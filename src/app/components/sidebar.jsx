"use client";

import { useState } from "react";
import {
  HomeIcon,
  DocumentIcon,
  AcademicCapIcon,
  UserPlusIcon,
  BuildingOfficeIcon,
  TicketIcon,
  ChatBubbleLeftEllipsisIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const navigation = [
  {
    name: "Essentials Document and Preparation",
    icon: DocumentIcon,
    current: false,
    children: [
      {
        name: "Visa & Documentation",
        href: "essentialDocuments/#visa_documentation",
      },
      {
        name: "Housing Arrangement",
        href: "essentialDocuments/#housing_arrangement",
      },
      {
        name: "Health and Insurance",
        href: "essentialDocuments/#health_insurance",
      },
      { name: "Packing Guide", href: "essentialDocuments/#packing_guide" },
    ],
  },
  {
    name: "Settling in",
    icon: HomeIcon,
    current: false,
    children: [
      { name: "Phone & Connectivity", href: "settling/#phone_connectivity" },
      { name: "Banking & Finances", href: "settling/#banking_finances" },
      {
        name: "Transportation Options",
        href: "settling/#transporation_options",
      },
      { name: "Everyday Essentials", href: "settling/#everyday_essentials" },
    ],
  },
  {
    name: "Campus Orientation and Study Essentials",
    icon: AcademicCapIcon,
    current: false,
    children: [
      {
        name: "Orientation & Onboarding",
        href: "campusstudy/#orientation_onboarding",
      },
      { name: "Campus Access", href: "campusstudy/#campus_access" },
      {
        name: "University Tools & Academic Success",
        href: "campusstudy/#university_tools",
      },
      { name: "Transfer Credits", href: "campusstudy/#transfer_credits" },
      { name: "Best Study Spots", href: "campusstudy/#study_spots" },
      {
        name: "Course Materials & Textbook",
        href: "campusstudy/#course_materials",
      },
    ],
  },
  {
    name: "Social and Academic Integration",
    icon: UserPlusIcon,
    current: false,
    children: [
      {
        name: "Student Organization & Clubs",
        href: "/social/#organization_clubs",
      },
      { name: "Religious and Spiritual Resources", href: "/social/#religious" },
      { name: "Events & Entertainment", href: "/social/#event_entertainment" },
    ],
  },
  {
    name: "Work Opportunities",
    icon: BuildingOfficeIcon,
    current: false,
    children: [
      { name: "On-campus Job", href: "work/#on_campus" },
      { name: "Curricular Practical Training (CPT)", href: "work/#cpt" },
      { name: "Optional Practical Training (OPT)", href: "work/#opt" },
    ],
  },
  {
    name: "Lifestyle & Adjustments",
    icon: TicketIcon,
    current: false,
    children: [
      { name: "Cultural Adjustment", href: "lifestyle/#cultural_adjustment" },
      { name: "Shopping Options", href: "lifestyle/#shopping_options" },
      { name: "Restaurant Options", href: "lifestyle/#restaurant_options" },
      { name: "Weather Gear", href: "lifestyle/#weather_gear" },
    ],
  },
  {
    name: "Sign Up for ISAUW",
    icon: ChatBubbleLeftEllipsisIcon,
    current: false,
    href: "join-isauw",
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
        "transition-all duration-300 overflow-hidden bg-white border-r border-gray-200 ",
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
                    onClick={() => {
                      setOpen(true); // always open the sidebar
                    }}
                    href={item.href}
                    className={classNames(
                      item.current ? "bg-gray-50" : "hover:bg-gray-50",
                      "group flex w-full items-center p-2 rounded-md lg:text-base text-sm font-semibold text-gray-700",
                      open ? "justify-start gap-x-3" : "justify-center",
                      "transition transform hover:scale-[1.03] hover:translate-x-1"
                    )}
                  >
                    <item.icon
                      className="size-6 shrink-0 text-gray-400 group-hover:text-red-800 group-hover:drop-shadow-md transition duration-200"
                      aria-hidden="true"
                    />
                    {open && (
                      <span className="ml-1 whitespace-nowrap">
                        {item.name}
                      </span>
                    )}
                  </a>
                ) : (
                  <div
                    onClick={() => {
                      if (!open) {
                        setOpen(true); // always open the sidebar
                        setOpenSection(item.name); // always expand the section
                      }
                    }}
                  >
                    <button
                      onClick={() => {
                        setOpenSection(
                          openSection === item.name ? null : item.name
                        );
                      }}
                      className={classNames(
                        item.current ? "bg-gray-50" : "hover:bg-gray-50",
                        "group flex w-full rounded-md lg:text-base p-2 text-sm font-semibold text-gray-700 my-2",
                        open ? "justify-start gap-x-3" : "justify-center",
                        "transition transform hover:scale-[1.03] hover:translate-x-1"
                      )}
                    >
                      <item.icon
                        className="size-6 shrink-0 text-gray-400 group-hover:text-red-800 group-hover:drop-shadow-md transition duration-200"
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
                                "block rounded-md py-2 pl-9 pr-2 text-sm text-gray-700 transition transform hover:scale-[1.02] hover:translate-x-1"
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
