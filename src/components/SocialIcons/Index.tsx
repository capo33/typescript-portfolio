import { BsGithub } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FcPhone } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { AiFillLinkedin } from "react-icons/ai";

import { ResumeData } from "../../Data/ContactData";
import "./SocialIcons.scss";


const SocialIcons = () => {
  return (
    <div className='effect egeon'>
      <div className='flexy'>
        <p>
          <MdLocationOn style={{ textAlign: "center" }} /> {ResumeData.adresss}
        </p>
        <p>
          <FcPhone /> {ResumeData.phone}
        </p>
        <p>
          <MdEmail /> {ResumeData.email}
        </p>
      </div>
      <div className='buttons '>
        <a href='/' className='github' title='Add me on Github'>
          <i>
            <BsGithub />
          </i>
        </a>
        <a href='/' className='linkedin' title='Follow me on Linked In'>
          <i>
            <AiFillLinkedin />
          </i>
        </a>
        <a href='/' className='twitter' title='Follow me on Linked In'>
          <i>
            <FaTwitter />
          </i>
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
