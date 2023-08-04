import React from 'react';

const TextInput = ({ value, onChange }) => {
  const inputStyle = {
    width: '600px',
    height: '70px',
    fontSize: '16px',
    color: 'transparent',
    caretColor: 'black',
    marginBottom: '10px',
    padding: '8px',
    border: '1px solid lightgray',
    borderRadius: '4px',
    outline: 'none',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    position: 'absolute',
  };

  return (
    <input
      type="text"
      style={inputStyle}
      maxLength="64"
      placeholder="Type here..."
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
