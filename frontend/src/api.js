import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api"; // Update with backend URL

export const fetchContests = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/contests/fetch`);
    return response.data;
  } catch (error) {
    console.error("Error fetching contests:", error);
    return [];
  }
};
