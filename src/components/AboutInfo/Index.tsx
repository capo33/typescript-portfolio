import { FcAssistant } from "react-icons/fc";

import { TitleStyle } from "../../utils/styles";
import Image from "../../assets/images/crop.jpg";
import { AboutData } from "../../Data/AboutData/Index";

function AboutInfo() {
  return (
    <div className='row'>
      <div className='col-xs-12 col-md-4 mb-5'>
        <img src={Image} alt='Capo' />
      </div>
      <div className='col-xs-12 col-md-8'>
        <h2 style={TitleStyle}>
          <FcAssistant /> Snippets
        </h2>
        {AboutData.map((item) => {
          return (
            <p key={item.id} className='p_link'>
              {item.title}
              {item.icon}
              {item.title4}
              {item.icon4}
              {item.title1}
              {item.icon1}
              {item.title2}
              {item.icon2}
              {item.title3}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default AboutInfo;
