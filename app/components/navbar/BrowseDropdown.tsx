import { Divider } from "antd";
import React from "react";

export const BrowseDropdown: React.FC = () => {
  return (
    <div className="absolute right-0 w-[600px] mt-4 bg-black rounded-md shadow-lg z-50 text-white">
      <div className="flex flex-col md:flex-row p-4">
        <ul className="py-2 text-sm">
          <li className="px-4 py-2 cursor-pointer">Popular</li>
          <li className="px-4 py-2 cursor-pointer">New</li>
          <li className="px-4 py-2 cursor-pointer">Alphabetical</li>
          <li className="px-4 py-2 cursor-pointer">Popular</li>
          <li className="px-4 py-2 cursor-pointer">New</li>
          <li className="px-4 py-2 cursor-pointer">Alphabetical</li>
        </ul>
        <Divider type="vertical" style={{ borderColor: "#23252A", height: "auto" }} />
        <div className="p-4 w-full">
          <h5 className="mb-3 text-xs">GENRES</h5>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-5 text-sm">
            <h6 className="cursor-pointer hover:underline">Action</h6>
            <h6 className="cursor-pointer hover:underline">Adventure</h6>
            <h6 className="cursor-pointer hover:underline">Comedy</h6>
            <h6 className="cursor-pointer hover:underline">Drama</h6>
            <h6 className="cursor-pointer hover:underline">Fantasy</h6>
            <h6 className="cursor-pointer hover:underline">Music</h6>
            <h6 className="cursor-pointer hover:underline">Romance</h6>
            <h6 className="cursor-pointer hover:underline">Sci-Fi</h6>
            <h6 className="cursor-pointer hover:underline">Seinen</h6>
            <h6 className="cursor-pointer hover:underline">Shojo</h6>
            <h6 className="cursor-pointer hover:underline">Shonen</h6>
            <h6 className="cursor-pointer hover:underline">Slice of life</h6>
            <h6 className="cursor-pointer hover:underline">Sports</h6>
            <h6 className="cursor-pointer hover:underline">Supernatural</h6>
            <h6 className="cursor-pointer hover:underline">Thriller</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
