import React, { useState } from "react";
import { logo } from "../../assets/img";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ClearIcon from "@mui/icons-material/Clear"; // Import the clear icon
import "./styles.scss";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");

  // Function to clear the search input
  const clearSearch = () => {
    setSearchValue("");
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left-col">
        <img src={logo} alt="" />
      </div>
      <div className="navbar-right-col">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search here"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {searchValue && <ClearIcon onClick={clearSearch} />}
          <ZoomInIcon />
        </div>
        <ul className="list">
          <li>
            <span>Rule</span>
            <span>Download Apk</span>
          </li>
          <li>
            <span>Balance:300</span>
            <span>Exp:300</span>
          </li>
          <li>Demo</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
