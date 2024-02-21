import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { APIContextProvider } from "./Context";
import Header from "./components/Header";
import Upcoming from "./components/Upcoming";
import Airing from "./components/Airing";
function App() {
  return (
    <>
      <APIContextProvider>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/upcomimg" element={<Upcoming/>} />
            <Route path="/airing" element={<Airing/>} />
          </Routes>
        </BrowserRouter>
      </APIContextProvider>
    </>
  );
}

export default App;
