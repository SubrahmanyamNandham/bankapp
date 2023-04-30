import { Link } from "react-router-dom";

import "./index.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <img
        className="logo"
        alt="website logo"
        src="https://res.cloudinary.com/dvco5xnoe/image/upload/v1681305433/bank-logo_aujlxx.png"
      />

      <div className="navItems">
        <Link to="/">
          <p className="text">Home</p>
        </Link>
        <Link to="/customerLogin">
          <p className="text">Customer Login</p>
        </Link>
        <Link to="/bankLogin">
          <p className="text">Banker Login </p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
