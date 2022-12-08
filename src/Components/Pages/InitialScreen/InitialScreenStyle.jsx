import styled from "styled-components";

export const ImageProfile = styled.div`
  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    width: 200px;
    height: 200px;

    border: 5px solid lightblue;
    border-radius: 100%;

    margin-bottom: 20px;
  }
`;

export const ProfileIcons = styled.div`
  display: flex;

  * {
    color: #ffffff;
  }

  p {
    display: flex;
    align-items: center;
    font-style: italic;
  }

  .icon {
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    width: 40px;
    height: 40px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin: 0 10px;
  }

  svg {
    font-size: 25px;
    cursor: pointer;
  }

  svg:hover {
    font-size: 35px;
  }
`;

export const TextProfile = styled.div`
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 30px;
  }
`;

export const Summary = styled.div`
  --grey-text: #8f8f8f;
  --blue-text: #002453;
  --ligthblue-text: #00245311;

  width: 100%;
  height: 50%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  padding: 20px 0 0 0;

  box-sizing: border-box;

  button {
    width: 200px;
    height: 80px;

    margin: 0 15px;

    font-size: 20px;
    color: var(--grey-text);

    border: 5px solid transparent;
    border-top-color: var(--grey-text);
    /* border-bottom-color: var(--grey-text); */
    background-color: transparent;
  }

  button:hover {
    border-top-color: var(--blue-text);
    background-color: var(--ligthblue-text);

    font-size: 30px;
    font-weight: bold;

    color: var(--blue-text);

    cursor: pointer;
  }
`;

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

export const TextContact = styled.div`
  width: 100%;
  height: 40%;

  display: flex;
  align-items: center;

  h3 {
    width: 100%;

    font-size: 30px;
    font-family: "Share Tech Mono", monospace;

    font-weight: bold;

    text-align: center;

    color: #ffffff;
  }
`;

export const ContactBox = styled.div`
  width: 100%;
  height: 60%;

  background-color: #002453;

  * {
    outline: none;
  }

  form {
    width: 100%;
    height: 100%;

    padding: 20px;

    display: flex;

    box-sizing: border-box;
  }

  .sender-box {
    width: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 10px;
  }

  input {
    width: 100%;
    height: 50px;

    border-radius: 5px;

    padding: 0 10px;
    margin-bottom: 20px;

    box-sizing: border-box;
  }

  button {
    width: 50%;
    height: 40px;
  }

  textarea {
    width: 50%;

    padding: 10px;

    border-radius: 10px;

    box-sizing: border-box;
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

export const ArrowPage = styled.div`
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

export const Arrow = styled.div`
  width: 40px;
  height: 40px;
  display: ${(props) => props.display};
  justify-content: center;

  cursor: pointer;

  z-index: 2;

  position: relative;

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

  .previous {
    position: absolute;
    right: -15px;
  }

  .next {
    position: absolute;
    left: -15px;
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

export const HeaderAbout = styled.div`
  --grey-text: #8f8f8f;
  width: 100%;
  height: 40px;

  display: flex;

  position: absolute;
  top: 0;
  left: 0;

  h1 {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--grey-text);

    cursor: pointer;
  }

  .selected {
    background-color: #86c5ff;
  }
`;
