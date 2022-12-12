//  # Components

import {
  ContactContainer,
  Container,
} from "../../Container/ContainerComponent";

import {
  Arrow,
  ArrowPage,
  Background,
  Carousel,
  OpenProject,
  Portifolio,
  Project,
  Skill,
  Skills,
  Slider,
  Title,
} from "./InitialScreenStyle";

//  # Icons
import { AiOutlineZoomIn } from "react-icons/ai";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

import { useRef, useState } from "react";
import HeaderComponent from "../../Header/HeaderComponent";

//  # Data
import { projects, skills } from "../../../Services/Data";
import ContactPage from "../../Dashboards/ContactPage/ContactPage";
import ApresentationPage from "../../Dashboards/ApresentationPage/ApresentationPage";
import AboutMeComponent from "../../Dashboards/AboutMeComponent/AboutMeComponent";

//  # Libs

function InitialScreen() {
  const [current, setCurrent] = useState(1);
  const [openProject, setOpenProject] = useState(false);
  const [currentPage, setCurrentPage] = useState("1");
  const [headerVisible, setHeaderVisible] = useState(false);

  const carousel = useRef(null);

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

  function PutProjects({ data }) {
    const [isOverProject, setIsOverProject] = useState(false);
    return (
      <Project
        onClick={() => setOpenProject(true)}
        onMouseOver={() => setIsOverProject(true)}
        onMouseLeave={() => setIsOverProject(false)}
        image={data.image}
      >
        <h1>{data.title}</h1>
        <div className="project-box">
          {isOverProject ? <AiOutlineZoomIn /> : null}
        </div>
      </Project>
    );
  }

  document.addEventListener("scroll", Scrolar);

  return (
    <>
      {headerVisible ? <HeaderComponent /> : ""}
      <ApresentationPage />

      <AboutMeComponent />

      <Container
        id="3"
        theme="clean"
        onClick={() => {
          if (openProject) setOpenProject(false);
        }}
      >
        <Title>
          <h1>Meus projetos</h1>
        </Title>

        <Portifolio>
          {openProject ? (
            <OpenProject image="https://gestaocont.com.br/site/uploads/2020/06/ecommerce-seo-tips.jpg">
              <div className="project-box">
                <div className="description">
                  <h1>Título</h1>
                  <p>descrição</p>
                  <div className="action-buttons">
                    <button>Github</button>
                    <button>Site</button>
                  </div>
                </div>
              </div>
            </OpenProject>
          ) : null}

          {projects.map((item, index) => (
            <PutProjects key={index} data={item} />
          ))}
        </Portifolio>
      </Container>

      <Container></Container>

      {/* Próximo a componentizar */}
      <ContactContainer id="4">
        <Background theme="dark">
          <Title>
            <h1>Habilidades</h1>
          </Title>

          <Skills>
            <Slider>
              <Arrow
                onClick={(e) => {
                  carousel.current.scrollLeft -= carousel.current.offsetWidth;
                  if (current !== 1) {
                    setCurrent((prev) => {
                      return prev - 1;
                    });
                  }
                }}
              >
                <BsFillArrowLeftCircleFill className="previous" />
              </Arrow>

              <div className="skill-box" ref={carousel}>
                {skills.map((item, index) => {
                  return (
                    <Skill key={index}>
                      <img src={item.image} alt="js" />
                      <h2>{item.name}</h2>
                    </Skill>
                  );
                })}
              </div>

              <Arrow
                onClick={() => {
                  carousel.current.scrollLeft += carousel.current.offsetWidth;
                  if (current < skills.length) {
                    setCurrent((prev) => {
                      return prev + 1;
                    });
                  } else {
                    setCurrent(1);
                    carousel.current.scrollLeft = 0;
                  }
                }}
              >
                <BsFillArrowRightCircleFill className="next" />
              </Arrow>
            </Slider>

            <Carousel>
              {skills.map((item, index) => {
                if (index + 1 === current) {
                  return <p key={index} className="current"></p>;
                } else {
                  return <p key={index}></p>;
                }
              })}
            </Carousel>
          </Skills>
        </Background>
      </ContactContainer>

      <ContactPage />

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
