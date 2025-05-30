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
          <h3>On-Campus Employment Opportunities at UW Seattle</h3>
          
          <h4>Housing & Food Services (HFS)</h4>
          <p>
            HFS is one of the largest student employers on campus, offering positions in:
          </p>
          <ul>
            <li>Dining facilities and cafes</li>
            <li>Residence hall front desks</li>
            <li>Maintenance and facilities</li>
            <li>Housing administration</li>
          </ul>
          <p>Most positions start at $17.69/hr with flexible scheduling around classes.</p>

          <h4>Teaching Assistant (TA) Positions</h4>
          <p>
            TAs support course instruction across various departments. Requirements typically include:
          </p>
          <ul>
            <li>Strong academic performance in the subject area</li>
            <li>Completion of the course you'll be TAing</li>
            <li>Good communication and teaching skills</li>
          </ul>
          <p>Positions usually include tuition waivers and competitive stipends.</p>

          <h4>Research Opportunities</h4>
          <p>
            Many departments offer paid research assistant positions where you can:
          </p>
          <ul>
            <li>Work directly with faculty on cutting-edge research</li>
            <li>Gain valuable experience in your field</li>
            <li>Build professional connections</li>
            <li>Potentially earn course credit</li>
          </ul>

          <h4>Student Technology Roles</h4>
          <p>
            UW Information Technology (UW-IT) hires students for various positions:
          </p>
          <ul>
            <li>Help desk support</li>
            <li>Computer lab consultants</li>
            <li>Web development</li>
            <li>Technical support</li>
          </ul>

          <h4>Library Employment</h4>
          <p>
            UW Libraries offer diverse employment opportunities:
          </p>
          <ul>
            <li>Circulation desk assistants</li>
            <li>Research help</li>
            <li>Digital collections</li>
            <li>Archives and special collections</li>
          </ul>

          <h4>How to Apply</h4>
          <p>
            Most on-campus positions are posted on HuskyJobs, UW's official job and internship search platform. Create an account and:
          </p>
          <ul>
            <li>Set up job alerts for positions that interest you</li>
            <li>Upload your resume and other documents</li>
            <li>Track your applications</li>
            <li>Connect with employers</li>
          </ul>
          <p>
            Pro tip: Start looking for positions early, as many departments hire weeks before the quarter begins.
          </p>
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
              <li>HFS Employment</li>
              <li>Teaching Assistant Positions</li>
              <li>Research Opportunities</li>
              <li>Student Technology Roles</li>
              <li>Library Jobs</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
