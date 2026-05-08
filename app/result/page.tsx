"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [auditResult, setAuditResult] = useState<any>(null);

  const runAudit = (data: any) => {
    let savings = 0;

    let recommendation =
      "Your AI spending looks optimized.";

    let riskLevel = "Low";

    // ChatGPT Team downgrade
    if (
      data.tool === "ChatGPT" &&
      data.plan === "Team" &&
      Number(data.seats) <= 2
    ) {
      savings += 30;

      recommendation =
        "Switch from ChatGPT Team to Plus for a smaller team.";

      riskLevel = "Medium";
    }

    // Claude Enterprise
    if (
      data.tool === "Claude" &&
      data.plan === "Enterprise" &&
      Number(data.teamSize) < 5
    ) {
      savings += 100;

      recommendation =
        "Claude Enterprise may be unnecessary for a small team.";

      riskLevel = "High";
    }

    // GitHub Copilot expensive
    if (
      data.tool === "GitHub Copilot" &&
      Number(data.monthlySpend) > 40
    ) {
      savings += 15;

      recommendation =
        "Consider Cursor or reducing Copilot seats.";

      riskLevel = "Medium";
    }

    // Cursor optimization
    if (
      data.tool === "Cursor" &&
      data.plan === "Business"
    ) {
      savings += 25;

      recommendation =
        "Cursor Pro may be enough depending on usage.";

      riskLevel = "Low";
    }

    // OpenAI API overspending
    if (
      data.tool === "OpenAI API" &&
      Number(data.monthlySpend) > 200
    ) {
      savings += 50;

      recommendation =
        "Consider prompt optimization and caching strategies.";

      riskLevel = "High";
    }

    return{
      savings,
      recommendation,
      riskLevel,
      yearlySavings: savings *12,
      
      aiSummary: 'Your organization may be overspending on ${data.tool}.Based on your current configuration,you could potentially save $${savings} per month by optimizing your AI stack and reducing unneccesary costs.'
    };
  };

  useEffect(() => {
    const savedData = localStorage.getItem("auditData");

    if (savedData) {
      const data = JSON.parse(savedData);

      const result = runAudit(data);

      setAuditResult(result);
    }
  }, []);

  if (!auditResult) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-10">
      <div className="w-full max-w-2xl border border-white/20 rounded-3xl p-8 bg-white/5 backdrop-blur">
        <h1 className="text-5xl font-bold">
          Audit Result
        </h1>

        <p className="mt-3 text-gray-300">
          Here’s your AI spend optimization summary.
        </p>

        <div className="mt-10 space-y-6">
          <div className="border border-white/10 rounded-2xl p-6">
            <h2 className="text-4xl font-bold">
              ${auditResult.savings}/month
            </h2>

            <p className="mt-2 text-gray-300">
              Potential Monthly Savings
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold">
              Annual Savings
            </h3>

            <p className="mt-2 text-3xl font-bold">
              ${auditResult.yearlySavings}
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold">
              Risk Level
            </h3>

            <p className="mt-2 text-xl">
              {auditResult.riskLevel}
            </p>
          </div>

          <div className="border border-white/10 rounded-2xl p-6">
            <h3 className="text-2xl font-semibold">
              Recommendation
            </h3>

            <p className="mt-3 text-gray-300">
              {auditResult.recommendation}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}