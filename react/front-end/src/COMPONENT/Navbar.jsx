/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import icon from "../../public/logo.jpg";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand">
    Travel Tingle
  </a>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarNav"
    aria-controls="navbarNav"
    aria-expanded="true"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
      <Link  className="nav-link" to='/'>Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link"  to='/product'>Product</Link>
      </li>
    
      <li className="nav-item">
      <Link className="nav-link"  to='/contact'>Contact</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link"  to='/todo'>todo</Link>
      </li>
    </ul>
  </div>
</nav>

    </div>
  );
};

export default Navbar;
