import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Product Playlists</h1>
      <button className="import-button">Import from YouTube</button>
    </header>
  );
};

export default Header;
