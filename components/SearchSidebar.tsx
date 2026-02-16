"use client";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { filtersData } from "@/constants/data";
import CheckboxListSecondary from "./CheckboxListSecondary";
export default function SearchSidebar() {
  return (
    <div>
      {filtersData.map((item, index) => (
        <Accordion key={item.key} defaultExpanded={[1, 2].includes(index + 1)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={item.key}
            id={item.key}
          >
            <Typography component="span">{item.label}</Typography>
          </AccordionSummary>
          <AccordionDetails className="overflow-y-auto max-h-[300px]">
            <CheckboxListSecondary data={item.options} />
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
