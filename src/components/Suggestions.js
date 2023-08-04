import React from 'react';

const Suggestions = ({ suggestions }) => {
  const suggestionStyle = {
    listStyle: 'none',
    width: '600px',
  };

  return (
    <div style={{ marginTop: 100 }}>
      <ul style={suggestionStyle}>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
