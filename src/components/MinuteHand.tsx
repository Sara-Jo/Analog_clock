import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { timeState } from "../library/atoms";

export function MinuteHand() {
  const time = useRecoilValue(timeState);
  const minute = time.getMinutes();

  const degree = (minute / 60) * 360;
  return <Container degree={degree} />;
}

const Container = styled.div<{ degree: number }>`
  width: 0.7rem;
  height: 10rem;
  border: 0.1rem solid ${(props) => props.theme.white};
  border-radius: 10rem;
  position: absolute;
  bottom: 50%;
  transform-origin: bottom;
  transform: rotate(${(props) => props.degree}deg);
`;
