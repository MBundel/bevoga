const ipsum =
  "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.";
 

const text = { 
    fina: 'Fina ist 2016 geboren und seitdem treuer Begleiter von Michel. Sie hat das Talent, schnell gemocht zu werden und selbst Menschen mit Angst vor Hunden für sich zu gewinnen. Da sie sehr charmant und zugleich sehr fotogen ist, wurde sie oftmals als Fotomodel bei Shootings hinzugezogen, sodass niemand weiß, bei in wie vielen Wohnungen ein Bild von ihr hängt.  2017 hat sie die Hundeführerscheinprüfung die beste Leistung mit Abstand erbracht und ist Mutter von 5 bereits ausgewachsenen Welpen.',
    michel: "",
     friedirch: ipsum,
    helmut:ipsum,
    fimdeu:"bevoga, die Berufsunfähigkeit ohne Gesundheitsfragen ist eine Marke der fimdeu UG (haftungsbeschränkt), dem Finanzdienstleister mit Niveau und Verstand. Um günstige Gruppenvertragsprämien bei bevoga zu realisieren, arbeiten wir mit der Biometric Underwriting GmbH und der Netfonds AG zusammen. Die Netfonds AG unterstützt bevoga bei der Verwaltung Eurer Verträge. Die Biometric Underwriting GmbH erstellt die Versicherungsscheine bzw. Policen für die Berufsunfähigkeitsversicherungen ohne Gesundheitsfragen und ist im Leistungsfall für dich da. Biometric Underwriting GmbH als Assekuradeur in Hamburg führt auch das Inkasso durch, zieht also die Beitragszahlungen ein. Das Produkt bBU Collect Plus von Biometric bildet die Grundlage für die Berufsunfähigkeitsversicherung ohne Gesundheitsfragen. Zusätzlich ist das Unternehmen neben den Spezialisten von fimdeu der kompetente Ansprechpartner, wenn es zu einer Berufsunfähigkeit kommt. Die Versicherer, die die Risiken für Biometric, sind nicht irgendwer, sondern Lloyd’s of Brussel (Sitz in Brüssel) und Sompo international. Lloyd´s und Sompo sind von Standard & Poor’s mit A+ ausgezeichnet. Die Unternehmen nutzen zur Rückversicherung der Risiken den internationalen Versicherungsmarkt, der seit 1686 besteht und sich heute aus rund 100 internationalen und renommierten Versicherungsunternehmen zusammensetzt. Selbstverständlich können alle dieser Unternehmungen beste Bonität aufweisen."
  }

export const TeamMembers = [
  {
    id: 1,
    name: "fimdeu UG",
    title: "Finanzexperte",
    tasks: "Maklerhaus",
    phone: "0441- 21 21 30 23",
    mail: "info@bevoga.de",
    text: text.fimdeu,
    img: "../../img/FimdeuW.png",
    
  },
  {
    id: 2,
    name: "Michel Bundel",
    title: "Versicherungsfachmann",
    tasks: "Webentwickler",
    phone: "-",
    mail: "mb@fimdeu.de",
    text: ipsum,
    img: "../../img/michel.png",
    
  },
  {
    id: 3,
    name: "Friedirch Beeken",
    title: "Versicherungsfachwirt",
    tasks: "Kundenbetreuung",
    phone: "0441-30916171",
    mail: "fb@fimdeu.de",
    text: text.friedirch,
    img: "../../img/bsp.PNG",
    
  },
  {
    id: 4,
    name: "Helmut Ziehm",
    title: "Financial Planner",
    tasks: "Kundenbetreuung",
    phone: "0441 / 21713360 ",
    mail: "hz@fimdeu.de",
    text: text.helmut,
    img: "../../img/bsp.PNG",
    
  },
  {
    id: 4,
    name: "Fina",
    title: "Barketing Manager",
    tasks: "Gesundheitsmanagement",
    phone: "ich kann nicht sprechen",
    mail: "ich kann nicht lesen",
    text: ipsum,
    img: "../../img/fina.JPG",
  },
];
