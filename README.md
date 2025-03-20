# Contest Tracker

## 📌 Overview

Contest Tracker is a web application that helps users track upcoming coding contests from various platforms like Codeforces, CodeChef, and more. It provides features like bookmarking contests, fetching relevant video resources, and easy contest access.

## 🚀 Features

- Fetches upcoming contests from multiple platforms
- Bookmark contests for future reference
- Retrieves relevant YouTube videos for contests
- User-friendly interface with dark mode support

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **External APIs**: YouTube Data API, Contest APIs

## 🎯 APIs

### 1️⃣ **Fetch Contests**

**Endpoint:** `GET /api/contests`

- Fetches upcoming contests from supported platforms.

### 2️⃣ **Fetch YouTube Video**

**Endpoint:** `POST /api/youtube/youtube_video`

- **Request Body:**
  ```json
  {
    "playlistId": "<YouTube Playlist ID>",
    "contestName": "<Contest Name>"
  }
  ```
- **Response:**
  ```json
  {
    "videoLink": "<YouTube Video URL>"
  }
  ```

## 🔌 Interfaces

- **Frontend (React.js):** Provides UI for contest tracking and video fetching.
- **Backend (Node.js + Express.js):** Handles API requests and communicates with external services.
- **YouTube API:** Fetches relevant videos based on contest names.

## 📂 Project Structure

```
/contest-tracker
│── backend/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   ├── server.js
│
│── frontend/
│   ├── src/
│   ├── components/
│   ├── pages/
│   ├── App.js
│
│── README.md
│── package.json
│── .gitignore
```

## 📌 Installation & Setup

### 🔹 Backend Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/Rudrakumarpatel/Contest-Tracker/tree/main
   ```
2. Navigate to the backend folder:
   ```sh
   cd contest-tracker/backend
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### 🔹 Frontend Setup

1. Navigate to the frontend folder:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm run dev
   ```

## 📌 GitHub Repository

[GitHub Repo](https://github.com/yourusername/contest-tracker)

## 📧 Contact

For any queries, feel free to reach out:

- **Email:** [rudrapatel2992003@gmail.com](mailto\:rudrapatel2992003@gmail.com)
- **LinkedIn:** [Your LinkedIn Profile](https://www.linkedin.com/in/rudrakumardp1/)

