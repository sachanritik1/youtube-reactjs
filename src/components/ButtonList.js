import React from "react";
import Button from "./Button";

const buttonList = [
  "All",
  "Javascript",
  "Ruby",
  "Python",
  "Java",
  "CSS",
  "HTML",
  "React",
  "Rails",
  "SQL",
  "Redux",
  "Django",
  "Cricket",
  "Football",
  "Music",
  "Coding",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {buttonList.map((buttonName, index) => (
        <Button key={index} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
