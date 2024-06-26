import React, { useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";
import GameDetailCollapse from "../../components/gameDetailCollapse/GameDetailCollapse";
import { Link } from "react-router-dom";
import GameDetailBetHistory from "../../components/gameDetailBetHistory/GameDetailBetHistory";
import BetPlaceModule from "../../components/betPlaceModule/BetPlaceModule"
///styles
import "./styles.scss";
const GameDetail = () => {
  const [openBetPlaceModule, setOpenBetPlaceModule] = useState(false)
  const [checkBackLay, setCheckBackLay] = useState("back")
  const openBetModuleHandler = (val)=>{
    setOpenBetPlaceModule(val)
  }
  return (
    <div className="game-detail-container">
      <div className="game-detail-left-col">
        <div className="game-header">
          <span>Kolkata Knight Riders v Sunrisers Hyderabad</span>
          <span className="float-right">21/05/2024 19:30:00</span>
        </div>
        {Array.from(Array(4)).map((item) => {
          return <GameDetailCollapse key={item} fun={openBetModuleHandler}/>;
        })}
      </div>
      <div className="game-detail-right-col">
        <Link
          className="bet-nation-game-name blink-message flex items-center p-[5px]"
          to="/"
        >
          <ErrorIcon />
          <div>Bollywood Casino</div>
        </Link>
        {openBetPlaceModule && 
        <BetPlaceModule fun={openBetModuleHandler}/>
        }
<GameDetailBetHistory />
      
      </div>
    </div>
  );
};

export default GameDetail;
