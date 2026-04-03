import { NavLink } from "react-router-dom";
import styled from "styled-components";

import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUser,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  @media (max-width: 480px) {
    gap: 0.6rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }

  @media (max-width: 768px) {
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
    gap: 1rem;

    & svg {
      width: 2rem;
      height: 2rem;
    }
  }

  @media (max-width: 480px) {
    padding: 0.8rem 1.2rem;
    font-size: 1.3rem;
  }
`;

function MainNav({ onClose }) {
  return (
    <nav>
      <NavList>
        <li onClick={onClose}>
          <StyledNavLink to="/dashboard">
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li onClick={onClose}>
          <StyledNavLink to="/bookings">
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li onClick={onClose}>
          <StyledNavLink to="/cabins">
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li onClick={onClose}>
          <StyledNavLink to="/users">
            <HiOutlineUser />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li onClick={onClose}>
          <StyledNavLink to="/settings">
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
