import React from "react";

const DUMMY_DATA = [
  {
    senderId: "Leo",
    text: "Hello"
  },
  {
    senderId: "Adarsh",
    text: "Wasup"
  },
  {
    senderId: "Matthew",
    text: "Hey"
  },
  {
    senderId: "Leo",
    text: "Hello again (robustness check)"
  }
];

class MessageList extends React.Component {
  render() {
    return (
      <div className="message-list">
        {DUMMY_DATA.map((message, index) => {
          return (
            <div key={index}>
              <div>{message.senderId}:</div>
              <div>
                <h3>{message.text}</h3>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default MessageList;
