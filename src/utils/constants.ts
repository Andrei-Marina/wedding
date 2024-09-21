import { Content } from "./models";

export const Contents: { [key: string]: Content } = {
  ru: {
    coverSection: {
      fianceName: "Андрей",
      fianceeName: "Марина",
      month: "июль",
    },
    welcomeSection: {
      title: "Дорогие гости!",
      content:
        "С радостью приглашаем вас разделить с нами особенный день — день нашей свадьбы! Мы будем счастливы видеть вас среди наших самых близких, чтобы отпраздновать этот незабываемый момент вместе.",
    },
    timingSection: {
      title: "Тайминг",
      daysLabel: "День",
      hoursLabel: "Час",
      minutesLabel: "Минута",
      secondsLabel: "Секунда",
    },
    locationSection: {
      title: "Локация",
    },
    detailsSection: {
      title: "Детали",
      nameFormLabel: "Имя, Фамилия",
      partnerFormLabel: "Имя, Фамилия пары",
      partnerCheckboxLabel: "Буду в паре",
      presenceFormLabel: "Присутсвие:",
      presencesOptions: [
        "Обязательно буду",
        "К сожалению, нет",
        "Сообщу позже",
      ],
      drinksFormLabel: "Предпочтения:",
      drinksOptions: ["Вино", "Шампанское", "Коньяк", "Водка"],
      submitButton: "Отправить",
      details: [
        "Приятным комплиментом для нас будет, если вместо цветов вы решите подарить нам бутылочку вашего любимого алкоголя, которую мы откроем на ближайшем совместном празднике.",
        "Захватите с собой удобною обувь для танцев!",
        "Просим подтвердить своё присутствие на торжестве до 1 июля 2025 года.",
      ],
    },
  },
  ro: {
    coverSection: {
      fianceName: "Andrei",
      fianceeName: "Marina",
      month: "iulie",
    },
    welcomeSection: {
      title: "Dragi oaspeți!",
      content:
        "Vă invităm cu plăcere să împărtășiți cu noi ziua noastră specială - ziua nunții noastre! Vom fi bucuroși să vă avem printre cei mai apropiați pentru a sărbători împreună acest moment de neuitat.",
    },
    timingSection: {
      title: "Timing",
      daysLabel: "Zile",
      hoursLabel: "Ore",
      minutesLabel: "Minute",
      secondsLabel: "Secunde",
    },
    locationSection: {
      title: "Locaţie",
    },
    detailsSection: {
      title: "Detalii",
      nameFormLabel: "Nume, Prenume",
      partnerFormLabel: "Numele, Prenume perechii",
      partnerCheckboxLabel: "Voi fi în pereche",
      presenceFormLabel: "Prezența:",
      presencesOptions: ["Numaidecât", "Din păcate, nu", "Spun mai târziu"],
      drinksFormLabel: "Preferințe:",
      drinksOptions: ["Vin", "Vin spumant", "Coniac", "Vodka"],
      submitButton: "Trimite",
      details: [
        "Un compliment plăcut pentru noi va fi dacă, în loc de flori, veți decide să ne oferiți o sticlă din vin pentru vinoteca noastră de familie.",
        "Nu uitați sa luați încălțăminte comodă pentru dansuri!",
        "Vă rugăm să confirmați prezența Dumneavostră înainte de 1 iulie 2025.",
      ],
    },
  },
};
