import React from "react";

const Filter = ({ selectedPlatforms, setSelectedPlatforms }) => {
  const platforms = ["Codeforces", "CodeChef"];

  const togglePlatform = (platform) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <div className="flex gap-4 p-4">
      {platforms.map((platform) => (
        <label key={platform} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={selectedPlatforms.includes(platform)}
            onChange={() => togglePlatform(platform)}
          />
          <span>{platform}</span>
        </label>
      ))}
    </div>
  );
};

export default Filter;
