import { Box, Typography } from "@mui/material";
import { Content } from "../utils/models";

interface WelcomeSectionProps {
  content: Content;
}

const welcomeSection = (props: WelcomeSectionProps) => {
  return (
    <>
      <Typography fontSize={36} fontWeight={300}>
        {props.content.welcomeSection.title}
      </Typography>
      <Box
        height={"90%"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Typography>{props.content.welcomeSection.content}</Typography>
      </Box>
    </>
  );
};
export default welcomeSection;
