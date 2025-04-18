import React from "react";
import PropTypes from 'prop-types';
import "./avatar.css"; // Make sure this path is correct for avatar.css

const Avatar = ({ selected, setSelected }) => {
  const defaultAvatars = [
    require("../assets/avatar1.png"), // Adjust paths based on your folder structure
    require("../assets/avatar2.png"),
    require("../assets/avatar3.png"),
    require("../assets/avatar4.png"),
    require("../assets/avatar5.png"),
    require("../assets/avatar6.png"),
    require("../assets/avatar7.png"),
    require("../assets/avatar8.png"),
    require("../assets/avatar9.png"),
    require("../assets/avatar10.png"),
  ];

  return (
    <div className="avatar-selection-container">
      <div className="avatar-bg">
        <div className="d-flex gap-3 justify-content-center mt-3">
          {defaultAvatars.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Avatar ${index + 1}`}
              onClick={() => setSelected(url)}
              style={{
                border: selected === url ? "2px solid blue" : "2px solid transparent",
                borderRadius: "50%",
                cursor: "pointer",
                width: "60px",
                height: "60px",
                objectFit: "cover",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

Avatar.propTypes = {
  selected: PropTypes.string,
  setSelected: PropTypes.func.isRequired,
};

export default Avatar;