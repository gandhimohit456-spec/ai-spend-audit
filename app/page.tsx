export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-10">
      <h1 className="text-5xl font-bold text-center">
        AI Spend Audit
      </h1>

      <p className="mt-4 text-lg text-center text-gray-600">
        Find where your startup is overspending on AI tools.
      </p>

      <a 
      href="/audit"
      className="mt-8 bg-black text-white px-6 py-3 rounded-xl"
      >
        Start Free Audit
      </a>
    </main>
  )
}