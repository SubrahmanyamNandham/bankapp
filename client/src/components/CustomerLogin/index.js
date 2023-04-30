import { useState } from "react";
import Cookies from "js-cookie";
import { useHistory, useParams } from "react-router-dom";
import Navbar from "../Navbar";
import "./index.css";

const CustomerLogin = () => {
  const [username, setData] = useState("");
  const [email, setEmailData] = useState("");
  const [password, setPassData] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const history = useHistory();

  const { userId } = useParams();
  console.log(userId);

  const onSubmitFailure = (error) => setErrorMsg(error);
  const onSubmitSuccess = (jwtToken) => {
    Cookies.set("jwt_token", jwtToken, { expires: 30, path: "/" });
    history.replace(`/user/1`);
  };

  const onGetLogin = async (event) => {
    event.preventDefault();

    const useDetails = { user: username, email, password };
    const url = "http://localhost:8000/user/login/";
    const options = {
      method: "POST",
      body: JSON.stringify(useDetails),
    };
    const res = await fetch(url, options);
    const data = await res.json();
    console.log(data);
    if (res.ok === true) {
      onSubmitSuccess(data.jwt_token);
    } else {
      onSubmitFailure(data.error_msg);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="login-bg">
        <form className="login-form" onSubmit={onGetLogin}>
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
              value={username}
              onChange={(e) => setData(e.target.value)}
            />
          </div>
          <div className="login-container">
            <label htmlFor="emailId" className="label-text">
              Email
            </label>
            <input
              id="emailId"
              type="email"
              placeholder="Email"
              className="input-bar"
              value={email}
              onChange={(e) => setEmailData(e.target.value)}
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
              onChange={(e) => setPassData(e.target.value)}
            />
          </div>

          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>

        {errorMsg && <p className="error-msg">{errorMsg}</p>}
      </div>
    </div>
  );
};
export default CustomerLogin;
