import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <div className="p-5 flex gap-10 justify-around ">
        {" "}
        <Link to="/">LOGO</Link>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/roadmap ">RoadMap</Link>
        <Link to="/about ">About Us</Link>
      </div>
    </>
  );
}

export default NavBar;
