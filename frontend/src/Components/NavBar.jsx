import { Link } from "react-router-dom";
// import image from "../Image/Logo2.jpeg";
// import image from "../Image/Logo2.jpeg";
import image from "../Image/Logo4.jpeg";
// import image from "../Image/Logo.jpeg";
function NavBar() {
  return (
    <>
      <div className="p-2 flex gap-10  bg-blue-400 justify-between text-2xl font-black items-center navbar ">
        {/* <Link className="ml-16" to="/">
          LOGO
        </Link> */}
        <Link className="ml-16 h-fit " to="/">
          <img className="w-24  " src={image} />
        </Link>
        <div className="flex w-2/5 justify-around">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/roadmap ">RoadMap</Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
