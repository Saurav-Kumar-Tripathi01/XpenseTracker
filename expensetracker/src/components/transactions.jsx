import React from "react";
import './transactions.css';
import foodLogo from './resource/food.png';
import entertainmentLogo from './resource/entertainment.png';
import travelLogo from './resource/travel.png';

const getLogo = (type) => {
  switch (type) {
    case 'Food':
      return foodLogo;
    case 'Entertainment':
      return entertainmentLogo;
    case 'Travel':
      return travelLogo;
    default:
      return null;
  } 
};

const Transactions = ({ expenses }) => {
  return (
    <div className="transactions">
      <h3>Recent Transactions</h3>
      {expenses.length === 0 ? (
        <p>No transactions!</p>
      ) : (
        expenses.map((expense, index) => (
          <div key={index} className="transaction-item">
            <div className="transaction-logo">
              <img src={getLogo(expense.category)} alt={expense.category} />
            </div>
            <div className="transaction-details">
              <span className="transaction-title">{expense.title}</span>
              <small className="transaction-date">{expense.date}</small>
            </div>
            <div className="transaction-actions">
              <span className="expense-price">₹{expense.price}</span>
              <button className="delete-button">✖</button>
              <button className="edit-button">✎</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Transactions;