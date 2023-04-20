import { FcPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

import { ResumeData } from "../../Data/ContactData";
import "./SocialIcons.scss";
import { SocialLinks } from "../../Data/SocialLinksData/Index";

const SocialIcons = () => {
  return (
    <div className='effect egeon'>
      <div className='flexy'>
        <p>
          <FcPhone /> {ResumeData.phone}
        </p>
        <p>
          <MdEmail /> {ResumeData.email}
        </p>
      </div>
      <div className='buttons '>
        {SocialLinks.map((link) => {
          return (
            <a
              href={link.iconLink}
              target='_blank'
              rel='noreferrer'
              className={link.className}
              title={link.title}
              key={link.id}
            >
              <i>{link.icon}</i>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default SocialIcons;
