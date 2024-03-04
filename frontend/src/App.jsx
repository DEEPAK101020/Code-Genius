// import "./App.css";
// import React from "react";
import XthRoadMap from "./Components/XthRoadMap";
import SearchPath from "./Components/SearchPath";
import { ChakraProvider } from "@chakra-ui/react";
import About from "./Components/About";

function App() {
  // const [result, setResult] = React.useState("");
  return (
    <>
    <ChakraProvider>
      <About />
      <XthRoadMap />
      <SearchPath />
    </ChakraProvider>
    </>
  );
}

export default App;
