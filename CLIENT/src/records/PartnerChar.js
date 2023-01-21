import ikkPDF from '../documents/Highlightblatt_IKK.pdf';
import viactivPDF from '../documents/Highlightblatt_Viactiv.pdf';
import knappschaftPDF from '../documents/Highlightblatt_Knappschaft.pdf';
import biometricPDF from '../documents/Highlightblatt_biometric.pdf';



export const PartnerChar = [
  {
    name: "Knappschaft",
    id: 1 ,
    companyType: 'GKV',
    img: "../../img/knappschaft.png",
    imgAlt: "Logo vom Kooperationspartner",
    title: "für meine Gesundheit!",
    infoText: "Rund 1,4 Millionen Versicherte vertrauen der KNAPPSCHAFT. Damit gehören wir zu den größten gesetzlichen Krankenkassen in Deutschland. Der Krankenkassenvergleich zeigt: Sie profitieren von rund 50 Zusatzleistungen, die über vorgeschriebene gesetzliche Leistungen hinausgehen. Dazu gehören künstliche Befruchtung und eine Haushaltshilfe in der Schwangerschaft. Jedes Mitglied einer gesetzlichen Krankenkasse kann Mitglied der KNAPPSCHAFT werden. Ob Erwachsener, Jugendlicher oder Kind.",
    keywords: {
      website: "https://knappschaft.de",
      additionalContribution: "1,6%",
      benefits: ["Professionelle Zahnreinigung", "Osteopathie 150€/Jahr", ""],
      chashback: "bis zu 150€/Jahr",
      pdf: knappschaftPDF
    },
  },
  {
    name: "IKK",
    id: 2 ,
    companyType: 'GKV',
    img: "../../img/ikk.png",
    imgAlt: "Logo vom Kooperationspartner",
    title: "Die Innovationskasse",
    infoText: "Die Innovationskasse geht bundesweit neue Wege. Gemeinsames Wachstum sichert Freiräume. Der neue Name und ein neues Markenzeichen sind dabei nur der Anfang.",
    keywords: {
      website: "https://die-ik.de",
      additionalContribution: "1,3%",
      benefits: ["Professionelle Zahnreinigung", "Osteopathie 150€/Jahr", ""],
      chashback: "für diese BU bis 500€/Jahr",
      pdf: ikkPDF
    },
  },
  {
    name: "VIACTIV",
    id: 3 ,
    companyType: 'GKV',
    img: "../../img/viactiv.png",
    imgAlt: "Logo vom Kooperationspartner",
    title: "Krankenkasse",
    infoText: "Als Deutschlands sportliche Krankenkasse begleiten wir unsere Versicherten auf dem Weg in ein aktiveres Leben. Denn wir sind uns sicher, dass es sich lohnt, die eigene Gesundheit aktiv in die Hand zu nehmen. Mit unseren Angeboten gestalten Sie Ihren Alltag ganz einfach gesünder. Dabei halten wir Ihnen stets den Rücken frei – mit einem Rundum-Service, der mehrfach ausgezeichnet wurde. Wir versichern bereits rund 720.000 zufriedene Kunden und machen unsere Arbeit aus Überzeugung. Lassen auch Sie sich überzeugen!",
    keywords: {
      website: "https://viactiv.de",
      additionalContribution: "1,6%",
      benefits: ["Professionelle Zahnreinigung", "Osteopathie 360€/Jahr", ""],
      chashback: "bis 170€/Jahr",
      pdf: viactivPDF
    },
  },
  {
    name: "biometric underwriting",
    id: 4 ,
    companyType: 'Assekuradeur',
    img: "../../img/biometric.jpg",
    imgAlt: "Logo vom Kooperationspartner",
    title: "Anbieter der BU",
    infoText: "Die Biometric Underwriting GmbH sichert in Zusammenarbeit mit großen Versicherern und Vertriebspartnern in ganz Deutschland biometrische Risikendurch innovative Konzepte ab. Unser Ziel ist eine Berufsunfähigkeitsversicherung,die Menschen auf der ganzen Welt hilft, wenn sie nicht mehr arbeiten können.Dieses Konzept haben wir mit den leistungsfähigsten internationalen Gesellschaften entwickelt und konnten Lloyd‘s Insurance Company S.A. Brussels als Versicherer gewinnen. Durch unseren Status als Coverholder bei Lloyd’s of London sind wir in der Lage, CollectPlus geografisch unbegrenzt anzubieten und Arbeitnehmer auf der ganzen Welt auf Deutsch und Englisch zu beraten, und zu versichern. Unter bestimmten Voraussetzungen ist uns sogar möglich, Ehe- und Lebenspartner mitzuversichern.Als Coverholder at Lloyd’s unterliegen wir zudem strengsten Auflagen und werden jährlich intensiv auditiert. Dafür steht die Lloyd‘s of London Chain of Security hinter uns – die stärkste Sicherheitskette der Welt.",
    keywords: {
      website: "https://biometric-underwriting.de/",
      additionalContribution: "-",
      benefits: ["-", "-", "-"],
      chashback: "-",
      pdf: biometricPDF
    },
  },
];
