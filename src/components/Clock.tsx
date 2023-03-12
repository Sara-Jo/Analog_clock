import { MouseEvent, useState } from "react";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { timeState } from "../recoil/atoms";
import { HourHand } from "./HourHand";
import { MinuteHand } from "./MinuteHand";
import { SecondHand } from "./SecondHand";
import { ToolTip } from "./ToolTip";

export function Clock() {
  const setTime = useSetRecoilState(timeState);
  const [isHovering, setIsHovering] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
    });
  };

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <Container
      onMouseMove={handleMouseMove}
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <CenterPoint />
      <HourHand />
      <MinuteHand />
      <SecondHand />
      {isHovering && <ToolTip mousePosition={mousePosition} />}
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
`;

const CenterPoint = styled.div`
  width: 0.5rem;
  height: 0.5rem;
  border: 0.2rem solid ${(props) => props.theme.white};
  border-radius: 100%;
  background-color: ${(props) => props.theme.background};
  z-index: 50;
`;
