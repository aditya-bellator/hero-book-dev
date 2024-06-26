import React from "react";
import HttpsIcon from '@mui/icons-material/Https';
import Tv from "../../assets/svg/tv";
import { bmIcon, facebook } from "../../assets";
import OddsButton from "./OddsButton";
////styles
import "./styles.scss";
import { Link } from "react-router-dom";
const OddsRow = () => {
  return (
    <Link to={"/game-detail"}> 
    <div className="odds-row-container w-full flex justify-between gap-4">
      <div className="odds-row-left-col w-[60%] flex justify-between pl-2 items-center">
        <span className="text-[14px]">Sunrisers Hyderabad v Gujarat Titans / 16/05/2024, 19:30:00</span>
        <div className="icon-div flex
            items-center
            gap-[10px]">
              <div className="active-match"></div>
          <Tv />
          <img src={facebook} alt="" className=" h-[12px]"/>
          <img src={bmIcon} alt="" className=" h-[12px]" />
        </div>
      </div>
      <div className="odds-row-right-col w-[40%]">
        <ul className="w-full grid grid-cols-3 ">
          <li  className="w-full grid grid-cols-2 relative"><OddsButton/>
          <div className="lock-odds bg-[#373636d6] absolute left-0 top-0 w-full h-full flex items-center justify-center">
<HttpsIcon/>
          </div>
          <OddsButton lay={true}/></li>
          <li  className="w-full grid grid-cols-2"><OddsButton/>
          <OddsButton lay={true}/></li> <li  className="w-full grid grid-cols-2"><OddsButton/>
          <OddsButton lay={true}/></li>
        </ul>
      </div>
    </div>
    </Link>
  );
};

export default OddsRow;
