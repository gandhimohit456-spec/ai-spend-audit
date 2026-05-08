export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h1 className="text-6xl font-bold leading-tight">
            Optimize Your AI Spend
          </h1>

          <p className="mt-6 text-xl text-gray-300 max-w-2xl mx-auto">
            Discover hidden AI costs, reduce waste, and get actionable
            optimization insights for your startup.
          </p>

          <a
            href="/audit"
            className="inline-block mt-10 bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition"
          >
            Start Free Audit
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-20">
          <div className="border border-white/10 rounded-3xl p-6 bg-white/5">
            <h2 className="text-2xl font-semibold">Cost Analysis</h2>

            <p className="mt-3 text-gray-300">
              Identify unnecessary AI subscriptions and overspending patterns.
            </p>
          </div>

          <div className="border border-white/10 rounded-3xl p-6 bg-white/5">
            <h2 className="text-2xl font-semibold">Optimization Tips</h2>

            <p className="mt-3 text-gray-300">
              Get tailored recommendations to reduce AI operational costs.
            </p>
          </div>

          <div className="border border-white/10 rounded-3xl p-6 bg-white/5">
            <h2 className="text-2xl font-semibold">Annual Savings</h2>

            <p className="mt-3 text-gray-300">
              Estimate yearly savings opportunities across your AI stack.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
