import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { timeState } from "../recoil/atoms";

export function SecondHand() {
  const time = useRecoilValue(timeState);
  const second = time.getSeconds();
  const degree = (second / 60) * 360;

  return <Container degree={degree} />;
}

const Container = styled.div<{ degree: number }>`
  width: 0.1rem;
  height: 10.5rem;
  background-color: ${(props) => props.theme.point};
  position: absolute;
  bottom: 50%;
  transform-origin: bottom;
  transform: rotate(${(props) => props.degree}deg);
`;
