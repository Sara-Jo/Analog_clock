import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { timeState } from "../library/atoms";

export function HourHand() {
  const time = useRecoilValue(timeState);
  const hour = time.getHours();

  let degree;
  if (hour >= 12) degree = ((hour - 12) / 12) * 360;
  else degree = (hour / 12) * 360;

  return (
    <>
      {/* <HandLine /> */}
      <Container degree={degree} />
    </>
  );
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
