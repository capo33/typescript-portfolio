import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

import { ISocialLinks } from "../../interfaces/SocialLinksInterface";

export const SocialLinks: ISocialLinks[] = [
  {
    id: 1,
    iconLink: "https://www.linkedin.com/in/mohamed-mahmoud-aa5ba5201",
    className: "linkedin",
    icon: <FaLinkedin />,
    title: "Follow me on Linked In",
  },
  {
    id: 2,
    iconLink: "https://github.com/capo33",
    className: "github",
    icon: <FaGithub />,
    title: "Add me on Github",
  },
  {
    id: 3,
    iconLink: "https://twitter.com/Mohamed33727072",
    className: "twitter",
    icon: <FaTwitter />,
    title: "Follow me on Twitter",
  },
];
