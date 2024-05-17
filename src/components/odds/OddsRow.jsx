import React from "react";
////styles
import "./styles.scss";
import Tv from "../../assets/svg/tv";
import { bmIcon, facebook } from "../../assets";
import OddsButton from "./OddsButton";
const OddsRow = () => {
  return (
    <div className="odds-row-container w-full flex justify-between gap-4">
      <div className="odds-row-left-col w-[60%] flex justify-between pl-2 items-center">
        <span className="text-[14px]">Sunrisers Hyderabad v Gujarat Titans / 16/05/2024, 19:30:00</span>
        <div className="icon-div flex
            items-center
            gap-[10px]">
          <Tv />
          <img src={facebook} alt="" className=" h-[12px]"/>
          <img src={bmIcon} alt="" className=" h-[12px]" />
        </div>
      </div>
      <div className="odds-row-right-col w-[40%]">
        <ul className="w-full grid grid-cols-3 ">
          <li  className="w-full grid grid-cols-2"><OddsButton/>
          <OddsButton lay={true}/></li>
          <li  className="w-full grid grid-cols-2"><OddsButton/>
          <OddsButton lay={true}/></li> <li  className="w-full grid grid-cols-2"><OddsButton/>
          <OddsButton lay={true}/></li>
        </ul>
      </div>
    </div>
  );
};

export default OddsRow;
