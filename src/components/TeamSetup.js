import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./TeamSetup.css"; // Import CSS file

const TeamSetup = () => {
  const location = useLocation();
  const teamCount = location.state?.teamCount || 0;
  const [teams, setTeams] = useState(
    Array.from({ length: teamCount }, () => ({ name: "", members: ["", "", ""] }))
  );
  const navigate = useNavigate();

  const handleChange = (teamIndex, field, value, memberIndex = null) => {
    const updatedTeams = [...teams];
    if (field === "name") {
      updatedTeams[teamIndex].name = value;
    } else {
      updatedTeams[teamIndex].members[memberIndex] = value;
    }
    setTeams(updatedTeams);
  };

  const handleProceed = () => {
    navigate("/graphs", { state: { teams } });
  };

  return (
    <div className="team-setup-container">
      <h2 className="team-setup-title">🏆 Enter Team Details</h2>
      <div className="team-grid">
        {teams.map((team, teamIndex) => (
          <div key={teamIndex} className="team-card">
            <input
              type="text"
              placeholder={`Team ${teamIndex + 1} Name`}
              className="team-input"
              value={team.name}
              onChange={(e) => handleChange(teamIndex, "name", e.target.value)}
            />
            {team.members.map((member, memberIndex) => (
              <input
                key={memberIndex}
                type="text"
                placeholder={`Member ${memberIndex + 1}`}
                className="team-input member-input"
                value={member}
                onChange={(e) => handleChange(teamIndex, "members", e.target.value, memberIndex)}
              />
            ))}
          </div>
        ))}
      </div>
      <button onClick={handleProceed} className="proceed-button">
        Proceed to Graphs
      </button>
    </div>
  );
};

export default TeamSetup;
