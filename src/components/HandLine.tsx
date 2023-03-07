import styled from "styled-components";

export function HandLine() {
  return <Container />;
}

const Container = styled.div`
  width: 0.1rem;
  height: 1.26rem;
  background-color: ${(props) => props.theme.white};
  position: absolute;
  bottom: 50%;
  transform-origin: bottom;
  transform: rotate(0deg);
`;
