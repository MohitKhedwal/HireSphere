import React, { useState } from "react";

const filterData = [
  {
    filterType: "Location",
    arraya: ["USA", "India", "UK", "England", "Germany"],
  },
  {
    filterType: "Title",
    arraya: [
      "Software Engineer",
      "Data Scientist",
      "Product Manager",
      "Frontend Developer",
      "Backend Developer",
      "Full Stack Developer",
    ],
  },
  {
    filterType: "Experience",
    arraya: ["0-3 years", "4-6 years", "7-10 years"],
  },
  {
    filterType: "Salary",
    arraya: ["0-1 LPA", "1-5 LPA", "5-10 LPA", "10-20 LPA", "20-35 LPA"],
  },
];

function FilterCard() {
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleSelectChange = (filterType, value) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  return (
    <div className="p-4 w-full bg-gradient-to-r from-[#F4FFF9] to-[#E5F9FF] text-gray-800 rounded-lg shadow-md">
  <h1 className="text-lg font-semibold text-[var(--filter-text-primary-light)]">Filter Jobs</h1>
  <hr className="mt-3 mb-4 border-[var(--filter-border-light)]" />
  <div className="space-y-6">
    {filterData.map((data, index) => (
      <div key={index} className="space-y-2">
        <h3 className="text-md font-medium text-[var(--filter-text-secondary-light)]">
          {data.filterType}
        </h3>
        {/* Dropdown */}
        <select
          className="w-full p-2 border border-[var(--filter-border-light)] rounded-md bg-[var(--filter-bg-dark)] text-[var(--filter-text-primary-dark)] focus:outline-none focus:ring-2 focus:ring-[var(--filter-accent-primary)]"
          value={selectedFilters[data.filterType] || ""}
          onChange={(e) => handleSelectChange(data.filterType, e.target.value)}
        >
          <option value="" disabled>
            Select {data.filterType}
          </option>
          {data.arraya.map((item, subIndex) => (
            <option key={subIndex} value={item} className="text-[var(--filter-text-primary-light)]">
              {item}
            </option>
          ))}
        </select>
      </div>
    ))}
  </div>
</div>



  );
}

export default FilterCard;
