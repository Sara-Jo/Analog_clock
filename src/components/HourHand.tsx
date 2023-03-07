import styled from "styled-components";

export function HourHand() {
  return (
    <>
      {/* <HandLine /> */}
      <Container />
    </>
  );
}

const Container = styled.div`
  width: 0.7rem;
  height: 6rem;
  border: 0.1rem solid ${(props) => props.theme.white};
  border-radius: 10rem;
  position: absolute;
  bottom: 50%;
  transform-origin: bottom;
  transform: rotate(300deg);
`;
