import styled from "styled-components";

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