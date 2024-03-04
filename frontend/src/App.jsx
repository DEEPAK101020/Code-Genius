// import "./App.css";
// import React from "react";
import XthRoadMap from "./Components/XthRoadMap";
import SearchPath from "./Components/SearchPath";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoute from "./MainRoute/MainROute";
import About from "./Components/About";

function App() {
  // const [result, setResult] = React.useState("");
  return (
    <>
      <ChakraProvider>
        <Router>
          <NavBar />
          {/* <XthRoadMap /> */}
          {/* <SearchPath /> */}
          <MainRoute />
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
