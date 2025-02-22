import { Accordion , AccordionDetails, AccordionSummary, Typography } from '@mui/material'
import React from 'react'
import { FaPlus } from 'react-icons/fa'

const Acordion = ({accordion:{title,description}}) => {
  return (
    <Accordion sx={{marginBottom:"5px"}}>
    <AccordionSummary
      expandIcon={<FaPlus color='#fff'/>}
      
      aria-controls="panel1-content"
      id="accordion-background"
    >
      <Typography component="span" sx={{color:"#fff",
        fontSize:"1.7rem",padding:"0.5rem",fontWeight:"400"}}>{title}</Typography>
    </AccordionSummary>
    <AccordionDetails id='accordion-details'>
    <span id="" data-uia="">{description}</span>
    </AccordionDetails>
  </Accordion>
  )
}

export default Acordion