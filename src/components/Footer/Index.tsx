import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  Span,
} from "./FooterStyle";
import { year } from "../../utils/data";
import { ResumeData } from "../../Data/ContactData";
import { SocialLinks } from "../../Data/SocialLinksData/Index";
import { languagesIconsData } from "../../Data/LanguagesIconsData";

function Footer() {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          This Portfolio has been updated to the latest version of ReactJS and
          TypeScript
        </FooterSubHeading>
        <FooterSubText>
          Made with <Span>❤ </Span>by Mohamed
        </FooterSubText>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          {/* Languages Data */}
          {languagesIconsData.map((item) => {
            return (
              <FooterLinkItems key={item.title}>
                <FooterLinkTitle>{item.title}</FooterLinkTitle>
                {item.links.map((link) => {
                  return (
                    <FooterLink to={link.link} key={link.title}>
                      <Span>|</Span> {link.title} {link.icon}
                    </FooterLink>
                  );
                })}
              </FooterLinkItems>
            );
          })}

          {/* Contact Data */}
          <FooterLinkItems>
            <FooterLinkTitle>Contact Me</FooterLinkTitle>
            <FooterLink to='/'>
              <Span>|</Span> {ResumeData.send}: {ResumeData.email}
            </FooterLink>
            <FooterLink to='/'>
              <Span>|</Span> {ResumeData.call} : {ResumeData.phone}
            </FooterLink>
            <FooterLink to='/'>
              <Span>|</Span> {ResumeData.home} : {ResumeData.address}
            </FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>

      {/* Social Media Data */}
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to='/'>
            <SocialIcon />
            Mo
          </SocialLogo>
          <WebsiteRights>Mohamed © {year}</WebsiteRights>
          <SocialIcons>
            {SocialLinks.map((link) => {
              return (
                <SocialIconLink
                  href={link.iconLink}
                  target='_blank'
                  rel='noreferrer'
                  className={link.className}
                  title={link.title}
                  key={link.id}
                >
                  <i>{link.icon}</i>
                </SocialIconLink>
              );
            })}
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
}

export default Footer;
