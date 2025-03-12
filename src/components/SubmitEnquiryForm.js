"use client";

import { useState } from "react";
import SubmitButton from "./SubmitButton";

function SubmitEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // console.log(`Field changed: ${name}, New Value: ${value}`);

    setFormData((prevData) => {
      const updatedData = { ...prevData, [name]: value };
      // console.log("Updated Form Data:", updatedData);

      return updatedData;
    });
  };

  return (
    <form
      action=""
      className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col"
    >
      <div className="flex flex-col min-[840px]:flex-row gap-4 w-full max-w-full">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="px-5 py-3 bg-primary-100 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="px-5 py-3 bg-primary-100 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          required
        />
      </div>

      <div>
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="px-5 py-3 bg-primary-100 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          required
        />
      </div>

      <div>
        <textarea
          rows="4"
          cols="50"
          name="message"
          placeholder="Type your message here..."
          value={formData.message}
          onChange={handleChange}
          className="px-5 py-3 bg-primary-100 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          required
        />
      </div>

      <div className="flex justify-end items-center gap-6">
        <SubmitButton pendingLabel="Sending...">Send Message</SubmitButton>
      </div>
    </form>
  );
}

export default SubmitEnquiryForm;
