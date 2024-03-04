import { Route, Routes } from "react-router";
import XthRoadMap from "../Components/XthRoadMap";
import About from "../Components/About";

function MainRoute() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={ <Home/>}/> */}
        <Route path="/roadmap" element={<XthRoadMap />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default MainRoute;
