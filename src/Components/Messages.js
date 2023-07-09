const Messages = ({ messages, currentMember }) => {
  const displayMessage = (message) => {
    const { member, text } = message;
    const messageFromMe = member.id === currentMember.id;
    const className = messageFromMe
      ? "message-position currentMember"
      : "message-position";
    return (
      <li className={className}>
        <span className="avatar" style={{ backgroundColor: member.color }} />
        <div className="Message-content">
          <div className="username">{member.username}</div>
          <div className="text" style={{ borderColor: member.color }}>
            {text}
          </div>
        </div>
      </li>
    );
  };

  return (
    <ul className="messages-container">
      {messages.map((message) => displayMessage(message))}
    </ul>
  );
};

export default Messages;
