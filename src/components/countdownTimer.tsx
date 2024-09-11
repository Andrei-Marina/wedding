import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer = (props: CountdownTimerProps) => {
  const calculateTimeLeft = () => {
    const now = new Date();
    const timeLeft = props.targetDate.getTime() - now.getTime();
    return {
      days: Math.floor(timeLeft / (1000 * 60 * 60 * 24)),
      hours: Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((timeLeft % (1000 * 60)) / 1000),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
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
          <Typography fontSize={12}>Days</Typography>
        </Box>
        <Box
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={" space-between"}
        >
          <Typography fontSize={36}>{timeLeft.hours}</Typography>
          <Typography fontSize={12}>Hours</Typography>
        </Box>
        <Box
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={" space-between"}
        >
          <Typography fontSize={36}>{timeLeft.minutes}</Typography>
          <Typography fontSize={12}>Minutes</Typography>
        </Box>
        <Box
          height={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={" space-between"}
        >
          <Typography fontSize={36}>{timeLeft.seconds}</Typography>
          <Typography fontSize={12}>Seconds</Typography>
        </Box>
      </Box>
    </>
  );
};

export default CountdownTimer;
