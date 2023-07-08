import React, { useState } from "react";

export default function ChatInput({ onSendMessage }) {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="chat-input">
      <form id='formContainer' onSubmit={handleSubmit}>
        <input id="writeInput"
          type="text"
          value={message}
          onChange={handleInputChange}
          //onKeyDown={handleEnter}
          placeholder="Type something..."
          maxLength={999}
        />
        <input id="submitInput"
          type="submit"
          disabled={message.trim().length === 0}
          value={"S E N D"}
        />
      </form>
    </div>
  );
}

/*
<button onClick={() => { onSendMessage(message); setMessage(''); }}>
S E N D
</button>
*/
