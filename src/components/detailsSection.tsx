import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Grid2,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { Content } from "../utils/models";
import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";

import { auth, db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Circle } from "@mui/icons-material";

interface DetailsSectionProps {
  content: Content;
  apiUsername: string;
  apiPassword: string;
}

interface Guest {
  guestName: string;
  partnerName: string;
  presense: number;
  preferences: number[];
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
  const defaultGuest: Guest = {
    guestName: "",
    partnerName: "",
    presense: 0,
    preferences: [],
  };

  const [hasPartner, setHasPartner] = useState(false);
  const [guest, setGuest] = useState<Guest>(defaultGuest);

  useEffect(() => {
    const signInAutomatically = async () => {
      try {
        await signInWithEmailAndPassword(
          auth,
          props.apiUsername,
          props.apiPassword
        );
      } catch (error) {}
    };

    signInAutomatically();
  }, [props.apiPassword, props.apiUsername]);

  const handlePreferencesChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: number
  ) => {
    var preferences = guest.preferences;
    if (event.target.checked && guest.preferences.length < 2) {
      if (!guest.preferences.includes(id)) {
        setGuest({ ...guest, preferences: [...preferences, id] });
      }
    } else {
      if (guest.preferences.includes(id)) {
        setGuest({
          ...guest,
          preferences: preferences.filter((num) => num !== id),
        });
      }
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (guest.guestName && guest.presense) {
      try {
        await addDoc(collection(db, "guests"), guest);
      } catch (err) {}

      setGuest(defaultGuest);
    }
  };

  return (
    <>
      <Typography fontSize={36} fontWeight={300}>
        {props.content.detailsSection.title}
      </Typography>
      <Box height={"90%"} width={"100%"}>
        <Grid2 container>
          <Grid2 size={{ xs: 12, md: 6 }} padding={5}>
            <List dense>
              <ListItem>
                <ListItemIcon>
                  <Circle sx={{ color: "#947F6E" }} />
                </ListItemIcon>
                <ListItemText primary="Приятным комплиментом для нас будет, если вместо цветов вы решите подарить нам бутылочку вашего любимого алкоголя, которую мы откроем на ближайшем совместном празднике." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Circle sx={{ color: "#947F6E" }} />
                </ListItemIcon>
                <ListItemText primary="Захватите с собой удобною обувь для танцев!" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Circle sx={{ color: "#947F6E" }} />
                </ListItemIcon>
                <ListItemText primary="Просим подтвердить своё присутствие на торжестве до 1 июля 2025 года." />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Circle sx={{ color: "#947F6E" }} />
                </ListItemIcon>
                <ListItemText primary="Заезжайте со стороны трассы." />
              </ListItem>
            </List>
          </Grid2>
          <Grid2 size={{ xs: 12, md: 6 }} padding={5}>
            <form onSubmit={handleSubmit}>
              <FormGroup sx={{ width: "100%" }}>
                <CustomTextField
                  id="standard-basic"
                  label={props.content.detailsSection.nameFormLabel}
                  variant="standard"
                  value={guest.guestName}
                  onChange={(e) =>
                    setGuest({ ...guest, guestName: e.target.value })
                  }
                  fullWidth
                  autoComplete="off"
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
                  value={guest.partnerName}
                  onChange={(e) =>
                    setGuest({ ...guest, partnerName: e.target.value })
                  }
                  autoComplete="off"
                />
                <FormControl sx={{ alignItems: "flex-start", marginTop: 3 }}>
                  <FormLabel
                    id="presence-form-label"
                    sx={{ color: "#947F6E !important" }}
                  >
                    {props.content.detailsSection.presenceFormLabel}
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="presence-radio-buttons-group"
                    name="presence-radio-buttons-group"
                    value={guest.presense}
                    onChange={(e) => {
                      setGuest({
                        ...guest,
                        presense: parseInt(e.target.value),
                      });
                    }}
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
                <FormControl sx={{ alignItems: "flex-start", marginTop: 3 }}>
                  <FormLabel
                    id="preferences-form-label"
                    sx={{ color: "#947F6E !important" }}
                  >
                    {props.content.detailsSection.preferencesFormLabel}
                  </FormLabel>
                  <FormGroup>
                    <CustomFormControlLabel
                      control={
                        <CustomCheckbox
                          checked={guest.preferences.includes(1)}
                          onChange={(event) =>
                            handlePreferencesChange(event, 1)
                          }
                          name={props.content.detailsSection.drinksOption1}
                        />
                      }
                      label={props.content.detailsSection.drinksOption1}
                    />
                    <CustomFormControlLabel
                      control={
                        <CustomCheckbox
                          checked={guest.preferences.includes(2)}
                          onChange={(event) =>
                            handlePreferencesChange(event, 2)
                          }
                          name={props.content.detailsSection.drinksOption1}
                        />
                      }
                      label={props.content.detailsSection.drinksOption2}
                    />
                    <CustomFormControlLabel
                      control={
                        <CustomCheckbox
                          checked={guest.preferences.includes(3)}
                          onChange={(event) =>
                            handlePreferencesChange(event, 3)
                          }
                          name={props.content.detailsSection.drinksOption3}
                        />
                      }
                      label={props.content.detailsSection.drinksOption3}
                    />
                    <CustomFormControlLabel
                      control={
                        <CustomCheckbox
                          checked={guest.preferences.includes(4)}
                          onChange={(event) =>
                            handlePreferencesChange(event, 4)
                          }
                          name={props.content.detailsSection.drinksOption4}
                        />
                      }
                      label={props.content.detailsSection.drinksOption4}
                    />
                  </FormGroup>
                </FormControl>
                <Button
                  sx={{ marginTop: 5, bgcolor: "#947F6E" }}
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={!guest.guestName || !guest.presense}
                >
                  {props.content.detailsSection.submitButton}
                </Button>
              </FormGroup>
            </form>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default DetailsSection;