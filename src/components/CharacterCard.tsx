import { PropsWithChildren } from "react";
import { Character } from "../queries/character";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListSubheader,
  Typography,
} from "@mui/material";
import Center from "./Center";

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
        <Center>
          <Typography>
            {character.species} - {character.gender} ({character.status})
          </Typography>
          <img src={character.image} />
          <Typography>Origin: {character.origin.name}</Typography>
          <Typography>Current Location: {character.location.name}</Typography>
        </Center>
        <Typography>
          Appearances: {character.episode.map((e) => e.episode).join(", ")}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default CharacterCard;
