import myImage from "../../assets/images/crop.jpg";
import { AboutData } from "../../Data/AboutData/Index";
import { Row, CardImage, Image, TextWrapper, Span, OL, LI } from "./Snippets";

const Snippets = () => {
  return (
    <Row>
      <CardImage className='card-image'>
        <Image src={myImage} alt='capo' />
      </CardImage>
      <TextWrapper>
        <h2>Snippets</h2>
        {AboutData.map((item) => {
          return (
            <OL key={item.id}>
              <LI>
                <Span>
                  {item.title}
                  {item.icon}
                  {item.title4}
                  {item.icon4}
                  {item.title1}
                  {item.icon1}
                  {item.title2}
                  {item.icon2}
                  {item.title3}
                </Span>
              </LI>
            </OL>
          );
        })}
      </TextWrapper>
    </Row>
  );
};

export default Snippets;
