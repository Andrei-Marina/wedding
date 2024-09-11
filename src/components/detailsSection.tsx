import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { Content } from "../utils/models";
import { styled } from "@mui/material/styles";
import { useState } from "react";

interface DetailsSectionProps {
  content: Content;
}
const CustomTextField = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#947F6E",
    },
    "&:hover fieldset": {
      borderColor: "#947F6E",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#947F6E",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#947F6E",
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#947F6E",
  },
  "& .MuiInputBase-root": {
    "&:after": {
      borderColor: "#947F6E",
    },
    "&:hover": {
      borderColor: "#947F6E",
    },
  },
}));

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  color: "#947F6E",
  "&.Mui-checked": {
    color: "#947F6E",
  },
  "&.MuiCheckbox-root:hover": {
    backgroundColor: "rgba(148, 127, 110, 0.1)",
  },
  "& .MuiFormControlLabel-root": {},
}));

const CustomRadio = styled(Radio)(({ theme }) => ({
  color: "#947F6E",
  "&.Mui-checked": {
    color: "#947F6E",
  },
  "&:hover": {
    backgroundColor: "rgba(148, 127, 110, 0.1)",
  },
}));

const CustomFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  "& .MuiFormControlLabel-label": {
    color: "#947F6E",
  },
  "& .Mui-checked + .MuiFormControlLabel-label": {
    color: "#947F6E",
  },
}));

const DetailsSection = (props: DetailsSectionProps) => {
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

export default DetailsSection;
