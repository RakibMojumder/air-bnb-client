import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Main from "./Layout";
import Home from "./pages/Home";
import GlobalStateProvider from "./context/GlobalStateProvider";

const App = () => {
  return (
    <>
      <GlobalStateProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />}>
              <Route path="/" element={<Home />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalStateProvider>
    </>
  );
};

export default App;
