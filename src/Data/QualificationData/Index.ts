import { IQualificationData } from "../../interfaces/QualificationInterfaces";

const workExperienceData: IQualificationData[] = [
  {
    id: 1,
    date: "09/2022 - 02/2023",
    title: "Software Developer",
    company: "Nordcloud IBM Company, Helsinki",
    description:
      "Designed reusable and reliable code for use within distributed cloud environments",
  },
  {
    id: 2,
    date: "04/2022 - 08/20220",
    title: "Trainee",
    company: "Integrify, Helsinki",
    description:
      "DAssisted with creating cross-platform UI web components and built responsive applications using front-end frameworks",
  },
  {
    id: 3,
    date: "09/2019 - 04/2020",
    title: "The restaurateur - an entrepreneur",
    company: "Capo33, Helsinki",
    description:
      "Food preparation and monitored safety protocols. Implemented effective inventory control systems to reduce food spoilage and waste",
  },
];

const educactionData: IQualificationData[] = [
  {
    id: 1,
    date: "08/2020 - Present",
    title: "Encoder training Angular and .Net",
    company: "Business College Helsinki",
    description:
      "I have completed the coding part and what is left is the theoretical part",
  },
  {
    id: 2,
    date: "2012 - 2015",
    title: "Hotel, restaurant and catering industry",
    company: "Stadin Ammattiopisto, Varia, Vantaa",
    description:
      "I have learned how to care about Hygiene & Food Safety, Product Purchasing & Inventory Management",
  },
  {
    id: 3,
    date: "08/2020 - Present",
    title: "Business management",
    company:
      "Higher Institute for Cooperative and administrative Studies Egypt, Cairo",
    description:
      "Financial accounting, marketing strategy, organizational leadership, and business decision-making",
  },
];

export { workExperienceData, educactionData };
