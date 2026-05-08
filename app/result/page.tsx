"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [auditResult, setAuditResult] = useState<any>(null);

  const runAudit = (data: any) => {
    let savings = 0;

    let recommendation = "Your AI spending looks optimized.";

    let riskLevel = "Low";

    // ChatGPT Team downgrade
    if (
      data.tool === "ChatGPT" &&
      data.plan === "Team" &&
      Number(data.seats) <= 2
    ) {
      savings += 30;

      recommendation = "Switch from ChatGPT Team to Plus for a smaller team.";

      riskLevel = "Medium";
    }

    // Claude Enterprise
    if (
      data.tool === "Claude" &&
      data.plan === "Enterprise" &&
      Number(data.teamSize) < 5
    ) {
      savings += 100;

      recommendation = "Claude Enterprise may be unnecessary for a small team.";

      riskLevel = "High";
    }

    // GitHub Copilot expensive
    if (data.tool === "GitHub Copilot" && Number(data.monthlySpend) > 40) {
      savings += 15;

      recommendation = "Consider Cursor or reducing Copilot seats.";

      riskLevel = "Medium";
    }

    // Cursor optimization
    if (data.tool === "Cursor" && data.plan === "Business") {
      savings += 25;

      recommendation = "Cursor Pro may be enough depending on usage.";

      riskLevel = "Low";
    }

    // OpenAI API overspending
    if (data.tool === "OpenAI API" && Number(data.monthlySpend) > 200) {
      savings += 50;

      recommendation = "Consider prompt optimization and caching strategies.";

      riskLevel = "High";
    }

    return {
      savings,
      recommendation,
      riskLevel,
      yearlySavings: savings * 12,
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
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold">Audit Result</h1>

      <div className="mt-10 border border-white rounded-2xl p-6">
        <h2 className="text-3xl font-bold">
          ${auditResult.savings}/month savings
        </h2>

        <p className="mt-4 text-lg">{auditResult.recommendation}</p>

        <p className="mt-4 text-xl">
          Annual Savings: ${auditResult.yearlySavings}
        </p>

        <p className="mt-2 text-lg">Risk Level: {auditResult.riskLevel}</p>
      </div>
    </main>
  );
}
