import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { timeState } from "../library/atoms";

interface Props {
  mousePosition: {
    x: number;
    y: number;
  };
}

export function ToolTip({ mousePosition }: Props) {
  const time = useRecoilValue(timeState);
  const hour = time.getHours();
  let minute = time.getMinutes().toString();
  if (minute.length === 1) minute = "0" + minute;
  let second = time.getSeconds().toString();
  if (second.length === 1) second = "0" + second;

  const x = `${mousePosition.x + 10}px`;
  const y = `${mousePosition.y - 25}px`;

  return (
    <Container x={x} y={y}>
      {hour} : {minute} : {second}
    </Container>
  );
}

const Container = styled.div<{ x: string; y: string }>`
  width: 6rem;
  height: 2rem;
  background-color: ${(props) => props.theme.point};
  color: ${(props) => props.theme.background};
  font-weight: bold;
  border-radius: 1rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  left: ${(props) => props.x};
  top: ${(props) => props.y};
  z-index: 99;
  font-family: "Roboto", sans-serif;
`;
