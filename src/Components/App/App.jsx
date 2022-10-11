import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../../Assets/CSS/GlobalStyle";
import InitialScreen from "../Pages/InitialScreen/InitialScreen";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path={"/MateusGueler"} element={<InitialScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
