import "./Nav.css";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold fs-4" to="/">
            Emart{" "}
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="about">
                  About Us
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link" to="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-dark" type="submit">
                Search
              </button>
            </form>
            <div className="buttons">
              <NavLink to="Login" className="btn btn-outline-dark">
                <i className="fa"></i> Login
              </NavLink>
              <NavLink to="SignUp" className="btn btn-outline-dark">
                <i className="fa"></i> SignUp
              </NavLink>
              <NavLink to="Cart" className="btn btn-outline-dark">
                <i className="fa"></i>Cart(0)
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
