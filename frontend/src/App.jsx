import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ContestProvider } from "./context/ContestContext";
import Home from "./pages/Home";
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
        </Routes>
      </Router>
    </ContestProvider>
  );
}

export default App;
