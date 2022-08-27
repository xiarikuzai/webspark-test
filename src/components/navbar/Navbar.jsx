/* eslint-disable jsx-a11y/anchor-is-valid */
import './navbar.css';
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-md navbar-light">
        <div class="container-fluid">
          <img src={logo} alt="logo-img"></img>
          <button
            type="button"
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            id="navbarCollapse"
            class="collapse navbar-collapse"
          >
            <ul class="nav navbar-nav ms-auto">
              <li class="nav-item">
                <a href="#" class="nav-link">
                  About Us
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Services
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Career
                </a>
              </li>
              <li class="nav-item">
                <a href="#" class="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
