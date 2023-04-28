import { IInfos } from "../../interfaces/InfoInterface";

export const InfoObjOne: IInfos = {
  id: "home",
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Mohamed",
  headLine: "Software Developer & Web Designer",
  description:
    "I am a full-stack developer based in Finland with 3+ years of programming experience",
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
  headLine: "Full-stack",
  description:
    "Since I work on the front-end, back-end, database, and have experience debugging web applications or websites, I have the ability to design complete web applications and websites",
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
