import { useState } from "react";

import { Container } from "../../Container/ContainerComponent";
import { Painel } from "../../Pages/InitialScreen/InitialScreenStyle";

import { ContentAbout, HeaderAbout, Title } from "./AboutMeStyled";

export default function AboutMeComponent() {
  const [aboutInfosSelected, setAboutInfosSelected] = useState("Perfil");

  function RenderAboutInfos() {
    if (aboutInfosSelected === "Perfil") {
      return (
        <ul>
          <li>
            Nasci em 1998, em <span>Vitória</span>, Espírito Santo.
          </li>
          <li>
            Sou <span>Desenvolvedor Web Full Stack</span>, algumas das
            características que me definem são: a <span>criatividade</span> e a
            paixão por <span>desafios</span> e solucionar <span>problemas</span>{" "}
            complexos.
          </li>
          <li>
            Uma das minhas razões para ser apaixonado pela área de tecnologia é
            a possibilidade de resolver os mais variados problemas de diversas
            formas, ou seja, deixa a minha criatividade trabalhar. 🤣
          </li>
          <li>
            Amo estudar, e ler livros. Ficar na zona de conforto me entedia,
            então sempre estou buscando aprender.
          </li>
        </ul>
      );
    }
    if (aboutInfosSelected === "Curiosidades") {
      return (
        <ul>
          <li>Tenho 4 cachorros, e sou apaionado por animais 🥰</li>
          <li>Como bom brasileiro, adoro praia e verão 🏖️</li>
          <li>
            Sou muito curioso, adoro viajar e conhecer lugares/culturas novas;
          </li>
          <li>
            A educação é um propósito de vida, a verdadeira graça de aprender
            algo é poder ensina-lo depois.
          </li>
          <li>
            Outra paixão é esporte, onde eu econtro a paz e renovo as energias,
            principalmente futebol ⚽
          </li>
        </ul>
      );
    }
    // if (aboutInfosSelected === "Curiosidades") {
    //   return (
    //     <DogImages>
    //       <li>Bob</li>
    //       <li>Mel</li>
    //       <li>Leka</li>
    //       <li>Zoe</li>
    //     </DogImages>
    //   );
    // }
  }
  function RenderAboutHeader({ item }) {
    if (aboutInfosSelected === item) {
      return (
        <h1 className="selected" onClick={() => setAboutInfosSelected(item)}>
          {item}
        </h1>
      );
    } else {
      return <h1 onClick={() => setAboutInfosSelected(item)}>{item}</h1>;
    }
  }

  return (
    <Container id="2" theme="dark">
      <Title>
        <h1>Sobre mim</h1>
      </Title>
      <Painel height="70%" theme="clean">
        <HeaderAbout>
          {["Perfil", "Curiosidades", "Dedicatória"].map((item, index) => (
            <RenderAboutHeader key={index} item={item} />
          ))}
        </HeaderAbout>
        <ContentAbout>
          <RenderAboutInfos />
        </ContentAbout>
      </Painel>
    </Container>
  );
}
