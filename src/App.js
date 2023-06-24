import React from "react";
import Messages from "./Components/Messages";
import Header from "./Components/Header";
import "./App.css";
import ChatInput from "./Components/ChatInput";

function randomUserName() {
  const colors = [
    "Blue",
    "Slate",
    "Olive",
    "Crimson",
    "Coral",
    "Gray",
    "Magenta",
    "Mint",
    "Periwinkle",
  ];
  const clouds = [
    "Cumulus",
    "Cirrus",
    "Stratus",
    "Cumulonimbus",
    "Altocumulus",
    "Cirrostratus",
    "Stratocumulus",
    "Cirrocumulus",
    "Nimbostratus",
  ];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const randomCloud = clouds[Math.floor(Math.random() * clouds.length)];

  return `${randomColor}${randomCloud}`;
}

function randomColor() {
  const colors = [
    "#C7F744",
    "#FE8D6E",
    "#FFE4A9",
    "#CBB268",
    "#CEBBC9",
    "#c8c7ad",
    "#fde548",
    "#b6f0d8",
    "#E6C2FF",
  ];
  const randomIndex = Math.floor(Math.random() * colors.length);
  const randomColor = colors[randomIndex];
  return randomColor;
}

export default class App extends React.Component {
  state = {
    messages: [
      {
        text: "This is a test message!",
        member: {
          color: "blue",
          username: "bluemoon",
        },
      },
    ],
    member: {
      username: randomUserName(),
      color: randomColor(),
    },
  };
  render() {
    return (
      <div>
        <body>
        <header>
          <Header />
        </header>
        <h1>React aplikacija</h1>
        <Messages />
        <ChatInput />
        </body>
      </div>
    );
  }
}
