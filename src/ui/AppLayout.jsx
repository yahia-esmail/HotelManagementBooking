import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import styled from "styled-components";
import { useEffect, useState } from "react";

const StyledApp = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 2rem 2rem 4rem;
  }

  @media (max-width: 480px) {
    padding: 1.5rem 1.5rem 3rem;
  }
`;

const Container = styled.div`
  margin: 0 auto;
  max-width: 120rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;

  @media (max-width: 480px) {
    gap: 2rem;
  }
`;

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  useEffect(
    function () {
      if (window.innerWidth <= 768 && isSidebarOpen) {
        document.body.style.overflow = `hidden`;
      } else {
        document.body.style.overflow = `auto`;
      }
    },
    [isSidebarOpen],
  );

  return (
    <StyledApp>
      <Header onMenuToggle={() => setIsSidebarOpen(!isSidebarOpen)} />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledApp>
  );
}

export default AppLayout;
