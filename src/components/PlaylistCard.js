import React from "react";
import "./PlaylistCard.css";

const PlaylistCard = ({ playlist, onClick }) => {
  return (
    <div className="playlist-card" onClick={() => onClick(playlist.id)}>
      <div className="thumbnail">📷</div>
      <h3>{playlist.name}</h3>
      <p>{playlist.videos} Videos</p>
    </div>
  );
};

export default PlaylistCard;
