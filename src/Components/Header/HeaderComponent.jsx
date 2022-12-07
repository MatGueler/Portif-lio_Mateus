import styled from "styled-components";

function HeaderComponent() {
  return (
    <Header>
      <p>Ola</p>
    </Header>
  );
}
export default HeaderComponent;

export const Header = styled.div`
  width: 100%;
  height: 50px;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 2;

  background-color: #ffffff;

  animation-name: example;
  animation-duration: 0.2s;

  @keyframes example {
    from {
      top: -50%;
    }
    to {
      top: 0;
    }
  }
`;
