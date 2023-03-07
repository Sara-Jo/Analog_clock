import styled from "styled-components";

export function MinuteHand() {
  return <Container />;
}

const Container = styled.div`
  width: 0.7rem;
  height: 10rem;
  border: 0.1rem solid ${(props) => props.theme.white};
  border-radius: 10rem;
  position: absolute;
  bottom: 50%;
  transform-origin: bottom;
  transform: rotate(70deg);
`;
