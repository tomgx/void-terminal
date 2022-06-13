import React from "react";
import Prompt from "./UserPrompt";
import Commands from "./Commands";
import MapConsoleOutput from "./TerminalOutput";

const Terminal = () => {
  const inputText = React.useRef();

  const [consoleOutput, onEnter] = Commands();

  React.useEffect(() => {
    inputText.current.value = "";
    inputText.current.focus();
  });

  const focusMethod = function getFocus() {
    document.getElementById("text-field").focus();
  };

  return (
    <section className="console cursor-text" onClick={focusMethod}>
      <div className="opacity-20 h-0 w-full">
        <h1 className="float-right -mt-[20px] -mr-[15px]">
          type 'help' for commands
        </h1>
      </div>
      <MapConsoleOutput consoleOutput={consoleOutput} />
      <div className="input-prompt">
        <Prompt />
        <input
          type="text"
          id="text-field"
          autoFocus={true}
          onBlur={({ target }) => target.focus()}
          spellCheck={false}
          ref={inputText}
          onKeyPress={({ target: { value }, key }) => onEnter(value, key)}
        />
      </div>
    </section>
  );
};

export default Terminal;
