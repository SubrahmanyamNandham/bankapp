import "./index.css";
import { Link } from "react-router-dom";

const AccountList = (props) => {
  const { details } = props;
  const { userId, creditedAmount, name, debitedAmount, totalBalance } = details;
  return (
    <li>
      <div className="rowItem">
        <p className="details">userId : {userId}</p>
        <p>Name : {name}</p>
        <p>CreditedMoney : {creditedAmount}</p>
        <p>DebitedMoney : {debitedAmount}</p>
        <p>TotalBalance : {totalBalance}</p>
      </div>
      <Link to={`/account/${userId}`}>
        <button>View details</button>
      </Link>
    </li>
  );
};

export default AccountList;
