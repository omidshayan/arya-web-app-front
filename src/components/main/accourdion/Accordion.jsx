import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoIosArrowDown } from "react-icons/io";
import './Accordion.css';


export default function BasicAccordion({title, children}) {
  return (
    <div>
      <Accordion className="accordionGroup">
        <AccordionSummary
          expandIcon={<IoIosArrowDown className="color"/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
        <div className="f-w margin">{title}</div>
        </AccordionSummary>
        <AccordionDetails>
          {children}
        </AccordionDetails>
      </Accordion>
      <hr />
    </div>
  );
}
