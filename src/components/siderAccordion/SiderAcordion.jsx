import AccordionSummary from "@mui/material/AccordionSummary";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CustomAccordion } from "./styled";
import CollapsibleTable from "./MatchList";

export default function AccordionUsage() {
  return (
    <div>
      <CustomAccordion>
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
    </div>
  );
}
