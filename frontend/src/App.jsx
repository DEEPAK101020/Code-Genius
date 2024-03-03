// import "./App.css";
// import React from "react";
import XthRoadMap from "./Components/XthRoadMap";
import SearchPath from "./Components/SearchPath";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  // const [result, setResult] = React.useState("");
  return (
    <>
    <ChakraProvider>
      <XthRoadMap />
      <SearchPath />
    </ChakraProvider>
    </>
  );
}

export default App;
