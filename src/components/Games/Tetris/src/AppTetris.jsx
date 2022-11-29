import Game from "./components/Game/Game";
import "./App.css";

export default function AppTetris() {
  return (
    <div className="AppTetris">
      <Game rows={20} columns={11} />
    </div>);
}
