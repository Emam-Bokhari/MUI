import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

export default function AccordianComponent() {
  return (
    <Fragment>
      <Accordion>
        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
          <Typography variant="h6">How works it ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ color: "#3c3c3c" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            quas deserunt recusandae optio adipisci vel!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography variant="h6">How works it ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ color: "#3c3c3c" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            quas deserunt recusandae optio adipisci vel!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ my: 4 }} />

      {/* default expan */}
      <Accordion defaultExpanded >
        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
          <Typography variant="h6">How works it ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ color: "#3c3c3c" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            quas deserunt recusandae optio adipisci vel!
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion >
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography variant="h6">How works it ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ color: "#3c3c3c" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            quas deserunt recusandae optio adipisci vel!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Divider sx={{ my: 4 }} />

      {/* default expan */}
      <Accordion >
        <AccordionSummary expandIcon={<ArrowDownwardIcon />}>
          <Typography variant="h6">How works it ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ color: "#3c3c3c" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            quas deserunt recusandae optio adipisci vel!
          </Typography>
        </AccordionDetails>
      </Accordion>


      <Accordion disabled>
        <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
          <Typography variant="h6">How works it ?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography variant="body1" sx={{ color: "#3c3c3c" }}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            quas deserunt recusandae optio adipisci vel!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
}
