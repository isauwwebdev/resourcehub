"use client";
import React from "react";
import Breadcrumb from "../components/breadcrumb";
import { usePathname } from "next/navigation";
import blogHeader from "../../../public/data/blogHeader.json";
import Image from "next/image";
import Script from "next/script";

const posts = [
  {
    id: 1,
    title: "Top 7 Student Organizations to Join at UW",
    href: "/blog/top-student-organizations-uw",
    description:
      "Discover the most impactful student organizations that will enhance your college experience and build lasting connections.",
    imageUrl: "/images/student-orgs-uw.jpg",
    date: "May 12, 2025",
    datetime: "2025-05-12",
    author: {
      name: "Enrico Pratama",
      imageUrl: "/assets/enrico.png",
    },
  },
  {
    id: 2,
    title: "How Joining Clubs Can Boost Your College Experience",
    href: "/blog/benefits-of-student-clubs",
    description:
      "Learn how student clubs can accelerate your personal growth, career prospects, and social connections.",
    imageUrl: "/images/club-benefits.jpg",
    date: "April 30, 2025",
    datetime: "2025-04-30",
    author: {
      name: "Enrico Pratama",
      imageUrl: "/assets/enrico.png",
    },
  },
  {
    id: 3,
    title: "Guide to Cultural and Hobby Clubs on Campus",
    href: "/blog/cultural-hobby-clubs-guide",
    description:
      "Explore diverse cultural organizations and hobby groups that celebrate heritage and shared interests.",
    imageUrl: "/images/cultural-clubs.jpg",
    date: "April 18, 2025",
    datetime: "2025-04-18",
    author: {
      name: "Enrico Pratama",
      imageUrl: "/assets/enrico.png",
    },
  },
];

const socialImages = [
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Students at campus event",
    caption: "Campus Social Events",
  },
  {
    src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Student organization meeting",
    caption: "Student Organizations",
  },
  {
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Cultural celebration",
    caption: "Cultural Celebrations",
  },
];

