import React from "react";

export default function ChecklistItem({ step }) {
  return (
    <div 
      className="border-[0.8px] border-red-800 rounded-lg p-6 hover:bg-gray-50 transition-colors duration-200 shadow"
    >
      <div className="flex items-start justify-between">
        <div className="flex flex-col ml-6">
          <div className="text-red-800 font-semibold">
            STEP {step.id}
          </div>
          <h3 className="text-2xl font-[500] text-gray-900">
            {step.title}
          </h3>
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center
          ${step.completed 
            ? "bg-green-100 text-green-600" 
            : "bg-gray-100 text-gray-400"}`}
        >
          {step.completed ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <div className="w-4 h-4 rounded-full border-2 border-gray-400"></div>
          )}
        </div>
      </div>
    </div>
  );
}
