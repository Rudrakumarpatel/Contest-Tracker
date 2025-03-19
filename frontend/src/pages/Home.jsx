import React, { useContext, useState, useEffect } from "react";
import { ContestContext } from "../context/ContestContext";
import ContestList from "../components/ContestList";
import Filter from "../components/Filter";
import LoadingBar from "../components/Lodingbar";

const Home = () => {
  const { contests } = useContext(ContestContext);
  const [selectedPlatforms, setSelectedPlatforms] = useState([
    "Codeforces",
    "CodeChef",
  ]);
  const [showBookmarks, setShowBookmarks] = useState(false);
  const [bookmarkedContests, setBookmarkedContests] = useState([]);

  useEffect(() => {
    const savedBookmarks =
      JSON.parse(localStorage.getItem("bookmarkedContests")) || [];
    setBookmarkedContests(savedBookmarks);
  }, [showBookmarks]);

  // Filter contests by platform and bookmarks
  const filteredContests = contests.filter(
    (contest) =>
      selectedPlatforms.includes(contest.platform) &&
      (!showBookmarks || bookmarkedContests.includes(contest.id))
  );

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-br from-purple-600 to-blue-500 dark:from-gray-800 dark:to-gray-900 text-white">
      <div className="w-full max-w-4xl bg-white/10 backdrop-blur-md shadow-xl rounded-lg p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Upcoming and Past Contests
        </h2>

        {/* Platform Filter */}
        <Filter
          selectedPlatforms={selectedPlatforms}
          setSelectedPlatforms={setSelectedPlatforms}
        />

        {/* Toggle Button for Bookmarks */}
        <button
          className="my-4 w-full py-3 text-lg font-semibold rounded-md bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition duration-300"
          onClick={() => setShowBookmarks(!showBookmarks)}
        >
          {showBookmarks
            ? "📅 Show All Contests"
            : "⭐ Show Bookmarked Contests"}
        </button>

        {/* Contest List */}
        {contests ? (
          <ContestList contests={filteredContests} />
        ) : (
          <LoadingBar />
        )}
      </div>
    </div>
  );
};

export default Home;
