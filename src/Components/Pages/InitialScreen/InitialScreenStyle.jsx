import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  color: #248ab9d2;

  h1 {
    font-size: 40px;
    text-align: center;
    -webkit-text-stroke: 1px;
    -webkit-text-stroke-color: #163369;
    margin-bottom: 20px;
  }

  h2 {
    font-size: 60px;
    text-align: center;
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 100%;
    box-sizing: border-box;
    margin: 20px 0;
    border: 1px solid #11447e;
    box-shadow: 0 0 8px #248aff;
  }

  button {
    width: 100px;
    height: 40px;
    border: 0;
    border-radius: 10px;
  }
`;
