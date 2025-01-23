import React from "react";

const BalanceCard = ({ type, title, amount, onAdd }) => {
  return (
    <div className={`card ${type}`}>
      <h3>{title}: ₹{amount}</h3>
      {onAdd && (
        <button className={`btn ${type}`} onClick={onAdd}>
          {type === "income" ? "+ Add Income" : "+ Add Expense"}
        </button>
      )}
    </div>
  );
};

export default BalanceCard;
