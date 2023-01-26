import { useEffect, useState } from "react";
import Scoreboard from "./Components/Scoreboard"
import Cardmat from "./Components/Cardmat"
import "./Styles/App.css"
import Git from "./Assets/git.png"

// App component, has the score and bestscore states
function App() {
  const [score, setScore] = useState(0);
  const [best, setBest] = useState(score);

  // both increment and clear passed to Cardmat and Scoreboard components as prop functions
  const increment = () => {
    setScore(score + 1)
  }
  const clear = () => {
    setScore(score - score)
  }

  // after each render, useEffect will compare the score and best state variables, and update best if a new high score is achieved
  useEffect(() => {
    if (score > best) setBest(score)
  }, [score, best])

  return (
    <div className="App">
      <h1>Memory Game</h1>
      <Scoreboard score = {score} best = {best} increment = {increment} clear = {clear}/>
      <Cardmat increment = {increment} clear = {clear}/>
      <footer>
          Created January 2023 by Applefrittr
          <a href="https://github.com/Applefrittr" rel= "noreferrer" target="_blank">
            <img src={Git} alt="GitHub Applefrittr"></img>
          </a>
        </footer>
    </div>
  );
}

export default App;
