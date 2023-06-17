import React from "react";

function Input(props) {
  const handleInputChange = (event) => {
    props.setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    props.handleAddItem();
  };

  return (
    <div className="input-container">
      <input
        type="text"
        value={props.inputValue}
        onChange={handleInputChange}
        placeholder="Enter a new task"
        className="input-field"
      />
      <button onClick={handleAddItem} className="add-button">
        Add
      </button>
    </div>
  );
}

export default Input;
