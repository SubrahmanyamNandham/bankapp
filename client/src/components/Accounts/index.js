import "./index.css";

import { useState, useEffect } from "react";

import AccountList from "../AccountList";

const apiStatusConstant = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Accounts = () => {
  const [apiStatus, setApiStatus] = useState({
    status: apiStatusConstant.initial,
    data: null,
    error: null,
  });
  useEffect(() => {
    const getAccountData = async () => {
      setApiStatus({
        status: apiStatusConstant.inProgress,
        data: null,
        error: null,
      });

      const url = "https://bankurl-com.onrender.com/accounts/";

      const options = {
        method: "GET",
      };
      const res = await fetch(url, options);
      console.log(res);

      if (res.ok === true) {
        const data = await res.json();

        const updatedData = data.map((each) => ({
          userId: each.userId,
          name: each.name,
          creditedAmount: each.creditedAmount,
          debitedAmount: each.debitedAmount,
          totalBalance: each.totalBalance,
        }));

        setApiStatus((prevState) => ({
          ...prevState,
          status: apiStatusConstant.success,
          data: updatedData,
        }));
      } else {
        setApiStatus((prevState) => ({
          ...prevState,
          status: apiStatusConstant.failure,
          error: res.error_msg,
        }));
      }
    };
    getAccountData();
  }, []);

  const renderSuccessView = () => {
    const { data } = apiStatus;

    const accountDetails = data.map((each) => (
      <AccountList details={each} key={each.id} />
    ));

    console.log(accountDetails);
    return accountDetails;
  };

  const renderFailureView = () => (
    <div className="notContainer">
      <img
        className="notFound"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
      />
      <h1 className="oops">Oops! Something Went Wrong</h1>
      <p className="not">We cannot seem to find the page you are looking for</p>
    </div>
  );

  const renderFinalOutput = () => {
    const { status } = apiStatus;
    switch (status) {
      case apiStatusConstant.success:
        return renderSuccessView();

      case apiStatusConstant.failure:
        return renderFailureView();
      default:
        return null;
    }
  };

  return (
    <div>
      <center>
        <h1 className="employee">Customers Account Details</h1>

        <ul>{renderFinalOutput()}</ul>
      </center>
    </div>
  );
};

export default Accounts;
