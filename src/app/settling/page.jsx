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
              {headerData.location || "U-District"}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {headerData.title || "Campus Orientation and Study Essentials"}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Your comprehensive guide to thriving at the University of
              Washington
            </p>
          </div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <main className="flex-1">
            <article className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="relative h-64 md:h-80">
                <img
                  src="https://uploads.visitseattle.org/2023/01/23114449/Banner_UW-Quad-CorbinSchaffer.jpg"
                  alt="UW Essentials Cover"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-sm opacity-90">
                    Published on June 1, 2025
                  </p>
                  <h2 className="text-2xl font-bold mt-1">
                    Essential Guide to UW Life
                  </h2>
                </div>
              </div>

              <div className="p-8 md:p-12 prose prose-lg max-w-none">
                <div id="phone_connectivity">
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-yellow-500 pl-4">
                    Phone & Connectivity
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    When you arrive at UW Seattle, getting a local phone number
                    is one of the first steps. Carriers like T-Mobile, AT&T, and
                    Mint Mobile offer prepaid plans from $15 to $50/month. Bring
                    an unlocked phone for easier switching. UW offers reliable
                    Wi-Fi on campus through “eduroam,” accessible with your
                    NetID. Dorms provide free Wi-Fi and Ethernet, while
                    off-campus housing may require personal internet service
                    like Xfinity.
                  </p>
                </div>
                <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-8 rounded-r-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">
                    💡 Pro Tip
                  </h4>
                  <p className="text-blue-800">
                    Set up your U.S. SIM card as soon as you land—don’t wait!
                    There are great deals for under $30/month. $50 is usually
                    too much for unlimited plans. Always compare and check for
                    student discounts.
                  </p>
                </div>
                <div id="banking_finances">
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-pink-500 pl-4">
                    Banking & Finances
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Open a U.S. bank account with banks like Chase, Bank of
                    America, or credit unions like WSECU. Checking accounts let
                    you pay bills and receive transfers via Zelle. Consider a
                    student credit card to build credit responsibly. Bring your
                    passport, I-20, and UW ID when opening an account. Use Venmo
                    or Cash App for peer payments and enable two-factor
                    authentication to stay secure.
                  </p>
                </div>
                <div id="transportation_options">
                  {" "}
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-blue-400 pl-4">
                    Transportation
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    UW’s U-PASS gives you free rides on Metro buses and Link
                    Light Rail using your Husky Card. The U District Station
                    connects you to downtown and the airport. Use apps like
                    OneBusAway and Transit for schedules. Rent e-bikes/scooters
                    or use Zipcar for errands. Most students don’t need
                    cars—parking is limited and expensive.
                  </p>
                </div>
                <div className="bg-gray-50 border-l-4 border-black p-6 my-8 rounded-r-lg">
                  <h4 className="text-sm text-blue-900 font-semibold mb-2">
                    Q: Would you recommend new students get a car or rely on
                    public transportation?
                  </h4>

                  <blockquote className="pl-5 mt-4">
                    <p className="text-lg text-gray-800 font-medium leading-relaxed italic">
                      “For most students, public transport is the way to go.
                      It's free with your Husky Card and super reliable — you
                      really don’t need a car.”
                    </p>
                    <div className="flex items-center gap-3 mt-4">
                      <img
                        src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                        alt="Enrico Pratama"
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <footer className="text-sm text-indigo-700 font-semibold">
                        — Enrico Pratama
                      </footer>
                    </div>
                  </blockquote>
                </div>

                <div id="everyday_essentials">
                  <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 border-l-4 border-red-400 pl-4">
                    Everyday Essentials
                  </h2>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    Grocery stores nearby include Safeway, Trader Joe’s, and
                    Whole Foods. For Asian ingredients, visit H Mart or
                    Uwajimaya. Get school supplies at the UW Bookstore and
                    Target. Dorm items can be found at IKEA or Facebook
                    Marketplace. Most places accept cards and mobile pay. Bring
                    reusable items and use Amazon Lockers for quick deliveries.
                  </p>
                </div>
              </div>
            </article>
          </main>

          {/* Sidebar */}
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
                    href="#phone_connectivity"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></span>
                    Phone & Connectivity
                  </a>
                </li>
                <li>
                  <a
                    href="#banking_finances"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></span>
                    banking & Finances
                  </a>
                </li>
                <li>
                  <a
                    href="#transportation_options"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3"></span>
                    Transportation
                  </a>
                </li>
                <li>
                  <a
                    href="#everyday_essentials"
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors p-2 rounded-lg hover:bg-blue-50"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3"></span>
                    Everyday Essential
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 relative space-y-6">
              {/* Header with underline */}
              <div className="relative w-fit mb-4">
                <h2 className="text-3xl font-bold text-gray-900 relative z-10">
                  Testimonial
                </h2>
                <div className="absolute left-0 bottom-[-6px] h-5 w-3/4 bg-yellow-400 z-0"></div>
              </div>

              {/* Big Quotation */}
              <div className="absolute w-65 h-32">
                <div className="inset-0 flex items-center justify-center">
                  <p className="text-[80px] leading-none text-black font-serif select-none">
                    “”
                  </p>
                </div>
              </div>

              {/* Quoted testimonial */}
              <p
                style={{ marginTop: "75px" }}
                className="text-lg text-gray-800 leading-relaxed italic"
              >
                I’m on Xfinity’s family plan with two friends — I pay just
                $20/month for unlimited data with hotspot. It’s super
                affordable, and coverage around campus is great.
              </p>

              {/* Profile footer */}
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=3&w=64&h=64&q=80"
                  alt="George Evans"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <footer className="text-sm text-indigo-700 font-semibold">
                  — George Evans
                </footer>
              </div>
            </div>

            {/* Mobile Data store near me */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Nearby Mobile Service Provider
              </h3>
              <div className="space-y-4">
                {[
                  {
                    name: "T-Mobile Store",
                    address: "4732 University Way NE, Seattle, WA 98105",
                    image:
                      "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  },
                  {
                    name: "AT&T Store",
                    address: "4700 Brooklyn Ave NE, Seattle, WA 98105",
                    image:
                      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  },
                  {
                    name: "Mint Mobile (via Target)",
                    address: "4535 University Way NE, Seattle, WA 98105",
                    image:
                      "https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                  },
                ].map((store, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden rounded-lg border border-gray-200"
                  >
                    <img
                      src={store.image}
                      alt={store.name}
                      className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 left-2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div>{store.name}</div>
                      <div className="text-xs font-normal">{store.address}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Banking Stat */}
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                International Students' Banking Choices
              </h3>
              <div className="space-y-4">
                {/* Chase */}
                <div className="space-y-1">
                  <div className="flex justify-between text-sm font-semibold">
                    <span>Chase</span>
                    <span>40%</span>
                  </div>
                  <div className="w-full bg-red-100 rounded-xl h-5">
                    <div
                      className="h-5 rounded-xl"
                      style={{ width: "40%", backgroundColor: "#d84d3d" }}
                    ></div>
                  </div>
                </div>

                {/* Bank of America */}
                <div className="space-y-1">
                  <div className="flex justify-between text-sm font-semibold">
                    <span>Bank of America</span>
                    <span>25%</span>
                  </div>
                  <div className="w-full bg-green-100 rounded-xl h-5">
                    <div
                      className="fbg-green-500 h-5 rounded-xl"
                      style={{ width: "25%" }}
                    ></div>
                  </div>
                </div>

                {/* WSECU */}
                <div className="space-y-1">
                  <div className="flex justify-between text-sm font-semibold">
                    <span>WSECU</span>
                    <span>20%</span>
                  </div>
                  <div className="w-full bg-purple-100 rounded-xl h-5">
                    <div
                      className="bg-purple-500 h-5 rounded-xl"
                      style={{ width: "20%" }}
                    ></div>
                  </div>
                </div>

                {/* Others */}
                <div className="space-y-1">
                  <div className="flex justify-between text-sm font-semibold">
                    <span>Others</span>
                    <span>15%</span>
                  </div>
                  <div
                    style={{ backgroundColor: "#dbeafe" }}
                    className="w-full rounded-xl h-5"
                  >
                    <div
                      className="bg-blue-500 h-5 rounded-xl"
                      style={{ width: "15%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Top Grocery Market */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200 space-y-4">
              <h3 className="text-lg font-bold text-gray-900">
                🛍️ Top Grocery Stores at UW
              </h3>

              <div>
                <p className="font-semibold text-indigo-700">Trader Joe's</p>
                <p className="text-sm text-gray-700">
                  Affordable groceries, fresh produce, and student-friendly meal
                  options — famous for snacks and frozen meals.
                </p>
              </div>

              <div>
                <p className="font-semibold text-indigo-700">Safeway</p>
                <p className="text-sm text-gray-700">
                  Large grocery chain with everything from fresh bakery and
                  meats to pharmacy and household goods — open late for
                  convenience.
                </p>
              </div>
            </div>

            {/* Related Articles */}
            {/* <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
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
            </div> */}
          </aside>
        </div>
      </div>
    </div>
  );
}
