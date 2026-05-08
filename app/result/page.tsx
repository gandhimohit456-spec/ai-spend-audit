"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
const [auditResult, setAuditResult] = useState<any>(null);

const runAudit = (data: any) => {
    let savings = 0;

    let recommendation =
    "Your AI spending looks optimized.";

    // Rule 1
    if (data.plan === "Team" && Number(data.seats) <= 2) {
    savings = 30;

    recommendation =
        "You can downgrade from Team to Plus and save money.";
    }

    // Rule 2
    if (
    data.tool === "ChatGPT" &&
    Number(data.monthlySpend) > 50
    ) {
    savings += 20;
    }

    return {
    savings,
    recommendation,
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
    <div className="min-h-screen flex items-center justify-center">
        Loading...
    </div>
    );
}

return (
    <main className="min-h-screen bg-black text-white p-10">
    <h1 className="text-5xl font-bold">
        Audit Result
    </h1>

    <div className="mt-10 border border-white rounded-2xl p-6">
        <h2 className="text-3xl font-bold">
        ${auditResult.savings}/month savings
        </h2>

        <p className="mt-4 text-lg">
        {auditResult.recommendation}
        </p>
    </div>
    </main>
);
}