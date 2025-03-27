import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css"; // Import the CSS file

const HomePage = () => {
  const [teamCount, setTeamCount] = useState("");
  const navigate = useNavigate();

  const handleStart = () => {
    if (teamCount > 0) {
      navigate("/team-setup", { state: { teamCount } });
    }
  };

  return (
    <div className="homepage-container">
      <h1 className="homepage-title">Stock Rush – The Ultimate Trading Challenge</h1>
      
      {/* Stock Image */}
      <img src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202401/6596743d7865b-psu-gold-rush-around-150-return-in-2-years-where-is-the-coal-india-stock-headed-040251715-16x9.jpg?size=948:533" alt="Stock Trading" className="homepage-image" />

      {/* Input for Team Count */}
      <input
        type="number"
        className="homepage-input"
        placeholder="Enter number of teams"
        value={teamCount}
        onChange={(e) => setTeamCount(e.target.value)}
      />

      {/* Start Button */}
      <button onClick={handleStart} className="homepage-button">
        Start Game 🚀
      </button>
    </div>
  );
};

export default HomePage;
