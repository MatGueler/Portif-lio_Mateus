//  # Components

import {
  ContactContainer,
  Container,
} from "../../Container/ContainerComponent";
// import { Main } from "../../Main/MainComponent";
// import { Header } from "../../Header/HeaderComponent";
// import { Footer } from "../../Footer/FooterComponent";

import {
  Arrow,
  ArrowPage,
  Background,
  Carousel,
  ContactBox,
  HeaderAbout,
  ImageProfile,
  Painel,
  ProfileIcons,
  Skill,
  Skills,
  Slider,
  Summary,
  TextContact,
  TextProfile,
  Title,
} from "./InitialScreenStyle";

//  # Icons
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiOutlineMail, HiLocationMarker } from "react-icons/hi";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

import react from "../../../Assets/Image/react.svg";
import javascript from "../../../Assets/Image/js.svg";
import { useState } from "react";
import HeaderComponent from "../../Header/HeaderComponent";

//  # Libs

function InitialScreen() {
  const [current, setCurrent] = useState(1);
  const [currentPage, setCurrentPage] = useState("1");
  const [headerVisible, setHeaderVisible] = useState(false);
  const [aboutInfosSelected, setAboutInfosSelected] = useState("Perfil");
  const arr = [1, 2, 3, 4];

  function Scrolar() {
    const heightPage = 620;

    if (window.scrollY > 400) {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(false);
    }
    const pageNumber = Math.ceil(window.scrollY / heightPage);

    if (pageNumber === 0) {
      setCurrentPage(`1`);
    } else {
      setCurrentPage(String(pageNumber));
    }
  }

  function RenderAboutInfos({ item }) {
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

  document.addEventListener("scroll", Scrolar);

  return (
    <>
      {headerVisible ? <HeaderComponent /> : ""}
      <Container id="1" theme="clean">
        <Painel height="50%" theme="dark">
          <ImageProfile>
            <img
              src="https://media-exp1.licdn.com/dms/image/C5603AQES3HRO7mPlpQ/profile-displayphoto-shrink_800_800/0/1668010094226?e=1675900800&v=beta&t=6s7tsa5LsppXosQTWMiH7pbsadFsHo04diSkdpm-K78"
              alt="ImageProfle"
            />
            <ProfileIcons>
              <a
                href="https://www.linkedin.com/in/mateusgueler/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin />
              </a>
              <a
                href="https://github.com/MatGueler"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub />
              </a>
              <a
                href="#Skills"
                // target="_blank"
                // rel="noopener noreferrer"
              >
                <HiOutlineMail />
              </a>
            </ProfileIcons>
          </ImageProfile>
          <TextProfile>
            <h1>Mateus Gueler Machado</h1>
            <h1>
              {"<"} Desenvolvedor Web Full Stack {"/>"}
            </h1>
            <ProfileIcons>
              <div className="icon">
                <HiLocationMarker />
              </div>
              <p>Cariacica, ES, Brasil</p>
            </ProfileIcons>
          </TextProfile>
        </Painel>
        <Summary>
          <a href="#2">
            <button>Sobre mim</button>
          </a>

          <a href="#3">
            <button>Formação</button>
          </a>

          <a href="#4">
            <button>Habilidades</button>
          </a>

          <button>Portifólio</button>

          <a href="#5">
            <button>Contato</button>
          </a>
        </Summary>
      </Container>

      <Container id="2" theme="dark">
        <Title>
          <h1>Sobre mim</h1>
        </Title>
        <Painel height="70%" theme="clean">
          <HeaderAbout>
            {["Perfil", "Curiosidades", "Fotos"].map((item, index) => (
              <RenderAboutInfos key={index} item={item} />
            ))}
          </HeaderAbout>
        </Painel>
      </Container>

      <Container id="3" theme="clean" onMouseOver={Scrolar}></Container>

      <ContactContainer id="4">
        <Background theme="dark">
          <Title>
            <h1>Habilidades</h1>
          </Title>

          <Skills>
            <Slider>
              <Arrow
                onClick={() => {
                  const slider =
                    document.getElementsByClassName("skill-box")[0];
                  slider.scrollLeft -= 400;
                  if (current !== 1) {
                    setCurrent((prev) => {
                      return prev - 1;
                    });
                  }
                }}
              >
                <BsFillArrowLeftCircleFill className="previous" />
              </Arrow>

              <div className="skill-box">
                <Skill>
                  <img src={javascript} alt="js" />
                  <h2>HTML</h2>
                </Skill>

                <Skill>
                  <img src={javascript} alt="js" />
                  <h2>CSS</h2>
                </Skill>

                <Skill>
                  <img src={javascript} alt="js" />
                  <h2>JavaScript</h2>
                </Skill>

                <Skill>
                  <img src={javascript} alt="js" />
                  <h2>TypeScript</h2>
                </Skill>

                <Skill>
                  <img src={javascript} alt="js" />
                  <h2>Python</h2>
                </Skill>

                <Skill>
                  <img src={javascript} alt="js" />
                  <h2>SQL</h2>
                </Skill>

                <Skill>
                  <img src={javascript} alt="js" />
                  <h2>Node.js</h2>
                </Skill>

                <Skill>
                  <img src={react} alt="react" />
                  <h2>React</h2>
                </Skill>

                <Skill>
                  <img src={javascript} alt="js" />
                  <h2>Angular</h2>
                </Skill>

                <Skill>
                  <img src={javascript} alt="js" />
                  <h2>Postgres</h2>
                </Skill>

                <Skill>
                  <img src={javascript} alt="js" />
                  <h2>MongoDB</h2>
                </Skill>

                <Skill>
                  <img src={javascript} alt="js" />
                  <h2>Prisma</h2>
                </Skill>
              </div>

              <Arrow
                onClick={() => {
                  const slider =
                    document.getElementsByClassName("skill-box")[0];
                  slider.scrollLeft += 400;
                  if (current < arr.length) {
                    setCurrent((prev) => {
                      return prev + 1;
                    });
                  } else {
                    setCurrent(1);
                    slider.scrollLeft = 0;
                  }
                }}
              >
                <BsFillArrowRightCircleFill className="next" />
              </Arrow>
            </Slider>

            <Carousel>
              {arr.map((item, index) => {
                if (item === current) {
                  return <p key={index} className="current"></p>;
                } else {
                  return <p key={index}></p>;
                }
              })}
            </Carousel>
          </Skills>
        </Background>
      </ContactContainer>

      <ContactContainer id="5">
        <TextContact>
          <h3>Ficou alguma dúvida? Mande uma mensagem!</h3>
        </TextContact>
        <ContactBox>
          <form action="">
            <div className="sender-box">
              <input type="text" placeholder="Nome" />
              <input type="text" placeholder="email" />
              <input type="text" placeholder="Assunto" />
              <button>Enviar</button>
            </div>
            <textarea></textarea>
          </form>
        </ContactBox>
      </ContactContainer>

      {currentPage !== "1" ? (
        <ArrowPage>
          <a href={`#${Number(currentPage) - 1}`}>
            <BsFillArrowUpCircleFill className="up" />
          </a>
        </ArrowPage>
      ) : (
        ""
      )}

      {currentPage !== "5" ? (
        <ArrowPage onClick={() => console.log(currentPage)}>
          <a href={`#${Number(currentPage) + 1}`}>
            <BsFillArrowDownCircleFill className="down" />
          </a>
        </ArrowPage>
      ) : (
        ""
      )}
    </>
  );
}

export default InitialScreen;
