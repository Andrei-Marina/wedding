import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = (props: SectionProps) => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // Stop observing once it's visible
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <Box className="section" display={"flex"} flexDirection={"column"} height={"100%"}>
      <Box height={"10%"}>
        <Typography
          ref={sectionRef}
          className={`section-header ${isVisible ? "visible" : ""}`}
          fontSize={36}
          fontWeight={300}
        >
          {props.title}
        </Typography>
      </Box>
      <Box height={"90%"}>{props.children}</Box>
    </Box>
  );
};

export default Section;
