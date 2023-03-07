import styled from "styled-components";
import { HourHand } from "./HourHand";
import { MinuteHand } from "./MinuteHand";
import { SecondHand } from "./SecondHand";

export function Clock() {
  return (
    <Container>
      <CenterPoint />
      <HourHand />
      <MinuteHand />
      <SecondHand />
    </Container>
  );
}

const Container = styled.div`
  width: 25rem;
  height: 25rem;
  border: 0.5rem solid ${(props) => props.theme.white};
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* position: relative; */
  /* transform: translateY(0px); */
`;

const CenterPoint = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border: 0.2rem solid ${(props) => props.theme.white};
  border-radius: 100%;
  background-color: ${(props) => props.theme.background};
  z-index: 1;
`;
