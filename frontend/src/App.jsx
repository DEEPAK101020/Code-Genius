import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./Components/NavBar";
import { BrowserRouter as Router } from "react-router-dom";
import MainRoute from "./MainRoute/MainROute";
import Footer from "./Components/Footer";

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
          <Footer />
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
