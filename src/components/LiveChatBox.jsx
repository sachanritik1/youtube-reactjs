import React, { useEffect, useState } from "react";
import Chat from "./Chat";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

const LiveChatBox = () => {
  const dispatch = useDispatch();
  const messages = useSelector((store) => store.chat.messages);
  const [newMessage, setNewMessage] = useState("");

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

  var nameList = [
    "Time",
    "Past",
    "Future",
    "Dev",
    "Fly",
    "Flying",
    "Soar",
    "Soaring",
    "Power",
    "Falling",
    "Fall",
    "Jump",
    "Cliff",
    "Mountain",
    "Rend",
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Gold",
    "Demon",
    "Demonic",
    "Panda",
    "Cat",
    "Kitty",
    "Kitten",
    "Zero",
    "Memory",
    "Trooper",
    "XX",
    "Bandit",
    "Fear",
    "Light",
    "Glow",
    "Tread",
    "Deep",
    "Deeper",
    "Deepest",
    "Mine",
    "Your",
    "Worst",
    "Enemy",
    "Hostile",
    "Force",
    "Video",
    "Game",
    "Donkey",
    "Mule",
    "Colt",
    "Cult",
    "Cultist",
    "Magnum",
    "Gun",
    "Assault",
    "Recon",
    "Trap",
    "Trapper",
    "Redeem",
    "Code",
    "Script",
    "Writer",
    "Near",
    "Close",
    "Open",
    "Cube",
    "Circle",
    "Geo",
    "Genome",
    "Germ",
    "Spaz",
    "Shot",
    "Echo",
    "Beta",
    "Alpha",
    "Gamma",
    "Omega",
    "Seal",
    "Squid",
    "Money",
    "Cash",
    "Lord",
    "King",
    "Duke",
    "Rest",
    "Fire",
    "Flame",
    "Morrow",
    "Break",
    "Breaker",
    "Numb",
    "Ice",
    "Cold",
    "Rotten",
    "Sick",
    "Sickly",
    "Janitor",
    "Camel",
    "Rooster",
    "Sand",
    "Desert",
    "Dessert",
    "Hurdle",
    "Racer",
    "Eraser",
    "Erase",
    "Big",
    "Small",
    "Short",
    "Tall",
    "Sith",
    "Bounty",
    "Hunter",
    "Cracked",
    "Broken",
    "Sad",
    "Happy",
    "Joy",
    "Joyful",
    "Crimson",
    "Destiny",
    "Deceit",
    "Lies",
    "Lie",
    "Honest",
    "Destined",
    "Bloxxer",
    "Hawk",
    "Eagle",
    "Hawker",
    "Walker",
    "Zombie",
    "Sarge",
    "Capt",
    "Captain",
    "Punch",
    "One",
    "Two",
    "Uno",
    "Slice",
    "Slash",
    "Melt",
    "Melted",
    "Melting",
    "Fell",
    "Wolf",
    "Hound",
    "Legacy",
    "Sharp",
    "Dead",
    "Mew",
    "Chuckle",
    "Bubba",
    "Bubble",
    "Sandwich",
    "Smasher",
    "Extreme",
    "Multi",
    "Universe",
    "Ultimate",
    "Death",
    "Ready",
    "Monkey",
    "Elevator",
    "Wrench",
    "Grease",
    "Head",
    "Theme",
    "Grand",
    "Cool",
    "Kid",
    "Boy",
    "Girl",
    "Vortex",
    "Paradox",
  ];
  function generateName() {
    var finalName = nameList[Math.floor(Math.random() * nameList.length)];
    return finalName;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      //update chat state
      console.log("API polling");
      dispatch(addMessage({ name: generateName(), text: makeid(10) }));
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    dispatch(
      addMessage({
        name: "You",
        message: newMessage,
      })
    );

    setNewMessage("");
  };

  return (
    <Card className="h-[600px] flex flex-col">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg">Live Chat</CardTitle>
      </CardHeader>

      <CardContent className="flex-1 overflow-y-auto space-y-2 p-4">
        {messages.map((msg, index) => (
          <Chat key={index} name={msg.name} message={msg.message} />
        ))}
      </CardContent>

      <CardFooter className="border-t p-2">
        <form onSubmit={handleSendMessage} className="flex w-full gap-2">
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button type="submit" size="sm">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  );
};

export default LiveChatBox;
