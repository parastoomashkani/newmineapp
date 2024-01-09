import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult";
export const SearchResultsList = ({ results }: { results: any[] }) => {
  return (
    <div className="results-list">
      {results.map((result: { name: string }, id: number) => {
        return <SearchResult result={result.name} key={id} />;
      })}
    </div>
  );
};