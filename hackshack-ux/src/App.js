import React from "react";
import Chatkit from "@pusher/chatkit-client";
import MessageList from "./components/MessageList";
import SendMessageForm from "./components/SendMessageForm";
import RoomList from "./components/RoomList";
import NewRoomForm from "./components/NewRoomForm";
import "./style.css";

import { tokenUrl, instanceLocator } from "./config";

class App extends React.Component {
  componentDidMount() {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator,
      userId: "Leo",
      tokenProvider: new Chatkit.TokenProvider({
        url: tokenUrl
      })
    });

    chatManager
      .connect()
      .then(currentUser => {
        currentUser.subscribeToRoom({
          roomId: 19377976,
          hooks: {
            onNewMessage: message => {
              console.log("message.text: ", message.text);
            }
          }
        });
      })
      .catch(error => {
        console.error("error: ", error);
      });
  }

  render() {
    return (
      <div>
        <MessageList />
      </div>
    );
  }
}

export default App;
