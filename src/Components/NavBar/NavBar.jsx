import { CartWidget } from "../CartWidget/CartWidget";

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-evenly p-4">
            <img src="/public/img/logoSamsung.png" alt="logo" style = {{width: "130px"}}/>
        <div>
        <button className="btn btn-dark mx-3">Galaxy Z</button>
        <button className="btn btn-dark mx-3">Galaxy S</button>
        <button className="btn btn-dark mx-3">Galaxy A</button>
        <button className="btn btn-dark mx-3">Galaxy M</button>
        </div>
      <CartWidget />
    </nav>
  );
};
