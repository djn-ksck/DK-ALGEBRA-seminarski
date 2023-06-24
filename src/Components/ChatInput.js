import React, { useState } from "react";

export default function ChatInput (onSendMessage) {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        value={message}
        onChange={handleInputChange}
        onKeyDown={handleEnter}
        placeholder="Type something..."
        maxLength={999}
      />
      <button onClick={() => { onSendMessage(message); setMessage(''); }}>
        S E N D
      </button>
    </div>
  );
};
