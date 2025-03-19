import express from "express";
import axios from "axios";

export const fetchYouTubeVideos = async (req, res) => {
  try {
    console.log("Received query params:", req.body); // Debugging

    const { playlistId, contestName } = req.body;
    if (!playlistId) return res.status(400).json({ error: "Missing playlistId" });

    const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`;
    const response = await axios.get(url);

    if (!response.data.items || response.data.items.length === 0) {
      return res.status(404).json({ error: "No videos found" });
    }

    // Extract contest name & number (supports Codeforces, Codechef, Atcoder, Starters)
    const contestRegex = /(starters|codeforces|codechef|atcoder)?\s*(beta\s+round\s+)?(\d+)/i;
    const contestMatch = contestName.match(contestRegex);
    if (!contestMatch) return res.status(400).json({ error: "Invalid contest format" });

    // Normalize contest name
    let contestPrefix = contestMatch[1] ? contestMatch[1].trim().toLowerCase() : "";
    let contestNumber = contestMatch[3];

    if (contestPrefix === "codeforces") {
      contestPrefix = "codeforces round";
    }

    const normalizedContest = `${contestPrefix} ${contestNumber}`;

    // Find best match
    let bestMatch = null;
    response.data.items.forEach((item) => {
      const videoTitle = item.snippet.title.toLowerCase();
      if (videoTitle.includes(normalizedContest)) {
        bestMatch = item;
      }
    });

    res.json({
      videoLink: bestMatch ? `https://www.youtube.com/watch?v=${bestMatch.snippet.resourceId.videoId}` : null
    });

  } catch (error) {
    console.error("Error fetching YouTube videos:", error.message);
    res.status(500).json({ error: "Failed to fetch videos" });
  }
};
