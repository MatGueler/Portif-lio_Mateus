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
  Background,
  Carousel,
  ContactBox,
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
} from "react-icons/bs";

import react from "../../../Assets/Image/react.svg";
import javascript from "../../../Assets/Image/js.svg";
import { useState } from "react";
import HeaderComponent from "../../Header/HeaderComponent";

//  # Libs

function InitialScreen() {
  const [current, setCurrent] = useState(1);
  const [headerVisible, setHeaderVisible] = useState(false);
  const arr = [1, 2, 3, 4];

  function Scrolar() {
    if (window.scrollY > 600) {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(false);
    }
  }

  document.addEventListener("scroll", Scrolar);

  return (
    <>
      {headerVisible ? <HeaderComponent /> : ""}
      <Container>
        <Painel>
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
          <button>Sobre mim</button>

          <button>Habilidades</button>

          <button>Formação</button>

          <button>Portifólio</button>

          <button>Contato</button>
        </Summary>
      </Container>

      <ContactContainer id="Skills" onMouseOver={Scrolar}>
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
                  return <p className="current"></p>;
                } else {
                  return <p></p>;
                }
              })}
            </Carousel>
          </Skills>
        </Background>
      </ContactContainer>

      <Container>
        <Painel>
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
                href="https://github.com/MatGueler"
                target="_blank"
                rel="noopener noreferrer"
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
          </TextProfile>
        </Painel>
        <Summary>
          <button>Stacks</button>

          <button>Formação</button>

          <button>Portifólio</button>

          <button>Contato</button>

          <button>Stacks</button>

          <button>Formação</button>

          <button>Portifólio</button>

          <button>Contato</button>
        </Summary>
      </Container>

      <ContactContainer>
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
    </>
  );
}

export default InitialScreen;
