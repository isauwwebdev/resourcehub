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
      { name: "Campus Access", href: "#" },
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
      { name: "University Tools & Accounts", href: "#" },
      { name: "Best Study Spots", href: "#" },
      { name: "Course Materials & Textbook", href: "#" },
      { name: "Academic Success Tips", href: "#" },
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
      { name: "Academic Guidance", href: "#" },
      { name: "Transfer Credits", href: "#" },
    ],
  },
  {
    name: "Job and Internship Opportunities",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "On-campus job", href: "#" },
      { name: "Curricular Practical Training (CPT)", href: "#" },
      { name: "Optional Practical Training (OPT)", href: "#" },
    ],
  },
  {
    name: "Lifestyle & Adjustments",
    icon: FolderIcon,
    current: false,
    children: [
      { name: "Daily Commutes", href: "#" },
      { name: "Restaurant Options", href: "#" },
      { name: "Wather Gear", href: "#" },
      { name: "", href: "#" },
      { name: "", href: "#" },
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
      <div className="flex h-16 shrink-0 items-center">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
          className="h-8 w-auto"
        />
      </div>
      <nav className="flex flex-1 flex-col">
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
                        "group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700"
                      )}
                    >
                      <item.icon
                        aria-hidden="true"
                        className="size-6 shrink-0 text-gray-400"
                      />
                      {item.name}
                    </a>
                  ) : (
                    <Disclosure as="div">
                      <DisclosureButton
                        className={classNames(
                          item.current ? "bg-gray-50" : "hover:bg-gray-50",
                          "group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700"
                        )}
                      >
                        <item.icon
                          aria-hidden="true"
                          className="size-6 shrink-0 text-gray-400"
                        />
                        {item.name}
                        <ChevronRightIcon
                          aria-hidden="true"
                          className="ml-auto size-5 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-500"
                        />
                      </DisclosureButton>
                      <DisclosurePanel as="ul" className="mt-1 px-2">
                        {item.children.map((subItem) => (
                          <li key={subItem.name}>
                            {/* 44px */}
                            <DisclosureButton
                              as="a"
                              href={subItem.href}
                              className={classNames(
                                subItem.current
                                  ? "bg-gray-50"
                                  : "hover:bg-gray-50",
                                "block rounded-md py-2 pl-9 pr-2 text-sm/6 text-gray-700"
                              )}
                            >
                              {subItem.name}
                            </DisclosureButton>
                          </li>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  )}
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
            >
              <img
                alt=""
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                className="size-8 rounded-full bg-gray-50"
              />
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
