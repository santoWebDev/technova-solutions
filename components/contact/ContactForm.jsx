"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function validate() {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!form.email.includes("@")) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Please enter your phone number.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please tell us about your project.";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validate();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="grid overflow-hidden rounded-[2rem] bg-[#0b1220] text-white lg:grid-cols-2">
          
          <div className="p-8 md:p-12 lg:p-16">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              05 / Contact
            </p>

            <h2 className="mt-8 text-5xl font-black tracking-tight md:text-6xl">
              Have something worth building?
            </h2>

            <p className="mt-6 max-w-md leading-8 text-white/50">
              Tell us what you're working on and let's figure out the next
              move.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 text-black md:p-12 lg:p-16"
          >
            <div className="space-y-6">
              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Name
                </label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full border-b border-black/20 px-0 py-3 outline-none focus:border-blue-600"
                  placeholder="Your name"
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Email
                </label>

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full border-b border-black/20 px-0 py-3 outline-none focus:border-blue-600"
                  placeholder="you@example.com"
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Phone
                </label>

                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="w-full border-b border-black/20 px-0 py-3 outline-none focus:border-blue-600"
                  placeholder="+91 98765 43210"
                />

                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold">
                  Message
                </label>

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full resize-none border-b border-black/20 px-0 py-3 outline-none focus:border-blue-600"
                  placeholder="Tell us about your project..."
                />

                {errors.message && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="rounded-full bg-[#0b1220] px-7 py-4 font-semibold text-white transition hover:bg-blue-600"
              >
                Send message →
              </button>

              {submitted && (
                <p className="font-medium text-green-600">
                  Thanks! Your message has been received.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}