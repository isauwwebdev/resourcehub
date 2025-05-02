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
      {/* Breadcrumb */}
      <Breadcrumb />

      {/* Header Card */}
      <div className="mt-8 mb-10 bg-gradient-to-r from-indigo-900 to-purple-700 text-white rounded-lg p-6 text-center">
        <h1 className="text-lg tracking-widest font-semibold uppercase">
          {headerData.location || "LOCATION NAME"}
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          {headerData.title || "Blog Title Placeholder"}
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Main Content */}
        <main className="flex-1 prose prose-lg max-w-none">
          <div id="visa_documentation" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">Visa Documentation</h3>
            <p>
              Safeway UW, the unofficial hub of late-night survival and
              caffeinated desperation, is more than just a grocery store — it's
              a rite of passage for every poor student bold enough to venture
              into its fluorescent-lit aisles... Safeway UW, the unofficial hub
              of late-night survival and caffeinated desperation, is more than
              just a grocery store — it's a rite of passage for every poor
              student bold enough to venture into its fluorescent-lit aisles...
              Safeway UW, the unofficial hub of late-night survival and
              caffeinated desperation, is more than just a grocery store — it's
              a rite of passage for every poor student bold enough to venture
              into its fluorescent-lit aisles... Safeway UW, the unofficial hub
              of late-night survival and caffeinated desperation, is more than
              just a grocery store — it's a rite of passage for every poor
              student bold enough to venture into its fluorescent-lit aisles...
              Safeway UW, the unofficial hub of late-night survival and
              caffeinated desperation, is more than just a grocery store — it's
              a rite of passage for every poor student bold enough to venture
              into its fluorescent-lit aisles... Safeway UW, the unofficial hub
              of late-night survival and caffeinated desperation, is more than
              just a grocery store — it's a rite of passage for every poor
              student bold enough to venture into its fluorescent-lit aisles...
            </p>
            <p>
              Safeway UW, the unofficial hub of late-night survival and
              caffeinated desperation, is more than just a grocery store — it's
              a rite of passage for every poor student bold enough to venture
              into its fluorescent-lit aisles...
            </p>
            <p>
              Safeway UW, the unofficial hub of late-night survival and
              caffeinated desperation, is more than just a grocery store — it's
              a rite of passage for every poor student bold enough to venture
              into its fluorescent-lit aisles...
            </p>
          </div>

          <div id="housing_arrangement" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">Housing Arrangement</h3>
            <p>
              Safeway UW, the unofficial hub of late-night survival and
              caffeinated desperation, is more than just a grocery store — it's
              a rite of passage for every poor student bold enough to venture
              into its fluorescent-lit aisles...
            </p>
            <p>
              Google encourages high-quality blogs regardless of whether they’re
              written by humans or created using artificial intelligence like
              ChatGPT...
            </p>
            <p>
              Safeway UW, the unofficial hub of late-night survival and
              caffeinated desperation, is more than just a grocery store — it's
              a rite of passage for every poor student bold enough to venture
              into its fluorescent-lit aisles...
            </p>
            <p>
              Safeway UW, the unofficial hub of late-night survival and
              caffeinated desperation, is more than just a grocery store — it's
              a rite of passage for every poor student bold enough to venture
              into its fluorescent-lit aisles...
            </p>
          </div>
          <div id="health_insurance" className="pb-10 mb-10">
            <h3 className="text-lg font-bold">Health Insurance</h3>
            <p>
              Safeway UW, the unofficial hub of late-night survival and
              caffeinated desperation, is more than just a grocery store — it's
              a rite of passage for every poor student bold enough to venture
              into its fluorescent-lit aisles...
            </p>
            <p>
              Google encourages high-quality blogs regardless of whether they’re
              written by humans or created using artificial intelligence like
              ChatGPT...
            </p>
            <p>
              Safeway UW, the unofficial hub of late-night survival and
              caffeinated desperation, is more than just a grocery store — it's
              a rite of passage for every poor student bold enough to venture
              into its fluorescent-lit aisles...
            </p>
            <p>
              Safeway UW, the unofficial hub of late-night survival and
              caffeinated desperation, is more than just a grocery store — it's
              a rite of passage for every poor student bold enough to venture
              into its fluorescent-lit aisles...
            </p>
          </div>
        </main>

        {/* Sidebar */}
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
              <li>Safeway UDistrict</li>
              <li>AI Writing Pitfalls</li>
              <li>ChatGPT Style</li>
              <li>AI Transparency</li>
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
