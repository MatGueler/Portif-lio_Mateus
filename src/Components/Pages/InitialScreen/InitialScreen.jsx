//  # Components

import { Container } from "../../Container/ContainerComponent";
import { Main } from "../../Main/MainComponent";
import { Header } from "../../Header/HeaderComponent";
import { Footer } from "../../Footer/FooterComponent";

import { Title } from "./InitialScreenStyle";

//  # Libs

function InitialScreen() {
  return (
    <>
      <Container>
        {/* <Header>Header</Header> */}

        <Main>
          <Title>
            <h2>Welcome to my page!</h2>
            <img
              src="https://avatars.githubusercontent.com/u/102394093?v=4"
              alt=""
            />
            <h1>Mateus Gueler Machado</h1>
            <button>About me</button>
          </Title>
        </Main>

        {/* <Footer>Footer</Footer> */}
      </Container>
    </>
  );
}

export default InitialScreen;
