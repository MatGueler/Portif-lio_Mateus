import styled from "styled-components";

export const Painel = styled.div`
  max-width: 100%;
  height: ${(props) => props.height};

  display: flex;
  align-items: center;

  position: relative;
  overflow: hidden;

  padding: 20px;

  border-radius: 10px;

  box-shadow: 0px 5px 10px #646464;
  box-sizing: border-box;

  background-color: ${(props) => {
    if (props.theme === "dark") {
      return "#002453";
    }
    if (props.theme === "clean") {
      return "#86c5ff";
    }
  }};

  h1 {
    width: 100%;

    font-size: 30px;
    font-family: "Share Tech Mono", monospace;

    font-weight: bold;

    text-align: center;
    text-shadow: 5px 5px 5px #3b3b3b;

    color: #ffffff;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;

  padding: 20px;

  color: ${(props) => (props.theme !== "dark" ? "#002453" : "#ffffff")};

  box-sizing: border-box;

  background-color: ${(props) =>
    props.theme === "dark" ? "#002453" : "#ffffff"};
`;

export const Title = styled.div`
  width: 100%;
  height: 20%;

  display: flex;
  align-items: center;

  h1 {
    width: 100%;

    text-align: center;

    color: #ffffff;
    font-size: 40px;
    font-weight: bold;
  }
`;

export const Skills = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .skill-box {
    width: 400px;
    height: 400px;

    display: flex;
    align-items: center;

    border-radius: 10px;

    position: relative;

    scroll-behavior: smooth;
    scrollbar-width: none;

    overflow: scroll;

    background-color: #2e2e2e;
  }
`;

export const Skill = styled.div`
  width: 500px;
  height: 100%;

  img {
    width: 400px;
    height: 60%;

    padding: 20px;

    box-sizing: border-box;
  }

  h2 {
    width: 100%;

    text-align: center;
    font-size: 25px;
  }
`;

export const Slider = styled.ul`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Arrow = styled.div`
  width: 40px;
  height: 40px;
  display: ${(props) => props.display};
  justify-content: center;

  cursor: pointer;

  z-index: 2;

  position: relative;

  svg {
    font-size: 40px;
  }

  .previous {
    position: absolute;
    right: -15px;
  }

  .next {
    position: absolute;
    left: -15px;
  }
`;

export const ArrowPage = styled(Arrow)`
  width: 40px;
  height: 40px;

  justify-content: center;

  cursor: pointer;

  z-index: 2;

  position: fixed;

  .up,
  .down {
    color: #686868;
  }

  .up {
    position: fixed;
    top: 40%;
    right: 20px;
  }

  .down {
    position: fixed;
    bottom: 40%;
    right: 20px;
  }

  svg {
    font-size: 40px;
  }
`;

export const Carousel = styled.ul`
  width: 400px;

  display: flex;
  justify-content: center;

  margin: 20px 0;

  p {
    width: 10px;
    height: 10px;

    display: flex;

    border: 2px solid transparent;
    border-radius: 50%;

    background-color: #777777;
    margin: auto;
  }

  .current {
    background-color: #86c5ff;
    box-shadow: 0 0px 5px lightgray;
  }
`;

export const Portifolio = styled.div`
  width: 100%;
  height: 80%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  padding: 20px;

  box-sizing: border-box;

  position: relative;
`;

export const Project = styled.div`
  width: 180px;
  height: 120px;

  margin: 0 5px 5px 10px;
  padding: 10px;

  border: 2px solid transparent;

  cursor: pointer;

  :hover {
    border-color: #002453;
    border-radius: 10px;

    background-color: #00245326;
  }

  * {
    width: 100%;
  }

  h1 {
    height: 20%;
    text-align: center;
  }

  .project-box {
    height: 80%;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 5px;

    background-image: url(${(props) => props.image});
    background-size: 100% 100%;

    svg {
      font-size: 30px;
    }
  }
`;

export const OpenProject = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  box-sizing: border-box;

  z-index: 2;

  background-color: #1f1f1fc5;

  .project-box {
    width: 60%;
    height: 80%;

    display: flex;
    justify-content: center;

    position: relative;

    border-radius: 5px;

    background-image: url(${(props) => props.image});
  }

  .description {
    width: 90%;
    height: 150px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 10px;

    position: absolute;
    bottom: 20px;

    border: 2px solid #002453;
    border-radius: 10px;

    box-sizing: border-box;

    background-color: #ffffff;
  }

  .description p {
    width: 100%;

    font-size: 12px;

    padding: 10px;

    text-align: justify;
  }
  .description h1 {
    width: 100%;

    font-size: 20px;

    padding: 10px;

    text-align: justify;
  }

  .action-buttons {
    display: flex;
    justify-content: center;
  }

  button {
    width: 30%;
    height: 30px;
    margin: 0 10px;

    border: 0;
    border-radius: 5px;

    color: #ffffff;

    cursor: pointer;

    background-color: #002453;
  }
`;
