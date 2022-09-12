import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Accordionfunction(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  const data = props.data



  return (
    <div>
    {data.map(accordion =>  {
    const {panel, question, answer} = accordion; 
    return(
  
      <Accordion
      className="accordion"
      expanded={expanded === "panel" + panel}
      key ={panel}
      onChange={handleChange("panel" + panel)}
    >
      <AccordionSummary
        className="accordionSummary"
        expandIcon={<ExpandMoreIcon />}
        aria-controls={"panel" + panel + "d-content"}
        id={"panel" + panel + "d-header"}
      >
        <Typography sx={{ width: "100%", flexShrink: 0 }}>
          {question}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="accordionDetails">
        <Typography>{answer}</Typography>
      </AccordionDetails>
    </Accordion>) })}
  </div>
  );
}
