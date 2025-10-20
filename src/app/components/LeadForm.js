/*
DESCRIPTION: Lead form component with glassmorphic styling matching the safety app.
- Handles form submission to API endpoint
- Uses glassmorphic design with backdrop blur and transparency
- Matches the color scheme and styling of the safety application
- Includes form validation and submission states

PSEUDOCODE:
- Create form with glassmorphic styling
- Handle form input changes and validation
- Submit form data to API endpoint
- Show success/error messages with appropriate styling
- Disable form during submission
*/

"use client";

import { useState } from "react";

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      
      if (result.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", organization: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="glassmorphic-card p-6 rounded-xl">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1 text-primary">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 glassmorphic-input rounded-md focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1 text-primary">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 glassmorphic-input rounded-md focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-medium mb-1 text-primary">
            Organization
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            className="w-full px-3 py-2 glassmorphic-input rounded-md focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1 text-primary">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={3}
            className="w-full px-3 py-2 glassmorphic-input rounded-md focus:outline-none"
          />
        </div>

        {submitStatus === "success" && (
          <div className="text-green-400 text-sm">
            Thank you! We&apos;ll be in touch soon.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="text-red-400 text-sm">
            Something went wrong. Please try again.
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full glassmorphic-button text-white py-3 px-4 rounded-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 min-h-[44px] touch-manipulation"
          aria-label={isSubmitting ? "Submitting your request..." : "Submit early access request"}
        >
          {isSubmitting ? "Submitting..." : "Request Early Access"}
        </button>
      </form>
    </div>
  );
}
