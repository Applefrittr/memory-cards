import { useEffect, useState } from "react";
import Scoreboard from "./Components/Scoreboard"
import Cardmat from "./Components/Cardmat"

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
      <h1>Hello World!</h1>
      <Scoreboard score = {score} best = {best} increment = {increment} clear = {clear}/>
      <Cardmat increment = {increment} clear = {clear}/>
    </div>
  );
}

export default App;
