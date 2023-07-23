import { createContext, useContext, useState } from "react";
import styled, { css } from "styled-components";

// STYLED COMPONENTS

const StyledOpenTabButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  text-transform: capitalize;
  padding: 1rem;
  outline: none;

  ${(props) =>
    props.active === "true" &&
    css`
      border-bottom: 2px solid red !important;
    `}
`;

const StyledButtonsRow = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTab = styled.section`
  width: 100%;
  background-color: var(--color-gray-100);
`;

const TabbedCtx = createContext();

export default function Tabbed({ defaultTab, children }) {
  const [tabActive, setTabActive] = useState(defaultTab);

  const openTab = setTabActive;

  return <TabbedCtx.Provider value={{ tabActive, openTab }}>{children}</TabbedCtx.Provider>;
}

function ButtonsRow({ children }) {
  return <StyledButtonsRow>{children}</StyledButtonsRow>;
}

function OpenTabButton({ children, opens }) {
  const { tabActive, openTab } = useContext(TabbedCtx);

  return (
    <StyledOpenTabButton active={(tabActive === opens).toString()} onClick={() => openTab(opens)}>
      {children}
    </StyledOpenTabButton>
  );
}

function Tab({ children, name }) {
  const { tabActive } = useContext(TabbedCtx);

  if (tabActive !== name) return null;

  return <StyledTab>{children}</StyledTab>;
}

Tabbed.OpenTabButton = OpenTabButton;
Tabbed.Tab = Tab;
Tabbed.ButtonsRow = ButtonsRow;
