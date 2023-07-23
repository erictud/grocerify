import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  padding: 0.4rem;
  gap: 1rem;

  ${(props) =>
    props.type === "row" &&
    css`
      flex-direction: row;
    `}

  ${(props) =>
    props.type === "column" &&
    css`
      flex-direction: column;
    `}
`;

Row.defaultProps = {
  type: "row",
};

export default Row;
