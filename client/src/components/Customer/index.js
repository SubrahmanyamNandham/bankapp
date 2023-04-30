import "./index.css";
import { useState, useEffect } from "react";
import axios from "axios";
const Customer = (props) => {
  const { details } = props;
  const { creditedAmount, name, debitedAmount, totalBalance } = details;
  const [data, setData] = useState([]);
  const [dataWith, setWithData] = useState([]);
  const [deposit, setDeposit] = useState("");
  const [withdraw, setWithdraw] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8000/add").then((arr) => setData(arr.data));
  }, []);

  const SubmitHandler = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:8000/add", { creditedAmount: deposit })
      .then((arr) => setData(arr.data));
  };

  return (
    <div className="customerContainer">
      <center>
        <h1>Welcome To Your Account</h1>
        <form onSubmit={SubmitHandler}>
          <input
            type="text"
            className="input"
            name="input"
            placeholder="Enter amount here"
            value={withdraw}
            onChange={(e) => setWithdraw(e.target.value)}
          />

          <button
            className="deposit"
            type="submit"
            onClick={() => setWithData(eval(withdraw))}
          >
            Withdraw
          </button>
          <input
            type="text"
            className="input"
            name="input"
            placeholder="Enter amount here"
            value={deposit}
            onChange={(e) => setDeposit(e.target.value)}
          />

          <button
            className="deposit"
            type="submit"
            onClick={() => setData(eval(deposit))}
          >
            Deposit
          </button>
        </form>
        <li className="rowItem">
          <div>
            <p>Name : {name}</p>
            <p>CreditedMoney : {parseInt(creditedAmount) + data}</p>
            <p>DebitedMoney : {parseInt(debitedAmount) - dataWith}</p>
            <p>TotalBalance : {totalBalance + data}</p>
          </div>
        </li>
      </center>
    </div>
  );
};

export default Customer;
