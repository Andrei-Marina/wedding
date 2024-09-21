import { Box, Typography } from "@mui/material";
import { Content } from "../utils/models";
import { Section } from ".";

interface WelcomeSectionProps {
  content: Content;
}

const welcomeSection = (props: WelcomeSectionProps) => {
  return (
    <Section
      title={props.content.welcomeSection.title}
      children={
        <Box
          height={"90%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography
            sx={{ whiteSpace: "pre-wrap" }}
          >
            {props.content.welcomeSection.content}
          </Typography>
        </Box>
      }
    />
  );
};
export default welcomeSection;
