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
    messages: [],
    member: {
      username: randomUserName(),
      color: randomColor(),
    },
  };

  constructor() {
    super();
    this.drone = new window.Scaledrone("H0NR8asHWP423bia", {
      data: this.state.member
    });
    this.drone.on('open', error => {
      if (error) {
        return console.error(error);
      }
      const member = {...this.state.member};
      member.id = this.drone.clientId;
      this.setState({member});
    });
    const room = this.drone.subscribe("observable-room");
    room.on('data', (data, member) => {
      const messages = this.state.messages;
      messages.push({member, text: data});
      this.setState({messages});
    });
  }

  onSendMessage = (message) => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  }

  render() {

    const { member } = this.state;

    const bodyStyles = {
      height: "98vh",
      width: "100vw",
      background: `linear-gradient(180deg, ${member.color} 4%, rgba(255, 255, 255, 1) 20%, rgba(255, 255, 255, 1) 100%)`,
    };

    return (
      <div>
        <body>
          <header>
            <Header />
          </header>
          <Messages
            messages={this.state.messages}
            currentMember={this.state.member}
          />
          <ChatInput onSendMessage={this.onSendMessage} />
        </body>
        <style>{`body { ${Object.entries(bodyStyles).map(([key, value]) => `${key}: ${value};`).join(" ")} }`}</style>
      </div>
    );
  }
}
