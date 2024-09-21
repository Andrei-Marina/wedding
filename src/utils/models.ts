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
  };
  locationSection: {
    title: string;
  };
  detailsSection: {
    title: string;
    nameFormLabel: string;
    partnerCheckboxLabel: string;
    partnerFormLabel: string;
    presenceFormLabel: string;
    presencesOptions: string[];
    drinksFormLabel: string;
    drinksOptions: string[];
    details: string[];
    submitButton: string;
  };
}
