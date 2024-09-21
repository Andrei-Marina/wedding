import { Content } from "../utils/models";
import { Box, Typography } from "@mui/material";

import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers";
import { CountdownTimer, Section } from ".";
import { ReactComponent as Rings } from "../rings.svg";
import { ReactComponent as Flowers } from "../flowers.svg";
import { ReactComponent as Glass } from "../glass.svg";
import { ReactComponent as Eternity } from "../eternity.svg";
import { ReactComponent as Car } from "../car.svg";
import { ReactComponent as Photo } from "../photo.svg";
import { ReactComponent as Plate } from "../plate.svg";

interface TimingSectionProps {
  content: Content;
  isMd: boolean;
}

const CustomCalendarHeader = () => {
  return <></>;
};

const VerticalLine: React.FC<{
  height: string;
}> = ({ height }) => {
  return (
    <Box
      sx={{
        borderLeft: "1px solid black",
        height: { height },
        margin: "0 50%",
      }}
    />
  );
};

const TimingSection = (props: TimingSectionProps) => {
  const date = "2025-07-24";
  const verticalLineHeight = "20px";
  const iconSize = "50px";
  return (
    <Section
      title={props.content.timingSection.title}
      children={
        <Box height={"100%"}>
          <Box>
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
                defaultValue={dayjs(date)}
                slots={{ calendarHeader: CustomCalendarHeader }}
                sx={{
                  height: "unset",
                  "& .Mui-selected": {
                    bgcolor: "#947F6E !important",
                    opacity: "unset !important",
                  },
                  "& .Mui-disabled:not(.Mui-selected)": {
                    color: "black !important",
                  },
                }}
              />
            </LocalizationProvider>
          </Box>
          {props.isMd ? (
            <Box sx={{ marginBottom: "40px" }}>
              <Typography>
                {props.content.timingSection.countdownLablel}
              </Typography>
              <CountdownTimer
                targetDate={new Date("2025-07-24 18:00")}
                content={props.content}
              />
            </Box>
          ) : (
            <></>
          )}
          <Box marginBottom={"100px"}>
            <Box>
              <VerticalLine height={verticalLineHeight} />
              <Box>
                <Typography fontSize={"24px"}>18:00</Typography>
                <Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      width={"20%"}
                      display={"flex"}
                      justifyContent={"flex-end"}
                    >
                      <Car height={iconSize} width={iconSize} />
                    </Box>
                    <Box width={"40%"}>
                      <Typography textTransform={"uppercase"}>
                        {props.content.timingSection.guestInvitationLabel}
                      </Typography>
                    </Box>
                    <Box width={"20%"}></Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      width={"20%"}
                      display={"flex"}
                      justifyContent={"flex-end"}
                    >
                      <Plate height={iconSize} width={iconSize} />
                    </Box>
                    <Box width={"40%"}>
                      <Typography textTransform={"uppercase"}>
                        {props.content.timingSection.furshetLabel}
                      </Typography>
                    </Box>
                    <Box width={"20%"}></Box>
                  </Box>
                </Box>
              </Box>
              <VerticalLine height={verticalLineHeight} />
              <Box>
                <Typography fontSize={"24px"}>18:20</Typography>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box
                    width={"20%"}
                    display={"flex"}
                    justifyContent={"flex-end"}
                  >
                    <Rings height={"40px"} width={"50px"} />
                  </Box>
                  <Box width={"40%"}>
                    <Typography textTransform={"uppercase"}>
                      {props.content.timingSection.ceremonyLabel}
                    </Typography>
                  </Box>
                  <Box width={"20%"}></Box>
                </Box>
              </Box>
              <VerticalLine height={verticalLineHeight} />
              <Box>
                <Typography fontSize={"24px"}>18:50</Typography>
                <Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      width={"20%"}
                      display={"flex"}
                      justifyContent={"flex-end"}
                    >
                      <Flowers height={iconSize} width={iconSize} />
                    </Box>
                    <Box width={"40%"}>
                      <Typography textTransform={"uppercase"}>
                        {props.content.timingSection.guestCelebrationLabel}
                      </Typography>
                    </Box>
                    <Box width={"20%"}></Box>
                  </Box>
                  <Box
                    display={"flex"}
                    justifyContent={"center"}
                    alignItems={"center"}
                  >
                    <Box
                      width={"20%"}
                      display={"flex"}
                      justifyContent={"flex-end"}
                    >
                      <Photo height={"35px"} width={iconSize} />
                    </Box>
                    <Box width={"40%"}>
                      <Typography textTransform={"uppercase"}>
                        {props.content.timingSection.fotosessionLabel}
                      </Typography>
                    </Box>
                    <Box width={"20%"}></Box>
                  </Box>
                </Box>
              </Box>
              <VerticalLine height={verticalLineHeight} />
              <Box>
                <Typography fontSize={"24px"}>20:00</Typography>
                <Box
                  display={"flex"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <Box
                    width={"20%"}
                    display={"flex"}
                    justifyContent={"flex-end"}
                  >
                    <Glass height={iconSize} width={iconSize} />
                  </Box>
                  <Box width={"40%"}>
                    <Typography textTransform={"uppercase"}>
                      {props.content.timingSection.begginingLabel}
                    </Typography>
                  </Box>
                  <Box width={"20%"}></Box>
                </Box>
              </Box>
              <VerticalLine height={verticalLineHeight} />
              <Eternity height={iconSize} width={iconSize} />
            </Box>
          </Box>
        </Box>
      }
    />
  );
};

export default TimingSection;
