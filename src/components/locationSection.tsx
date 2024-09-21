import { Box, Typography } from "@mui/material";
import { Content } from "../utils/models";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { Section } from ".";

interface LocationSectionProps {
  content: Content;
  apiKey: string;
  lng: number;
  lat: number;
}
const LocationSection = (props: LocationSectionProps) => {
  const center = {
    lat: props.lat,
    lng: props.lng,
  };

  const containerStyle = {
    width: "100%",
    height: "400px",
  };

  return (
    <Section
      title={props.content.locationSection.title}
      children={
        <>
          <LoadScript googleMapsApiKey={props.apiKey} id="google-maps-script">
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={14}
            ></GoogleMap>
          </LoadScript>
          <Box marginTop={5}>
            <Typography fontSize={"24px"}>
              {props.content.locationSection.routeHintLabel}
            </Typography>
            <Typography marginTop={2} textAlign={"justify"}>
              {props.content.locationSection.routeHint}
            </Typography>
          </Box>
        </>
      }
    />
  );
};

export default LocationSection;
