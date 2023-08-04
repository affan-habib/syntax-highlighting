import React, { useState } from 'react';
import TextInput from './components/TextInput';
import TextOutput from './components/TextOutput';
import Suggestions from './components/Suggestions';

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

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    setInputText(inputText);

    // Filter suggestions based on input
    const words = inputText.split(' ');
    const currentWord = words[words.length - 1];

    if (currentWord.length > 0) {
      const matchingSuggestions = wordsStartingWithT.filter((word) =>
        word.startsWith(currentWord)
      );
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

  const highlightedText = highlightTomato(inputText);

  return (
    <div style={containerStyle}>
      <TextOutput highlightedText={highlightedText} />
      <TextInput value={inputText} onChange={handleInputChange} />
      <Suggestions suggestions={suggestions} />
    </div>
  );
};

export default App;
