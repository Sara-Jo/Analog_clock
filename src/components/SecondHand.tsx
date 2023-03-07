import styled from "styled-components";

export function SecondHand() {
  return <Container></Container>;
}

const Container = styled.div`
  width: 0.1rem;
  height: 10.5rem;
  background-color: ${(props) => props.theme.point};
  position: absolute;
  bottom: 50%;
  transform-origin: bottom;
  transform: rotate(170deg);
`;
