import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { IoIosArrowDown } from "react-icons/io";
import './Accordion.css';
import { Link } from "react-router-dom";


export default function BasicAccordion() {
  return (
    <div>
      <Accordion className="accordionGroup">
        <AccordionSummary
          expandIcon={<IoIosArrowDown />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div className="f-w margin">لیلامی</div>
        </AccordionSummary>
        <AccordionDetails>
          <Link to={'/'} className="color  d-block">
            نمایش همه
          </Link>
          
          <Link to={'/'} className="color  d-block">
            go to home
          </Link>
        </AccordionDetails>
      </Accordion>
      <hr />
    </div>
  );
}
