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
        "\tС огромной радостью приглашаем вас на наш свадебный праздник, который станет для нас важнейшим и самым значимым событием в жизни. В этот день мы будем клясться друг другу в любви и верности, и нам бы очень хотелось, чтобы вы были рядом и разделили с нами этот волшебный момент.\n\n\tМы ценим ваше присутствие в нашей жизни и будем счастливы, если вы сможете разделить с нами радость, смех и счастливые воспоминания в этот незабываемый день.\n\n\tС нетерпением ждем встречи и надеемся, что этот праздник станет особенным не только для нас, но и для вас.",
    },
    timingSection: {
      title: "Тайминг",
      daysLabel: "День",
      hoursLabel: "Час",
      minutesLabel: "Минут",
      secondsLabel: "Секунд",
      guestInvitationLabel: "Сбор гостей",
      furshetLabel: "Фуршет",
      ceremonyLabel: "Свадебная церемония",
      guestCelebrationLabel: "Поздравления гостей",
      fotosessionLabel: "Фотосессия",
      begginingLabel: "Начало праздника",
      countdownLablel: "До этого дня осталось",
    },
    locationSection: {
      title: "Локация",
      routeHintLabel: "Указания по маршруту",
      routeHint:
        "Следуйте по трассе R3, не поворачивая в Яловены. Продолжайте движение до села Пожэрень, где сможете свернуть с трассы налево и доехать до Костешты.",
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
        "\tCu o bucurie imensă vă invităm la nunta noastră, care va fi cel mai important și semnificativ eveniment din viața noastră. În această zi ne vom jura unul altuia iubire și fidelitate, și ne-ar plăcea foarte mult să fiți alături de noi pentru a împărtăși acest moment magic.\n\n\tApreciem prezența voastră în viața noastră și vom fi fericiți dacă veți putea împărtăși cu noi bucuria, râsul și amintirile fericite în această zi de neuitat.\n\n\tAșteptăm cu nerăbdare să ne întâlnim și sperăm că această sărbătoare va fi specială nu doar pentru noi, ci și pentru voi.",
    },
    timingSection: {
      title: "Timing",
      daysLabel: "Zile",
      hoursLabel: "Ore",
      minutesLabel: "Minute",
      secondsLabel: "Secunde",
      guestInvitationLabel: "Sosirea oaspeților",
      furshetLabel: "Servirea aperitivului",
      ceremonyLabel: "Ora ceremoniei",
      guestCelebrationLabel: "Felicitările din partea oaspeților",
      fotosessionLabel: "Ședința foto cu mirii",
      begginingLabel: "Începutul petrecerii",
      countdownLablel: "Au mai rămas",
    },
    locationSection: {
      title: "Locaţie",
      routeHintLabel: "Indicații de traseu",
      routeHint:
        "Urmați traseul R3, fără a vira spre Ialoveni. Continuați deplasarea până în satul Pojăreni, unde puteți vira la stânga pentru a ajunge în Costești.",
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
