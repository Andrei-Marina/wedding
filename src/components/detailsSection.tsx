import {
  Box,
  Button,
  Checkbox,
  CircularProgress,
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
  Stack,
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
import { Section } from ".";
import { Contents } from "../utils/constants";

interface DetailsSectionProps {
  content: Content;
  apiUsername: string;
  apiPassword: string;
  isMd: boolean;
}

interface Guest {
  guestName: string;
  partnerName: string;
  presense: number;
  preferences: number[];
  kids: number;
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
    kids: 0,
  };

  const [hasPartner, setHasPartner] = useState(false);
  const [hasKids, setHasKids] = useState(false);
  const [guest, setGuest] = useState<Guest>(defaultGuest);
  const [isSubmited, setIsSubmited] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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

  useEffect(() => {
    if (!hasKids) {
      setGuest((item) => ({ ...item, kids: 0 }));
    }
  }, [hasKids, setGuest]);

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

  const sendNotification = async () => {
    const url = `https://api.telegram.org/bot${process.env.REACT_APP_TELEGRAM_CHAT_BOT_TOKEN}/sendMessage`;
    const message =
      `**${guest.guestName}** ${
        guest.partnerName ? `и **${guest.partnerName}**` : ""
      }\n` +
      `${
        Contents["ru"].detailsSection.presencesOptions[guest.presense - 1]
      }\n` +
      `${
        guest.kids > 0
          ? `${guest.partnerName ? "Будем" : "Буду"} с **${guest.kids} ${
              guest.kids > 1 ? "детьми" : "ребёнком"
            }**\n`
          : ""
      }` +
      `${
        guest.preferences.length
          ? `**Предпочтения**: ${guest.preferences
              .map((i) => Contents["ru"].detailsSection.drinksOptions[i - 1])
              .join(", ")}`
          : ""
      }`;

    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: process.env.REACT_APP_TELEGRAM_CHAT_ID,
          text: message,
          parse_mode: "Markdown",
        }),
      });
    } catch (error) {}
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    Promise.all([
      addDoc(collection(db, "guests"), guest),
      sendNotification(),
    ]).then(() => {
      setGuest(defaultGuest);
      setHasKids(false);
      setHasPartner(false);
      setIsSubmited(true);
      setIsLoading(false);
    });
  };

  return (
    <Section
      title={props.content.detailsSection.title}
      children={
        <Box height={"90%"} width={"100%"} marginBottom={"40px "}>
          <Grid2 container>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <List dense>
                {props.content.detailsSection.details.map((item) => (
                  <ListItem>
                    <ListItemIcon>
                      <Circle sx={{ color: "#947F6E" }} />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ "& .MuiTypography-root": { fontSize: "1rem" } }}
                      primary={item}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} marginTop={props.isMd ? 5 : 0}>
              {isSubmited ? (
                <Typography fontSize={36} color="#754e2f" lineHeight={1}>
                  {props.content.detailsSection.submitedConfirmation}
                </Typography>
              ) : (
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
                          onChange={(event) =>
                            setHasPartner(event.target.checked)
                          }
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
                    <CustomFormControlLabel
                      sx={{
                        marginTop: 2,
                      }}
                      required={false}
                      control={
                        <CustomCheckbox
                          required={false}
                          checked={hasKids}
                          onChange={(event) => setHasKids(event.target.checked)}
                        />
                      }
                      label={props.content.detailsSection.kidsFormLabel}
                    />
                    <RadioGroup
                      aria-labelledby="presence-radio-buttons-group"
                      name="presence-radio-buttons-group"
                      value={guest.kids}
                      onChange={(e) => {
                        setGuest({
                          ...guest,
                          kids: parseInt(e.target.value),
                        });
                      }}
                      sx={{ flexDirection: "row" }}
                    >
                      {[1, 2, 3, 4, 5].map((option) => (
                        <CustomFormControlLabel
                          value={option}
                          control={<CustomRadio />}
                          label={option}
                          disabled={!hasKids}
                        />
                      ))}
                    </RadioGroup>
                    <FormControl
                      sx={{ alignItems: "flex-start", marginTop: 3 }}
                    >
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
                        {props.content.detailsSection.presencesOptions.map(
                          (option, index) => (
                            <CustomFormControlLabel
                              value={index + 1}
                              control={<CustomRadio />}
                              label={option}
                            />
                          )
                        )}
                      </RadioGroup>
                    </FormControl>
                    <FormControl
                      sx={{ alignItems: "flex-start", marginTop: 3 }}
                    >
                      <FormLabel
                        id="preferences-form-label"
                        sx={{ color: "#947F6E !important" }}
                      >
                        {props.content.detailsSection.drinksFormLabel}
                      </FormLabel>
                      <FormGroup>
                        {props.content.detailsSection.drinksOptions.map(
                          (option, index) => (
                            <CustomFormControlLabel
                              control={
                                <CustomCheckbox
                                  checked={guest.preferences.includes(
                                    index + 1
                                  )}
                                  onChange={(event) =>
                                    handlePreferencesChange(event, index + 1)
                                  }
                                  name={option}
                                />
                              }
                              label={option}
                            />
                          )
                        )}
                      </FormGroup>
                    </FormControl>
                    {isLoading ? (
                      <Stack
                        sx={{ color: "#947F6E", marginTop: "10px" }}
                        display={"flex"}
                        flexDirection={"row"}
                        justifyContent={"center"}
                      >
                        <CircularProgress color="inherit" />
                      </Stack>
                    ) : (
                      <Button
                        sx={{ marginTop: 5, bgcolor: "#947F6E" }}
                        type="submit"
                        variant="contained"
                        color="primary"
                        disabled={
                          !guest.guestName ||
                          !guest.presense ||
                          (hasPartner && !guest.partnerName) ||
                          (hasKids && !guest.kids)
                        }
                      >
                        {props.content.detailsSection.submitButton}
                      </Button>
                    )}
                  </FormGroup>
                </form>
              )}
            </Grid2>
          </Grid2>
        </Box>
      }
    />
  );
};

export default DetailsSection;
