import React from 'react';
import logo from './logo.svg';
import './styles.scss';

function App() {
  return (
    <div className="app" >
      <header className="header">
        <h1 className="title">Hello! My name is Kate Perry.</h1>
        <div className="body-background">   
        <body className="body">
        <p>I am an IT professional with over 3 years of experience bringing leading-edge solutions to reality. I’ve held a wide range of roles in a variety of industries, and with my diverse background in the development life cycle and an eye towards the future, I bring an innovative perspective framed with technical possibility to business and product analysis. 
        </p>
        <p>
        <a
          className="link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I'm a link!
        </a></p>
        </body>
        </div>
      </header>
    </div>
  );
}

export default App;
