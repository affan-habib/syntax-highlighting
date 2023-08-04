import React from 'react';

const TextOutput = ({ highlightedText }) => {
  const textOutputStyle = {
    width: '600px',
    height: '70px',
    fontSize: '16px',
    whiteSpace: 'pre-wrap',
    display: 'flex',
    alignItems: 'center',
    color: 'black',
    marginBottom: '10px',
    padding: '8px',
    border: '1px solid lightgray',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontFamily: 'Arial, sans-serif',
    position: 'absolute',
  };

  return <div style={textOutputStyle}>{highlightedText}</div>;
};

export default TextOutput;
