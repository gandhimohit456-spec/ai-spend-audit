"use client";

import { useState } from "react";

export default function AuditPage() {
  const [formData, setFormData] = useState({
    tool: "",
    plan: "",
    monthlySpend: "",
    seats: "",
    teamSize: "",
    useCase: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    localStorage.setItem(
      "auditData",
      JSON.stringify(formData)
    );

    window.location.href = "/result";
  };

  return (
    <main className="min-h-screen bg-black text-white p-10 flex items-center justify-center">
      <div className="w-full max-w-2xl border border-white/20 rounded-3xl p-8 bg-white/5 backdrop-blur">
        <h1 className="text-4xl font-bold">
          AI Spend Audit
        </h1>

        <p className="mt-3 text-gray-300">
          Analyze your AI tool spending and uncover
          optimization opportunities.
        </p>

        <form
          className="mt-8 space-y-6"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <div>
            <label className="block mb-2 text-sm font-medium">
              AI Tool
            </label>

            <select
              name="tool"
              onChange={handleChange}
              className="w-full border border-white/20 bg-black text-white p-3 rounded-xl"
            >
              <option>Choose Tool</option>
              <option>ChatGPT</option>
              <option>Claude</option>
              <option>GitHub Copilot</option>
              <option>Cursor</option>
              <option>Gemini</option>
              <option>OpenAI API</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Current Plan
            </label>

            <select
              name="plan"
              onChange={handleChange}
              className="w-full border border-white/20 bg-black text-white p-3 rounded-xl"
            >
              <option>Choose Plan</option>
              <option>Free</option>
              <option>Plus</option>
              <option>Pro</option>
              <option>Business</option>
              <option>Team</option>
              <option>Enterprise</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Monthly Spend ($)
            </label>

            <input
              type="number"
              name="monthlySpend"
              onChange={handleChange}
              className="w-full border border-white p-3 rounded-xl bg-black text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Number of Seats
            </label>

            <input
              type="number"
              name="seats"
              onChange={handleChange}
              className="w-full border border-white/20 p-3 rounded-xl bg-black text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Team Size
            </label>

            <input
              type="number"
              name="teamSize"
              onChange={handleChange}
              className="w-full border border-white/20 p-3 rounded-xl bg-black text-white"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium">
              Primary Use Case
            </label>

            <input
              type="text"
              name="useCase"
              onChange={handleChange}
              placeholder="Content, Coding, Support..."
              className="w-full border border-white/20 p-3 rounded-xl bg-black text-white"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white text-black py-4 rounded-2xl font-semibold hover:scale-[1.02] transition"
          >
            Generate Audit
          </button>
        </form>
      </div>
    </main>
  );
}