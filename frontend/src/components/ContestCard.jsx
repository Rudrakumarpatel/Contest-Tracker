import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaYoutube } from "react-icons/fa6";

const youtubePlaylists = {
  Codeforces: "PLcXpkI9A-RZLUfBSNp-YQBCOezZKbDSgB",
  CodeChef: "PLcXpkI9A-RZIZ6lsE0KCcLWeKNoG45fYr",
};

const ContestCard = ({ contest }) => {
  if (!contest.id) return null;

  const [bookmarked, setBookmarked] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Load bookmarks from local storage
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarkedContests")) || [];
    setBookmarked(savedBookmarks.includes(contest.id));
  }, [contest.id]);

  useEffect(() => {
    if (videoLink) {
      window.open(videoLink, "_blank");
    }
  }, [videoLink]); 

  const fetchYouTubeVideo = async () => {
    if (videoLink) return;

    const playlistId = youtubePlaylists[contest.platform];
    if (!playlistId) {
      console.warn(`No playlist found for ${contest.platform}`);
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:5000/api/youtube/youtube_video", {
        playlistId,
        contestName: contest.name,
      });

      console.log("API Response:", response.data);

      const videoData = response.data.videoLink;
      if (videoData && videoData !== videoLink) {
        setVideoLink(videoData);
      }
    } catch (error) {
      console.error("Error fetching YouTube video:", error.response?.data || error.message);
    }
    setLoading(false);
  };

  const toggleBookmark = () => {
    const savedBookmarks = JSON.parse(localStorage.getItem("bookmarkedContests")) || [];
    const updatedBookmarks = bookmarked
      ? savedBookmarks.filter((id) => id !== contest.id)
      : [...savedBookmarks, contest.id];

    localStorage.setItem("bookmarkedContests", JSON.stringify(updatedBookmarks));
    setBookmarked(!bookmarked);
  };

  return (
    <div className="p-4 bg-white dark:bg-gray-700 text-black dark:text-white rounded-md shadow-md relative justify-baseline">
      <div>
      <h3 className="text-lg font-bold">{contest.name}</h3>
      <p>Date: {new Date(contest.startTime).toLocaleString()}</p>
      <p>Duration: {contest.duration} mins</p>
      <a href={contest.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 dark:text-blue-300">
        View Contest
      </a>
      </div>

     <div>
      <button
        onClick={toggleBookmark}
        className={`absolute top-2 right-2 p-2 rounded-full transition ${
          bookmarked ? "bg-yellow-400 text-black" : "bg-gray-300 dark:bg-gray-600 text-white"
        }`}
      >
        {bookmarked ? "⭐" : "☆"}
      </button>

        <button onClick={fetchYouTubeVideo} className="mt-2 text-blue-500" disabled={loading}>
          {loading ? "Loading..." : <><FaYoutube className="text-red-700 size-8"/></>}
        </button>
      </div>
    </div>
  );
};

export default ContestCard;
