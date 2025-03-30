import { SearchResults } from "@/components/search-results";

export default function SearchPage({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  return (
    <div className="container px-4 md:px-6 py-6 md:py-10 mx-auto">
      <h1 className="text-3xl font-bold mb-6">
        Search Results:{" "}
        <span className="text-primary">{searchParams.q || ""}</span>
      </h1>
      <SearchResults query={searchParams.q || ""} />
    </div>
  );
}
