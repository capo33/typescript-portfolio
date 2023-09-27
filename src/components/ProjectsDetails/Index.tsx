import React from "react";

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
} from "./ProjectsDetailsStyle";
import { Container } from "../../globalStyle";
import { IProject } from "../../interfaces/ProjectsInterface";
import { portfolioProjects } from "../../Data/ProjectData/Index";

import "./projects.css";

const ProjectsDetails = () => {
  const [Items, setItems] = React.useState<IProject[]>(portfolioProjects);
  const [active, setActive] = React.useState<string>("All");

  const handleFilter = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.target as HTMLSpanElement;
    const value = target.innerText;
    if (value === "All") {
      setItems(portfolioProjects);
      return;
    }
    const updatedItems = portfolioProjects.filter((curElem) => {
      return curElem.tag === value;
    });
    setItems(updatedItems);
    setActive(value);
  };

  return (
    <Section>
      <Container>
        <MenuBar>
          <MenuBarItems
            className={active === "All" ? "active" : ""}
            onClick={() => {
              setItems(portfolioProjects);
              setActive("All");
            }}
          >
            All
          </MenuBarItems>
          <MenuBarItems
            className={active === "Experimental" ? "active" : ""}
            onClick={handleFilter}
          >
            Experimental
          </MenuBarItems>
          <MenuBarItems
            className={active === "Frontend" ? "active" : ""}
            onClick={handleFilter}
          >
            Frontend
          </MenuBarItems>
          <MenuBarItems
            className={active === "Fullstack" ? "active" : ""}
            onClick={handleFilter}
          >
            Fullstack
          </MenuBarItems>
        </MenuBar>

        <Row>
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
                        <div className='' key={id()}>
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

export default ProjectsDetails;
