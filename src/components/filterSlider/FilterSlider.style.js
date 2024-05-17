import styled from "styled-components";

export const SliderContainer = styled.div`
  width: 100%;
  display: flex;

  padding: 0px;
  background:#0088cca5;
  ::-webkit-scrollbar {
    display: none;
  }
  .left-slider-btn {
    width: 5%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      color: white;
      font-size: 29px;
      position:absolute;
      z-index:1;
    }
    &::after {
      position: absolute;
      width: 66px;
      content: "";
      left: 0px;
      background-image: linear-gradient(to right, #0088cc82);
      /* background-color: red; */
      height: 100%;
    
    }
  }
  .right-slider-btn {
    width: 5%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      color: white;
      font-size: 24px;
      position:absolute;
      z-index:1;
      cursor: pointer;
    }
    &::after {
      position: absolute;
      width: 66px;
      content: "";
      right: 0px;
      /* background-color: red; */
      height: 100%;
      cursor: pointer;
      background: linear-gradient(
        to left,
        #0f0f0f 20%,
        rgba(33, 33, 33, 0) 80%
      );
    }
  }
  .middle-slider-data {
    /* width: 90%; */
    overflow-x: scroll;
    display: flex;
    gap: 10px;
    flex-grow: 1;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const BoxCard = styled.div`
  background-color: ${(props) =>
    props.isSelected ? `#0088CC` : ``};
  height: 32px;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  border-radius: 0px;
  white-space: nowrap;
  transition: all 0.2s linear;


  cursor: pointer;
  p {
    font-size: 1rem;
    color: ${(props) => (props.isSelected ? `white` : `white`)};
  }

  /* .boxCard {
    background-color: rgb(255 248 248 / 29%);
  }

  & .active {
    background-color: white !important;
    color: white;
  } */
`;
