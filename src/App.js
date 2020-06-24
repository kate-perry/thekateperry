import React from 'react';
import logo from './logo.svg';
import './styles.scss';

function App() {
  return (
    <div className="app" >
      <header className="header">
        <h1 className="logo">horticurio</h1>
        <div className="body-background">   
        <body className="body">
        <p>
          Welcome!
        </p>  
        <a
          className="link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I'm a link!
        </a>
        </body>
        </div>
      </header>
    </div>
  );
}

export default App;
