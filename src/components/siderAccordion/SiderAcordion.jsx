import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CustomAccordion } from "./styled";
import CollapsibleTable from "./MatchList";

export default function AccordionUsage() {
  const casinoList = [
    "Our Casino",
    "Our Virtual",
    "Live Casino",
    "Slot Game",
    "Fantasy Game",
  ];
  return (
    <div>
      <CustomAccordion expanded={true}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          sx={{
            height: "30px",
            minHeight: "30px !important",
            backgroundColor: "black",
            color: "white",
          }}
        >
          All Sports
        </AccordionSummary>
        <CollapsibleTable />
      </CustomAccordion>
      <CustomAccordion expanded={true}>
        <AccordionSummary
          aria-controls="panel1-content"
          id="panel1-header"
          expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          sx={{
            height: "30px",
            minHeight: "30px !important",
            backgroundColor: "black",
            color: "white",
          }}
        >
          Others
        </AccordionSummary>
        <ul className="casino-sider-list">
          {casinoList.map((list,index)=>{
            return(
              <li  key={list} >
                <span className={index == "0" || index =="1" ?"blink_me":""}>
                {list}
                </span>
               </li>
            )
          })}
        </ul>
      </CustomAccordion>
    </div>
  );
}
