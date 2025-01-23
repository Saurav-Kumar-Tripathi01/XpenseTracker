import React, { useState } from "react";

const AddExpenseModal = ({ onClose, onSubmit }) => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = () => {
        if (!title || !price || !category || !date) {
            alert("All fields are required!");
            return;
        }

        onSubmit({ title, price: parseFloat(price), category, date });
    };

    return (
        <div className="modal" >
            <div className="modal-content">
                <h3>Add Expenses</h3>
                <div style={{
                    display: "flex",
                    gap: '4px',
                    width:'100%',
                }}>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        style={{
                            width: '50%'
                        }}
                    />
                    <input
                        type="number"
                        placeholder="Price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        style={{
                            width: '50%'
                        }}
                    />
                </div>
                <div style={{
                    display: "flex",
                    gap: '4px',
                    width:'100%'
                }}>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        style={{
                            width: '50%'
                        }}
                    >
                        <option value="">Select category</option>
                        <option value="Food">Food</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Travel">Travel</option>
                    </select>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        style={{
                            width: '50%'
                        }}
                    />
                </div>
                <div className="modal-buttons">
                    <button onClick={handleSubmit}>Add Expense</button>
                    <button onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default AddExpenseModal;
