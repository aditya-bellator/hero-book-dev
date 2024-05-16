import Accordion from "@mui/material/Accordion";
import { styled } from "@mui/material/styles";
export const CustomAccordion = styled(Accordion)(({ theme }) => {
    return {
      boxShadow: "none", // this styles directly apply to accordion
      border: `1px solid gray`,
      ".MuiAccordionDetails-root": {
        backgroundColor:"#bbb"
      },
    

      ".MuiAccordionSummary-root": {
        height: "30px",
        minHeight: "30px !important",
        backgroundColor: "black",
        color: "white",
        
      }, // this apply to Summary
    };
  });