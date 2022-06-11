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
        postcss.config.j
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
    if (key === "Enter") {
      if (commands[value] != null) {
        const newConsoleLine = (
          <>
            <span>{value}</span>
            <br />
            <span className="text-[#37b0d4] word-spacing">
              {commands[value]}
            </span>
          </>
        );
        return updateConsoleOutput((consoleOutput) =>
          consoleOutput.concat(newConsoleLine)
        );
      } else if (value === "clear") {
        return updateConsoleOutput((consoleOutput) => consoleOutput.splice());
      } else {
        const newConsoleLine = (
          <>
            <span>{value}</span>
            <br />
            <span>{value}: command not found</span>
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
