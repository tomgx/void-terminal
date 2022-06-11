import React from "react";
import Prompt from "./UserPrompt";

const TerminalOutput = ({ consoleOutput }) => {
  const scrollRef = React.useRef();

  React.useEffect(() => {
    if (scrollRef.current)
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  });

  return (
    <div className="console-output" ref={scrollRef}>
      {consoleOutput.map((item, index) => (
        <div key={index}>
          <Prompt />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default TerminalOutput;
