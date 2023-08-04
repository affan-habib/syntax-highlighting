import React, { useState } from 'react';

const CenteredInputBox = () => {
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  };

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

  const textOutputStyle = {
    ...inputStyle,
    whiteSpace: 'pre-wrap',
    display: 'flex',
    alignItems: 'center',
    color: 'lightgray',
  };

  const suggestionsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '120px',
  };

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setInputText(inputValue);

    // Filter suggestions based on input
    const filteredSuggestions = getSuggestions().filter((suggestion) =>
      suggestion.toLowerCase().includes(inputValue.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
  };

  const getSuggestions = () => ['tom cruise', 'tetul', 'tomato'];

  const highlightTomato = (sentence) => {
    const words = sentence.split(/\s+/);

    return words.map((word, index) => {
      const lowerWord = word.toLowerCase();
      const tomatoIndex = lowerWord.indexOf('tomato');
      const isTomato = tomatoIndex !== -1;

      if (isTomato) {
        const beforeTomato = word.slice(0, tomatoIndex);
        const tomato = word.slice(tomatoIndex, tomatoIndex + 6);
        const afterTomato = word.slice(tomatoIndex + 6);

        return (
          <span key={index} style={{ zIndex: 55555 }}>
            {beforeTomato}
            <span style={{ color: 'red' }}>{tomato}</span>
            {afterTomato}
            {index < words.length - 1 && ' '}
          </span>
        );
      }

      return (
        <span key={index} style={{ zIndex: 55555 }}>
          {word}
          {index < words.length - 1 && ' '}
        </span>
      );
    });
  };

  return (
    <div style={containerStyle}>
      <>
        <div style={textOutputStyle}>
          {highlightTomato(inputText)}
        </div>
        <input
          type="text"
          style={inputStyle}
          maxLength="64"
          placeholder="Type here..."
          value={inputText}
          onChange={handleInputChange}
        />
      </>
      <div style={suggestionsStyle}>
        {suggestions.map((suggestion, index) => (
          <span key={index}>{suggestion}</span>
        ))}
      </div>
    </div>
  );
};

export default CenteredInputBox;
