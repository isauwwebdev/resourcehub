"use client";
import { usePathname } from "next/navigation";
import Breadcrumb from "../components/breadcrumb";
import blogHeader from "../../../public/data/blogHeader.json";
import Image from "next/image";
import ChatBubble from "../components/chatBubble";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const slides = [
  { icon: "/paulGAllenLogo.jpg", height: "220", width: "220" },
  { icon: "/ischoolLogo.avif", height: "60" },
  { icon: "/collegeEngineering.jpg", height: "220", width: "220" },
];

const duplicatedSlides = [...slides, ...slides];

export default function Page() {
  useEffect(() => {
    AOS.init();
  }, []);
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
    { id: "library_jobs", title: "UW Libraries", color: "indigo" },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen">
      <div className="py-10 px-6 md:px-12 lg:px-32 xl:px-48">
        <Breadcrumb />

        {/* Enhanced Header */}
        <div
          className="mt-8 mb-12 text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden bg-cover bg-center"
          style={{ backgroundImage: `url(${headerData.imageSrc})` }}
        >
          <div className="absolute inset-0 bg-black/30"></div>{" "}
          {/* Increased overlay opacity slightly for better contrast */}
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
              {headerData.location || "Work Opportunities"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {headerData.title || "Work Opportunities at UW"}
            </h1>
            <p className="text-blue-100 max-w-3xl mx-auto sm:text-md md:text-xl">
              Explore on-campus jobs, CPT, and OPT opportunities to gain
              experience and support your studies.
            </p>
            {/* The Image component that was here has been removed as the image is now the background */}
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
                  src="/diningStudentJobs.jpg"
                  alt="Work Opportunities at UW"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white text-wrap">
                  <p className="text-sm opacity-90">
                    Your Guide to Campus Employment
                  </p>
                  <h2 className="text-2xl font-bold mt-1 max-w-lg text-wrap mr-3">
                    Finding Work at the University of Washington
                  </h2>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12 prose prose-lg max-w-none">
                <h2
                  id="on_campus_employment"
                  className="text-3xl font-bold text-gray-900 mt-2 mb-6 border-l-4 border-blue-500 pl-4"
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
                <div
                  className="bg-green-50 border-l-4 border-green-400 p-6 my-8 rounded-r-lg"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  {" "}
                  <h4 className="font-semibold text-green-900 mb-2">
                    💡 HFS Perks
                  </h4>
                  <p className="text-green-800">
                    Many HFS jobs offer meal benefits or discounts, helping you
                    save on food costs!
                  </p>
                </div>

                <ChatBubble />

                <h3
                  id="ta_positions"
                  className="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-orange-500 pl-3"
                >
                  Teaching Assistant (TA) Positions
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  TA roles are available for students in many departments. Being
                  a TA allows you to gain valuable experience managing a large
                  group of students, and will significantly boost your resume as
                  well! Some benefits being a TA include:
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 leading-relaxed text-lg mb-6">
                  <li>
                    Enrolled in at least 6 credits (for undergraduate TAs) or 10
                    credits (for graduate TAs)
                  </li>
                  <li>Completion of the course</li>
                </ul>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Some of these roles can be applied through website portals,
                  but can also be applied through emailing you professors. It is
                  important to be proactive and getting close to professors
                  whenever you have the chance.
                </p>
                <div
                  className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg mb-4"
                  data-aos="fade-right"
                  data-aos-duration="500"
                >
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">
                    Some Useful TA Application Links
                  </h3>
                  <ul className="list-disc list-inside text-blue-800 space-y-1">
                    <li>
                      <a
                        href="https://courses.cs.washington.edu/courses/cse14x/ta/"
                        className="underline hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply to be a CSE 12X TA
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://ischool.uw.edu/about/jobs/students"
                        className="underline hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply to be a Informatics TA
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://wp.ece.uw.edu/eceta/prospective/"
                        className="underline hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply to be a ECE TA
                      </a>
                    </li>
                    {/* Add more links as needed */}
                  </ul>
                </div>
                <div
                  className="relative h-[10rem] overflow-hidden py-12 mx-auto align-center my-auto justify-center flex items-center"
                  style={{ width: "70%" }}
                >
                  <div className="absolute left-0 right-0 top-0 bottom-0 mx-auto inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-isauwRed before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-isauwRed after:to-transparent after:filter after:blur-3"></div>

                  <motion.div
                    className="flex h-full items-center"
                    animate={{
                      x: ["0%", "-250%"],
                      transition: {
                        ease: "linear",
                        duration: 3,
                        repeat: Infinity,
                      },
                    }}
                  >
                    {duplicatedSlides.map((slide, index) => (
                      <div
                        key={index}
                        className="flex-shrink-0"
                        style={{ width: `${320 / slides.length}%` }}
                      >
                        <div className="flex items-center justify-center h-full">
                          <img
                            src={slide.icon}
                            alt="sponsor logo"
                            style={{ height: `${slide.height}px` }}
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-300 p-4 mb-6 rounded-r-lg">
                  <p className="text-yellow-800 text-base">
                    Note: Some departments (such as Mathematics and Physics) may
                    require you to be enrolled in a Master’s program in order to
                    qualify for a TA position.
                  </p>
                </div>

                <h3
                  id="research_assistantships"
                  className="text-2xl font-semibold text-gray-800 mt-10 mb-4 border-l-4 border-purple-500 pl-3"
                >
                  Undergraduate Research Assistantships
                </h3>
                <p className="text-gray-700 leading-relaxed text-lg mb-6">
                  Undergraduate Research Assistantships (URAs) at the University
                  of Washington (UW) offer students a valuable opportunity to
                  engage in hands-on research across various disciplines. These
                  positions allow undergraduates to collaborate with faculty
                  members on real-world projects, enhancing their academic
                  experience and providing practical skills applicable to future
                  careers.
                </p>
                <ul className="list-disc pl-5 space-y-1 text-gray-700 leading-relaxed text-lg mb-6">
                  <li>Collaborate with faculty on real-world projects</li>
                  <li>Build experience in their major</li>
                  <li>Contribute to publications or conferences</li>
                  <li>Earn course credit in some cases</li>
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

          {/* Right Sidebar */}
          <aside className="w-full lg:w-80 space-y-6 sticky top-10 self-start">
            {/* Author Card */}
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 text-center shadow-lg border border-purple-100">
              <div className="relative inline-block mb-4">
                <Image
                  src="/enricoPicBubble.jpeg"
                  alt="Enrico profile"
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
                Connect with me on LinkedIn to learn more about my journey and
                experiences at the University of Washington!
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
