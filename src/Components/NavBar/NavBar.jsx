import { CartWidget } from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <nav className="d-flex justify-content-evenly p-4">
        <img src="/img/logoSamsung.png" alt="logo" style={{ width: "130px" }} />
        <div>
          <Link to={'/'}>
            <button className="btn btn-dark mx-4">Home</button>
          </Link>

          <Link to={`/category/Z`}>
            <button className="btn btn-dark mx-4">Galaxy Z</button>
          </Link>

          <Link to={`/category/S`}>
            <button className="btn btn-dark mx-4">Galaxy S</button>
          </Link>

          <Link to={`/category/A`}>
            <button className="btn btn-dark mx-4">Galaxy A</button>
          </Link>
        </div>
            <CartWidget />
      </nav>
    </>
  );
};