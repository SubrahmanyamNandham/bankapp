import "./index.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";

import Navbar from "../Navbar";
const BankerLogin = () => {
  const [username, setData] = useState("");
  const [password, setPassData] = useState("");

  const history = useHistory();

  const onSubmitSuccess = () => {
    history.replace("/account");
  };

  const onClickLogin = async (event) => {
    event.preventDefault();
    const userDetails = { user_id: username, password };
    const url = "https://bankurl-com.onrender.com/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const res = await fetch(url, options);
    if (res.ok === true) {
      const data = await res.json();
      onSubmitSuccess(data);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="login-bg">
        <form className="login-form" onSubmit={onClickLogin}>
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
              value={username}
              onChange={(event) => setData(event.target.value)}
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
              value={password}
              onChange={(event) => setPassData(event.target.value)}
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
export default BankerLogin;
