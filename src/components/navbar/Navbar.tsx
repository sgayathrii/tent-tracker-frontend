import logoImage from "../../assets/tenttracker-high-resolution-logo.jpeg";
import loginIconImage from "../../assets/icons8-login-67.png";
import logoutIconImage from "../../assets/icons8-log-out-24.png";
import bookCampIconImage from "../../assets/icons8-camping-48.png";
import { Link } from "react-router-dom";
import { NavBarProps } from "../../types/types";

const Navbar = ({ username }: NavBarProps) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <Link to="/">
          <img
            src={logoImage}
            alt="Your Logo"
            className="navbar__icons__logo"
          />
        </Link>
      </div>
      <div className="navbar__icons">
        {username ? (
          <Link to="/">
            <img
              src={logoutIconImage}
              alt="Logout Icon"
              className="navbar__icons__logout"
            />
          </Link>
        ) : (
          <Link to="/login">
            <img
              src={loginIconImage}
              alt="Login Icon"
              className="navbar__icons__login"
            />
          </Link>
        )}

        <Link to="/camping-areas">
          <img
            src={bookCampIconImage}
            alt="Book Camp Icon"
            className="navbar__icons__book-camp"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
