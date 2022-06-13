import Console from "./components/Terminal";
import Title from "./components/Title";
import "./index.css";

function App() {
  return (
    <div>
      <Title />
      <div className="flex justify-center pt-[10%]">
        <Console />
      </div>
    </div>
  );
}

export default App;
