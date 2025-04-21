"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const btnStyle =
  "px-4 py-4 border-2 border-primary-50 font-semibold uppercase hover:bg-accent-950 transition-all rounded-sm disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300";

function SubmitEnquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true); // Set submitting state to true

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Send the form data to the server or handle it as needed

    try {
      const res = await fetch("/contactMe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });

      if (res.ok) {
        toast.success("Message sent!");
        e.target.reset();
      } else {
        console.error("Error sending message:", res.statusText);
        toast.error("Something went wrong!");
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Submit failed.");
    }

    setIsSubmitting(false); // Reset submitting state
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="dark:border-2 dark:border-primary-900 w-full max-w-full py-6 px-6 text-lg flex flex-col gap-4 mx-auto rounded-lg"
    >
      {/* Name & Email Fields */}
      <div className="flex flex-col min-[840px]:flex-row gap-4 w-full">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="px-4 py-3 dark:bg-primary-900 bg-primary-100 text-primary-900 w-full shadow-sm rounded-sm dark:border-2 dark:border-primary-900 focus:ring-2 focus:ring-accent-950 dark:focus:ring-accent-500"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="px-4 py-3 bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-50 w-full shadow-sm rounded-sm dark:border-2 dark:border-primary-900 focus:ring-2 focus:ring-accent-950 dark:focus:ring-accent-500"
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
        className="px-4 py-3 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-50 w-full shadow-sm rounded-sm dark:border-2 dark:border-primary-900 focus:ring-2 focus:ring-accent-950 dark:focus:ring-accent-500"
        required
      />

      {/* Message Field */}
      <textarea
        rows="4"
        name="message"
        placeholder="Type your message here..."
        value={formData.message}
        onChange={handleChange}
        className="px-4 py-3 bg-primary-100 dark:bg-primary-700 text-primary-800 dark:text-primary-50 w-full shadow-sm rounded-sm dark:border-2 dark:border-primary-900 focus:ring-2 focus:ring-accent-950 dark:focus:ring-accent-500"
        required
      />

      {/* Submit Button */}
      <div className="flex justify-center min-[601px]:justify-end">
        <button
          type="submit"
          disabled={isSubmitting}
          className={`px-4 py-4 border-2 border-primary-50 font-semibold uppercase hover:bg-accent-950 transition-all rounded-sm dark:text-primary-800 dark:bg-primary-50  ${
            isSubmitting
              ? "bg-gray-500 cursor-not-allowed"
              : "bg-accent-950 hover:bg-primary-700"
          }`}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}

export default SubmitEnquiryForm;
