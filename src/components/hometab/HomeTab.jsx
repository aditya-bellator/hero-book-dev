import React, { useState } from "react";
import "./styles.scss";

const HomeTab = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabValue) => {
    setActiveTab(tabValue);
  };
  return (
    <div className="home_tab w-full ">
      <ul className="tabs w-full overflow-x-scroll flex ">
        {
           Array.from(Array(18)).map((item,index)=>{
            return(

        <li
        key={item}
          onClick={() => handleTabClick(index)}
          className={`${activeTab == index ? "active" : ""} flex`}
        >

          Game 
        </li>
            )
          })
        }
       
      </ul>
    </div>
  );
};

export default HomeTab;
