import { Button } from "antd";
import React from "react";

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
  handleSearch: () => void;
  searchTerm: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm, handleSearch, searchTerm }) => {
  return (
    <div className="p-4 w-[600px] flex">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Anime..."
        className="p-2 border border-gray-300 rounded w-full text-white bg-primary"
      />
      <Button type="primary" onClick={handleSearch} className="h-12 w-24 text-lg">
        Search
      </Button>
    </div>
  );
};

export default SearchBar;
