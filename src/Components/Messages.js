import React from "react";

export default class Messages extends React.Component {
  render() {
    const texts = [1,2,3];

    return (
      <div className="messages-container">
        <h1>React aplikacija</h1>
        <ul>
          {texts.map((message, i) => (
            <li key={i}>{message}</li>
          ))}
        </ul>
      </div>
    );
  }
}