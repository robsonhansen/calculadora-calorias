"use client"

import { useState } from "react"
import { CalorieForm } from "@/components/calorie-form"
import { Results } from "@/components/results"

export default function Home() {
  const [results, setResults] = useState<any>(null)

  return (
    <main className="min-h-screen bg-blue-900 p-4">
      <div className="container mx-auto py-8">
        {!results ? (
          <CalorieForm onCalculate={setResults} />
        ) : (
          <Results results={results} onBack={() => setResults(null)} />
        )}
      </div>
    </main>
  )
}

