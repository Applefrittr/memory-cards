import "../Styles/Scoreboard.css"

function Scoreboard (props) {
  return(
    <div id="scoreboard-container">
        <div className="display" id="score">Current score: {props.score}</div>
        <div className="display" id="best">Best score: {props.best}</div>
    </div>
  )
}

export default Scoreboard   