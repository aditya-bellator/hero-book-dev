import React, { Fragment, useState } from "react";
import * as styled from "./FilterSlider.style";
import { Array } from "./FilterCategorydata";
const SlideBox = () => {
  const [activeValue, setActiveValue] = useState(0);

  return (
    <Fragment>
      {Array.map((res, index) => {
        return (
          <styled.BoxCard
            isSelected={activeValue === index}
            // className={activeValue === index ? "active" : "boxCard"}
            onClick={() => setActiveValue(index)}
          >
            <p>{res}</p>
          </styled.BoxCard>
        );
      })}
    </Fragment>
  );
};

export default SlideBox;
