import React from "react";

const DepositBtn = ({ isLoading, stripe, elements, btnTxt }) => {
  return (
    <button disabled={isLoading || !stripe || !elements} id="submit">
      <span id="button-text">
        {isLoading ? <div className="spinner" id="spinner"></div> : { btnTxt }}
      </span>
    </button>
  );
};

export default DepositBtn;
