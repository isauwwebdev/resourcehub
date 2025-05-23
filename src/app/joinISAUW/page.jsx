"use client";
import React, { useState } from "react";
import Breadcrumb from "../components/breadcrumb";

export default function Sarcb() {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    graduation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add your backend API call or email logic here
  };

  return (
    <div className="p-6 bg-white ">
      <Breadcrumb />
      <div
        style={{ width: "800px" }}
        className="flex flex-row w-2/3 items-center justify-center p-6 bg-white mx-auto"
      >
        {/* Left side: Form */}
        <div style={{ width: "350px" }} className="w-full pr-6">
          <div className="py-6">
            <h1
              style={{ fontFamily: "Helvetica", fontSize: "2rem" }}
              className="text-xl text-center text-red-800 font-bold mb-4"
            >
              Let's Connect!
            </h1>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium mb-1">
                What is your full name?
              </label>
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                style={{ borderBottom: "1px solid black" }}
                className="w-full px-3 py-2 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Your Active Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                style={{ borderBottom: "1px solid black" }}
                className="w-full px-3 py-2 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                Your School Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                style={{ borderBottom: "1px solid black" }}
                className="w-full px-3 py-2 focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block font-medium mb-1">
                What is your expected graduation?
              </label>
              <input
                type="text"
                name="graduation"
                placeholder="e.g., June 2026"
                value={formData.graduation}
                onChange={handleChange}
                style={{ borderBottom: "1px solid black" }}
                className="w-full px-3 py-2 focus:outline-none"
                required
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "#8c0000d9",
                fontFamily: "Helvetica",
                margin: "20px 0",
              }}
              className="bg-blue-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-[1.05]"
            >
              <span className="flex flex-row flex-wrap">
                <p style={{ margin: "0px 5px" }}>Submit</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-5"
                  style={{
                    marginBottom: "4px",
                    marginLeft: "2px",
                    rotate: " -30deg",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </span>
            </button>
          </form>
        </div>

        {/* Right side: Image */}
        <div style={{ width: "450px" }} className="flex justify-end">
          <img
            src="/friendsGather.svg"
            alt="Friends Gather"
            className="h-auto"
            style={{ width: "350px" }}
          />
        </div>
      </div>
    </div>
  );
}
