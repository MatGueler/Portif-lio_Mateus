//  # Components

import { Container } from "../../Container/ContainerComponent";
import { Header } from "../../Header/HeaderComponent";
import { Footer } from "../../Footer/FooterComponent";

//  # Libs

import styled from "styled-components";

function InitialScreen() {
  return (
    <>
      <Container>
        <Header>Header</Header>

        <Main>
          <h1>Site Mateus</h1>
        </Main>

        <Footer>Footer</Footer>
      </Container>
      ;
    </>
  );
}

const Main = styled.div`
  width: 100%;

  background-color: green;

  padding-top: 100px;

  h1 {
    height: 200px;

    background-color: blue;
  }
`;

export default InitialScreen;
