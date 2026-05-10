export function runAudit(data: any) {
  let savings = 0;

  let recommendation =
    "Your AI spending looks optimized.";

  let riskLevel = "Low";

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

  if (
    data.tool === "OpenAI API" &&
    Number(data.monthlySpend) > 200
  ) {
    savings += 50;

    recommendation =
      "Consider prompt optimization and caching strategies.";

    riskLevel = "High";
}

return {
    savings,
    recommendation,
    riskLevel,
    yearlySavings: savings * 12,
};
}