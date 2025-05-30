"use client";
import React, { useState } from "react";
import Breadcrumb from "../components/breadcrumb";
import { H1Icon } from "@heroicons/react/24/outline";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Sarcb() {
  const [formData, setFormData] = useState({
    isUWstudent: "",
    fullname: "",
    phone: "",
    email: "",
    graduation: "",
    role: "",
    question: "",
  });

  const [showFollowUp, setShowFollowUp] = useState(false);
  const [showStudentQuestion, setShowStudentQuestion] = useState(false);
  const [fadeUWQuestion, setFadeUWQuestion] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleRadioClick = (e) => {
    const value = e.target.value;
    if (formData.isUWstudent === value && showFollowUp) {
      setShowFollowUp(false);
      setFormData({ ...formData, isUWstudent: "" });
    } else {
      setFormData({ ...formData, isUWstudent: value });
      setFadeUWQuestion(true);
      setTimeout(() => {
        setShowFollowUp(true);
        setShowStudentQuestion(value === "yes");
      }, 300);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const docRef = await addDoc(collection(db, "joinRequests"), {
        ...formData,
        timestamp: new Date(),
      });

      setSuccess(true);
      setFormData({
        isUWstudent: "",
        fullname: "",
        phone: "",
        email: "",
        graduation: "",
        role: "",
        question: "",
      });
    } catch (err) {
      setError("Failed to submit form. Please try again.");
      console.error("Error adding document: ", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white">
      <Breadcrumb />
      <div className="flex flex-col-reverse md:flex-row w-2/3 items-center justify-center p-6 bg-white mx-auto">
        <div className="w-full max-w-md pr-6 flex items-center min-h-[300px]">
          <form onSubmit={handleSubmit} className="space-y-4 w-full">
            {!fadeUWQuestion && (
              <div
                className={`transition-opacity duration-300 flex flex-col justify-center h-full ${
                  showFollowUp ? "opacity-0" : "opacity-100"
                }`}
              >
                <h1
                  style={{ fontSize: "2rem", marginBottom: "30px" }}
                  className="text-center font-poppins text-red-900 font-bold text-xl"
                >
                  Let's Connect!
                </h1>
                <label className="block font-medium text-center">
                  Are you a current UW Student?
                </label>
                <div className="flex flex-row justify-center gap-4 mt-2 w-full">
                  {["yes", "no"].map((val) => (
                    <label
                      key={val}
                      className={`flex items-center gap-2 px-4 border rounded-lg cursor-pointer transition-all ${
                        formData.isUWstudent === val
                          ? "border-purple-600 bg-purple-50 text-purple-700"
                          : "border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="isUWstudent"
                        value={val}
                        checked={formData.isUWstudent === val}
                        onChange={handleRadioClick}
                        className="hidden"
                      />
                      <span className="font-medium text-base capitalize">
                        {val}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            )}

            {showFollowUp && (
              <div className="transition-opacity duration-500 ease-in-out opacity-100">
                {showStudentQuestion ? (
                  <>
                    <InputField
                      label="What is your full name?"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                    />{" "}
                    <InputField
                      label="Your Active Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                    />
                    <InputField
                      label="Your School Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="@uw.edu email"
                    />
                    <InputField
                      label="What is your expected graduation?"
                      name="graduation"
                      value={formData.graduation}
                      onChange={handleChange}
                      placeholder="e.g., June 2026"
                    />
                  </>
                ) : (
                  <>
                    <InputField
                      label="What is your full name?"
                      name="fullname"
                      value={formData.fullname}
                      onChange={handleChange}
                    />
                    <InputField
                      label="Your Active Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      type="tel"
                    />
                    <InputField
                      label="Your Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                    />
                    <div className="mt-5">
                      <label className="block font-medium mb-1">
                        What is your role?
                      </label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none"
                      >
                        <option value="">-- Select your role --</option>
                        <option value="prospective">
                          Prospective UW Student
                        </option>
                        <option value="parent">Parent</option>
                        <option value="sponsor">Sponsor</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </>
                )}

                <div className="mt-5">
                  <label className="block font-medium mb-2">
                    Have a question? Ask us anything!
                  </label>
                  <textarea
                    name="question"
                    value={formData.question}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-3 py-2 border border-black-300 focus:outline-none"
                    placeholder="Type your question here..."
                  />
                </div>
              </div>
            )}

            {showFollowUp && (
              <button
                type="submit"
                style={{
                  backgroundColor: "#8c0000d9",
                  fontFamily: "Helvetica",
                }}
                className="bg-blue-600 text-white px-4 py-2 rounded font-semibold transform hover:scale-[1.05] mt-4"
              >
                <span className="flex flex-row items-center">
                  <p className="mr-2">Submit</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 rotate-[-30deg]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                    />
                  </svg>
                </span>
              </button>
            )}
          </form>
        </div>

        {/* Right side: Image */}
        <div className="flex justify-end md:w-md w-sm">
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

function InputField({
  label,
  name,
  value,
  onChange,
  type = "text",
  placeholder = "",
}) {
  return (
    <div className="mt-5">
      <label className="block font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full px-3 py-2 border-b border-black focus:outline-none"
        required
      />
    </div>
  );
}
