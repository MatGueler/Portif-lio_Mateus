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

export default InitialScreen;
