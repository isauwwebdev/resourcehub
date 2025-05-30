"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "../components/breadcrumb";
import blogHeader from "../../../public/data/blogHeader.json";
import Image from "next/image";

export default function Page() {
  const titleName = usePathname().split("/").at(-1);
  const headerData = blogHeader[titleName] || {};

  const tocItems = [
    {
      id: "on_campus_employment",
      title: "On-Campus Employment",
      color: "blue",
    },
    {
      id: "hfs_employment",
      title: "Housing & Food Services (HFS)",
      color: "green",
    },
    {
      id: "ta_positions",
      title: "Teaching Assistant (TA) Positions",
      color: "orange",
    },
    {
      id: "research_assistantships",
      title: "Undergraduate Research Assistantships",
      color: "purple",
    },
    {
      id: "tech_positions",
      title: "Student Technology Positions",
      color: "teal",
    },
    { id: "library_jobs", title: "UW Libraries", color: "indigo" },
    { id: "how_to_apply", title: "How to Apply", color: "pink" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="py-10 px-6 md:px-12 lg:px-32 xl:px-48">
        <Breadcrumb />

        {/* Enhanced Header */}
        <div className="mt-8 mb-12 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700 text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              {headerData.location || "Work Opportunities"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {headerData.title || "Work Opportunities at UW"}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Explore on-campus jobs, CPT, and OPT opportunities to gain
              experience and support your studies.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <main className="flex-1">
            <article className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Article Header Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" // Generic work-related image
                  alt="Work Opportunities at UW"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-90">
                    Your Guide to Campus Employment
                  </p>
                  <h2 className="text-2xl font-bold mt-1">
                    Finding Work at the University of Washington
                  </h2>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12 prose prose-lg max-w-none">
                <h2
                  id="on_campus_employment"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-blue-500 pl-4"
                >
                  On-Campus Employment Opportunities at UW Seattle
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Working on campus is a great way to earn money, build
                  experience, and stay connected to the UW community. Here are
                  some of the top student job opportunities available:
                </p>

                <h3
                  id="hfs_employment"
                  className="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-green-500 pl-3"
                >
                  Housing & Food Services (HFS)
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  One of the largest student employers, HFS offers jobs in:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 leading-relaxed text-lg mb-6">
                  <li>Dining halls and cafes</li>
                  <li>Residence hall front desks</li>
                  <li>Custodial and maintenance teams</li>
                  <li>Housing office roles</li>
                </ul>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Most roles start at $20.76/hr (as of January 2025) with
                  flexible shifts to fit your class schedule.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-r-lg">
                  <h4 className="font-semibold text-green-900 mb-2">
                    💡 HFS Perk
                  </h4>
                  <p className="text-green-800">
                    Many HFS jobs offer meal benefits or discounts, helping you
                    save on food costs!
                  </p>
                </div>

                <div class="flex items-start gap-2.5">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="Jese image"
                  />
                  <div class="flex flex-col gap-1 w-full max-w-[320px]">
                    <div class="flex items-center space-x-2 rtl:space-x-reverse">
                      <span class="text-sm font-semibold text-gray-900 dark:text-white">
                        Bonnie Green
                      </span>
                      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                        11:46
                      </span>
                    </div>
                    <div class="flex flex-col leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                      <p class="text-sm font-normal text-gray-900 dark:text-white">
                        {" "}
                        That's awesome. I think our users will really appreciate
                        the improvements.
                      </p>
                    </div>
                    <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                      Delivered
                    </span>
                  </div>
                  <button
                    id="dropdownMenuIconButton"
                    data-dropdown-toggle="dropdownDots"
                    data-dropdown-placement="bottom-start"
                    class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 4 15"
                    >
                      <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  </button>
                  <div
                    id="dropdownDots"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-40 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Reply
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Forward
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Copy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div class="flex items-start gap-2.5">
                  <img
                    class="w-8 h-8 rounded-full"
                    src="/docs/images/people/profile-picture-3.jpg"
                    alt="Jese image"
                  />
                  <div class="flex flex-col w-full max-w-[320px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-e-xl rounded-es-xl dark:bg-gray-700">
                    <div class="flex items-center space-x-2 rtl:space-x-reverse">
                      <span class="text-sm font-semibold text-gray-900 dark:text-white">
                        George Evans (Webdev Officer)
                      </span>
                      <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
                        11:46
                      </span>
                    </div>
                    <p class="text-sm font-normal py-2.5 text-gray-900 dark:text-white">
                      Oh! I am working at Starbucks at HUB right now and I get a
                      lot of free drinks as a barista!
                    </p>
                  </div>
                  <button
                    id="dropdownMenuIconButton"
                    data-dropdown-toggle="dropdownDots"
                    data-dropdown-placement="bottom-start"
                    class="inline-flex self-center items-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none dark:text-white focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-800 dark:focus:ring-gray-600"
                    type="button"
                  >
                    <svg
                      class="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 4 15"
                    >
                      <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                    </svg>
                  </button>
                  <div
                    id="dropdownDots"
                    class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-40 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      class="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownMenuIconButton"
                    >
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Reply
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Forward
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Copy
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Report
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Delete
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <h3
                  id="ta_positions"
                  className="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-orange-500 pl-3"
                >
                  Teaching Assistant (TA) Positions
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  TA roles are available in many departments, typically for
                  upperclassmen or grad students. Requirements include:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 leading-relaxed text-lg mb-6">
                  <li>Strong academic standing</li>
                  <li>Completion of the course</li>
                  <li>Clear communication skills</li>
                </ul>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  These roles often include tuition waivers and competitive
                  stipends.
                </p>

                <h3
                  id="research_assistantships"
                  className="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-purple-500 pl-3"
                >
                  Undergraduate Research Assistantships
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Paid research roles allow students to:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 leading-relaxed text-lg mb-6">
                  <li>Collaborate with faculty on real-world projects</li>
                  <li>Build experience in their major</li>
                  <li>Contribute to publications or conferences</li>
                  <li>Earn course credit in some cases</li>
                </ul>

                <h3
                  id="tech_positions"
                  className="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-teal-500 pl-3"
                >
                  Student Technology Positions
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  UW-IT and departmental offices hire for tech-related roles:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 leading-relaxed text-lg mb-6">
                  <li>Help desk support</li>
                  <li>Web development and design</li>
                  <li>Computer lab monitoring</li>
                  <li>AV setup and troubleshooting</li>
                </ul>

                <h3
                  id="library_jobs"
                  className="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-indigo-500 pl-3"
                >
                  UW Libraries
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Work in a quiet, academic setting through roles like:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 leading-relaxed text-lg mb-6">
                  <li>Circulation services</li>
                  <li>Research and reference help</li>
                  <li>Digital projects and scanning</li>
                  <li>Special collections assistance</li>
                </ul>

                <h3
                  id="how_to_apply"
                  className="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-pink-500 pl-3"
                >
                  How to Apply
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Browse and apply through <strong>Handshake</strong> (formerly
                  HuskyJobs), UW’s main student employment platform:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 leading-relaxed text-lg mb-6">
                  <li>Create your account and complete your profile</li>
                  <li>Set alerts for jobs you're interested in</li>
                  <li>Upload your resume and relevant docs</li>
                  <li>
                    Apply early – many roles are filled before the quarter
                    starts
                  </li>
                </ul>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    🚀 Application Tip
                  </h4>
                  <p className="text-blue-800">
                    Tailor your resume for each job application on Handshake.
                    Highlight relevant skills and experiences to stand out!
                  </p>
                </div>
              </div>
            </article>
          </main>

          {/* Enhanced Visual Sidebar */}
          <aside className="w-full lg:w-80 space-y-6">
            {/* Author Card */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 text-center shadow-lg border border-purple-100">
              <div className="relative inline-block mb-4">
                <Image
                  src="/assets/enrico.png" // Assuming this path is correct and image exists
                  alt="Author profile"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <h4 className="font-bold text-purple-900 text-lg">
                Enrico Pratama
              </h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                AMAZON Intern • Teaching Assistant • CS Tutor • WebDev Lead •
                Google SWE
              </p>
            </div>

            {/* Table of Contents */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h5 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                In this article
              </h5>
              <ul className="space-y-3">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                    >
                      <span
                        className={`w-1.5 h-1.5 bg-${item.color}-400 rounded-full mr-3`}
                      ></span>
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
