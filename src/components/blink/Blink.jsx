import React from 'react'
import SportsCricketIcon from "@mui/icons-material/SportsCricket";

// style

import "./styles.scss";
import { Link } from 'react-router-dom';
const Blink = () => {
  return (
    <div className="latest-events">
     <div className="latest-event-item">
      <Link className="blink_me" to={"/"}>
        <i className="d-icon me-1 icon-4">
          <SportsCricketIcon/>
        </i>
        <span>Indian Premier League - 2024fdgfd</span></Link></div>
  </div>
  )
}

export default Blink