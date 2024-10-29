import { useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";

const NavBar = () => {
//   const [dropdownOpen, setDropdownOpen] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

  return (
    <nav id="navBar">
      <h2>
        <Link to="/" className="link">
          Nome do Site
        </Link>
      </h2>

      <p>
        <Link to="/vagas" className="link">Serviços</Link>
      </p>


      {/* <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle"
          type="button"
          onClick={toggleDropdown}
          aria-expanded={dropdownOpen}
        >
          Dropdown button
        </button>
        <ul className={`dropdown-menu ${dropdownOpen ? "show" : ""}`}>
          <li>
            <Link className="dropdown-item" to="#">
              Action
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Another action
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Something else here
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Vaga
            </Link>
          </li>
          <li>
            <Link className="dropdown-item" to="#">
              Something else here
            </Link>
          </li>
        </ul>
      </div> */}
    </nav>
  );
};

export default NavBar;