export default function Page() {
  const titleName = usePathname().split("/").at(-1);
  const headerData = blogHeader[titleName] || {};

  return (
    <div className="bg-gradient-to-br from-gray-50 to-green-50 min-h-screen">
      <div className="py-10 px-6 md:px-12 lg:px-32 xl:px-48">
        <Breadcrumb />

        {/* Header Image Only */}
        <div className="mt-8 mb-12 rounded-2xl shadow-2xl overflow-hidden">
          <img
            src="/social.png"
            alt="Social and Academic Integration"
            className="w-full h-64 md:h-80 object-cover"
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Blog Post Style Main Content */}
          <main className="flex-1">
            <article className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Article Header Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="Students socializing on campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-90">
                    Published on November 20, 2024
                  </p>
                  <h2 className="text-2xl font-bold mt-1">
                    Your Guide to Social and Academic Integration
                  </h2>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12 prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                  College life extends far beyond the classroom. At the
                  University of Washington and throughout Seattle, you'll
                  discover a vibrant ecosystem of student organizations,
                  cultural communities, and social opportunities that will
                  enrich your academic journey and help you build lifelong
                  connections.
                </p>

                <h2
                  id="organization_clubs"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-green-500 pl-4"
                >
                  Student Organizations & Clubs
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  College life is much more than lectures and exams — it's about
                  finding your tribe, exploring your passions, and building
                  lifelong friendships. One of the best ways to do this at the
                  University of Washington and other Seattle campuses is through
                  student organizations and clubs. These groups provide a
                  supportive environment where you can learn new skills, develop
                  leadership, and enjoy activities that complement your academic
                  journey.
                </p>

                <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-r-lg">
                  <h4 className="font-semibold text-green-900 mb-2">
                    🌟 Pro Tip
                  </h4>
                  <p className="text-green-800">
                    Students are encouraged to take part in these groups early
                    on, as they often host social mixers, workshops, and
                    volunteering opportunities that enrich your campus
                    experience and help you grow both personally and
                    professionally.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Popular Organizations by Field
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-blue-900 mb-2">
                        💼 Business
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Undergraduate Women in Business (UWiB)</li>
                        <li>• Entrepreneurship & Venture Capital Club</li>
                        <li>• First Generation Business Leaders</li>
                        <li>• Investment Banking Accelerator</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-purple-900 mb-2">
                        ⚙️ Engineering
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Society of Women Engineers</li>
                        <li>• DubHacks Hackathon</li>
                        <li>• Engineers Without Borders</li>
                        <li>• American Society of Civil Engineers</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-indigo-900 mb-2">
                        💻 Computer Science
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Husky Coding Project</li>
                        <li>• Association for Computing Machinery (ACM)</li>
                        <li>• Women in Computing</li>
                        <li>• COM² (CS & Communication)</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-green-900 mb-2">
                        🔬 Sciences
                      </h5>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Pre-Medical Society</li>
                        <li>• Biology Club</li>
                        <li>• Environmental Science & Sustainability Club</li>
                        <li>• Neuroscience Club</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h2
                  id="religious"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-blue-500 pl-4"
                >
                  Religious and Spiritual Resources
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Navigating college life is not just an academic challenge but
                  also a personal and spiritual journey for many students.
                  Seattle campuses recognize the importance of nurturing your
                  inner life and offer a variety of resources that support
                  students of all faiths and spiritual backgrounds.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      🏛️ Campus Ministries
                    </h4>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• Worship services</li>
                      <li>• Meditation groups</li>
                      <li>• Spiritual counseling</li>
                      <li>• Interfaith dialogues</li>
                    </ul>
                  </div>
                  <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                    <h4 className="font-semibold text-purple-900 mb-2">
                      🧘 Prayer & Meditation
                    </h4>
                    <ul className="text-purple-800 space-y-1 text-sm">
                      <li>• Quiet reflection rooms</li>
                      <li>• Dedicated chapels</li>
                      <li>• Group prayer sessions</li>
                      <li>• Mindfulness workshops</li>
                    </ul>
                  </div>
                </div>

                <h2
                  id="event_entertainment"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-orange-500 pl-4"
                >
                  Events & Entertainment
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Beyond academics, Seattle offers an incredibly rich and
                  diverse cultural scene that invites students to unwind,
                  explore, and celebrate life. The city's many festivals,
                  outdoor adventures, sports, and arts events create countless
                  opportunities to make memories and deepen your connection to
                  the community.
                </p>

                <div className="bg-orange-50 p-6 rounded-lg my-8">
                  <h4 className="font-semibold text-orange-900 mb-4">
                    🎉 Popular Events & Activities
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-orange-800 mb-2">
                        🌸 Seasonal Festivals
                      </h5>
                      <p className="text-sm text-orange-700">
                        Cherry Blossom & Japanese Cultural Festival, Leavenworth
                        Christmas Lighting Festival
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-orange-800 mb-2">
                        🏔️ Outdoor Activities
                      </h5>
                      <p className="text-sm text-orange-700">
                        Kayaking in San Juan Islands, hiking Mount Rainier,
                        Burke-Gilman Trail biking
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-orange-800 mb-2">
                        ⚾ Sports
                      </h5>
                      <p className="text-sm text-orange-700">
                        UW Baseball games at Husky Ballpark, intramural leagues
                      </p>
                    </div>
                    <div>
                      <h5 className="font-medium text-orange-800 mb-2">
                        🎭 Arts & Culture
                      </h5>
                      <p className="text-sm text-orange-700">
                        UW Theatre productions, music concerts, film screenings
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-50 border-l-4 border-teal-400 p-6 my-8 rounded-r-lg">
                  <h4 className="font-semibold text-teal-900 mb-2">
                    🌟 Local Hangouts
                  </h4>
                  <p className="text-teal-800">
                    Visit iconic spots like Pike Place Market, Alki Beach, or
                    Gas Works Park for a blend of culture and relaxation. These
                    locations offer perfect opportunities to unwind and connect
                    with fellow students.
                  </p>
                </div>
              </div>
            </article>
          </main>

          {/* Enhanced Visual Sidebar */}
          <aside className="w-full lg:w-80 space-y-6">
            {/* Author Card */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 text-center shadow-lg border border-green-100">
              <div className="relative inline-block mb-4">
                <Image
                  src="/assets/enrico.png"
                  alt="Author profile"
                  width={80}
                  height={80}
                  className="rounded-full mx-auto border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
              <h4 className="font-bold text-green-900 text-lg">
                Enrico Pratama
              </h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                AMAZON Intern • Teaching Assistant • CS Tutor • WebDev Lead •
                Google SWE
              </p>
            </div>

            {/* Social Gallery */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Social Life Gallery
              </h3>
              <div className="space-y-4">
                {socialImages.map((image, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-lg"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></span>
                Community Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-green-900 font-medium">
                    Student Orgs
                  </span>
                  <span className="text-green-600 font-bold">800+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-900 font-medium">
                    Cultural Groups
                  </span>
                  <span className="text-blue-600 font-bold">150+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-purple-900 font-medium">
                    Annual Events
                  </span>
                  <span className="text-purple-600 font-bold">500+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="text-orange-900 font-medium">
                    Faith Communities
                  </span>
                  <span className="text-orange-600 font-bold">25+</span>
                </div>
              </div>
            </div>

            {/* Table of Contents */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h5 className="text-lg font-bold mb-4 text-gray-900 flex items-center">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                In this article
              </h5>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#organization_clubs"
                    className="flex items-center text-gray-600 hover:text-green-600 transition-colors p-2 rounded-lg hover:bg-green-50"
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                    Student Organizations & Clubs
                  </a>
                </li>
                <li>
                  <a
                    href="#religious"
                    className="flex items-center text-gray-600 hover:text-green-600 transition-colors p-2 rounded-lg hover:bg-green-50"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                    Religious and Spiritual Resources
                  </a>
                </li>
                <li>
                  <a
                    href="#event_entertainment"
                    className="flex items-center text-gray-600 hover:text-green-600 transition-colors p-2 rounded-lg hover:bg-green-50"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                    Events & Entertainment
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Persons for Specialized Majors */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Contact Persons for Specialized Majors
              </h3>
              <div className="space-y-4">
                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-x-3 mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">💼</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Business & Economics
                        </h4>
                        <p className="text-xs text-blue-100">
                          Foster School of Business
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-blue-100 mb-2">
                      Connect with business mentors and career advisors
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-200">
                        Contact: Sarah Chen
                      </span>
                      <a
                        href="https://www.linkedin.com/in/sarah-chen-uw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-white/20 px-2 py-1 rounded text-white hover:bg-white/30 transition-colors flex items-center gap-1"
                      >
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-x-3 mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">⚙️</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Engineering
                        </h4>
                        <p className="text-xs text-purple-100">
                          College of Engineering
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-purple-100 mb-2">
                      Technical guidance and industry connections
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-purple-200">
                        Contact: Dr. Michael Kim
                      </span>
                      <a
                        href="https://www.linkedin.com/in/michael-kim-uw-engineering"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-white/20 px-2 py-1 rounded text-white hover:bg-white/30 transition-colors flex items-center gap-1"
                      >
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-700 p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-x-3 mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">💻</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Computer Science
                        </h4>
                        <p className="text-xs text-indigo-100">
                          Paul G. Allen School
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-indigo-100 mb-2">
                      Tech career guidance and internship opportunities
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-indigo-200">
                        Contact: Alex Rodriguez
                      </span>
                      <a
                        href="https://www.linkedin.com/in/alex-rodriguez-cs-uw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-white/20 px-2 py-1 rounded text-white hover:bg-white/30 transition-colors flex items-center gap-1"
                      >
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-green-600 to-green-700 p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-x-3 mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">🔬</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Pre-Med & Sciences
                        </h4>
                        <p className="text-xs text-green-100">
                          College of Arts & Sciences
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-green-100 mb-2">
                      Medical school prep and research opportunities
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-green-200">
                        Contact: Dr. Lisa Wang
                      </span>
                      <a
                        href="https://www.linkedin.com/in/lisa-wang-premed-uw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-white/20 px-2 py-1 rounded text-white hover:bg-white/30 transition-colors flex items-center gap-1"
                      >
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-orange-600 to-orange-700 p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-x-3 mb-2">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white text-sm font-bold">🎨</span>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-white">
                          Arts & Humanities
                        </h4>
                        <p className="text-xs text-orange-100">
                          College of Arts & Sciences
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-orange-100 mb-2">
                      Creative career paths and cultural programs
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-orange-200">
                        Contact: Prof. Maria Santos
                      </span>
                      <a
                        href="https://www.linkedin.com/in/maria-santos-arts-uw"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs bg-white/20 px-2 py-1 rounded text-white hover:bg-white/30 transition-colors flex items-center gap-1"
                      >
                        <svg
                          className="w-3 h-3"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-amber-500 rounded-full mr-3"></span>
                Related Articles
              </h3>
              <div className="space-y-4">
                <article className="group cursor-pointer">
                  <a href="/blog/uw-freshman-guide" className="block">
                    <div className="flex gap-3">
                      <img
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                        alt="UW Campus"
                        className="w-16 h-16 object-cover rounded-lg flex-shrink-0 group-hover:scale-105 transition-transform duration-200"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 text-sm group-hover:text-purple-600 transition-colors line-clamp-2">
                          Ultimate UW Freshman Survival Guide
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          Everything you need to know about your first year at
                          the University of Washington
                        </p>
                        <span className="text-xs text-purple-600 font-medium">
                          Read more →
                        </span>
                      </div>
                    </div>
                  </a>
                </article>
                {/* Add more related articles here */}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
