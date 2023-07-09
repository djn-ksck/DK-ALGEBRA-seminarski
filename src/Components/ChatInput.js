import React, { useState } from "react";

export default function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim().length === 0) return;
    onSendMessage(message);
    setMessage("");
  };

  return (
    <div className="chat-input">
      <form id="form-container" onSubmit={handleSubmit} autocomplete="off">
        <input
          id="writeInput"
          type="text"
          value={message}
          onChange={handleInputChange}
          placeholder="Type something..."
          maxLength={999}
        />
        <input
          id="submitInput"
          type="submit"
          disabled={message.trim().length === 0}
          value={"S E N D"}
        />
      </form>
    </div>
  );
}
