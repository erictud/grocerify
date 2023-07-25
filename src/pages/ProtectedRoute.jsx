import styled from "styled-components";
import { useUser } from "../features/auth/useUser";
import Spinner from "../ui/Spinner";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // 1. Load authenticated user
  const { isLoading, isAuthenticated } = useUser();

  // 3. No user => redirect to login
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/auth");
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 2.spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. User => render app
  return children;
}
