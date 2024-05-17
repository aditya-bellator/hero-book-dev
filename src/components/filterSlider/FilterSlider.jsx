import React, { useEffect, useRef, useState } from "react";
import SlideBox from "./SlideBox";

import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import * as styled from "./FilterSlider.style";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const FilterSlider = () => {
  const ScroolState = useRef();
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollFunction = (direction) => {
    if (direction == "left") {
      ScroolState.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    } else {
      ScroolState.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const onScroll = (e) => {
      setScrollLeft(ScroolState?.current?.scrollLeft);
    };
    ScroolState?.current?.addEventListener("scroll", onScroll);

    return () => ScroolState?.current?.removeEventListener("scroll", onScroll);
  }, [ScroolState?.current]);

  return (
    <div>
      <styled.SliderContainer className="slider-container">
      
          <div className="left-slider-btn">
            <KeyboardArrowLeftIcon onClick={() => scrollFunction("left")} />
          </div>
        
        <div className="middle-slider-data" ref={ScroolState}>
          <SlideBox />
        </div>
     
          <div className="right-slider-btn">
            <KeyboardArrowRightIcon onClick={() => scrollFunction("right")} />
          </div>
       
      </styled.SliderContainer>

    </div>
  );
};

export default FilterSlider;
