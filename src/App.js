import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import { APIContextProvider } from "./Context";
function App() {
  return (
    <>
      <APIContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </APIContextProvider>
    </>
  );
}

export default App;
