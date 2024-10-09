"use client";

import { useEffect, useRef, useState } from "react";
import { BrowseDropdown } from "./BrowseDropdown";
import SearchBar from "./SearchBar";

export const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Add your search logic here
  };
  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-primary">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg">AnimeVerse</div>
        <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} handleSearch={handleSearch} />
        <div className="relative" ref={dropdownRef}>
          <button onClick={toggleDropdown} className="text-white focus:outline-none">
            Browse
          </button>
          {isDropdownOpen && <BrowseDropdown />}
        </div>
      </div>
    </nav>
  );
};
