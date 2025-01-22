import React from "react";
import "./RightPanel.css";

const RightPanel = ({ selectedPlaylist, videos }) => {
  return (
    <div className="right-panel">
      <h2>Playlist Details</h2>
      {selectedPlaylist ? (
        <>
          <p>Playlist: {selectedPlaylist.name}</p>
          <ul className="video-list">
            {videos.map((video) => (
              <li key={video.id}>
                {video.title} - {video.attachedProducts} Products
              </li>
            ))}
          </ul>
          <button className="update-button">Update Playlist</button>
        </>
      ) : (
        <p>Select a playlist to see details</p>
      )}
    </div>
  );
};

export default RightPanel;
