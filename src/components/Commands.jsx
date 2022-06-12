import React from "react";

const commands = {
  help: "profile repo ls clear",
  repo: (
    <a
      className="hover:text-[#eee]"
      href="https://github.com/tomgx/void.is-a-dev"
    >
      https://github.com/tomgx/void.is-a-dev
    </a>
  ),
  profile: (
    <a className="hover:text-[#eee]" href="https://github.com/tomgx/">
      https://github.com/tomgx/
    </a>
  ),
  ls: (
    <span>
      <a
        className="hover:text-[#eee]"
        href="https://raw.githubusercontent.com/tomgx/void.is-a-dev/main/README.md"
      >
        README.md
      </a>
      "{" "}
      <a
        className="hover:text-[#eee]"
        href="https://raw.githubusercontent.com/tomgx/void.is-a-dev/main/package-lock.json"
      >
        package-lock.json
      </a>{" "}
      <a
        className="hover:text-[#eee]"
        href="https://raw.githubusercontent.com/tomgx/void.is-a-dev/main/package.json"
      >
        package.json
      </a>{" "}
      <a
        className="hover:text-[#eee]"
        href="https://raw.githubusercontent.com/tomgx/void.is-a-dev/main/postcss.config.js"
      >
        postcss.config.js
      </a>{" "}
      <a
        className="hover:text-[#eee]"
        href="https://github.com/tomgx/void.is-a-dev/tree/main/public"
      >
        public
      </a>{" "}
      <a
        className="hover:text-[#eee]"
        href="https://github.com/tomgx/void.is-a-dev/tree/main/src"
      >
        src
      </a>{" "}
      <a
        className="hover:text-[#eee]"
        href="https://raw.githubusercontent.com/tomgx/void.is-a-dev/main/tailwind.config.js"
      >
        tailwind.config.js"
      </a>
    </span>
  ),
};

const Commands = () => {
  const [consoleOutput, updateConsoleOutput] = React.useState([]);

  const onEnter = (value, key) => {
    var userInput = value.trim();
    if (key === "Enter") {
      if (commands[userInput] != null) {
        const newConsoleLine = (
          <>
            <span>{userInput}</span>
            <br />
            <span className="text-[#37b0d4] word-spacing">
              {commands[userInput]}
            </span>
          </>
        );
        return updateConsoleOutput((consoleOutput) =>
          consoleOutput.concat(newConsoleLine)
        );
      } else if (userInput === "clear") {
        return updateConsoleOutput((consoleOutput) => consoleOutput.splice());
      } else if (userInput.trim().length === 0) {
        const newConsoleLine = (
          <>
            <br />
          </>
        );

        return updateConsoleOutput((consoleOutput) =>
          consoleOutput.concat(newConsoleLine)
        );
      } else {
        const newConsoleLine = (
          <>
            <span>{userInput}</span>
            <br />
            <span>{userInput}: command not found</span>
          </>
        );

        return updateConsoleOutput((consoleOutput) =>
          consoleOutput.concat(newConsoleLine)
        );
      }
    }
  };

  return [consoleOutput, onEnter];
};

export default Commands;
