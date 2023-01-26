import { useState } from "react";
import Card from "./Card";
import "../Styles/Cardmat.css"

function Cardmat(props) {

  // Deck of cards represesnted as objects, with text, id, and a picture properties
  const deck = [
    {name: "john", id: 0},
    {name: "sara", id: 1},
    {name: "jake", id: 2},
    {name: "diana", id: 3},
    {name: "rebecca", id: 4},
    {name: "omar", id: 5},
    {name: "steve", id: 6},
    {name: "phillip", id: 7},
    {name: "tara", id: 8},
    {name: "deb", id: 9},
    {name: "clyde", id: 10},
    {name: "shiv", id: 11}
  ]

  // state of our Cardmap component, intializes the deck in order
  const [cards, setCards] = useState(deck)

  // our deck shuffle fucntion, calls the shuffle fuction bellow on our cards (state) variable.  A copy of cards shuffled is returned to ensure React render fires when
  // cards is passed to the Card component as a prop
  const cardShuffle = () => {  
    setCards([...shuffle(cards)])
  }

  // the state variable selected will be an array of IDs that have been selcted by the user.  The IDs come from the elements created by the Card component
  const [selected, setSelected] = useState([])

  // picked is passed as a prop function to the Card component, fires when any Card element is clicked
  const picked = (event) => {
    const id = event.target.id
    if (!selected.includes(id)) {
      setSelected([...selected, id])
    } else {
      console.log("GameOver!")
      props.clear()
      setSelected([])
    }
  }

  return (
  <div className="card-mat">
    <h1>Cards</h1>
    <Card cards = {cards} shuffle = {cardShuffle} increment = {props.increment} picked = {picked}/>
  </div>
  )
}

//// shuffle function (Fisher-Yates algorithm)////
const shuffle = (array) => {
  let m = array.length
  let i
  let t
  while(m) {
    i = Math.floor(Math.random() * m--)

    t = array[m]

    array[m] = array[i]
    array[i] = t

  }
  return array;
}

export default Cardmat;
