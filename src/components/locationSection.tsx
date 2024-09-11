import { Box, Typography } from "@mui/material";
import { Content } from "../utils/models";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

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
    <>
      <Typography fontSize={36} fontWeight={300}>
        {props.content.locationSection.title}
      </Typography>
      <Box height={"90%"} width={"100%"}>
        <LoadScript googleMapsApiKey={props.apiKey} id="google-maps-script">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={14}
          ></GoogleMap>
        </LoadScript>
      </Box>
    </>
  );
};

export default LocationSection;
