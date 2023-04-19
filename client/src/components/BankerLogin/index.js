import "./index.css";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
const BankerLogin = () => {
  return (
    <div>
      <Navbar />

      <div className="login-bg">
        <form className="login-form">
          <h1>Banker Login</h1>

          <div className="login-container">
            <label htmlFor="userId" className="label-text">
              USERNAME
            </label>
            <input
              id="userId"
              type="text"
              placeholder="Username"
              className="input-bar"
            />
          </div>

          <div className="login-container">
            <label htmlFor="pwd" className="label-text">
              PASSWORD
            </label>
            <input
              id="pwd"
              type="password"
              placeholder="Password"
              className="input-bar"
            />
          </div>
          <Link to="/account">
            <button type="submit" className="login-btn">
              Log in
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
export default BankerLogin;
