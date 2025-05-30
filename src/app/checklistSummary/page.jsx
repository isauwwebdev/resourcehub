"use client";
import React, { useState } from "react";
import Breadcrumb from "../components/breadcrumb";
import ChecklistItem from "../components/ChecklistItem";

export default function ChecklistSummary() {
  const [progress] = useState(36);
  const [steps] = useState([
    { id: 1, title: "Documents", completed: true },
    { id: 2, title: "Housing", completed: true },
    { id: 3, title: "Healthcare and Insurance", completed: false },
    { id: 4, title: "Course Registration", completed: false },
    { id: 5, title: "Student ID Card", completed: false }
  ]);

  return (
    <div className="p-6 bg-gray-50">
    <Breadcrumb />
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">RESOURCE BOARD</h1>
          <p className="text-lg text-gray-600">Complete all the tasks below and unlock your journey!</p>
        </div>
        <div className="bg-white rounded-2xl border border-gray-200 p-10">
     

        {/* Progress Section */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4">
              <svg className="w-6 h-6 text-red-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content text-yellow sm:text-2xl">
            <span
              className="bg-gradient-to-r from-orange-300 to-white text-transparent 
                          bg-clip-text font-semibold mx-auto"
            >
              Happening Now
            </span>
          </div>
            <span className="ml-auto text-2xl font-semibold text-gray-900">{progress}%</span>
          </div>

          {/* Progress Bar */}
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-red-800 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Checklist Items */}
        <div className="space-y-4">
          {steps.map((step) => (
            <ChecklistItem key={step.id} step={step} />
          ))}
        </div>
      </div>
    </div>
  </div>
  </div>
  );
}
