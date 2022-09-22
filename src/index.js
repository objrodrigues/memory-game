import React from 'react';
import ReactDOM from 'react-dom/client';

//Style components
import './styles/cards.css';
import './styles/container.css';
import './styles/gameBoard.css';
import './styles/gameOver.css';
import './styles/gameHeader.css';
import './styles/mediaQueries.css';
import './styles/style.css';

import MemoryGame from './MemoryGame';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MemoryGame />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
