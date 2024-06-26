import  { useState } from "react";
import ZoomInIcon from "@mui/icons-material/ZoomIn";
import ClearIcon from "@mui/icons-material/Clear"; // Import the clear icon
import MenuItem from '@mui/material/MenuItem';

import Select from '@mui/material/Select';


import { logo } from "../../assets"
////styles
import "./styles.scss"
import NavDropDown from "./NavDropDown";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [openSearch, setOpenSearch] = useState(false)

  // Function to clear the search input
  const clearSearch = () => {
    setSearchValue("");
  };

  return (
    <div className="navbar-container">
      <div className="navbar-left-col">
        <Link to={"/"}>
        <img src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-right-col">
        <div className="search-bar">
          <input
          className={openSearch?"open-search":"close-search"}
            type="text"
            placeholder="Search here"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          {searchValue &&
          <div className="cross-icon">

            <ClearIcon onClick={clearSearch} />
          </div> 
          }
          <div className="search-icon" onClick={()=>setOpenSearch(!openSearch)}>

          <ZoomInIcon />
          </div>
        </div>
        <ul className="list">
          <li>
            <span>Rule</span>
            <span>Download Apk</span>
          </li>
          <li>
            <span > <span className="bold-b">
              Balance
              </span>
              :300</span>
            <span >
              <span className="bold-b">

              Exp
              </span>
              :300</span>
          </li>
          <li>
        <NavDropDown/>
          </li>
        </ul>
      </div>
      <div className="news"><Marquee speed={50}>Lok Sabha Election 2024 is Available Predict Now and Big Win....Get in on the Action! Win Big with Instant Scratch Lottery &amp; Cricket Lottery!...</Marquee></div>
    </div>
  );
};

export default Navbar;
