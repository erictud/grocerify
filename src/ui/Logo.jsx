import styled from "styled-components";

const StyledLogo = styled.img`
  width: 40vw;

  @media (min-width: 900px) {
    width: 20rem;
  }
`;

export default function Logo() {
  return <StyledLogo src="logo.png" />;
}
