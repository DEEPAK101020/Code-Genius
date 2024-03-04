import { Route, Routes } from "react-router";
import XthRoadMap from "../Components/XthRoadMap";
import Home from "../Pages/Home";

function MainRoute() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <Home />}/>

        <Route path="/roadmap" element={<XthRoadMap />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </>
  );
}

export default MainRoute;
