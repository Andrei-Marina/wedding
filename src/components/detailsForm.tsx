import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Content } from "../utils/models";
import { styled } from "@mui/material/styles";
import { useState } from "react";

interface DetailsFormProps {
  content: Content;
}
const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#947F6E", // Default border color
    },
    "&:hover fieldset": {
      borderColor: "#947F6E", // Border color on hover
    },
    "&.Mui-focused fieldset": {
      borderColor: "#947F6E", // Border color when focused
    },
  },
  "& .MuiInputLabel-root": {
    color: "#947F6E", // Default label color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#947F6E", // Label color when focused
  },
  "& .MuiInputBase-root": {
    "&:after": {
      borderColor: "#947F6E", // Border color on hover
    },
    "&:hover": {
      borderColor: "#947F6E", // Border color on hover
    },
  },
}));

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "#947F6E", // Default color
  "&.Mui-checked": {
    color: "#947F6E", // Color when checked
  },
  "&.MuiCheckbox-root:hover": {
    backgroundColor: "rgba(148, 127, 110, 0.1)", // Optional: light green background on hover
  },
  "& .MuiFormControlLabel-root": {},
}));

const CustomRadio = styled(Radio)(({ theme }) => ({
  color: "#947F6E", // Default color of the radio button icon
  "&.Mui-checked": {
    color: "#947F6E", // Color of the icon when selected
  },
  "&:hover": {
    backgroundColor: "rgba(148, 127, 110, 0.1)", // Optional: light green background on hover
  },
}));

const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    color: "#947F6E", // Label color
  },
  "& .Mui-checked + .MuiFormControlLabel-label": {
    color: "#947F6E", // Change label color when radio button is selected
  },
}));

const DetailsForm = (props: DetailsFormProps) => {
  const [hasPartner, setHasPartner] = useState(false);

  return (
    <FormGroup sx={{ width: "100%" }}>
      <CustomTextField
        id="standard-basic"
        label={props.content.detailsSection.nameFormLabel}
        variant="standard"
        fullWidth
      />
      <CustomFormControlLabel
        sx={{
          marginTop: 2,
        }}
        required={false}
        control={
          <CustomCheckbox
            required={false}
            checked={hasPartner}
            onChange={(event) => setHasPartner(event.target.checked)}
          />
        }
        label={props.content.detailsSection.partnerCheckboxLabel}
      />
      <CustomTextField
        id="standard-basic"
        label={props.content.detailsSection.partnerFormLabel}
        variant="standard"
        fullWidth
        disabled={!hasPartner}
      />
      <FormControl sx={{ alignItems: "flex-start", marginTop: 3 }}>
        <FormLabel id="presence-form-label" sx={{ color: "#947F6E" }}>
          {props.content.detailsSection.presenceFormLabel}
        </FormLabel>
        <RadioGroup
          aria-labelledby="presence-radio-buttons-group"
          name="presence-radio-buttons-group"
          // value={value}
          // onChange={handleChange}
        >
          <CustomFormControlLabel
            value={1}
            control={<CustomRadio />}
            label={props.content.detailsSection.presenceFormValue1}
          />
          <CustomFormControlLabel
            value={2}
            control={<CustomRadio />}
            label={props.content.detailsSection.presenceFormValue2}
          />
          <CustomFormControlLabel
            value={3}
            control={<CustomRadio />}
            label={props.content.detailsSection.presenceFormValue3}
          />
        </RadioGroup>
      </FormControl>
    </FormGroup>
  );
};

export default DetailsForm;
