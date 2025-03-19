import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContestProvider } from "./context/ContestContext";
import Home from "./pages/Home";
// import Bookmarks from "./pages/Bookmarks";
import AdminPanel from "./pages/AdminPanel";
import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import React from "react";

function App() {
  return (
    <ContestProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
    </ContestProvider>
  );
}

export default App;
