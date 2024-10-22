import { useState } from "react";

const AnimeTabs = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { name: "Overview", id: "overview" },
    { name: "Features", id: "features" },
    { name: "Reviews", id: "reviews" },
  ];

  return (
    <div className="w-full">
      <nav className="flex justify-start space-x-6 bg-[#1A1B20] text-white px-20">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative py-2 text-lg font-semibold transition-colors duration-300 ${
              activeTab === tab.id ? "text-blue-600" : "text-gray-500"
            }`}>
            {tab.name}
            {activeTab === tab.id && (
              <span className="absolute left-0 right-0 h-1 bg-blue-600 rounded-t-lg bottom-0"></span>
            )}
          </button>
        ))}
      </nav>

      <div className="mt-4 px-20">
        {activeTab === "overview" && <p>Overview content goes here.</p>}
        {activeTab === "features" && <p>Features content goes here.</p>}
        {activeTab === "reviews" && <p>Reviews content goes here.</p>}
      </div>
    </div>
  );
};
export default AnimeTabs;
