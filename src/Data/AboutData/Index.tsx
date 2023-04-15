import React from "react";
import { FaUnity, FaReact, FaPython, FaAws } from "react-icons/fa";
import { SiTypescript, SiCsharp } from "react-icons/si";
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
      "😎 I'm highly motivated to continue learning and improving my craft and always looking for new challenges and opportunities to learn and grow. ",
  },
  {
    id: 6,
    title:
      "😉 I use a creative approach to problem solving and I'm always looking for new ways to improve my skills and knowledge.",
  },
  {
    id: 7,
    title:
      "🏆 I have experience working as part of a team and individually. I have successfully met deadlines on every project I’ve worked on.",
  },
  {
    id: 8,
    title: "🚀 Now I am moving ahead with learning [ React  ",
    icon: <FaReact />,
    title1: " - AWS ",
    icon1: <FaAws />,
    title4: " - TypeScript ",
    icon4: <SiTypescript />,
    title2: " ], I also started learning [ Python ",
    icon2: <FaPython />,
    title3: " ].",
  },
  {
    id: 9,
    title: "👨‍👧‍👦 I use Unity and c# to make a games for my kids [ Unity   ",
    icon: <FaUnity />,
    title1: " - C# ",
    icon1: <SiCsharp />,
    title3: " ].",
  },
];

export { AboutData };
