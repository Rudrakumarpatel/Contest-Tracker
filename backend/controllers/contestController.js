import axios from "axios";
import Contest from "../models/Contest.js";

const fetchContests = async (req, res) => {
  try {
    const codeforcesAPI = "https://codeforces.com/api/contest.list";
    const codechefAPI = "https://www.codechef.com/api/list/contests/all?sort_by=START";

    const [cfResponse, ccResponse] = await Promise.all([
      axios.get(codeforcesAPI),
      axios.get(codechefAPI),
    ]);

    const cfContests = cfResponse.data.result.map(contest => ({
      platform: "Codeforces",
      name: contest.name,
      id:contest.id,
      url: `https://codeforces.com/contest/${contest.id}`,
      startTime: new Date(contest.startTimeSeconds * 1000),
      duration: contest.durationSeconds,
      status: contest.phase === "BEFORE" ? "upcoming" : "past",
    }));

    const ccContests = [
      ...(ccResponse.data.future_contests || []).map(contest => ({
        platform: "CodeChef",
        name: contest.contest_name,
        id:contest.contest_code,
        url: `https://www.codechef.com/${contest.contest_code}`,
        startTime: new Date(contest.contest_start_date_iso),
        duration: parseInt(contest.contest_duration) * 60, // Convert minutes to seconds
        status: "upcoming",
      })),
      ...(ccResponse.data.past_contests || []).map(contest => ({
        platform: "CodeChef",
        name: contest.contest_name,
        id: contest.contest_code,
        url: `https://www.codechef.com/${contest.contest_code}`,
        startTime: new Date(contest.contest_start_date_iso),
        duration: parseInt(contest.contest_duration) * 60, // Convert minutes to seconds
        status: "past",
      })),
    ];

    const contests = [...cfContests, ...ccContests];

    // Insert only new contests (avoid duplicates)
    await Contest.insertMany(contests, { ordered: false }).catch(err => {
      if (err.code !== 11000) throw err;
    });

    res.json(contests);
  } catch (error) {
    console.error("Error fetching contests:", error);
    res.status(500).json({ message: "Error fetching contests", error: error.message });
  }
};

export { fetchContests };
