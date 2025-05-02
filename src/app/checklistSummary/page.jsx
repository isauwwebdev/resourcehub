"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "../components/breadcrumb";
import blogHeader from "../../../public/data/blogHeader.json";
import Image from "next/image";

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
          <h3>Checklist</h3>
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
        </aside>
      </div>
    </div>
  );
}
