import Game from "./components/Game/Game";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Game rows={20} columns={11} />
    </div>
  );
}
