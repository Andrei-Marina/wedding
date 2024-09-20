import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Content } from "../utils/models";

interface CountdownTimerProps {
  targetDate: Date;
  content: Content;
}
interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownTimer = (props: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const now = new Date();
      const timeLeft =
        props.targetDate.getTime() -
        now.getTime() 
      if (timeLeft <= 0)
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      return {
        days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
      };
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [props.targetDate]);

  return (
    <>
      <Box
        display={"flex"}
        width={"100%"}
        justifyContent={"space-evenly"}
        padding={"5px"}
      >
        <Box
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={" space-between"}
        >
          <Typography fontSize={36}>{timeLeft.days}</Typography>
          <Typography fontSize={12}>
            {props.content.timingSection.daysLabel}
          </Typography>
        </Box>
        <Box
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={" space-between"}
        >
          <Typography fontSize={36}>{timeLeft.hours}</Typography>
          <Typography fontSize={12}>
            {props.content.timingSection.hoursLabel}
          </Typography>
        </Box>
        <Box
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={" space-between"}
        >
          <Typography fontSize={36}>{timeLeft.minutes}</Typography>
          <Typography fontSize={12}>
            {props.content.timingSection.minutesLabel}
          </Typography>
        </Box>
        <Box
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={" space-between"}
        >
          <Typography fontSize={36}>{timeLeft.seconds}</Typography>
          <Typography fontSize={12}>
            {props.content.timingSection.secondsLabel}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CountdownTimer;
