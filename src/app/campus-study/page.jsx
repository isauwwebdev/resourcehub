"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "../components/breadcrumb";
import blogHeader from "../../../public/data/blogHeader.json";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "UW CC Transfer Credit Guide",
    href: "https://admit.washington.edu/apply/transfer/equivalency-guide/",
    description:
      "Comprehensive guide to UW's transfer credit policies, course equivalencies, and how your previous coursework applies to your degree.",
    imageUrl:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Updated May 2025",
    datetime: "2025-05-01",
    author: {
      name: "UW Admissions",
      imageUrl: "https://brand.uw.edu/files/2019/09/W-Logo_Purple_RGB.png",
    },
  },
  {
    id: 2,
    title: "AP, IB & A-Level Credit Transfer",
    href: "https://admit.washington.edu/apply/transfer/exams-for-credit/",
    description:
      "Learn how your AP, IB, A-Level, and other exam scores can count toward UW credits and fulfill academic requirements.",
    imageUrl:
      "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    date: "Updated May 2025",
    datetime: "2025-05-01",
    author: {
      name: "UW Admissions",
      imageUrl: "https://brand.uw.edu/files/2019/09/W-Logo_Purple_RGB.png",
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
            {/* <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your comprehensive guide to thriving at the University of
              Washington
            </p> */}
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
                  src="/assets/headers/uw-campus-header.png"
                  alt="University of Washington Campus"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  {/* <p className="text-sm opacity-90">
                    Published on November 20, 2024
                  </p> */}
                  <h2 className="text-2xl font-bold mt-1">
                    Your Complete Guide to Campus Life
                  </h2>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-8 md:p-12 prose prose-lg max-w-none">
                <p className="text-xl text-gray-900 leading-relaxed mb-8 font-light">
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
                <p className="text-gray-900 leading-relaxed text-lg mb-6">
                  Starting college in a new country can be both exciting and
                  overwhelming. Whether you're navigating Seattle's weather,
                  figuring out which bank to use, or just trying to find your
                  go-to bubble tea spot, this section will walk you through the
                  essentials. From official university processes to insider tips
                  from fellow Indonesian students, here's everything you need to
                  feel prepared and supported from day one.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Seattle 101
                    </h3>
                    <p className="text-gray-900">
                      Seattle 101 is our annual informative session designed to
                      help prepare you to adjust to college life as easily as
                      possible! This event aims to help you learn more about
                      Seattle culture and the necessary tasks you have to do
                      after arriving. Additionally, you will have the
                      opportunity to learn about the experiences of our
                      presenters, find and meet new friends during our
                      networking session, and ask your burning questions during
                      our QnA session, such as: "Which bank should I register
                      for?" "What's the weather like?" "Where do people go to
                      have fun?" etc.
                    </p>
                    <div className="mt-4 relative h-64 rounded-xl overflow-hidden">
                      <img
                        src="/assets/events/seattle_101.jpg"
                        alt="Seattle 101 Event"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Seathrough
                    </h3>
                    <p className="text-gray-900">
                      Our annual dinner party that welcomes you to the
                      IndoHuskies Community. An event that you do not want to
                      miss out on as we'll be providing delicious Indonesian
                      food, an opportunity to create new friends, and win
                      one-of-kind prizes by playing our games!
                    </p>
                    <div className="mt-4 relative h-64 rounded-xl overflow-hidden">
                      <img
                        src="/assets/events/seathrough_1.jpeg"
                        alt="Seathrough Event"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Seattle Stamp Quest
                    </h3>
                    <p className="text-gray-900">
                      Seattle Stamp Quest is ISAUW's signature city-wide
                      scavenger hunt! Explore iconic Seattle spots, team up with
                      new friends, and complete fun challenges for a chance to
                      win exciting prizes. It's the perfect way to bond,
                      adventure, and make unforgettable memories around the
                      city!
                    </p>
                    <div className="mt-4 relative h-64 rounded-xl overflow-hidden">
                      <img
                        src="/assets/events/stamp_quest_1.jpeg"
                        alt="Seattle Stamp Quest Event"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      UW International Student Orientation (ISO)
                    </h3>
                    <p className="text-gray-900">
                      Run by UW's ISS, ISO covers:
                    </p>
                    <ul className="list-disc pl-5 text-gray-900 mt-2 space-y-1">
                      <li>Immigration check-in</li>
                      <li>Health insurance setup</li>
                      <li>Class registration</li>
                      <li>Campus policies overview</li>
                    </ul>
                    <p className="mt-2 text-sm text-red-600 font-medium">
                      *You must complete ISO before registering for classes.
                    </p>
                  </div>
                </div>

                <h2
                  id="campus_access"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-green-500 pl-4"
                >
                  Campus Access
                </h2>
                <p className="text-gray-900 leading-relaxed text-lg mb-6">
                  Your Husky Card grants access to libraries, residence halls,
                  academic buildings, and U-PASS transportation. Don't forget it
                  because it's your ID, meal pass, and your key into UW's
                  secured spaces.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
                  <h4 className="font-semibold text-blue-900 mb-4">
                    🧭 Navigating UW Campus
                  </h4>
                  <ul className="text-blue-800 space-y-2 text-sm">
                    <li>
                      • Download Google Maps and search buildings by code (MGH =
                      Mary Gates Hall)
                    </li>
                    <li>
                      • Walking and bus/light rail are most common
                      transportation methods
                    </li>
                    <li>
                      • Campus is large but easy to learn after your first week
                    </li>
                    <li>
                      • Follow the crowd during rush hours; you'll figure it out
                      fast
                    </li>
                    <li>
                      • For room numbers, the first digit represents the floor
                      (e.g., MGH 241 = 2nd floor)
                    </li>
                  </ul>
                  <p className="text-blue-800 mt-3 italic">
                    "I just used Google Maps and followed the crowd. You'll
                    figure it out fast."
                  </p>
                </div>

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
                      <li>• Pick up at Odegaard Library</li>
                    </ul>
                  </div>
                </div>

                <h2
                  id="university_tools"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-orange-500 pl-4"
                >
                  University Tools & Academic Success
                </h2>

                <p className="text-gray-900 leading-relaxed text-lg mb-6">
                  These tools, combined with advice from peers, will save you
                  time, help you avoid common mistakes, and boost your academic
                  experience at UW.
                </p>

                <div className="bg-orange-50 p-6 rounded-lg border border-orange-200 mb-6">
                  <h4 className="font-semibold text-orange-900 mb-4">
                    🚀 Most Recommended Tools
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6 mb-6 text-left">
                    <div>
                      <p className="text-base font-semibold text-gray-900">
                        RateMyProfessors
                      </p>
                      <p className="text-sm text-gray-700">
                        Find good profs, avoid surprises
                      </p>
                    </div>
                    <div>
                      <p className="text-base font-semibold text-gray-900">
                        DawgPath
                      </p>
                      <p className="text-sm text-gray-700">
                        Plan majors, see GPA trends
                      </p>
                    </div>
                    <div>
                      <p className="text-base font-semibold text-gray-900">
                        Schedule Builder
                      </p>
                      <p className="text-sm text-gray-700">
                        Build your perfect weekly plan
                      </p>
                    </div>
                  </div>

                  <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
                    <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-900">
                      <thead className="bg-gray-50 text-gray-900">
                        <tr>
                          <th className="px-6 py-3 font-semibold">
                            Tool / Strategy
                          </th>
                          <th className="px-6 py-3 font-semibold">
                            Why Students Use It
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium">MyUW</td>
                          <td className="px-6 py-4">
                            Register for classes, activate U-PASS, pay tuition
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium">Canvas</td>
                          <td className="px-6 py-4">
                            Access class materials, grades, and announcements
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium">
                            RateMyProfessors
                          </td>
                          <td className="px-6 py-4">
                            Pick the right instructors, avoid unnecessary stress
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium">DawgPath</td>
                          <td className="px-6 py-4">
                            Explore course history and GPA data by quarter
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium">
                            Schedule Builder
                          </td>
                          <td className="px-6 py-4">
                            Test different schedules before registration opens
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium">
                            UW Libraries
                          </td>
                          <td className="px-6 py-4">
                            Access eBooks, quiet spaces, and free academic help
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium">
                            Talking to Seniors
                          </td>
                          <td className="px-6 py-4">
                            Get real insights on course workload and professor
                            quirks
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium">
                            Reddit & Discord
                          </td>
                          <td className="px-6 py-4">
                            Check r/UWashington and class Discords for
                            up-to-date tips
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="px-6 py-4 font-medium">Advisors</td>
                          <td className="px-6 py-4">
                            Clarify degree requirements and long-term planning
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-green-50 p-6 rounded-lg border border-green-200 mb-6">
                  <h4 className="font-semibold text-green-900 mb-4">
                    💡 Specific Academic Tips
                  </h4>
                  <ul className="text-green-800 space-y-2">
                    <li>
                      • <strong>Talk to seniors</strong> because their advice is
                      gold
                    </li>
                    <li>
                      • <strong>Use office hours early</strong> since they're
                      not just for emergencies
                    </li>
                    <li>
                      • <strong>Study with friends</strong> or join a Discord
                      study server
                    </li>
                    <li>
                      • <strong>CLUE tutoring</strong> is free and available
                      late into the night
                    </li>
                  </ul>
                  <p className="text-green-800 mt-3 italic">
                    "RateMyProfessors helped me avoid bad profs. DawgPath showed
                    me which classes were GPA traps."
                  </p>
                </div>

                <h2
                  id="recommended_classes"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-pink-500 pl-4"
                >
                  Recommended Classes (from Indonesian Students)
                </h2>

                <p className="text-gray-900 leading-relaxed text-lg mb-6">
                  These classes came up frequently in survey responses from
                  Indonesian students at UW:
                </p>

                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-8">
                  <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-900">
                    <thead className="bg-gray-50 text-gray-900">
                      <tr>
                        <th className="px-6 py-3 font-semibold">Class</th>
                        <th className="px-6 py-3 font-semibold">
                          Why Students Recommend It
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">PSYCH 210</td>
                        <td className="px-6 py-4">
                          Easy GPA boost, fun intro to psychology
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">ARCH 150</td>
                        <td className="px-6 py-4">
                          Interesting content, visual and creative
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">EDUC 215</td>
                        <td className="px-6 py-4">
                          High GPA potential, personal growth focus
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">DRAMA 111</td>
                        <td className="px-6 py-4">Engaging and low stress</td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">CLAS 430</td>
                        <td className="px-6 py-4">
                          Greek mythology, good for online learners
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-8">
                  <p className="text-pink-800 italic">
                    "Pick classes with good profs, not just easy grades. Some
                    bring real-world experience that makes learning way more
                    fun."
                  </p>
                </div>

                <h2
                  id="transfer_credits"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-purple-500 pl-4"
                >
                  Transfer Credits
                </h2>

                <p className="text-gray-900 leading-relaxed text-lg mb-6">
                  If you're bringing in credits from another institution or
                  exam-based programs like A-Levels, IB, or AP, UW has tools to
                  help you understand what will transfer.
                </p>

                <div className="bg-purple-50 p-6 rounded-lg border border-purple-200 mb-6">
                  <h4 className="font-semibold text-purple-900 mb-2">
                    🏫 Washington Community College Transfers
                  </h4>
                  <p className="text-purple-800 mb-2">
                    Use UW's{" "}
                    <a
                      href="https://admit.washington.edu/apply/transfer/equivalency-guide/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 underline font-medium"
                    >
                      Transfer Equivalency Guide
                    </a>{" "}
                    to see how your courses from Washington State community or
                    technical colleges count toward UW requirements.
                  </p>
                  <ul className="list-disc pl-5 text-purple-800 space-y-1 text-sm">
                    <li>Search by school and course</li>
                    <li>
                      Find out if your classes fulfill general ed or major
                      requirements
                    </li>
                    <li>Bring your results to your advisor for planning</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200 mb-6">
                  <h4 className="font-semibold text-yellow-900 mb-2">
                    🧠 Exam-Based Credit (A-Level, IB, AP)
                  </h4>
                  <p className="text-yellow-800 mb-2">
                    UW awards credit for certain scores on A-Level, IB, and AP
                    exams. Visit the{" "}
                    <a
                      href="https://admit.washington.edu/apply/transfer/exams-for-credit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-700 underline font-medium"
                    >
                      Exams for Credit
                    </a>{" "}
                    page to see how much credit you may receive.
                  </p>
                  <ul className="list-disc pl-5 text-yellow-800 space-y-1 text-sm">
                    <li>
                      AP scores of 3 or higher may earn elective or subject
                      credit
                    </li>
                    <li>
                      IB Higher Level (HL) scores often earn more credit than
                      Standard Level (SL)
                    </li>
                    <li>
                      Cambridge A-Level credits depend on subject and score
                    </li>
                  </ul>
                </div>

                <div className="bg-gray-50 border-l-4 border-gray-300 p-5 rounded-r-lg">
                  <p className="text-gray-800">
                    Be sure to submit your official transcripts or exam results
                    to UW Admissions and discuss your Degree Audit (DARS) with
                    an academic advisor to confirm how your credits apply to
                    your major or graduation plan.
                  </p>
                </div>

                <h2
                  id="study_spots"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-teal-500 pl-4"
                >
                  Popular Study Spots
                </h2>

                <p className="text-gray-900 leading-relaxed text-lg mb-6">
                  Based on feedback from students at UW, here are the study
                  spots they frequently recommend. Whether you need total
                  silence or a cozy café with good matcha and outlets, these
                  places have become favorites in the community:
                </p>

                <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm mb-8">
                  <table className="min-w-full divide-y divide-gray-200 text-sm text-left text-gray-900">
                    <thead className="bg-gray-50 text-gray-900">
                      <tr>
                        <th className="px-6 py-3 font-semibold">Spot</th>
                        <th className="px-6 py-3 font-semibold">
                          What Students Say
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">
                          Suzzallo Library
                        </td>
                        <td className="px-6 py-4">
                          Iconic architecture, silent reading room, and
                          inspiring atmosphere.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">
                          Odegaard Library
                        </td>
                        <td className="px-6 py-4">
                          Open 24/7, perfect for group work and access to
                          printers and tech.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">
                          Starbucks @ Suzzallo
                        </td>
                        <td className="px-6 py-4">
                          Comfy, accessible, and located right inside the
                          library. Great for casual study sessions.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">Sip House</td>
                        <td className="px-6 py-4">
                          Highly aesthetic, great drinks, and charging ports.
                          Just be early, it fills up fast.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">Mr. West</td>
                        <td className="px-6 py-4">
                          Cozy vibes and good matcha. Ideal for long, focused
                          sessions.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">Ugly Mug</td>
                        <td className="px-6 py-4">
                          Charming small space with great coffee and chill
                          energy.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">
                          Café on the Ave
                        </td>
                        <td className="px-6 py-4">
                          Convenient location with solid menu and a laid-back
                          crowd.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">Tea Republic</td>
                        <td className="px-6 py-4">
                          Quiet and comfortable, great for solo studying.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">
                          Café Joy (Bellevue)
                        </td>
                        <td className="px-6 py-4">
                          Stylish space with a full drink menu, best for small
                          groups.
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">
                          Thruline Coffee (Kirkland)
                        </td>
                        <td className="px-6 py-4">
                          Off-campus but peaceful and aesthetic. Perfect for a
                          change of scenery.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <blockquote className="border-l-4 pl-4 italic text-gray-900 text-base leading-relaxed">
                  "Sip House has amazing drinks but fills up fast. Starbucks at
                  Suzzallo is my go-to backup."
                </blockquote>

                <h2
                  id="course_materials"
                  className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-indigo-500 pl-4"
                >
                  Course Materials & Textbooks
                </h2>
                <p className="text-gray-900 leading-relaxed text-lg mb-6">
                  Get textbooks through the UW Bookstore, but always check
                  Canvas and Course Reserves first for free PDFs or open-access
                  links. Suzzallo Library may have course reserves, and you can
                  often find used books via Reddit or Facebook groups.
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

                <div className="mt-6 bg-blue-100 border-l-4 border-blue-400 p-5 rounded-r-lg">
                  <h4 className="text-blue-900 font-semibold mb-2">
                    🤝 Need Help?
                  </h4>
                  <p className="text-blue-800">
                    Reach out to ISAUW, your academic department, or ISS.
                    There's always someone ready to help. Whether you're
                    confused about class registration, looking for textbooks, or
                    just feeling a little lost, support is available.
                  </p>
                </div>
              </div>
            </article>
          </main>

          {/* Enhanced Visual Sidebar */}
          <aside className="w-full lg:w-80 space-y-6">
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
                    className="flex items-center text-gray-900 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                    Orientation & Onboarding
                  </a>
                </li>
                <li>
                  <a
                    href="#campus_access"
                    className="flex items-center text-gray-900 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                    Campus Access
                  </a>
                </li>
                <li>
                  <a
                    href="#university_tools"
                    className="flex items-center text-gray-900 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                    University Tools & Academic Success
                  </a>
                </li>
                <li>
                  <a
                    href="#recommended_classes"
                    className="flex items-center text-gray-900 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-pink-400 rounded-full mr-3"></span>
                    Recommended Classes
                  </a>
                </li>
                <li>
                  <a
                    href="#transfer_credits"
                    className="flex items-center text-gray-900 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                    Transfer Credits
                  </a>
                </li>
                <li>
                  <a
                    href="#study_spots"
                    className="flex items-center text-gray-900 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3"></span>
                    Best Study Spots
                  </a>
                </li>
                <li>
                  <a
                    href="#course_materials"
                    className="flex items-center text-gray-900 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
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
                    className="group relative h-40 overflow-hidden rounded-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600" />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/10" />

                    <div className="relative h-full flex flex-col justify-end p-4">
                      <div className="flex items-center gap-x-2 mb-2">
                        <div className="flex items-center gap-x-1.5 px-3 py-1.5 bg-white/10 rounded-full backdrop-blur-sm">
                          <span className="w-2 h-2 rounded-full bg-green-400"></span>
                          <span className="text-xs text-white font-medium">
                            {post.author.name}
                          </span>
                        </div>
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-100 transition-colors line-clamp-2">
                        <a href={post.href} className="hover:underline">
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h4>
                      <p className="text-sm text-white/90 line-clamp-2">
                        {post.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Quick Facts */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                UW Seattle Quick Facts
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <span className="text-blue-900 font-medium">
                    Seattle Campus Students
                  </span>
                  <span className="text-blue-600 font-bold">51,719</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                  <span className="text-purple-900 font-medium">
                    Degree Programs
                  </span>
                  <span className="text-purple-600 font-bold">484</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-emerald-50 rounded-lg">
                  <span className="text-emerald-900 font-medium">
                    International Students
                  </span>
                  <span className="text-emerald-600 font-bold">13%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-amber-50 rounded-lg">
                  <span className="text-amber-900 font-medium">
                    STEM Students
                  </span>
                  <span className="text-amber-600 font-bold">49%</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-rose-50 rounded-lg">
                  <span className="text-rose-900 font-medium">
                    Graduation Rate
                  </span>
                  <span className="text-rose-600 font-bold">84%</span>
                </div>
              </div>
            </div>

            {/* Author Card */}
            {/* <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 text-center shadow-lg border border-purple-100">
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
							<p className="text-sm text-gray-900 mt-2 leading-relaxed">
								AMAZON Intern • Teaching Assistant • CS Tutor • WebDev Lead •
								Google SWE
							</p>
						</div> */}

            {/* Quick Tip Card */}
            <a
              href="https://fyp.uw.edu/first-year-interest-groups/"
              target="_blank"
              rel="noopener noreferrer"
              className="block group hover:transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl p-6 text-center shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
                <div className="relative inline-block mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <span className="text-2xl text-white">💡</span>
                  </div>
                </div>
                <h4 className="font-bold text-purple-900 text-lg group-hover:text-purple-700">
                  Quick Tip: Join a FIG!
                </h4>
                <p className="text-sm text-gray-900 mt-2 leading-relaxed">
                  First-year Interest Groups (FIGs) are a great way to meet new
                  friends who share your academic interests during your first
                  quarter. You'll take classes together and have built-in study
                  buddies!
                </p>
              </div>
            </a>

            {/* Campus Gallery */}
            {/* <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
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
            </div> */}
          </aside>
        </div>
      </div>
    </div>
  );
}
