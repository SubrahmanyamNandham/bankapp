import { useEffect, userHistory } from "react";
import "./index.css";
import Navbar from "../Navbar";
const BankerLogin = () => {
  const [user, setData] = useState("");
  const [password, setPassData] = useState("");
  useEffect(() => {
    const getData = async () => {
      const userDetails = { user_id: user, password };
      const url = "http://localhost:8000/login";
      const options = {
        method: "POST",
        body: JSON.stringify(userDetails),
      };
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data);
    };
    getData();
  }, []);

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

          <button type="submit" className="login-btn">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};
export default BankerLogin;
