import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";
import Uploader from "../data/Uploader";

const StyledSidebar = styled.aside`
  background-color: var(--color-grey-0);
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1 / -1;

  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    top: 6rem;
    width: 26rem;
    height: calc(100vh - 6rem);
    background-color: var(--color-grey-0);
    border-right: 1px solid var(--color-grey-100);
    z-index: 100;
    transform: translateX(${(props) => (props.isOpen ? "0" : "-100%")});
    transition: transform 0.3s ease;
    box-shadow: ${(props) =>
      props.isOpen ? "0 2.4rem 3.2rem rgba(0, 0, 0, 0.12)" : "none"};
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${(props) => (props.isOpen ? "block" : "none")};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 50;
  }
`;

function Sidebar({ isOpen = false, onClose = () => {} }) {
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose} />
      <StyledSidebar isOpen={isOpen}>
        <Logo />
        <MainNav onClose={onClose} />
        <Uploader />
      </StyledSidebar>
    </>
  );
}

export default Sidebar;
