import { IInfos } from "../../interfaces/InfoInterface";

export const InfoObjOne: IInfos = {
  id: "home",
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "I'm Mohamed",
  headLine: "Software Developer & Web Designer",
  description:
    "I am a Software developer based in Finland with 4+ years of coding experience and 1 year of work experience.",
  buttonLabel: "More Details",
  imgStart: "",
  img: require("../../assets/images/animation-api.gif"),
  start: "",
  topPadding: false,
  bigHeight: true,
  link: "about",
};

export const InfoObjTwo: IInfos = {
  id: "about",
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: "Coder",
  headLine: "Frontend",
  description:
    "I love working on the frontend and focusing on UI design with proven experience, but I also have experience in the back-end, database, cloud and debugging web applications. I have an eagerness to learn new technologies and develop new features to improve the web-app functionality. I have the ability to design complete web applications and websites",
  buttonLabel: "My Works",
  imgStart: "start",
  img: require("../../assets/images/while-coding.gif"),
  alt: "",
  start: "",
  topPadding: true,
  bigHeight: false,
  link: "projects",
};

export const InfoObjThree = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: "Contact me",
  imgStart: "start",
  img: require("../../assets/images/send-me.gif"),
  big: false,
  title:
    " I am available for freelance work. If you have a project that you would like to get started, think you need my help with something or just fancy saying hello, then please get in touch :)",
};
