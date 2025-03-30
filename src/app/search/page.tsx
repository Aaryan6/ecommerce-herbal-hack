"use client";

import { SearchResults } from "@/components/search-results";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function SearchPage() {
  const searchParams = useSearchParams();
  const q = searchParams.get("q");
  return (
    <div className="container px-4 md:px-6 py-6 md:py-10 mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Search Results: <span className="text-primary">{q || ""}</span>
      </h1>
      <SearchResults query={q || ""} />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SearchPage />
    </Suspense>
  );
}
