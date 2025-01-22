import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import PlaylistCard from "./components/PlaylistCard";
import RightPanel from "./components/RightPanel";
import "./App.css";

const dummyPlaylists = [
  { id: 1, name: "Playlist 1", videos: 5 },
  { id: 2, name: "Playlist 2", videos: 8 },
  { id: 3, name: "Playlist 3", videos: 3 },
  { id: 4, name: "Playlist 4", videos: 7 },
];

const dummyVideos = [
  { id: 1, title: "Video 1", attachedProducts: 5 },
  { id: 2, title: "Video 2", attachedProducts: 3 },
  { id: 3, title: "Video 3", attachedProducts: 8 },
];

const App = () => {
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);

  const handleThumbnailClick = (playlistId) => {
    const selected = dummyPlaylists.find((p) => p.id === playlistId);
    setSelectedPlaylist(selected);
  };

  return (
    <div className="App">
      <Sidebar />
      <div className="main-content">
        <Header />
        <div className="playlist-grid">
          {dummyPlaylists.map((playlist) => (
            <PlaylistCard
              key={playlist.id}
              playlist={playlist}
              onClick={handleThumbnailClick}
            />
          ))}
        </div>
      </div>
      <RightPanel
        selectedPlaylist={selectedPlaylist}
        videos={dummyVideos}
      />
    </div>
  );
};

export default App;
