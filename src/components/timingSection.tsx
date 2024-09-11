import { Content } from "../utils/models";
import { Box, Typography } from "@mui/material";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";

interface TimingSectionProps {
  content: Content;
}

const CustomCalendarHeader = () => {
  return <></>;
};

const TimingSection = (props: TimingSectionProps) => {
  return (
    <>
      <Typography fontSize={36} fontWeight={300}>
        {props.content.timingSection.title}
      </Typography>
      <Box height={"90%"}>
        <Typography
          fontSize={36}
          fontWeight={300}
          fontFamily={"Allegretto Script One, cursive"}
        >
          {props.content.coverSection.month}
        </Typography>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DateCalendar
            disabled
            defaultValue={dayjs("2025-07-25")}
            slots={{ calendarHeader: CustomCalendarHeader }}
            sx={{
              "& .Mui-selected": {
                bgcolor: "#947F6E !important",
                opacity: "unset !important",
              },
              "& .Mui-disabled:not(.Mui-selected)": {
                color: "black !important",
                // fontSize: "36px !important",
              },
            }}
          />
        </LocalizationProvider>
      </Box>
    </>
  );
};

export default TimingSection;
