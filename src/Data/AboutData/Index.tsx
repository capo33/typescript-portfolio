import React from "react";
import { FaUnity, FaAws } from "react-icons/fa";
import { TbBrandPython } from "react-icons/tb";
import { DiDotnet } from "react-icons/di";

import { IAboutData } from "../../interfaces/AboutInterface";

const AboutData: IAboutData[] = [
  {
    id: 1,
    title:
      "👋 Hi, I’m a Frontend Developer with a passion for building beautiful and functional websites and applications.",
  },

  {
    id: 3,
    title: "💻 I studied web-development at Business Collage School.",
  },
  {
    id: 4,
    title:
      "👍 Since I started programming, I feel like I have found my passion and I'm always looking for new challenges. I have really enjoyed every moment of this journey.",
  },

  {
    id: 5,
    title:
      "😉 I use a creative approach to problem solving and I'm always looking for new ways to improve my skills and knowledge.",
  },
  {
    id: 6,
    title:
      "🏆 I have experience working as part of a team and individually. I have successfully met deadlines on every project I’ve worked on.",
  },
  {
    id: 7,
    title: `"🚀 Currently I'm learning AWS  `,
    icon: <FaAws fontSize={25} color={"orange"} />,
    title1: " - Python ",
    icon1: <TbBrandPython fontSize={25} color={"purble"} />,
    title4: " - .Net ",
    icon4: <DiDotnet fontSize={25} color={"blue"} />,
  },
  {
    id: 8,
    title: "👨‍👧‍👦 For fun I use C# ",
    title1: " and Unity ",
    icon1: <FaUnity fontSize={25} />,
    title3: "to develop games.",
  },
];

export { AboutData };
