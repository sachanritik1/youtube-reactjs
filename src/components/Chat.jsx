import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Chat = ({ name, message }) => {
  return (
    <div className="flex items-start gap-2 p-2 rounded-lg hover:bg-accent/50">
      <Avatar className="h-8 w-8">
        <AvatarImage
          src={`https://api.dicebear.com/7.x/initials/svg?seed=${name}`}
        />
        <AvatarFallback>{name?.charAt(0)}</AvatarFallback>
      </Avatar>

      <div>
        <p className="font-medium text-sm">{name}</p>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
    </div>
  );
};

export default Chat;
