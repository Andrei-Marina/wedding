export interface Content {
  coverSection: {
    fianceName: string;
    fianceeName: string;
    month: string;
  };
  welcomeSection: {
    title: string;
    content: string;
  };
  timingSection: {
    title: string;
    daysLabel: string;
    hoursLabel: string;
    minutesLabel: string;
    secondsLabel: string;
    guestInvitationLabel: string;
    furshetLabel: string;
    ceremonyLabel: string;
    guestCelebrationLabel: string;
    fotosessionLabel: string;
    begginingLabel: string;
    countdownLablel: string;
  };
  locationSection: {
    title: string;
    routeHintLabel: string;
    routeHint: string;
  };
  detailsSection: {
    title: string;
    nameFormLabel: string;
    partnerCheckboxLabel: string;
    partnerFormLabel: string;
    presenceFormLabel: string;
    presencesOptions: string[];
    drinksFormLabel: string;
    kidsFormLabel: string;
    drinksOptions: string[];
    details: string[];
    submitButton: string;
  };
  postscript: string;
}
