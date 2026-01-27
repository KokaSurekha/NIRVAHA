

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import MeditationGuide from "./pages/MeditationGuide";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/meditation" element={<MeditationGuide />} />
       
      </Routes>
    </Router>
  );
}
