"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "../components/breadcrumb";
import blogHeader from "../../../public/data/blogHeader.json";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Study Tips for Success",
    href: "#",
    description:
      "Essential strategies for academic excellence at UW, from time management to effective note-taking techniques.",
    imageUrl:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Nov 15, 2024",
    datetime: "2024-11-15",
    author: {
      name: "Sarah Chen",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Campus Resources Guide",
    href: "#",
    description:
      "Discover hidden gems and essential services across UW campus that every student should know about.",
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Nov 10, 2024",
    datetime: "2024-11-10",
    author: {
      name: "Alex Johnson",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

const campusImages = [
  {
    src: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "University of Washington Campus",
    caption: "Beautiful UW Campus",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Students studying in library",
    caption: "Suzzallo Library Study Area",
  },
  {
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "University classroom",
    caption: "Modern UW Classroom",
  },
];

export default function Page() {
  const titleName = usePathname().split("/").at(-1);
  const headerData = blogHeader[titleName] || {};

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
              {headerData.location || "Campus Orientation"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {headerData.title || "Campus Orientation and Study Essentials"}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your comprehensive guide to thriving at the University of
              Washington
            </p>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Blog Post Style Main Content */}
          <main className="flex-1">
            <article className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Article Header Image */}
              <div className="relative h-64 md:h-80">
                <img
                  src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="University of Washington Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-90">
                    Published on November 20, 2024
                  </p>
                  <h2 className="text-2xl font-bold mt-1">
                    Your Complete Guide to Campus Life
                  </h2>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12 prose prose-lg max-w-none">
                <p className="text-xl text-gray-600 leading-relaxed mb-8 font-light">
                  Starting your journey at the University of Washington can feel
                  overwhelming, but with the right preparation and knowledge,
                  you'll be set up for success from day one. This comprehensive
                  guide covers everything you need to know about campus
                  orientation and study essentials.
                </p>

                <h2
                  id="orientation_onboarding"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-blue-500 pl-4"
                >
                  Orientation & Onboarding
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Start strong at UW by attending Advising & Orientation (A&O),
                  joining iSchool welcome sessions, and connecting with peer
                  mentors. You'll get support with registering for classes,
                  setting up your NetID and MyUW account, and navigating
                  platforms like Canvas and MyPlan.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    💡 Pro Tip
                  </h4>
                  <p className="text-blue-800">
                    Attend all A&O sessions even if they seem basic - you'll
                    learn shortcuts and insider tips that aren't documented
                    anywhere else.
                  </p>
                </div>

                <h2
                  id="campus_access"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-green-500 pl-4"
                >
                  Campus Access
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Your Husky Card grants access to libraries, residence halls,
                  academic buildings, and U-PASS transportation. Don't forget it
                  — it's your ID, meal pass, and your key into UW's secured
                  spaces.
                </p>
                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
                    <h4 className="font-semibold text-yellow-900 mb-2">
                      🎫 Husky Card Benefits
                    </h4>
                    <ul className="text-yellow-800 space-y-1 text-sm">
                      <li>• Building access 24/7</li>
                      <li>• Dining hall payments</li>
                      <li>• Library privileges</li>
                      <li>• Campus recreation access</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      🚌 U-PASS Transportation
                    </h4>
                    <ul className="text-blue-800 space-y-1 text-sm">
                      <li>• Free Metro bus rides</li>
                      <li>• Light rail access</li>
                      <li>• Streetcar transportation</li>
                      <li>• Water taxi included</li>
                    </ul>
                  </div>
                </div>

                <h2
                  id="university_tools"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-orange-500 pl-4"
                >
                  University Tools & Academic Success
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Use Canvas for course content, MyPlan for academic planning,
                  and Panopto for recorded lectures. Leverage support services
                  like CLUE tutoring, iSchool peer advising, and academic
                  coaching from the Office of Minority Affairs.
                </p>
                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <h4 className="font-semibold text-gray-900 mb-4">
                    Essential Digital Tools
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-indigo-600 font-bold">C</span>
                      </div>
                      <p className="font-medium">Canvas</p>
                      <p className="text-sm text-gray-600">Course materials</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-pink-600 font-bold">M</span>
                      </div>
                      <p className="font-medium">MyPlan</p>
                      <p className="text-sm text-gray-600">Academic planning</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <span className="text-cyan-600 font-bold">P</span>
                      </div>
                      <p className="font-medium">Panopto</p>
                      <p className="text-sm text-gray-600">
                        Lecture recordings
                      </p>
                    </div>
                  </div>
                </div>

                <h2
                  id="transfer_credits"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-purple-500 pl-4"
                >
                  Transfer Credits
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Bringing in AP, IB, or community college credits? Submit
                  transcripts early, check your Degree Audit (DARS), and confirm
                  with your advisor how they apply to your major or general
                  education requirements.
                </p>

                <h2
                  id="study_spots"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-teal-500 pl-4"
                >
                  Best Study Spots
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Find your ideal study zone—whether it's the grand Suzzallo
                  Reading Room, 24/7 Odegaard Library, iSchool lounge, or hidden
                  gems like Denny Hall nooks and HUB's quiet corners.
                </p>

                <h2
                  id="course_materials"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-indigo-500 pl-4"
                >
                  Course Materials & Textbooks
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Get textbooks through the UW Bookstore, but always check
                  Canvas and Leganto first for free PDFs or open-access links.
                  Suzzallo Library may have course reserves, and you can often
                  find used books via Reddit or Facebook groups.
                </p>
                <div className="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-r-lg">
                  <h4 className="font-semibold text-green-900 mb-2">
                    💰 Money-Saving Tips
                  </h4>
                  <p className="text-green-800">
                    Check Facebook Marketplace, Reddit r/UWashington, and course
                    reserves before buying new textbooks. You can save hundreds
                    each quarter!
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
                  src="/assets/enrico.png"
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

            {/* Campus Gallery */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Campus Gallery
              </h3>
              <div className="space-y-4">
                {campusImages.map((image, index) => (
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
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Quick Stats
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-900 font-medium">
                    Total Students
                  </span>
                  <span className="text-blue-600 font-bold">47,000+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <span className="text-green-900 font-medium">Libraries</span>
                  <span className="text-green-600 font-bold">16</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-purple-900 font-medium">
                    Study Spaces
                  </span>
                  <span className="text-purple-600 font-bold">200+</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <span className="text-orange-900 font-medium">
                    Campus Size
                  </span>
                  <span className="text-orange-600 font-bold">703 acres</span>
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
                    href="#orientation_onboarding"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                    Orientation & Onboarding
                  </a>
                </li>
                <li>
                  <a
                    href="#campus_access"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                    Campus Access
                  </a>
                </li>
                <li>
                  <a
                    href="#university_tools"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                    University Tools & Academic Success
                  </a>
                </li>
                <li>
                  <a
                    href="#transfer_credits"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                    Transfer Credits
                  </a>
                </li>
                <li>
                  <a
                    href="#study_spots"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3"></span>
                    Best Study Spots
                  </a>
                </li>
                <li>
                  <a
                    href="#course_materials"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3"></span>
                    Course Materials & Textbooks
                  </a>
                </li>
              </ul>
            </div>

            {/* Related Articles */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Related Articles
              </h3>
              <div className="space-y-4">
                {posts.map((post) => (
                  <article
                    key={post.id}
                    className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 p-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

                    <div className="relative z-10">
                      <div className="text-xs text-gray-300 flex items-center gap-x-2 mb-2">
                        <time dateTime={post.datetime}>{post.date}</time>
                        <span className="text-white/50">•</span>
                        <div className="flex items-center gap-x-1">
                          <img
                            src={post.author.imageUrl}
                            alt=""
                            className="w-4 h-4 rounded-full"
                          />
                          <span className="text-xs">{post.author.name}</span>
                        </div>
                      </div>
                      <h4 className="text-sm font-semibold text-white mb-1 group-hover:text-blue-200 transition-colors">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h4>
                      <p className="text-xs text-gray-300 line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
