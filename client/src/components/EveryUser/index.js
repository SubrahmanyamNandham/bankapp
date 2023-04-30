import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

import Navbar from "../Navbar";

import Customer from "../Customer";

const apiStatusConstant = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const Account = () => {
  const [detailsApiStatus, setDetailsStatus] = useState({
    status: apiStatusConstant.initial,
    data: null,
    error: null,
  });

  const { userId } = useParams();
  console.log(userId);

  useEffect(() => {
    const getSkillApi = async () => {
      setDetailsStatus({
        status: apiStatusConstant.inProgress,
        data: null,
        error: null,
      });
      const url = `http://localhost:8000/account/${userId}`;
      const options = {
        method: "GET",
      };
      const res = await fetch(url, options);
      const data = await res.json();
      console.log(data);
      const formattedData = (each) => ({
        userId: each.userId,
        name: each.name,
        creditedAmount: each.creditedAmount,
        debitedAmount: each.debitedAmount,
        totalBalance: each.totalBalance,
      });

      const updatedData = formattedData(data);

      if (res.ok) {
        setDetailsStatus((prevState) => ({
          ...prevState,
          status: apiStatusConstant.success,
          data: updatedData,
        }));
      } else {
        setDetailsStatus((prevState) => ({
          ...prevState,
          status: apiStatusConstant.failure,
          errorMsg: res.error_msg,
        }));
      }
    };

    getSkillApi();
  }, [userId]);

  const renderSuccessView = () => {
    const { data } = detailsApiStatus;

    const skillText = <Customer details={data} key={data.id} />;
    return skillText;
  };

  const renderFailureView = () => (
    <div className="notContainer">
      <img
        className="notFound"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/projects-showcase/failure-img.png"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>We cannot seem to find the page you are looking for</p>
    </div>
  );

  const renderRespectiveView = () => {
    const { status } = detailsApiStatus;
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
      <Navbar />
      <ul>{renderRespectiveView()}</ul>
    </div>
  );
};

export default Account;
