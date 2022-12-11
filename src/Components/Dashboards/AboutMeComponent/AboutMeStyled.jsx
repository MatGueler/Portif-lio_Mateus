import styled from "styled-components";

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

export const ContentAbout = styled.div`
  width: 100%;
  margin: 0 20px;

  ul {
    animation-name: appear;
    animation-duration: 2s;
  }
  @keyframes appear {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  li {
    line-height: 20px;

    list-style: disc;

    margin: 10px 0;
  }

  span {
    font-weight: bold;
  }
`;
