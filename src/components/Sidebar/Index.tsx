
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
} from "./SidebarStyle";
import { links } from "../../Data/NavbarData/Index";
interface SidebarProps {
  isOpen: boolean;
  toggle: () => void;
}

function Sidebar({ isOpen, toggle }: SidebarProps) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu onClick={toggle}>
          {links.map((link) => {
            return (
              <SidebarLink key={link.id} to={link.to} onClick={toggle}>
                {link.text}
              </SidebarLink>
            );
          })}
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

export default Sidebar;
