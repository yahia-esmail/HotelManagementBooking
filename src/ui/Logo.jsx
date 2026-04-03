import styled from "styled-components";
import { useDarkMode } from "../context/DarkModeContext";

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 9.6rem;
  width: auto;

  @media (max-width: 768px) {
    height: 7.5rem;
  }

  @media (max-width: 480px) {
    height: 6rem;
  }
`;

function Logo() {
  const { isDarkMode } = useDarkMode();
  return (
    <StyledLogo>
      {isDarkMode ? (
        <Img src="/logo-dark.png" />
      ) : (
        <Img src="/logo-light.png" alt="Logo" />
      )}
    </StyledLogo>
  );
}

export default Logo;
