import { Box, Typography } from "@mui/material";
import { Content } from "../utils/models";

interface CoverSectionProps {
  content: Content;
}

const CoverSection = (props: CoverSectionProps) => {
  return (
    <>
      <div></div>
      <Box
        sx={{
          fontSize: "84px",
          fontFamily: "Allegretto Script One, cursive",
        }}
      >
        <p>
          {props.content.coverSection.fianceName}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
        <p>&</p>
        <p style={{ lineHeight: "140px" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {props.content.coverSection.fianceeName}
        </p>
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