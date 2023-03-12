import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { timeState } from "../recoil/atoms";

export function HourHand() {
  const time = useRecoilValue(timeState);
  let hour = time.getHours();
  const minute = time.getMinutes();

  if (hour >= 12) hour -= 12;
  const degree = (hour / 12) * 360 + (minute / 60) * 30;

  return <Container degree={degree} />;
}

const Container = styled.div<{ degree: number }>`
  width: 0.7rem;
  height: 6rem;
  border: 0.1rem solid ${(props) => props.theme.white};
  border-radius: 10rem;
  position: absolute;
  bottom: 50%;
  transform-origin: bottom;
  transform: rotate(${(props) => props.degree}deg);
`;
