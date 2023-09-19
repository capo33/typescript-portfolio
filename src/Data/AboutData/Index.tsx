import React from "react";
import { FaUnity,   FaAws } from "react-icons/fa";
import { TbBrandCSharp , TbBrandPython} from "react-icons/tb";
import { DiDotnet } from "react-icons/di";
import { SiCsharp } from "react-icons/si";

import { IAboutData } from "../../interfaces/AboutInterface";

const AboutData: IAboutData[] = [
  {
    id: 1,
    title:
      "🤔 Jumping from one field to another is not so easy. But also not that hard 😁.",
  },
  {
    id: 2,
    title:
      "😏 4 years ago, I had my own business, but I needed to close it due to Corona. So, I started looking for something suitable at that time, basically trying to find my own path in life. And yeah, It didn't take long to figure out where and how my future would be, I found it through programming 😍.",
  },
  {
    id: 3,
    title: "💻 I studied web-development at Business Collage School.",
  },
  {
    id: 4,
    title:
      "👍 Since I started programming, I feel like everything is getting better than ever and I have really enjoyed every moment of this journey.",
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
    icon: <FaAws fontSize={25} color={'orange'}/>,
    title1: " - Python ",
    icon1: <TbBrandPython fontSize={25} color={'purble'}/>,
    title4: " - .Net ",
    icon4: <DiDotnet fontSize={25} color={'blue'}/>,
  },
  {
    id: 8,
    title: "👨‍👧‍👦 For fun I use C# ",
    title1: " and Unity ",
    icon1: <FaUnity fontSize={25}/>,
    title3: " for game development.",
  },
];

export { AboutData };
