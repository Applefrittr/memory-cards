function Scoreboard (props) {
  return(
    <div>
        <div>Current score: {props.score}</div>
        <div>Best score: {props.best}</div>
        <button onClick={props.increment}>Add to score</button>
        <button onClick={props.clear}>Clear Score</button>
    </div>
  )
}

export default Scoreboard   