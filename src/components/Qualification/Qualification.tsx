import { FcGraduationCap, FcBriefcase } from "react-icons/fc";

import {
  educactionData,
  workExperienceData,
} from "../../Data/QualificationData/Index";
import { TitleStyle } from "../../utils/styles";
import WorkExperience from "../../components/WorkExperience/Index";
import "./qualification.scss";

const Qualification = () => {
  return (
    <>
      <div className='row py-5'>
        <h2>Qualification</h2>
        <div className='col-xs-12 col-sm-6 '>
          <div className='timeline'>
            <h3 style={TitleStyle}>
              <FcBriefcase /> Experience
            </h3>

            {workExperienceData.map((item) => {
              return (
                <WorkExperience
                  key={item.id}
                  time={item.date}
                  what={item.title}
                  where={item.company}
                  desc={item.description}
                />
              );
            })}
          </div>
        </div>
        <div className='col-xs-12 col-sm-6'>
          <div className='timeline'>
            <h3 style={TitleStyle}>
              <FcGraduationCap /> Education
            </h3>
            {educactionData.map((item) => {
              return (
                <WorkExperience
                  key={item.id}
                  time={item.date}
                  what={item.title}
                  where={item.company}
                  desc={item.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Qualification;
