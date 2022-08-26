import './navbar.css';
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <img src={logo} alt="Logo"></img>
        <div className="navItems">
          <span>About Us</span>
          <span>Service</span>
          <span>Contact</span>
          <span>Career</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
