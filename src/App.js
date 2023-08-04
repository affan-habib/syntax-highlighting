import React, { useState } from 'react';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const wordsStartingWithT = ['technology', 'tomato', 'tom cruise', 'tetul'];

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
    color: 'black',
  };
  const suggestionStyle = {
    listStyle: "none",
    width: '600px',
  };

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setInputText(inputText);

    // Filter suggestions based on input
    const words = inputText.split(' ');
    const currentWord = words[words.length - 1];

    if (currentWord.length > 0) {
      const matchingSuggestions = wordsStartingWithT.filter(word => word.startsWith(currentWord));
      setSuggestions(matchingSuggestions);
    } else {
      setSuggestions([]);
    }
  };


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
      <div style={{ marginTop: 100 }}>
        <ul style={suggestionStyle}>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;