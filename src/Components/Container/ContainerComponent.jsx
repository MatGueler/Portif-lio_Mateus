import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 20px;

  position: relative;
  background-color: ${(props) => {
    if (props.theme === "dark") {
      return "#002453";
    }
    if (props.theme === "clean") {
      return "transparent";
    }
  }};

  box-sizing: border-box;
`;

export const ContactContainer = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;

  box-sizing: border-box;
`;
