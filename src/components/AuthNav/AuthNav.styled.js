import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavPanel = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* margin: 0px auto; */
  padding: 0px 15px;
  max-width: 100%;
`;

export const NavList = styled.ul`
  display: flex;
`;

export const NavItem = styled.li`
  margin-right: 20px;
`;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 20px;
  font-weight: 500;
  color: #978a8a;
  font-size: 20px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
  text-decoration: underline;
}
  &.active {
   /* text-decoration: underline; */
   font-weight: 500;
   color: #2196f3;
  }
`;