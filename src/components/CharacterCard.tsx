import { PropsWithChildren } from "react";
import { Character } from "../queries/character";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

type CharacterCardProps = PropsWithChildren & {
  character: Character;
};
function CharacterCard({ character }: CharacterCardProps) {
  return (
    <Accordion>
      <AccordionSummary aria-controls="panel1a-content" id="panel1a-header">
        <Typography>{character.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default CharacterCard;
