import "./index.css";

const AccountList = (props) => {
  const { details } = props;
  const { userId, creditedAmount, name, debitedAmount, totalBalance } = details;
  return (
    <li>
      <div className="rowItem">
        <p>userId:{userId}</p>
        <p>name:{name}</p>
        <p>creditedMoney:{creditedAmount}</p>
        <p>debitedMoney:{debitedAmount}</p>
        <p>totalBalance:{totalBalance}</p>
        <button>View details</button>
        <hr />
      </div>
    </li>
  );
};

export default AccountList;
