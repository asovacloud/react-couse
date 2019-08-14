import React from "react";

const userInput = props => {
  const inputStyle = {
    border: "1px solid #ccc",
    fontSize: "16px",
    lineHeight: "30px",
    padding: "0 20px",
    height: "30px"
  };
  return (
    <div>
      <input
        onChange={props.changed}
        type="text"
        value={props.currentName}
        style={inputStyle}
      />
    </div>
  );
};

export default userInput;
