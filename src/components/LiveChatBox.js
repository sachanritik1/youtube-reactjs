import React, { useEffect } from "react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import store from "../utils/store";

const LiveChatBox = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);

  function makeid(length) {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      //update chat state
      console.log("API polling");
      dispatch(addMessage({ name: "Ritik", text: makeid(10) }));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mt-2 mr-2 p-2 border h-[550px] w-full flex flex-col-reverse overflow-y-scroll ">
      {messages.map((message, index) => {
        return <Chat key={index} name={message.name} text={message.text} />;
      })}
    </div>
  );
};

export default LiveChatBox;
