"use client"; // Add this directive for client-side hooks
// TODO: fix join ISAUW linking UI (all caps letters UI)

import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation"; // Import usePathname
import Link from "next/link"; // Import Link for navigation

// Helper function to capitalize the first letter of a string
const capitalize = (s) => {
  if (typeof s !== "string" || s.length === 0) return "";
  // Handle potential camelCase or snake_case by inserting spaces
  const spaced = s.replace(/([A-Z])/g, " $1").replace(/_/g, " ");
  return spaced.charAt(0).toUpperCase() + spaced.slice(1).toLowerCase();
};

export default function Breadcrumb() {
  const pathname = usePathname(); // Get the current path
  // Split path, remove empty segments, and decode URI components
  const pathSegments = pathname
    .split("/")
    .filter((segment) => segment)
    .map(decodeURIComponent);

  // Generate pages array dynamically
  const pages = pathSegments.map((segment, index) => {
    const href = "/" + pathSegments.slice(0, index + 1).join("/");
    // Replace hyphens/underscores with spaces and capitalize each word for better display
    const name = segment.split(/[-_]/).map(capitalize).join(" ");
    const current = index === pathSegments.length - 1;
    return { name, href, current };
  });

  return (
    <nav aria-label="Breadcrumb" className="flex">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <Link href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon aria-hidden="true" className="size-5 shrink-0" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.href}>
            {" "}
            {/* Use href for key as names might not be unique if segments repeat */}
            <div className="flex items-center">
              <ChevronRightIcon
                aria-hidden="true"
                className="size-5 shrink-0 text-gray-400"
              />
              <Link
                href={page.href}
                aria-current={page.current ? "page" : undefined}
                className={`ml-4 text-sm font-medium ${
                  page.current
                    ? "text-gray-700" // Style for current page (adjust as needed)
                    : "text-gray-500 hover:text-gray-700" // Style for other pages
                }`}
              >
                {page.name}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
