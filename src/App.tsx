import { useEffect, useState } from "react";
import "./App.css";
import {
  createTheme,
  ThemeProvider,
  Box,
  Grid2,
  useMediaQuery,
} from "@mui/material";
import { Content } from "./utils/models";
import { Contents } from "./utils/constants";
import {
  LanguageDialog,
  CoverSection,
  DetailsSection,
  WelcomeSection,
  TimingSection,
  LocationSection,
} from "./components";
import CountdownTimer from "./components/countdownTimer";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, sans-serif",
  },
});

function App() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [content, setContent] = useState<Content>();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(true);

  const isMd = useMediaQuery("(max-width:960px)");

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when component unmounts
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="background-video"
          width={windowSize.width}
          height={windowSize.height}
        >
          <source src="/wedding/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {content ? (
        <div className="content-overlay">
          <Box sx={{ width: "100%" }}>
            <Grid2 container>
              <Grid2
                height={windowSize.height}
                size={12}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <CoverSection content={content} />
              </Grid2>
              <Grid2
                height={windowSize.height}
                size={{ xs: 12, md: 3 }}
                sx={{
                  bgcolor: "rgba(255,255,255,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                <WelcomeSection content={content} />
              </Grid2>
              <Grid2
                height={windowSize.height}
                size={{ xs: 12, md: 6 }}
                sx={{ bgcolor: "rgba(255,255,255,0.4)", padding: 5 }}
              >
                <TimingSection content={content} />
              </Grid2>{" "}
              {isMd ? (
                <Grid2 size={{ xs: 12, md: 12 }}>
                  <CountdownTimer targetDate={new Date("2025-07-24")} />
                </Grid2>
              ) : (
                <></>
              )}
              <Grid2
                height={windowSize.height}
                size={{ xs: 12, md: 3 }}
                sx={{
                  bgcolor: "rgba(255,255,255,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                <LocationSection
                  apiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}
                  content={content}
                  lat={46.88361358642578}
                  lng={28.752653121948242}
                />
              </Grid2>
              {!isMd ? (
                <Grid2 size={{ xs: 12, md: 12 }}>
                  <CountdownTimer targetDate={new Date("2025-07-24")} />
                </Grid2>
              ) : (
                <></>
              )}
              <Grid2
                height={windowSize.height}
                size={{ xs: 12, md: 12 }}
                sx={{
                  bgcolor: "rgba(255,255,255,0.4)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-around",
                  alignItems: "center",
                  padding: 5,
                }}
              >
                <DetailsSection content={content} />
              </Grid2>
            </Grid2>
          </Box>
        </div>
      ) : (
        <></>
      )}
      <LanguageDialog
        open={isDialogOpen}
        onClose={(value) => {
          console.log(value);
          setContent(Contents[value ?? "ru"]);
          setIsDialogOpen(false);
        }}
      />
    </ThemeProvider>
  );
}

export default App;
