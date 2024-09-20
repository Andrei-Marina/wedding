import { Box, Typography } from "@mui/material";
import { Content } from "../utils/models";

interface CoverSectionProps {
  content: Content;
}

const CoverSection = (props: CoverSectionProps) => {
  return (
    <>
      <div></div>
      <Box>
        <Typography
          fontFamily={"Allegretto Script One, cursive"}
          sx={{ fontSize: "100px" }}
        >
          {props.content.coverSection.fianceName}
        </Typography>
        <Typography
          fontFamily={"Allegretto Script One, cursive"}
          fontSize={"72px"}
          margin={"-48px"}
          paddingLeft={"100px"}
        >
          &
        </Typography>
        <Typography
          fontFamily={"Allegretto Script One, cursive"}
          sx={{ fontSize: "100px" }}
        >
          {props.content.coverSection.fianceeName}
        </Typography>
      </Box>
      <Box>
        <Typography fontSize={36} fontWeight={100}>
          {props.content.coverSection.month}
        </Typography>
        <Typography fontSize={72} fontWeight={200}>
          24
        </Typography>
        <Typography fontSize={36} fontWeight={100}>
          2025
        </Typography>
      </Box>
    </>
  );
};

export default CoverSection;
