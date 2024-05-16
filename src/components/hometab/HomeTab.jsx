import React, { useState } from "react";
import "./styles.scss";

const HomeTab = () => {
  const [activeTab, setActiveTab] = useState("#tab_1");

  const handleTabClick = (tabValue) => {
    setActiveTab(tabValue);
  };

  return (
    <div className="home_tab">
      <ul className="tabs">
        <li
          onClick={() => handleTabClick("#tab_1")}
          className={activeTab === "#tab_1" ? "active" : ""}
          data-tab-value="#tab_1"
        >
          Game 1
        </li>
        <li
          onClick={() => handleTabClick("#tab_2")}
          className={activeTab === "#tab_2" ? "active" : ""}
          data-tab-value="#tab_2"
        >
          Game 2
        </li>
        <li
          onClick={() => handleTabClick("#tab_3")}
          className={activeTab === "#tab_3" ? "active" : ""}
          data-tab-value="#tab_3"
        >
          Game 3
        </li>
      </ul>
    </div>
  );
};

export default HomeTab;
