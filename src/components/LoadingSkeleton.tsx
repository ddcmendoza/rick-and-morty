import { CircularProgress } from "@mui/material";
import Center from "./Center";

function LoadingSkeleton() {
  return (
    <Center>
      <CircularProgress size={"20rem"} />
    </Center>
  );
}

export default LoadingSkeleton;
