import React from "react";

import { portfolioProjects } from "../../Data/ProjectData/Index";
import { Container } from "../../globalStyle";
import {
  Section,
  MenuBar,
  MenuBarItems,
  Row,
  Card,
  CardImage,
  Image,
  Table,
  Category,
  Description,
  Links,
} from "./projectStyle";

interface ILinks {
  id: Function;
  link: string;
  icon: JSX.Element;
}

export interface IProject {
  id: Function;
  tag: string;
  image: string;
  title: string;
  description: string;
  links: ILinks[];
}

export const Projects = () => {
  const [Items, setItems] = React.useState<IProject[]>(portfolioProjects);
  console.log(Items);

  const handleFilter = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement;
    const value = target.innerText;
    console.log(value);
    if (value === "All") {
      setItems(portfolioProjects);
      return;
    }
    const updatedItems = portfolioProjects.filter((curElem) => {
      return curElem.tag === value;
    });
    setItems(updatedItems);
  };

  return (
    <Section>
      <Container>
        <MenuBar>
          <MenuBarItems onClick={() => setItems(portfolioProjects)}>
            All
          </MenuBarItems>
          <MenuBarItems onClick={handleFilter}>School</MenuBarItems>
          <MenuBarItems onClick={handleFilter}>Front-end</MenuBarItems>
          <MenuBarItems onClick={handleFilter}>Mern-stack</MenuBarItems>
          <MenuBarItems onClick={handleFilter}>Experimental</MenuBarItems>
        </MenuBar>

        <Row className=' '>
          {Items.map((item) => {
            const { id, title, image, description, links } = item;

            return (
              <Card className='card' key={id()}>
                <CardImage className='card-image'>
                  <Image className='' alt={title} src={image} />
                </CardImage>
                <Table>
                  <Category>{title}</Category>
                  <Description>{description}</Description>
                  <Links>
                    {links.map((link) => {
                      return (
                        <div className=''>
                          <a
                            href={link.link}
                            key={id()}
                            target='_blank'
                            rel='noreferrer'
                          >
                            {link.icon}
                          </a>
                        </div>
                      );
                    })}
                  </Links>
                </Table>
              </Card>
            );
          })}
        </Row>
      </Container>
    </Section>
  );
};
