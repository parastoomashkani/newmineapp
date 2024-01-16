import { useState } from "react";
import { FaSearch } from "react-icons/fa";

import "./SearchBar.css";

export const SearchBar = ({ setResults }: { setResults: any }) => {
  const [input, setInput] = useState("");

  const fetchData = (value:any) => {
    fetch(process.env.BaseUrl + '/search?')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user:any) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        setResults(results);
      });
  };

  const handleChange = (value:any) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
      className="text-black	"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
