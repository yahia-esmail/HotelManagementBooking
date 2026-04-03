import styled from "styled-components";
import UserAvatar from "../features/authentication/UserAvatar";
import HeaderMenu from "./HeaderMenu";
import { HiOutlineBars3 } from "react-icons/hi2";
import ButtonIcon from "./ButtonIcon";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);

  display: flex;
  gap: 2.4rem;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 1.2rem 2rem;
    gap: 1.6rem;
  }

  @media (max-width: 480px) {
    padding: 1rem 1.5rem;
    gap: 1rem;
  }
`;

const MenuButton = styled(ButtonIcon)`
  display: none;

  @media (max-width: 768px) {
    display: block;
    margin-right: auto;
  }
`;

function Header({ onMenuToggle }) {
  return (
    <StyledHeader>
      <MenuButton onClick={onMenuToggle}>
        <HiOutlineBars3 size={24} />
      </MenuButton>
      <UserAvatar />
      <HeaderMenu />
    </StyledHeader>
  );
}

export default Header;
