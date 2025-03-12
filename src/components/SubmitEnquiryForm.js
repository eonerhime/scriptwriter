"use client";

import { useState } from "react";
import SubmitButton from "./SubmitButton";

const btnStyle =
  "bg-primary-400 px-4 py-4 text-primary-50 font-semibold uppercase hover:bg-accent-950 transition-all rounded-sm disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300";

function SubmitEnquiryForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <form
      action=""
      className="bg-primary-900 w-full max-w-full py-6 px-6 text-lg flex flex-col gap-4 mx-auto"
    >
      {/* Name & Email Fields */}
      <div className="flex flex-col min-[840px]:flex-row gap-4 w-full">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-3 bg-primary-100 text-primary-800 w-full shadow-sm rounded-sm"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-3 bg-primary-100 text-primary-800 w-full shadow-sm rounded-sm"
          required
        />
      </div>

      {/* Subject Field */}
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        value={formData.subject}
        onChange={handleChange}
        className="px-4 py-3 bg-primary-100 text-primary-800 w-full shadow-sm rounded-sm"
        required
      />

      {/* Message Field */}
      <textarea
        rows="4"
        name="message"
        placeholder="Type your message here..."
        value={formData.message}
        onChange={handleChange}
        className="px-4 py-3 bg-primary-100 text-primary-800 w-full shadow-sm rounded-sm"
        required
      />

      {/* Submit Button */}
      <div className="flex justify-center min-[601px]:justify-end">
        <SubmitButton btnStyle={btnStyle} pendingLabel="Sending...">
          Send Message
        </SubmitButton>
      </div>
    </form>
  );
}

export default SubmitEnquiryForm;
