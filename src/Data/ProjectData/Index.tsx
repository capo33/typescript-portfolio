import { GoMarkGithub } from "react-icons/go";
import { FcGlobe } from "react-icons/fc";

import { uuid } from "../../utils/uuid";
import { IProject } from "../../interfaces/ProjectsInterface";

export const portfolioProjects: IProject[] = [
  {
    id: uuid,
    tag: "Front-end",

    image: "image/data-company.png",
    title: "Data Company",
    description: "React - Styled-components - Javascript",
    links: [
      {
        id: uuid,
        link: "https://data-company.netlify.app/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/data-company",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Front-end",
    image: "image/country-api.png",
    title: "Country API",
    description: "React - Redux - TypeScript - Rest API",
    links: [
      {
        id: uuid,
        link: "https://ts-country-api-app.netlify.app/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/country-api-app",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Front-end",
    image: "image/delta.png",
    title: "Delta Company",
    description: "React - Styled-components - Javascript",
    links: [
      {
        id: uuid,
        link: "https://react-smooth-scroll.onrender.com/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-smooth-scroll",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Front-end",
    image: "image/fakeshop.png",
    title: "Fake Shop",
    description: "React - Redux - Javascript - Rest API",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/fakeshop/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/fakeshop",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Front-end",
    image: "image/ultra.png",
    title: "Ultra Company",
    description: "React - Styled-components - Javascript",
    links: [
      {
        id: uuid,
        link: "https://react-styled-components.onrender.com/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-styled-component",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Front-end",
    image: "image/pokemon2.png",
    title: "Pokemon Evolution",
    description: "React - TypeScript - Rest API",
    links: [
      {
        id: uuid,
        link: "https://react-pokemon-ts.onrender.com/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-pokemon-ts",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Mern-stack",
    image: "image/corner_blog.png",
    title: "Corner Blog",
    description: "React - NodeJS - MongoDB - TypeScript - TailwindCSS",
    links: [
      {
        id: uuid,
        link: "https://corner-blog.onrender.com/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/blog-backend",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Mern-stack",
    image: "image/social-media.png",
    title: "Social Media",
    description: "React - NodeJS - MongoDB - TypeScript",
    links: [
      
      {
        id: uuid,
        link: "https://github.com/capo33/social-media-backend",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/social-media-frontend",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Mern-stack",
    image: "image/main.png",
    title: "Rental Car",
    description: "React - NodeJS - MongoDB - TypeScript - Stripe",
    links: [
      
      {
        id: uuid,
        link: "https://github.com/capo33/rental-car-backend",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Mern-stack",
    image: "image/animazon.png",
    title: "Animazon",
    description: "React - GrapghQL - Apollo - Javascript",
    links: [
      {
        id: uuid,
        link: "https://animazoon-graphql.netlify.app/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/animazon-client",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Mern-stack",
    image: "image/yelpclone.png",
    title: "Yelp Clone",
    description: "React - NodeJS - PostgreSQL - TypeScript",
    links: [
      {
        id: uuid,
        link: "https://github.com/capo33/yelp_clone",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Mern-stack",
    image: "image/tour-app.png",
    title: "Tour App",
    description: "React - ReduxToolkit - NodeJS - MongoDB",
    links: [
      {
        id: uuid,
        link: "https://mern-tour-app.netlify.app/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/tour-app-client",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },

  {
    id: uuid,
    tag: "Front-end",
    image: "image/rick-and-morty.png",
    title: "Rick and Morty",
    description: "React - UseQuery - Rest API",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/rick-and-morty/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/rick-and-morty",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Front-end",
    image: "image/rick-and-morty2.png",
    title: "Rick and Morty",
    description: "React - Apollo-Client - TypeScript",
    links: [
      {
        id: uuid,
        link: "https://rick-and-morty-apollo-client.onrender.com/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/rick-and-morty-apollo-clien",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Front-end",
    image: "image/star-wars.png",
    title: "Star Wars",
    description: "React - UseQuery - Rest API",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/star-wars/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/star-wars",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },

  

  {
    id: uuid,
    tag: "Front-end",
    image: "image/search-user.png",
    title: "Search Users",
    description: "React - TypeScript - Rest API",
    links: [
      {
        id: uuid,
        link: "https://search-user-api.netlify.app/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/search-feature",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Front-end",
    image: "image/kahvila.png",
    title: "Caffee Counter",
    description: "Angular - TypeScript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/kahvila/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/kahvila.git",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Javascript",
    image: "/image/speaker.png",
    title: "Text Speaker",
    description: "JavaScript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/Text-to-Speech/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/Text-to-Speech",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Javascript",
    image: "/image/guss-my-number.png",
    title: "Guess My Number",
    description: "JavaScript - HTML - CSS - AWS S3",
    links: [
      {
        id: uuid,
        link: "https://test-capo-first-bucket.s3.eu-north-1.amazonaws.com/guess-my-number/index.html",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "hthttps://github.com/capo33/Guss-my-number",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  // {
  //   id: uuid,
  //   tag: "Javascript",
  //   image: "image/dice-game.jpg",
  //   title: "Dice Game",
  //   description: "Javascript",
  //   links: [
  //     {
  //       id: uuid,
  //       link: "https://capo33.github.io/dice-game/",
  //       icon: <FcGlobe style={{ fontSize: "30px" }} />,
  //     },
  //     {
  //       id: uuid,
  //       link: "https://github.com/capo33/dice-game.git",
  //       icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
  //     },
  //   ],
  // },
  // {
  //   id: uuid,
  //   tag: "Javascript",
  //   image: "image/memory.png",
  //   title: "Memory Game",
  //   description: "Javascript",
  //   links: [
  //     {
  //       id: uuid,
  //       link: "https://capo33.github.io/memory-game/",
  //       icon: <FcGlobe style={{ fontSize: "30px" }} />,
  //     },
  //     {
  //       id: uuid,
  //       link: "https://github.com/capo33/memory-game",
  //       icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
  //     },
  //   ],
  // },

  {
    id: uuid,
    tag: "School",
    image: "image/school-projects.jpg",
    title: "School Projects",
    description: "HTML - CSS - Angular - Javascript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/school-projects/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/school-projects.git",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "School",
    image: "image/blitz.png",
    title: "Blitz",
    description: "HTML - CSS",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/Blitz/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/Blitz",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/splitting.jpg",
    title: "Split Server",
    description: "Angular - TypeScript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/spliting/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/spliting.git",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/joke-list2.jpg",
    title: "Jokes",
    description: "Angular - TypeScript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/joke-list/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/joke-list.git",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/warning-et-success.jpg",
    title: "Success and warning",
    description: "Angular - TypeScript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/warning-et-success/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/warning-et-success.git",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  // {
  //   id: uuid,
  //   tag: "Experimental",
  //   image: "image/crazy-button.jpg",
  //   title: "Crazy Buttons",
  //   description: "JavaScript",
  //   links: [
  //     {
  //       id: uuid,
  //       link: "https://capo33.github.io/crazy-button/",
  //       icon: <FcGlobe style={{ fontSize: "30px" }} />,
  //     },
  //     {
  //       id: uuid,
  //       link: "https://github.com/capo33/crazy-button.git",
  //       icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
  //     },
  //   ],
  // },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/keeper.png",
    title: "Note Keeper",
    description: "React - TypeScript",
    links: [
      {
        id: uuid,
        link: "https://note-keeper-ts.netlify.app/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/Note-keeper-ts",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/todo.png",
    title: "Todo App",
    description: "React - JavaScript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/react-todo-app/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/react-todo-app.git",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/egyption-gods.jpg",
    title: "Egyption Deities",
    description: "React - JavaScript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/egyption-gods/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/egyption-gods.git",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/emojipedia.jpg",
    title: "Emojipedia",
    description: "React - JavaScript",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/emojipedia/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/emojipedia",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/Digital-Marketing.jpg",
    title: "Digital Marketing",
    description: "HTML - CSS",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/Digital-Marketing/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/Digital-Marketing.git",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/tindog.jpg",
    title: "Tindog",
    description: "HTML - CSS - Bootstrap",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/tindog/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/tindog.git",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
  {
    id: uuid,
    tag: "Experimental",
    image: "image/travel-agency.jpg",
    title: "Css Project",
    description: "HTML - CSS - Materialize",
    links: [
      {
        id: uuid,
        link: "https://capo33.github.io/travel-agency/",
        icon: <FcGlobe style={{ fontSize: "30px" }} />,
      },
      {
        id: uuid,
        link: "https://github.com/capo33/travel-agency.git",
        icon: <GoMarkGithub style={{ fontSize: "30px", color: "black" }} />,
      },
    ],
  },
];
