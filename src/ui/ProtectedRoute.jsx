import styled from "styled-components";
import { useUser } from "../features/authentication/useUser";
import Spinner from "./Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-attachment: var(--color-grey-0);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  //Load authentiated users
  const { isLoading, isAuthenticated } = useUser();
  //if there ar no authenticated users go yo the login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate("/login");
      }
    },
    [isAuthenticated, navigate, isLoading],
  );
  //show a laoding spinner
  if (isLoading) return;
  <FullPage>
    <Spinner />
  </FullPage>;
  //if there are authenticated users render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
