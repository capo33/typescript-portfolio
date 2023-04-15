import { IInfos } from "../../interfaces/InfoInterface";

export const InfoObjOne: IInfos = {
  id: "home",
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Mohamed ",
  headLine: "Software Developer & Web Designer",
  description:
    "I am a full-stack developer based in Finland with 3+ years of programming experience",
  buttonLabel: "Explore",
  imgStart: "",
  img: require("../../assets/svgs/version_control.svg").default,
  alt: "Credit Card",
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
  topLine: "Snippets",
  headLine: "Full-stack",
  description:
    "Since I work on frontend, backend, database and debugging of web applications or websites. I have the ability to design complete applications and websites ",
  buttonLabel: "Learn More",
  imgStart: "start",
  img: require("../../assets/svgs/undraw_percentages_re_a1ao.svg").default,
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
  topLine: "Snippets",
  headLine:
    "Ultra helped me increase my revenue by over 3X in less than 3 months!",
  description:
    "Their team is wonderful! I can't believe I didn't start working with them earlier.",
  buttonLabel: "View Case Study",
  imgStart: "start",
  img: require("../../assets/images/crop.jpg"),
  alt: "Vault",
  start: "true",
};

export const InfoObjFour = {
  primary: true,
  lightBg: false,
  lightTopLine: true,
  lightText: true,
  lightTextDesc: true,
  topLine: "Secure Database",
  headLine: "All your data is stored on our secure server",
  description:
    "You will never have to worry about your information getting leaked. Our team of security experts will ensure your records are kept safe.",
  buttonLabel: "Sign Up Now",
  imgStart: "start",
  // img: require('../../images/svg-3.svg'),
  alt: "Vault",
  start: "true",
};
