import AccountList from "../AccountList";

const accountList = [
  {
    userId: 1,
    name: "rahul",
    creditedAmount: 5000,
    debitedAmount: 3000,
    totalBalance: 13909,
  },
  {
    userId: 2,
    name: "kiran",
    creditedAmount: 8945,
    debitedAmount: 678,
    totalBalance: 79489,
  },
  {
    userId: 3,
    name: "lekya",
    creditedAmount: 988,
    debitedAmount: 456,
    totalBalance: 89840,
  },
  {
    userId: 4,
    name: "gowtham",
    creditedAmount: 859,
    debitedAmount: 345,
    totalBalance: 39049,
  },
  {
    userId: 5,
    name: "prem",
    creditedAmount: 895,
    debitedAmount: 757,
    totalBalance: 90390,
  },
];

const Accounts = () => {
  return (
    <div>
      <center>
        <h1>Customer Details</h1>
        {accountList.map((each) => (
          <AccountList details={each} />
        ))}
      </center>
    </div>
  );
};

export default Accounts;
