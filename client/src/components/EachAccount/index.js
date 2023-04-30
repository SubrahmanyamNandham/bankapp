import "./index.css";

const EachAccount = (props) => {
  const { details } = props;
  const { creditedAmount, name, debitedAmount, totalBalance } = details;

  return (
    <li className="rowItem">
      <div>
        <p>Name : {name}</p>
        <p>CreditedMoney : {creditedAmount}</p>
        <p>DebitedMoney : {debitedAmount}</p>
        <p>TotalBalance : {totalBalance}</p>
      </div>
    </li>
  );
};

export default EachAccount;
