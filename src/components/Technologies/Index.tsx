import {
  FrontEndIcons,
  BackEndIcons,
  ToolsIcons,
  GameIcons,
  CloudIcon,
  DatabaseIcons,
  StylesIcons,
} from "../../Data/TechnologiesData/Index";
import { FcCommandLine } from "react-icons/fc";

import "./technologies.scss";

const Technologies = () => {
  return (
    <section>
      <h2>
        <FcCommandLine />Technical Skills
      </h2>
      <div className='row py-2 pb-5'>
        <div className='col-lg-4 col-md-6'>
          <div className='service-block4  '>
            <div className='service-desc'>
              <h5>Front-end</h5>
              <div className='icon-box '>
                {FrontEndIcons.map(({ img, alt, id }) => {
                  return <img src={img} alt={alt} key={id} className='icons' />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='service-block4  '>
            <div className='service-desc'>
              <h5>Styles</h5>
              <div className='icon-box '>
                {StylesIcons.map(({ img, alt, id }) => {
                  return <img src={img} alt={alt} key={id} className='icons' />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='service-block4  '>
            <div className='service-desc'>
              <h5>BackEnd</h5>
              <div className='icon-box'>
                {BackEndIcons.map(({ img, alt, id }) => {
                  return <img src={img} alt={alt} key={id} className='icons' />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='service-block4  '>
            <div className='service-desc'>
              <h5>Database & API</h5>
              <div className='icon-box'>
                {DatabaseIcons.map(({ img, alt, id }) => {
                  return <img src={img} alt={alt} key={id} className='icons' />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='service-block4  '>
            <div className='service-desc'>
              <h5>Tools</h5>
              <div className='icon-box'>
                {ToolsIcons.map(({ img, alt, id }) => {
                  return <img src={img} alt={alt} key={id} className='icons' />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='service-block4  '>
            <div className='service-desc'>
              <h5>Games</h5>
              <div className='icon-box'>
                {GameIcons.map(({ img, alt, id }) => {
                  return <img src={img} alt={alt} key={id} className='icons' />;
                })}
              </div>
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6'>
          <div className='service-block4  '>
            <div className='service-desc'>
              <h5>Cloud</h5>
              <div className='icon-box'>
                {CloudIcon.map(({ img, alt, id }) => {
                  return <img src={img} alt={alt} key={id} className='icons' />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Technologies;
