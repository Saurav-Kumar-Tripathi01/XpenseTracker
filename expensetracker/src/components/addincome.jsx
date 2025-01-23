import React, { useState } from "react";

const AddIncomeModal = ({ onClose, onSubmit }) => {
    const [income, setIncome] = useState("");

    const handleSubmit = () => {
        if (!income || isNaN(income) || income <= 0) {
            alert("Please enter a valid income amount!");
            return;
        }
        onSubmit(parseFloat(income));
    };

    return (
        <div className="modal" >

            <div className="modal-content" style={{
                display: "flex",
                flexDirection: "column",
                alignItems: 'initial',
            }}>
                <h3>Add Balance</h3>
                <div style={{
                    display:"flex",
                    gap:'3px',
                }}>
                    <input
                        type="number"
                        placeholder="Income Amount"
                        value={income}
                        onChange={(e) => setIncome(e.target.value)}
                    />
                    <div className="modal-buttons"style={{
                        display:"flex",
                        gap:'3px',
                    }}>
                        <button onClick={handleSubmit}>Add Balance</button>
                        <button onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddIncomeModal;