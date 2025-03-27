import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import HomePage from "./components/HomePage";
import TeamSetup from "./components/TeamSetup";
import GraphPage from "./components/GraphPage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/team-setup" element={<TeamSetup />} />
        <Route path="/graphs" element={<GraphPage />} />
      </Routes>
    </Router>
  );
};

export default App;
