import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Clock } from "./components/Clock";
import { theme } from "./styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Clock />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.background};
`;

export default App;
