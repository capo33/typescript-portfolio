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
  buttonLabel: "My Details",
  imgStart: "",
  img: require("../../assets/svgs/version_control.svg").default,
  start: "",
  topPaddding: false,
  bigHeight: false,
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
    "Since I work on frontend, backend, database and debugging of web applications or websites. I have the ability to design complete applications and websites ",
  buttonLabel: "My Projects",
  imgStart: "start",
  img: require("../../assets/svgs/percentages.svg").default,
  alt: "",
  start: "",
  topPaddding: true,
  bigHeight: false,
};

export const InfoObjThree = {
  primary: false,
  lightBg: true,
  lightTopLine: false,
  lightText: false,
  lightTextDesc: false,
  topLine: "Contact me",
  imgStart: "start",
  img: require("../../assets/svgs/undraw_quick_chat_re_bit5.svg").default,
  big: false,
  title:
    " I am available for freelance work. If you have a project that you would like to get started, think you need my help with something or just fancy saying hello, then please get in touch :)",
};
