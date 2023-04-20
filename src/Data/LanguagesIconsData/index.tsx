import { FaReact, FaSass, FaBootstrap } from "react-icons/fa";
import { SiStyledcomponents } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { ILanguage } from "../../interfaces/LanguagesInterface";

export const languagesIconsData: ILanguage[] = [
  {
    title: "Technologies",
    links: [
      {
        title: "React",
        icon: <FaReact />,
        link: "/",
      },
      {
        title: "TypeScript",
        icon: <SiTypescript />,
        link: "/",
      },
    ],
  },
  {
    title: "Styles",
    links: [
      {
        title: "Styled Components",
        icon: <SiStyledcomponents />,
        link: "/",
      },
      {
        title: "Sass",
        icon: <FaSass />,
        link: "/",
      },
      {
        title: "Bootstrap",
        icon: <FaBootstrap />,
        link: "/",
      },
    ],
  },
];
