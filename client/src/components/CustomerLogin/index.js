import Navbar from "../Navbar";
import "./index.css";

const CustomerLogin = () => {
  return (
    <div>
      <Navbar />

      <div className="login-bg">
        <form className="login-form">
          <h1>Customer Login</h1>

          <div className="login-container">
            <label htmlFor="userId" className="label-text">
              Customer ID
            </label>
            <input
              id="userId"
              type="text"
              placeholder="Username"
              className="input-bar"
            />
          </div>
          <div className="login-container">
            <label htmlFor="emailId" className="label-text">
              Email
            </label>
            <input
              id="emailId"
              type="text"
              placeholder="Email"
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

          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
export default CustomerLogin;
