import styled from "styled-components";

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
