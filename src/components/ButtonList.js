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
  "jfnjsd",
  "fdjnfjd",
  "fdsnfk",
];

const ButtonList = () => {
  return (
    <div className="mb-12 bg-white">
      <div className="flex overflow-x-auto fixed -z-10 bg-white">
        {buttonList.map((buttonName, index) => (
          <Button key={index} name={buttonName} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
