import React from "react";
import reactDOM from "react-dom/client";

const Greeting = () => {
  return (
    <div>
      <Person />
      <Message />
    </div>
  );
};

const Person = () => <h2>Cendol</h2>;
const Message = () => {
  return <p>Fuck Gordon Cheah</p>;
};

const root = reactDOM.createRoot(document.getElementById("root"));

root.render(<Greeting />);
