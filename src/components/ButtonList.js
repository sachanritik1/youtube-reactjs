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
    <div className="mb-10">
      <div className="flex w-full overflow-x-auto fixed bg-white -z-10">
        {buttonList.map((buttonName, index) => (
          <Button key={index} name={buttonName} />
        ))}
      </div>
    </div>
  );
};

export default ButtonList;
