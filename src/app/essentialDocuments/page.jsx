"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "../components/breadcrumb";
import blogHeader from "../../../public/data/blogHeader.json";
import Image from "next/image";

const posts = [
  {
    id: 1,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Michael Foster",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
];

export default function Page() {
  const titleName = usePathname().split("/").at(-1);
  const headerData = blogHeader[titleName] || {};

  return (
    <div className="bg-white min-h-screen py-10 px-6 md:px-12 lg:px-32 xl:px-48">
      <Breadcrumb />

      <div
        className="mt-8 mb-12 text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${headerData.imageSrc})` }}
      >
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
            Your comprehensive guide to essential documents and resources for
            settling in.
          </p>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 text-gray-900">
        <main className="flex-1 prose prose-lg max-w-none">
          <section id="orientation_onboarding" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">Orientation & Onboarding</h3>
            <p>
              Start strong at UW by attending Advising & Orientation (A&O),
              joining iSchool welcome sessions, and connecting with peer
              mentors. You'll get support with registering for classes, setting
              up your NetID and MyUW account, and navigating platforms like
              Canvas and MyPlan.
            </p>
          </section>

          <section id="campus_access" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">Campus Access</h3>
            <p>
              Your Husky Card grants access to libraries, residence halls,
              academic buildings, and U-PASS transportation. Don't forget it —
              it's your ID, meal pass, and your key into UW's secured spaces.
            </p>
          </section>

          <section id="academic_tools" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">
              University Tools & Academic Success
            </h3>
            <p>
              Use Canvas for course content, MyPlan for academic planning, and
              Panopto for recorded lectures. Leverage support services like CLUE
              tutoring, iSchool peer advising, and academic coaching from the
              Office of Minority Affairs.
            </p>
          </section>

          <section id="transfer_credits" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">Transfer Credits</h3>
            <p>
              Bringing in AP, IB, or community college credits? Submit
              transcripts early, check your Degree Audit (DARS), and confirm
              with your advisor how they apply to your major or general
              education requirements.
            </p>
          </section>

          <section id="study_spots" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">Best Study Spots</h3>
            <p>
              Find your ideal study zone—whether it's the grand Suzzallo Reading
              Room, 24/7 Odegaard Library, iSchool lounge, or hidden gems like
              Denny Hall nooks and HUB's quiet corners.
            </p>
          </section>

          <section id="course_materials" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">Course Materials & Textbook</h3>
            <p>
              Get textbooks through the UW Bookstore, but always check Canvas
              and Leganto first for free PDFs or open-access links. Suzzallo
              Library may have course reserves, and you can often find used
              books via Reddit or Facebook groups.
            </p>
          </section>
        </main>

        <aside className="w-full lg:w-80 space-y-6">
          <div className="bg-purple-100 rounded-lg p-4 text-center">
            <Image
              src="/assets/enrico.png"
              alt="Author profile"
              width={80}
              height={80}
              className="rounded-full mx-auto mb-2"
            />
            <h4 className="font-semibold text-purple-900">Enrico Pratama</h4>
            <p className="text-sm text-gray-700">
              AMAZON Intern, Teaching Assistant, CS Tutor, WebDev Lead, Google
              SWE
            </p>
          </div>

          <div className="bg-white border rounded-lg p-4">
            <h5 className="text-sm font-semibold mb-2 text-gray-800">
              In this article
            </h5>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
              <li>
                <a href="#orientation_onboarding">Orientation & Onboarding</a>
              </li>
              <li>
                <a href="#campus_access">Campus Access</a>
              </li>
              <li>
                <a href="#academic_tools">
                  University Tools & Academic Success
                </a>
              </li>
              <li>
                <a href="#transfer_credits">Transfer Credits</a>
              </li>
              <li>
                <a href="#study_spots">Best Study Spots</a>
              </li>
              <li>
                <a href="#course_materials">Course Materials & Textbook</a>
              </li>
            </ul>
          </div>

          <div className="bg-white py-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              From the blog
            </h3>
            <div className="space-y-6">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl bg-gray-900 px-5 pt-56 pb-5"
                >
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="absolute inset-0 -z-10 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                  <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-gray-900/10 ring-inset" />

                  <div className="text-sm text-gray-300 flex items-center gap-x-2">
                    <time dateTime={post.datetime}>{post.date}</time>
                    <span className="text-white/50">•</span>
                    <div className="flex items-center gap-x-2">
                      <img
                        src={post.author.imageUrl}
                        alt=""
                        className="w-6 h-6 rounded-full"
                      />
                      <span>{post.author.name}</span>
                    </div>
                  </div>
                  <h3 className="mt-2 text-base font-semibold text-white">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                </article>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
