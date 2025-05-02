"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Breadcrumb from "../components/breadcrumb";
import blogHeader from "../../../public/data/blogHeader.json";

export default function Page() {
  const titleName = usePathname().split("/").at(-1);
  const headerData = blogHeader[titleName];

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <Breadcrumb />
      {/* Blog Header Section */}
      <div className="mt-6 mb-10 bg-purple-800 text-white p-6 rounded-lg text-center">
        <h1 className="text-xl font-semibold tracking-wide uppercase">
          {headerData?.location || "Unknown Location"}
        </h1>
        <h2 className="text-3xl font-bold mt-2">
          {headerData?.title || "Blog Title"}
        </h2>
      </div>

      {/* Blog Content */}
      <article className="prose max-w-none prose-p:text-gray-700 prose-headings:text-gray-900 prose-a:text-blue-700">
        <p>
          Safeway UW, the unofficial hub of late-night survival and caffeinated
          desperation, is more than just a grocery store — it’s a rite of
          passage for every poor student...
        </p>

        <p>
          Google encourages high-quality blogs regardless of whether they’re
          written by humans or created using artificial intelligence like
          ChatGPT. Here’s what matters...
        </p>

        <h3>Steering Clear of Common AI Writing Pitfalls</h3>
        <p>
          One common issue is quantity over quality — they churn out blogs, but
          each one feels robotic and soulless...
        </p>

        <h3>Understanding ChatGPT Capabilities - Define Your Style</h3>
        <p>
          Welcome to the intriguing world of ChatGPT. Its ability and potential
          can truly be mind-boggling...
        </p>
      </article>
    </div>
  );
}
